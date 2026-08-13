'use client';

import React from 'react';
import { Cpu, Terminal, CheckCircle2 } from 'lucide-react';

export default function EngineerTechStack() {
  const techCategories = [
    {
      title: "AI & LLM Architectures",
      items: ["OpenAI GPT-4o", "Claude 3.5 Sonnet", "Llama 3 70B", "LangChain", "LlamaIndex", "Instructor Pydantic"]
    },
    {
      title: "Vector DBs & Knowledge Bases",
      items: ["Pinecone Vector DB", "Supabase Vector", "Qdrant", "PostgreSQL (pgvector)", "ChromaDB"]
    },
    {
      title: "Backend & API Middleware",
      items: ["Python FastAPI", "Node.js / TypeScript", "Docker Containers", "REST & GraphQL", "gRPC Protocol"]
    },
    {
      title: "No-Code & Workflow Engines",
      items: ["Make.com (Integromat)", "Zapier Developer", "n8n Self-Hosted", "Webhooks / Sockets", "Celery / Redis"]
    },
    {
      title: "Voice & Real-Time AI",
      items: ["Retell AI", "Vapi.ai Engine", "Twilio Voice API", "Whisper STT", "ElevenLabs TTS"]
    }
  ];

  // Repeat 3 times for a smooth continuous horizontal marquee
  const loopTech = [...techCategories, ...techCategories, ...techCategories];

  return (
    <section style={{ padding: '90px 0', backgroundColor: '#010101', overflow: 'hidden' }}>
      
      {/* Keyframe animation for continuous horizontal auto loop */}
      <style jsx>{`
        @keyframes marqueeTech {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.333%); }
        }
        .tech-marquee-track {
          display: flex;
          gap: 24px;
          width: max-content;
          animation: marqueeTech 30s linear infinite;
        }
        .tech-marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 56px auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'rgba(168, 85, 247, 0.1)',
            border: '1px solid rgba(168, 85, 247, 0.25)',
            borderRadius: '100px',
            padding: '6px 18px',
            marginBottom: '20px'
          }}>
            <Cpu size={15} color="#c084fc" />
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#c084fc', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              TECHNICAL ARSENAL & TOOLKIT
            </span>
          </div>

          <h2 style={{
            fontSize: 'clamp(32px, 4.5vw, 50px)',
            fontWeight: 800,
            color: '#ffffff',
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            marginBottom: '16px'
          }}>
            Core Technologies & Frameworks
          </h2>
          <p style={{ fontSize: '16px', color: '#94a3b8', margin: 0 }}>
            Mastery over cutting-edge artificial intelligence models, vector databases, and enterprise automation middleware.
          </p>
        </div>

      </div>

      {/* Full Width Horizontal Marquee Track */}
      <div style={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        maskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)'
      }}>
        <div className="tech-marquee-track">
          {loopTech.map((cat, idx) => (
            <div
              key={idx}
              style={{
                width: '360px',
                flexShrink: 0,
                backgroundColor: 'rgba(255, 255, 255, 0.025)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '20px',
                padding: '32px'
              }}
              className="hover-card-glow"
            >
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#ffffff', marginBottom: '20px' }}>
                {cat.title}
              </h3>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {cat.items.map((item, iIdx) => (
                  <div
                    key={iIdx}
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#e2e8f0',
                      fontSize: '13px',
                      fontWeight: 600,
                      padding: '8px 14px',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    <CheckCircle2 size={13} color="#34d399" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
