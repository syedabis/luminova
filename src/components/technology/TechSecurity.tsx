'use client';

import React from 'react';
import { ShieldCheck, Lock, EyeOff, FileCode, CheckCircle2, Server } from 'lucide-react';

export default function TechSecurity() {
  const securityFeatures = [
    {
      title: "Strict Pydantic Schema Validation",
      desc: "Every LLM output is validated against rigid TypeScript & Pydantic JSON schemas prior to API dispatch, guaranteeing zero malformed payloads.",
      icon: FileCode,
      color: "#38bdf8"
    },
    {
      title: "Deterministic Fallback Routing",
      desc: "Instant automatic failover to backup models (e.g. GPT-4o -> Claude 3.5) or human-in-the-loop review if confidence thresholds drop below 95%.",
      icon: Server,
      color: "#c084fc"
    },
    {
      title: "Automated PII Masking & Anonymization",
      desc: "Real-time sanitization of credit card numbers, SSNs, and medical record details before data touches public LLM APIs.",
      icon: EyeOff,
      color: "#34d399"
    },
    {
      title: "SOC-2 & HIPAA Audit Telemetry",
      desc: "Encrypted end-to-end request logging, role-based access control (RBAC), and zero data retention agreements with model providers.",
      icon: Lock,
      color: "#f59e0b"
    }
  ];

  return (
    <section style={{ padding: '100px 0', backgroundColor: '#010101', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 64px auto' }}>
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
            <ShieldCheck size={15} color="#34d399" />
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#34d399', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              ENTERPRISE GUARDRAILS & SECURITY
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
            Zero-Hallucination Governance & Safety
          </h2>
          <p style={{ fontSize: '16px', color: '#94a3b8', margin: 0 }}>
            Enterprise AI must be reliable, predictable, and fully compliant. Our multi-layered guardrails shield your business operations.
          </p>
        </div>

        {/* 4 Security Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px' }}>
          {securityFeatures.map((sec, idx) => {
            const Icon = sec.icon;
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '24px',
                  padding: '36px'
                }}
                className="hover-card-glow"
              >
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '14px',
                  backgroundColor: `${sec.color}18`,
                  border: `1px solid ${sec.color}44`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}>
                  <Icon size={24} color={sec.color} />
                </div>

                <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#ffffff', marginBottom: '12px', lineHeight: 1.3 }}>
                  {sec.title}
                </h3>

                <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
                  {sec.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
