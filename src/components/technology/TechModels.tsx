'use client';

import React from 'react';
import { Cpu, Zap, Network, Bot, Shield, CheckCircle2 } from 'lucide-react';

export default function TechModels() {
  const models = [
    {
      name: "OpenAI GPT-4o & GPT-4o Mini",
      category: "Multimodal Foundation Model",
      description: "Primary reasoning engine for multi-turn intent scoring, high-precision document extraction, and rapid decision orchestration.",
      specs: ["128k Context Window", "<400ms TTFT", "Native Vision & Audio"],
      color: "#38bdf8"
    },
    {
      name: "Anthropic Claude 3.5 Sonnet",
      category: "Complex Code & Document Reasoning",
      description: "Specialized model for multi-page PDF analysis, legal contract clause parsing, and generating bulletproof production TypeScript/Python.",
      specs: ["200k Context Window", "Top-tier Code Precision", "Structured JSON Focus"],
      color: "#c084fc"
    },
    {
      name: "Meta Llama 3.3 (70B) & DeepSeek-V3",
      category: "Open Weights & On-Premise Cloud",
      description: "Deployed for clients with strict data sovereignty requirements, HIPAA compliance mandates, or zero external API data sharing policies.",
      specs: ["Self-Hosted vLLM", "Zero Data Egress", "Custom LoRA Fine-Tuning"],
      color: "#34d399"
    },
    {
      name: "LangChain & AutoGen Multi-Agent Routers",
      category: "Agentic Swarm Orchestration",
      description: "Stateful agent frameworks allowing specialized autonomous bots (Sales Agent, Technical Specialist, Billing Agent) to collaborate seamlessly.",
      specs: ["Sub-Agent Delegation", "Shared Vector Memory", "Loop Prevention"],
      color: "#f59e0b"
    }
  ];

  return (
    <section id="tech-models" style={{ padding: '100px 0', backgroundColor: '#06080d', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 64px auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'rgba(192, 132, 252, 0.1)',
            border: '1px solid rgba(192, 132, 252, 0.25)',
            borderRadius: '100px',
            padding: '6px 18px',
            marginBottom: '20px'
          }}>
            <Bot size={15} color="#c084fc" />
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#c084fc', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              LLM GATEWAY & AGENTIC SWARMS
            </span>
          </div>

          <h2 style={{
            fontSize: 'clamp(34px, 4.8vw, 52px)',
            fontWeight: 800,
            color: '#ffffff',
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            marginBottom: '16px'
          }}>
            Foundation Models & Multi-Agent Frameworks
          </h2>
          <p style={{ fontSize: '16px', color: '#94a3b8', margin: 0 }}>
            We leverage model-agnostic routing to pair each enterprise task with the exact LLM, context window, and latency profile it demands.
          </p>
        </div>

        {/* 4 Models Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '28px' }}>
          {models.map((m, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '24px',
                padding: '36px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
              className="hover-card-glow"
            >
              <div>
                <div style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  color: m.color,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  backgroundColor: `${m.color}15`,
                  border: `1px solid ${m.color}33`,
                  padding: '4px 12px',
                  borderRadius: '100px',
                  display: 'inline-block',
                  marginBottom: '16px'
                }}>
                  {m.category}
                </div>

                <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#ffffff', marginBottom: '14px', lineHeight: 1.25 }}>
                  {m.name}
                </h3>

                <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: 1.6, marginBottom: '24px' }}>
                  {m.description}
                </p>
              </div>

              <div>
                <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {m.specs.map((s, sIdx) => (
                    <div key={sIdx} style={{ fontSize: '13px', color: '#cbd5e1', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <CheckCircle2 size={15} color={m.color} /> {s}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
