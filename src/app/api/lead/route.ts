import { NextResponse } from 'next/server';
import crypto from 'crypto';
import fs from 'fs';
import path from 'path';

// Helper function to extract multi-line Google private key from .env.local directly
function getPrivateKeyFromEnvFile(): string {
  const envKey = process.env.GOOGLE_PRIVATE_KEY || process.env.DRIVE_GOOGLE_PRIVATE_KEY;
  
  // If process.env somehow has the full key (not truncated), return it
  if (envKey && envKey.includes('-----END PRIVATE KEY-----')) {
    return envKey;
  }

  try {
    const envPath = path.join(process.cwd(), '.env.local');
    if (fs.existsSync(envPath)) {
      const content = fs.readFileSync(envPath, 'utf8');
      
      // Match GOOGLE_PRIVATE_KEY="<multi-line key value>" or DRIVE_GOOGLE_PRIVATE_KEY="..."
      const match = content.match(/(GOOGLE_PRIVATE_KEY|DRIVE_GOOGLE_PRIVATE_KEY)="([\s\S]*?)"/);
      if (match && match[2]) {
        return match[2];
      }
      
      // Match GOOGLE_PRIVATE_KEY=<key value> (if not quoted)
      const simpleMatch = content.match(/(GOOGLE_PRIVATE_KEY|DRIVE_GOOGLE_PRIVATE_KEY)=([^\n]*)/);
      if (simpleMatch && simpleMatch[2]) {
        return simpleMatch[2];
      }
    }
  } catch (err) {
    console.error('Failed to read .env.local file directly:', err);
  }

  return envKey || '';
}

// Helper function to generate Google JWT (RS256)
function generateGoogleJWT(clientEmail: string, privateKey: string, scope: string) {
  const header = {
    alg: 'RS256',
    typ: 'JWT'
  };

  const now = Math.floor(Date.now() / 1000);
  const claim = {
    iss: clientEmail,
    scope: scope,
    aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600,
    iat: now
  };

  const base64Header = Buffer.from(JSON.stringify(header)).toString('base64url');
  const base64Claim = Buffer.from(JSON.stringify(claim)).toString('base64url');
  const signatureInput = `${base64Header}.${base64Claim}`;

  const sign = crypto.createSign('RSA-SHA256');
  sign.update(signatureInput);

  let formattedKey = privateKey;
  if (formattedKey.startsWith('"') && formattedKey.endsWith('"')) {
    formattedKey = formattedKey.slice(1, -1);
  }
  
  // Replace literal '\n' string representations with actual newline characters
  formattedKey = formattedKey.replace(/\\n/g, '\n');

  const signature = sign.sign(formattedKey.trim(), 'base64url');
  return `${signatureInput}.${signature}`;
}

// Helper to fetch Google OAuth access token
async function getAccessToken(clientEmail: string, privateKey: string) {
  const jwt = generateGoogleJWT(clientEmail, privateKey, 'https://www.googleapis.com/auth/spreadsheets');

  const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt
    })
  });

  const tokenData = await tokenResponse.json();
  if (tokenData.error) {
    throw new Error(`Google OAuth error: ${tokenData.error_description || tokenData.error}`);
  }
  return tokenData.access_token;
}

// Helper to append a row to Google Sheets
async function appendRowToGoogleSheet(
  accessToken: string,
  spreadsheetId: string,
  range: string,
  rowValues: any[]
) {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${encodeURIComponent(range)}:append?valueInputOption=USER_ENTERED`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      values: [rowValues]
    })
  });

  const text = await response.text();

  let data;
  try {
    data = JSON.parse(text);
  } catch (err) {
    throw new Error(`Google Sheets API returned non-JSON response (Status ${response.status}): ${text.substring(0, 200)}`);
  }

  if (data.error) {
    throw new Error(`Google Sheets API error: ${data.error.message || JSON.stringify(data.error)}`);
  }
  return data;
}

export async function POST(req: Request) {
  try {
    const clientEmail = process.env.GOOGLE_CLIENT_EMAIL || process.env.DRIVE_GOOGLE_CLIENT_EMAIL;
    const privateKey = getPrivateKeyFromEnvFile();
    const sheetId = process.env.GOOGLE_SHEET_ID || process.env.sheet_id;

    if (!clientEmail || !privateKey || !sheetId) {
      return NextResponse.json(
        { error: 'Google service account credentials or sheet ID are missing in .env.local' },
        { status: 500 }
      );
    }

    const { fullName, email, company, industry, budget, message } = await req.json();

    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: 'fullName, email, and message are required.' },
        { status: 400 }
      );
    }

    // Format row values: Name, Email, Company, Industry, Budget, Message, Timestamp
    const timestamp = new Date().toLocaleString('en-US', { timeZone: 'America/New_York' });
    const rowValues = [fullName, email, company || '', industry || '', budget || '', message, timestamp];

    // Authenticate and append row
    const accessToken = await getAccessToken(clientEmail, privateKey);
    await appendRowToGoogleSheet(accessToken, sheetId, "'Cortexa Leads'!A:G", rowValues);

    return NextResponse.json({ success: true, message: 'Lead recorded successfully.' });
  } catch (error: any) {
    console.error('Lead submission API Error:', error);
    return NextResponse.json(
      { error: error?.message || 'Failed to submit lead to Google Sheets.' },
      { status: 500 }
    );
  }
}
