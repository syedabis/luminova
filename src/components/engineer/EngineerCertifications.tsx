'use client';

import React from 'react';
import { Award, ShieldCheck, CheckCircle2, GraduationCap, Cpu } from 'lucide-react';

export default function EngineerCertifications() {
  const certs = [
    {
      title: "AWS Certified Machine Learning – Specialty",
      issuer: "Amazon Web Services (AWS)",
      year: "2024",
      badgeColor: "#ff9900"
    },
    {
      title: "Production RAG & Vector Search Architect",
      issuer: "Pinecone & LangChain Academy",
      year: "2024",
      badgeColor: "#38bdf8"
    },
    {
      title: "OpenAI Advanced Prompt & Fine-Tuning Specialist",
      issuer: "OpenAI Developer Platform",
      year: "2023",
      badgeColor: "#10b981"
    },
    {
      title: "B.S. Computer Science & Artificial Intelligence",
      issuer: "University of California, Berkeley",
      year: "2021",
      badgeColor: "#c084fc"
    }
  ];

  return (
    <section style={{ padding: '80px 0', backgroundColor: '#06080d', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 56px auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'rgba(245, 158, 11, 0.1)',
            border: '1px solid rgba(245, 158, 11, 0.25)',
            borderRadius: '100px',
            padding: '6px 18px',
            marginBottom: '20px'
          }}>
            <Award size={15} color="#f59e0b" />
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#f59e0b', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              CREDENTIALS & SPECIALIZATIONS
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
            Verified Certifications & Honors
          </h2>
          <p style={{ fontSize: '16px', color: '#94a3b8', margin: 0 }}>
            Formal engineering background, machine learning certifications, and enterprise framework accreditations.
          </p>
        </div>

        {/* 4 Certification Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
          {certs.map((cert, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.025)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '20px',
                padding: '28px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '16px'
              }}
              className="hover-card-glow"
            >
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                backgroundColor: `${cert.badgeColor}18`,
                border: `1px solid ${cert.badgeColor}44`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Award size={22} color={cert.badgeColor} />
              </div>

              <div>
                <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#ffffff', marginBottom: '6px', lineHeight: 1.3 }}>
                  {cert.title}
                </h3>
                <div style={{ fontSize: '13px', color: '#94a3b8', marginBottom: '8px' }}>
                  {cert.issuer}
                </div>
                <span style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  color: cert.badgeColor,
                  backgroundColor: 'rgba(255,255,255,0.04)',
                  padding: '3px 8px',
                  borderRadius: '100px',
                  border: '1px solid rgba(255,255,255,0.08)'
                }}>
                  {cert.year} Verified
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
