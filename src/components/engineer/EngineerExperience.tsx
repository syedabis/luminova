'use client';

import React from 'react';
import { Layers, ShieldCheck, Zap, Server, Check } from 'lucide-react';

export default function EngineerExperience() {
  const steps = [
    {
      num: "01",
      title: "Workflow Audit & Feasibility",
      desc: "Analyze legacy SOPs, API documentation, and manual bottlenecks to design an autonomous agent flow with clear SLAs.",
      iconColor: "#38bdf8"
    },
    {
      num: "02",
      title: "Prompt Engineering & Guardrails",
      desc: "Develop strict JSON-schema prompts, hallucination guardrails, and deterministic fallbacks to guarantee 100% data reliability.",
      iconColor: "#c084fc"
    },
    {
      num: "03",
      title: "RAG & Vector Knowledge Indexing",
      desc: "Embed unstructured enterprise data into Pinecone/Supabase vector indexes with hybrid semantic keyword retrieval.",
      iconColor: "#f59e0b"
    },
    {
      num: "04",
      title: "Production Deployment & Monitoring",
      desc: "Deploy containerized FastAPI endpoints or n8n webhooks with continuous latency tracking and error logging.",
      iconColor: "#34d399"
    }
  ];

  return (
    <section style={{ padding: '90px 0', backgroundColor: '#06080d', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 56px auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'rgba(52, 211, 153, 0.1)',
            border: '1px solid rgba(52, 211, 153, 0.25)',
            borderRadius: '100px',
            padding: '6px 18px',
            marginBottom: '20px'
          }}>
            <Layers size={15} color="#34d399" />
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#34d399', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              ENGINEERING METHODOLOGY
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
            How I Build Production-Grade AI Systems
          </h2>
          <p style={{ fontSize: '16px', color: '#94a3b8', margin: 0 }}>
            A disciplined 4-stage engineering lifecycle focused on data security, zero hallucination, and high pipeline uptime.
          </p>
        </div>

        {/* 4 Steps Process Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
          {steps.map((st, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '20px',
                padding: '32px',
                position: 'relative'
              }}
              className="hover-card-glow"
            >
              <div style={{
                fontSize: '14px',
                fontWeight: 800,
                color: st.iconColor,
                marginBottom: '16px',
                backgroundColor: `${st.iconColor}15`,
                border: `1px solid ${st.iconColor}33`,
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {st.num}
              </div>

              <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#ffffff', marginBottom: '12px' }}>
                {st.title}
              </h3>

              <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
                {st.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
