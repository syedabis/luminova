'use client';

import React, { useState } from 'react';
import { Sliders, Code2, Check, ArrowRight, Zap, Database, ShieldCheck, Terminal } from 'lucide-react';

export default function TechPlayground() {
  const [selectedUseCase, setSelectedUseCase] = useState(0);

  const useCases = [
    {
      id: "voice",
      title: "24/7 Voice AI Phone Agent",
      category: "Customer Support & Telephony",
      recommendedLLM: "GPT-4o Realtime Audio / Retell AI",
      vectorDB: "Pinecone (FAQ & Account Memory)",
      latencySLA: "<350ms Audio Latency",
      guardrailLevel: "Strict Pydantic + Interjection Handling",
      integrations: ["Twilio Voice", "HubSpot CRM", "Calendly API"],
      payloadSnippet: `{\n  "call_id": "call_901248",\n  "intent": "appointment_booking",\n  "customer": "+1 415 555 0199",\n  "slots_available": ["2026-08-14T10:00:00Z"],\n  "latency_ms": 320,\n  "status": "confirmed"\n}`
    },
    {
      id: "finance",
      title: "Automated AP Invoice OCR & ERP Sync",
      category: "Finance & Accounting",
      recommendedLLM: "Claude 3.5 Sonnet Vision",
      vectorDB: "Supabase PgVector (Vendor Rules)",
      latencySLA: "8s Processing / Document",
      guardrailLevel: "100% Schema Lock + Auto-Flag Errors",
      integrations: ["QuickBooks API", "Stripe API", "Google Drive"],
      payloadSnippet: `{\n  "invoice_number": "INV-2026-9901",\n  "line_items": 14,\n  "subtotal": 4200.00,\n  "tax_verified": true,\n  "po_match": "PO-88102",\n  "quickbooks_synced": true\n}`
    },
    {
      id: "legal",
      title: "Vector RAG Document Discovery Search",
      category: "Legal & Corporate Compliance",
      recommendedLLM: "GPT-4o + Cohere Rerank v3",
      vectorDB: "Pinecone Hybrid (10M+ Index)",
      latencySLA: "450ms Query Retrieval",
      guardrailLevel: "Zero Data Egress + Strict Citation Lock",
      integrations: ["Notion API", "SharePoint", "Supabase SQL"],
      payloadSnippet: `{\n  "query": "clause 14.2 indemnity terms",\n  "documents_indexed": 10420100,\n  "top_matches": 5,\n  "relevance_score": 0.994,\n  "citation": "Contract_v4.pdf#L128"\n}`
    },
    {
      id: "sales",
      title: "Autonomous Sales Intake & CRM Agent",
      category: "Sales Lead Qualification",
      recommendedLLM: "OpenAI GPT-4o Mini + Make.com",
      vectorDB: "Qdrant (Prospect Embeddings)",
      latencySLA: "15s End-to-End SLA",
      guardrailLevel: "Apollo Enrichment + Intent Score",
      integrations: ["HubSpot API", "Twilio SMS", "Apollo.io"],
      payloadSnippet: `{\n  "lead_email": "cto@scaleup.io",\n  "intent_score": 98,\n  "apollo_enriched": true,\n  "sms_sent": true,\n  "crm_deal_created": "DEAL-88902"\n}`
    }
  ];

  const current = useCases[selectedUseCase];

  return (
    <section id="tech-playground" style={{ padding: '100px 0', backgroundColor: '#06080d', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 64px auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'rgba(56, 189, 248, 0.1)',
            border: '1px solid rgba(56, 189, 248, 0.25)',
            borderRadius: '100px',
            padding: '6px 18px',
            marginBottom: '20px'
          }}>
            <Sliders size={15} color="#38bdf8" />
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#38bdf8', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              INTERACTIVE ARCHITECTURE EXPLORER
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
            Select Enterprise Workload & View Stack Spec
          </h2>
          <p style={{ fontSize: '16px', color: '#94a3b8', margin: 0 }}>
            Click a use case below to inspect Cortexa's recommended model router, vector database, and real-time execution payload.
          </p>
        </div>

        {/* 4 Workload Selector Buttons */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', marginBottom: '40px' }}>
          {useCases.map((uc, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedUseCase(idx)}
              style={{
                backgroundColor: selectedUseCase === idx ? 'rgba(56, 189, 248, 0.12)' : 'rgba(255, 255, 255, 0.02)',
                border: `1px solid ${selectedUseCase === idx ? '#38bdf8' : 'rgba(255, 255, 255, 0.08)'}`,
                borderRadius: '16px',
                padding: '18px',
                textAlign: 'left',
                cursor: 'pointer',
                transition: 'all 0.25s ease'
              }}
            >
              <div style={{ fontSize: '11px', fontWeight: 700, color: selectedUseCase === idx ? '#38bdf8' : '#94a3b8', textTransform: 'uppercase', marginBottom: '4px' }}>
                {uc.category}
              </div>
              <div style={{ fontSize: '15px', fontWeight: 800, color: '#ffffff' }}>
                {uc.title}
              </div>
            </button>
          ))}
        </div>

        {/* Dynamic Architecture Spec Display Card */}
        <div style={{
          backgroundColor: '#0a0d14',
          border: '1px solid rgba(56, 189, 248, 0.2)',
          borderRadius: '24px',
          padding: '40px',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '40px'
        }} className="playground-spec-grid">
          <style dangerouslySetInnerHTML={{ __html: `
            @media (min-width: 992px) {
              .playground-spec-grid {
                grid-template-columns: 1fr 1fr !important;
              }
            }
          ` }} />

          {/* Left Column: Stack Breakdown */}
          <div>
            <div style={{ fontSize: '12px', fontWeight: 700, color: '#38bdf8', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>
              RECOMMENDED STACK SPECIFICATION
            </div>
            <h3 style={{ fontSize: '26px', fontWeight: 800, color: '#ffffff', marginBottom: '24px' }}>
              {current.title}
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', padding: '14px 18px' }}>
                <div style={{ fontSize: '11px', color: '#94a3b8', fontWeight: 600 }}>FOUNDATION MODEL ROUTER</div>
                <div style={{ fontSize: '15px', fontWeight: 800, color: '#ffffff', marginTop: '2px' }}>{current.recommendedLLM}</div>
              </div>

              <div style={{ backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', padding: '14px 18px' }}>
                <div style={{ fontSize: '11px', color: '#94a3b8', fontWeight: 600 }}>VECTOR SEARCH DATABASE</div>
                <div style={{ fontSize: '15px', fontWeight: 800, color: '#c084fc', marginTop: '2px' }}>{current.vectorDB}</div>
              </div>

              <div style={{ backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', padding: '14px 18px' }}>
                <div style={{ fontSize: '11px', color: '#94a3b8', fontWeight: 600 }}>LATENCY & SPEED SLA</div>
                <div style={{ fontSize: '15px', fontWeight: 800, color: '#34d399', marginTop: '2px' }}>{current.latencySLA}</div>
              </div>

              <div style={{ backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', padding: '14px 18px' }}>
                <div style={{ fontSize: '11px', color: '#94a3b8', fontWeight: 600 }}>CONNECTED MIDDLEWARE</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '8px' }}>
                  {current.integrations.map((ing, iIdx) => (
                    <span key={iIdx} style={{ fontSize: '12px', color: '#cbd5e1', backgroundColor: 'rgba(255,255,255,0.06)', padding: '3px 10px', borderRadius: '6px', fontWeight: 600 }}>
                      {ing}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Code Payload Snippet */}
          <div style={{
            backgroundColor: '#010101',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '16px',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '12px' }}>
                <span style={{ fontSize: '12px', color: '#34d399', fontFamily: 'monospace', fontWeight: 700 }}>
                  // LIVE EXECUTION PAYLOAD
                </span>
                <Terminal size={15} color="#34d399" />
              </div>
              <pre style={{
                fontFamily: 'monospace',
                fontSize: '13px',
                color: '#34d399',
                lineHeight: 1.6,
                margin: 0,
                whiteSpace: 'pre-wrap'
              }}>
                {current.payloadSnippet}
              </pre>
            </div>

            <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px dashed rgba(255,255,255,0.1)', fontSize: '12px', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <ShieldCheck size={14} color="#38bdf8" /> Guardrail Mode: <span style={{ color: '#ffffff', fontWeight: 700 }}>{current.guardrailLevel}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
