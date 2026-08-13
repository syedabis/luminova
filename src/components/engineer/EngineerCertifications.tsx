'use client';

import React, { useState } from 'react';
import { Award, ExternalLink, ShieldCheck, CheckCircle2, X } from 'lucide-react';

export default function EngineerCertifications() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const certs = [
    {
      title: "AWS Certified Machine Learning – Specialty",
      issuer: "Amazon Web Services (AWS)",
      year: "2024",
      badgeColor: "#ff9900",
      image: "/certificates/aws_ml.png"
    },
    {
      title: "Production RAG & Vector Search Architect",
      issuer: "Pinecone & LangChain Academy",
      year: "2024",
      badgeColor: "#38bdf8",
      image: "/certificates/pinecone_rag.png"
    },
    {
      title: "OpenAI Advanced Prompt & Fine-Tuning Specialist",
      issuer: "OpenAI Developer Platform",
      year: "2023",
      badgeColor: "#10b981",
      image: "/certificates/openai_dev.png"
    },
    {
      title: "B.S. Computer Science & Artificial Intelligence",
      issuer: "University of California, Berkeley",
      year: "2021",
      badgeColor: "#c084fc",
      image: "/certificates/berkeley_cs.png"
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
            Formal engineering background, machine learning certifications, and enterprise framework accreditations. Click any certificate to expand.
          </p>
        </div>

        {/* 4 Certification Cards Grid with Certificate Images */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px' }}>
          {certs.map((cert, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(cert.image)}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '20px',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform 0.3s ease, border-color 0.3s ease',
                display: 'flex',
                flexDirection: 'column'
              }}
              className="hover-card-glow"
            >
              {/* Certificate Image Frame */}
              <div style={{ position: 'relative', width: '100%', height: '180px', backgroundColor: '#010101', overflow: 'hidden' }}>
                <img
                  src={cert.image}
                  alt={cert.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  backgroundColor: 'rgba(1, 1, 1, 0.75)',
                  backdropFilter: 'blur(8px)',
                  border: `1px solid ${cert.badgeColor}44`,
                  borderRadius: '100px',
                  padding: '4px 10px',
                  fontSize: '11px',
                  fontWeight: 700,
                  color: cert.badgeColor,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  <ShieldCheck size={12} /> {cert.year} Verified
                </div>
              </div>

              {/* Certificate Metadata */}
              <div style={{ padding: '24px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#ffffff', marginBottom: '8px', lineHeight: 1.3 }}>
                    {cert.title}
                  </h3>
                  <div style={{ fontSize: '13px', color: '#94a3b8' }}>
                    {cert.issuer}
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 700, color: '#38bdf8', marginTop: '20px' }}>
                  <span>View High-Res Certificate</span>
                  <ExternalLink size={13} />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* High-Res Lightbox Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.88)',
            backdropFilter: 'blur(12px)',
            zIndex: 99999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px'
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '900px',
              width: '100%',
              backgroundColor: '#0a0d14',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 30px 80px rgba(0,0,0,0.9)'
            }}
          >
            <button
              onClick={() => setSelectedImage(null)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 10
              }}
            >
              <X size={20} />
            </button>

            <img
              src={selectedImage}
              alt="Expanded Certificate"
              style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '80vh', objectFit: 'contain' }}
            />
          </div>
        </div>
      )}

    </section>
  );
}
