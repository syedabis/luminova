import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';
import { CORTEXA_KNOWLEDGE } from './knowledge';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Messages array is required.' },
        { status: 400 }
      );
    }

    const systemInstruction = `You are Cortexa AI Assistant, a high-converting, concise AI representative for Cortexa B2B AI Agency.

CORTEXA KNOWLEDGE BASE:
${CORTEXA_KNOWLEDGE}

CRITICAL RESPONSE RULES (STRICT ULTRA-SHORT LENGTH):
1. MAXIMUM RESPONSE LENGTH: 40 TO 50 WORDS TOTAL (2-3 short sentences MAX).
2. NO FILLER INTROS. Jump straight to the direct answer.
3. Be ultra-concise, sharp, and scannable.
4. Always include 1 bolded metric or timeline when relevant.
5. End with a 1-sentence call to action (e.g. "Book a free call to get a quote!").`;

    // ── TRY OPENAI FIRST (IF KEY IS AVAILABLE) ──
    const openAiKey = process.env.OPENAI_API_KEY;
    if (openAiKey) {
      try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${openAiKey}`
          },
          body: JSON.stringify({
            model: 'gpt-4o-mini',
            messages: [
              { role: 'system', content: systemInstruction },
              ...messages.map((m: { role: string; content: string }) => ({
                role: m.role === 'user' ? 'user' : 'assistant',
                content: m.content
              }))
            ],
            max_tokens: 150,
            temperature: 0.7
          })
        });

        const data = await response.json();
        if (data.choices && data.choices[0] && data.choices[0].message) {
          const reply = data.choices[0].message.content;
          return NextResponse.json({ reply, engine: 'openai' });
        } else {
          console.warn('OpenAI response format unexpected, trying Gemini fallback...', data);
        }
      } catch (err) {
        console.warn('OpenAI call failed, trying Gemini fallback...', err);
      }
    }

    // ── FALLBACK TO GEMINI (USING GEMINI_KEY) ──
    const geminiKey = process.env.GEMINI_KEY;
    if (!geminiKey) {
      return NextResponse.json(
        { error: 'API Keys are missing. Set OPENAI_API_KEY or GEMINI_KEY.' },
        { status: 500 }
      );
    }

    const genAI = new GoogleGenerativeAI(geminiKey);
    const candidateModels = [
      'gemini-2.5-flash',
      'gemini-flash-latest',
      'gemini-3.5-flash',
      'gemini-2.5-pro'
    ];

    const contents = messages.map((m: { role: string; content: string }) => ({
      role: m.role === 'user' ? 'user' : 'model',
      parts: [{ text: m.content }]
    }));

    let responseText = '';
    let lastError: any = null;

    for (const modelName of candidateModels) {
      try {
        const model = genAI.getGenerativeModel({
          model: modelName,
          systemInstruction
        });

        const result = await model.generateContent({ contents });
        responseText = result.response.text();
        if (responseText) break;
      } catch (err: any) {
        lastError = err;
        console.warn(`Model ${modelName} failed, trying next fallback...`, err?.message);
      }
    }

    if (!responseText) {
      throw lastError || new Error('No model produced a valid response.');
    }

    return NextResponse.json({ reply: responseText, engine: 'gemini' });
  } catch (error: any) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      { error: error?.message || 'Failed to generate response.' },
      { status: 500 }
    );
  }
}
