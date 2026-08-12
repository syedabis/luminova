import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const apiKey = process.env.GEMINI_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: 'GEMINI_KEY is missing in environment variables.' },
        { status: 500 }
      );
    }

    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Messages array is required.' },
        { status: 400 }
      );
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    
    // Available Gemini models in priority order
    const candidateModels = [
      'gemini-2.5-flash',
      'gemini-flash-latest',
      'gemini-3.5-flash',
      'gemini-2.5-pro'
    ];

    const systemInstruction = `You are Formiqa AI Assistant, a high-converting, concise AI representative for Formiqa B2B AI Agency.

FORMIQA CORE SERVICES & SAMPLE PROJECTS:
- Lead Intake & CRM Automation (Make.com, OpenAI, HubSpot) — +42% conversion rate.
- Enterprise RAG Knowledge Chatbots (Llama 3, Vector DBs) — 50% faster onboarding.
- Full-Stack AI SaaS Platforms (Next.js, Supabase, Stripe).
- Multi-Agent Autonomous Workflows (CrewAI, LangChain).
- AI Quality Control Inspector (YOLOv8, OpenCV) — 99.4% accuracy.
- Conversational Voice AI Assistants (Retell AI, Twilio).

CRITICAL RESPONSE RULES (STRICT ULTRA-SHORT LENGTH):
1. MAXIMUM RESPONSE LENGTH: 40 TO 50 WORDS TOTAL (2-3 short sentences MAX).
2. NO FILLER INTROS. Jump straight to the direct answer.
3. Be ultra-concise, sharp, and scannable.
4. Always include 1 bolded metric or timeline when relevant.
5. End with a 1-sentence call to action (e.g. "Book a call to get an exact quote!").`;

    // Format chat history for Gemini SDK
    const contents = messages.map((m: { role: string; content: string }) => ({
      role: m.role === 'user' ? 'user' : 'model',
      parts: [{ text: m.content }]
    }));

    let responseText = '';
    let lastError: any = null;

    // Try models in order until one succeeds
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

    return NextResponse.json({ reply: responseText });
  } catch (error: any) {
    console.error('Gemini API Error:', error);
    return NextResponse.json(
      { error: error?.message || 'Failed to generate response from Gemini.' },
      { status: 500 }
    );
  }
}
