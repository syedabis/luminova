'use client';

import React from 'react';
import { ShieldCheck, Lock, EyeOff, Server, FileCheck, Cpu } from 'lucide-react';

export default function IndustrySecurity() {
  const securityFeatures = [
    {
      icon: <Lock size={22} color="#38bdf8" />,
      title: "Zero Data Training Guarantee",
      desc: "Your company documents, customer data, and proprietary data are never used to train public LLM foundation models."
    },
    {
      icon: <ShieldCheck size={22} color="#10b981" />,
      title: "SOC2 & HIPAA Compliance Ready",
      desc: "All client data flows through encrypted, enterprise-certified infrastructure meeting strict healthcare and financial standards."
    },
    {
      icon: <Server size={22} color="#a855f7" />,
      title: "Private Virtual Cloud (VPC) Deployment",
      desc: "Optionally deploy custom open-source LLMs (Llama 3, Mistral) directly inside your dedicated AWS or Azure environment."
    },
    {
      icon: <EyeOff size={22} color="#ec4899" />,
      title: "Role-Based Data Access & Audit Logs",
      desc: "Granular access permissions ensure internal teams only see the data relevant to their specific role with automated audit trails."
    },
    {
      icon: <FileCheck size={22} color="#f59e0b" />,
      title: "End-to-End Encryption",
      desc: "AES-256 bit encryption at rest and TLS 1.3 encryption in transit protect all automated payload transfers and database calls."
    },
    {
      icon: <Cpu size={22} color="#6366f1" />,
      title: "99.9% Uptime & SLA Guarantees",
      desc: "Enterprise-grade reliability with redundancy, automated fallback agents, and 24/7 proactive system monitoring."
    }
  ];

  return (
    <section id="security" className="section-xl" style={{ padding: '90px 0', backgroundColor: '#090b0e', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
      <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 64px auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'rgba(16, 185, 129, 0.1)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            borderRadius: '100px',
            padding: '6px 18px',
            marginBottom: '20px'
          }}>
            <ShieldCheck size={15} color="#10b981" />
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#10b981', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              ENTERPRISE SECURITY & COMPLIANCE
            </span>
          </div>

          <h2 style={{
            fontSize: 'clamp(36px, 5vw, 56px)',
            fontWeight: 800,
            color: '#ffffff',
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            marginBottom: '20px'
          }}>
            Built for Regulated & High-Security Sectors
          </h2>
          <p style={{
            fontSize: '17px',
            color: '#94a3b8',
            lineHeight: 1.6,
            margin: 0
          }}>
            We prioritize strict data privacy and regulatory compliance so your business can deploy AI with total confidence.
          </p>
        </div>

        {/* 6 Feature Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          {securityFeatures.map((item, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.025)',
                border: '1px solid rgba(255, 255, 255, 0.07)',
                borderRadius: '20px',
                padding: '32px',
                transition: 'all 0.25s ease'
              }}
              className="hover-card-glow"
            >
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '14px',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}>
                {item.icon}
              </div>

              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#ffffff', marginBottom: '12px', lineHeight: 1.3 }}>
                {item.title}
              </h3>

              <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
