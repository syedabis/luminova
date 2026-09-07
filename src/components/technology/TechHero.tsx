'use client';

import React, { useState } from 'react';
import { Cpu, Terminal, ArrowUpRight, ShieldCheck, Zap, Database, Layers, Sparkles, Server } from 'lucide-react';

export default function TechHero() {
  const [activeLayer, setActiveLayer] = useState(0);

  const layers = [
    {
      title: "1. Orchestration & LLM Gateway",
      tag: "LLM LAYER",
      desc: "Intelligent request routing across OpenAI GPT-4o, Claude 3.5 Sonnet, and Llama 3 with real-time rate limit management & token optimization.",
      color: "#38bdf8",
      code: "llm_gateway.route({ intent: 'invoice_extract', model: 'claude-3-5-sonnet', maxTokens: 4096 });"
    },
    {
      title: "2. Vector Search & RAG Memory",
      tag: "KNOWLEDGE LAYER",
      desc: "Hybrid retrieval engine combining dense vector embeddings with BM25 keyword matching indexed in Pinecone & Supabase PgVector.",
      color: "#c084fc",
      code: "vector_store.hybrid_search(query_vector, alpha=0.75, top_k=10, metadata={'tenant': 'ent_9201'});"
    },
    {
      title: "3. Schema Guardrails & Security",
      tag: "GOVERNANCE LAYER",
      desc: "Pydantic schema validation, real-time PII masking, and deterministic fallbacks guaranteeing zero-hallucination JSON responses.",
      color: "#34d399",
      code: "guardrails.enforce_pydantic_schema(payload, schema=InvoiceSchema, fallback='human_in_loop');"
    },
    {
      title: "4. Low-Latency API & Webhook Dispatch",
      tag: "INTEGRATION LAYER",
      desc: "Asynchronous webhook execution syncing structured outputs directly to Salesforce, HubSpot, QuickBooks & Twilio SMS.",
      color: "#f59e0b",
      code: "hubspot.crm.deals.update(deal_id, status='qualified', score=0.96, sms_dispatched=True);"
    }
  ];

  return (
    <section style={{
      paddingTop: '160px',
      paddingBottom: '100px',
      backgroundColor: '#010101',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      {/* Radial Glows matching Homepage UI */}
      <div style={{
        position: 'absolute',
        top: '15%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '1100px',
        height: '480px',
        background: 'radial-gradient(circle, rgba(56, 189, 248, 0.14) 0%, rgba(192, 132, 252, 0.08) 50%, rgba(0,0,0,0) 75%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '60px', alignItems: 'center' }} className="hero-tech-grid">
          <style dangerouslySetInnerHTML={{ __html: `
            @media (min-width: 992px) {
              .hero-tech-grid {
                grid-template-columns: 1.15fr 0.85fr !important;
              }
            }
          ` }} />

          {/* Left Column: Headline & Value Prop */}
          <div>
            
            {/* Status Pill Badge */}
            <div className="hero-badge" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(56, 189, 248, 0.1)',
              border: '1px solid rgba(56, 189, 248, 0.3)',
              borderRadius: '100px',
              padding: '6px 18px',
              marginBottom: '28px'
            }}>
              <Cpu size={15} color="#38bdf8" />
              <span style={{ fontSize: '12px', fontWeight: 700, color: '#38bdf8', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                ENTERPRISE AI STACK & INFRASTRUCTURE
              </span>
            </div>

            {/* Headline */}
            <h1 className="hero-heading" style={{
              fontSize: 'clamp(40px, 5.5vw, 64px)',
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: '-0.035em',
              lineHeight: 1.08,
              marginBottom: '20px'
            }}>
              Production-Grade <br />
              <span style={{
                background: 'linear-gradient(135deg, #38bdf8 0%, #c084fc 50%, #34d399 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>AI Architectures</span> Built for Scale.
            </h1>

            <p className="hero-desc" style={{
              fontSize: '18px',
              color: '#94a3b8',
              lineHeight: 1.6,
              maxWidth: '620px',
              marginBottom: '36px'
            }}>
              From ultra-low latency voice bots to high-throughput RAG search engines and multi-agent workflows—explore the battle-tested engineering stack powering Cortexa deployments.
            </p>

            {/* CTA Buttons */}
            <div className="feature-1-wrap" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '48px' }}>
              <a
                href="#tech-models"
                className="hero-btn"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: '#38bdf8',
                  color: '#010101',
                  padding: '14px 28px',
                  borderRadius: '100px',
                  fontSize: '15px',
                  fontWeight: 700,
                  textDecoration: 'none',
                  boxShadow: '0 8px 25px rgba(56, 189, 248, 0.3)',
                  transition: 'all 0.3s ease'
                }}
              >
                Explore Tech Frameworks <ArrowUpRight size={18} />
              </a>

              <a
                href="#tech-playground"
                className="hero-btn"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  color: '#ffffff',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  padding: '14px 28px',
                  borderRadius: '100px',
                  fontSize: '15px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}
              >
                Stack Configurator
              </a>
            </div>

            {/* Performance Stats Bar */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '20px',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              paddingTop: '32px'
            }}>
              <div>
                <div style={{ fontSize: '28px', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em' }}>&lt;350ms</div>
                <div style={{ fontSize: '13px', color: '#94a3b8', marginTop: '4px' }}>Voice AI Latency</div>
              </div>
              <div>
                <div style={{ fontSize: '28px', fontWeight: 800, color: '#c084fc', letterSpacing: '-0.02em' }}>10M+</div>
                <div style={{ fontSize: '13px', color: '#94a3b8', marginTop: '4px' }}>Vector Ops / Day</div>
              </div>
              <div>
                <div style={{ fontSize: '28px', fontWeight: 800, color: '#34d399', letterSpacing: '-0.02em' }}>99.9%</div>
                <div style={{ fontSize: '13px', color: '#94a3b8', marginTop: '4px' }}>Uptime SLA</div>
              </div>
            </div>

          </div>

          {/* Right Column: Live Architecture Terminal Widget */}
          <div className="hero-visual" style={{
            backgroundColor: '#0a0d14',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '24px',
            padding: '32px',
            boxShadow: '0 25px 60px rgba(0,0,0,0.6)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#f59e0b' }} />
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#10b981' }} />
                <span style={{ fontSize: '13px', color: '#64748b', marginLeft: '8px', fontFamily: 'monospace' }}>
                  cortexa_system_architecture.v3
                </span>
              </div>
              <Server size={16} color="#38bdf8" />
            </div>

            {/* Layer Selection Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
              {layers.map((l, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveLayer(idx)}
                  style={{
                    backgroundColor: activeLayer === idx ? `${l.color}15` : 'rgba(255, 255, 255, 0.02)',
                    border: `1px solid ${activeLayer === idx ? `${l.color}66` : 'rgba(255, 255, 255, 0.06)'}`,
                    borderRadius: '12px',
                    padding: '14px 16px',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span style={{ fontSize: '14px', fontWeight: 800, color: activeLayer === idx ? l.color : '#ffffff' }}>
                      {l.title}
                    </span>
                    <span style={{ fontSize: '10px', fontWeight: 700, color: l.color, backgroundColor: `${l.color}22`, padding: '2px 8px', borderRadius: '100px' }}>
                      {l.tag}
                    </span>
                  </div>
                  <p style={{ fontSize: '12px', color: '#94a3b8', margin: 0, lineHeight: 1.4 }}>
                    {l.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Code Box for Active Layer */}
            <div style={{
              backgroundColor: '#010101',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '12px',
              padding: '16px',
              fontFamily: 'monospace',
              fontSize: '12px',
              color: layers[activeLayer].color,
              overflowX: 'auto'
            }}>
              <div style={{ color: '#64748b', marginBottom: '6px' }}>// Active Layer Execution Snippet</div>
              {layers[activeLayer].code}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
