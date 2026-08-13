'use client';

import React from 'react';
import { Star, MessageSquare } from 'lucide-react';

export default function EngineerTestimonials() {
  const testimonials = [
    {
      quote: "Syed Abis re-engineered our entire lead intake infrastructure in under 10 days. Our response times went from 4 hours to 15 seconds, driving an immediate 35% boost in booked client calls.",
      author: "David Sterling",
      role: "VP of Growth & Operations",
      company: "Apex Global Logistics",
      stars: 5
    },
    {
      quote: "The AP invoice extraction system built by Syed Abis processes 5,000+ multi-page PDF documents monthly with zero manual errors. He is one of the sharpest AI systems architects in the industry.",
      author: "Elena Rostova",
      role: "Chief Technology Officer",
      company: "FinTech ScaleUp Corp",
      stars: 5
    },
    {
      quote: "Our front desk staff was overwhelmed by phone calls. Syed Abis deployed a custom voice AI agent that handles appointment bookings effortlessly. It's like adding 3 full-time staff members overnight.",
      author: "Dr. Marcus Vance",
      role: "Founder & Lead Physician",
      company: "HealthPulse Medical",
      stars: 5
    },
    {
      quote: "The real-time review sentiment and auto-refund pipeline transformed our e-commerce operations. We resolved 85% of refund disputes instantly with zero customer friction.",
      author: "Sarah Jenkins",
      role: "Head of Engineering",
      company: "CommerceVibe Retail",
      stars: 5
    },
    {
      quote: "Syed Abis's multi-agent workflow automated our field telemetry logging across 12 regional sites. His understanding of low-latency API architectures is exceptional.",
      author: "Tariq Al-Mansoor",
      role: "Chief Operating Officer",
      company: "Saudi Energy Tech",
      stars: 5
    },
    {
      quote: "Document discovery used to take our paralegal team 30+ hours per case. The Pinecone RAG search system Syed Abis deployed cut that to under 45 seconds with 100% citation accuracy.",
      author: "Michael Chang",
      role: "Partner & General Counsel",
      company: "LegalPulse Partners",
      stars: 5
    }
  ];

  // Triplicate the 6 testimonials for a smooth continuous infinite auto loop
  const loopTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section style={{ padding: '90px 0', backgroundColor: '#010101', overflow: 'hidden', position: 'relative' }}>
      
      {/* Keyframe animation for continuous horizontal auto loop */}
      <style jsx>{`
        @keyframes marqueeTestimonials {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.333%); }
        }
        .reviews-marquee-track {
          display: flex;
          gap: 28px;
          width: max-content;
          animation: marqueeTestimonials 38s linear infinite;
        }
        .reviews-marquee-track:hover {
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
            backgroundColor: 'rgba(56, 189, 248, 0.1)',
            border: '1px solid rgba(56, 189, 248, 0.25)',
            borderRadius: '100px',
            padding: '6px 18px',
            marginBottom: '20px'
          }}>
            <MessageSquare size={15} color="#38bdf8" />
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#38bdf8', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              CLIENT & EXECUTIVE ENDORSEMENTS
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
            What Founders & CTOs Say
          </h2>
          <p style={{ fontSize: '16px', color: '#94a3b8', margin: 0 }}>
            Direct feedback from business leaders whose operations are powered by Syed Abis's AI architectures. Hover to pause auto-loop.
          </p>
        </div>

      </div>

      {/* Full Width Single Horizontal Auto-Loop Marquee Track */}
      <div style={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        maskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)'
      }}>
        <div className="reviews-marquee-track">
          {loopTestimonials.map((t, idx) => (
            <div
              key={idx}
              style={{
                width: '380px',
                flexShrink: 0,
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
                <div style={{ display: 'flex', gap: '4px', marginBottom: '20px' }}>
                  {[...Array(t.stars)].map((_, sIdx) => (
                    <Star key={sIdx} size={16} color="#f59e0b" fill="#f59e0b" />
                  ))}
                </div>

                <p style={{ fontSize: '14px', color: '#e2e8f0', lineHeight: 1.65, fontStyle: 'italic', marginBottom: '28px' }}>
                  "{t.quote}"
                </p>
              </div>

              <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '20px' }}>
                <div style={{ fontSize: '16px', fontWeight: 800, color: '#ffffff' }}>
                  {t.author}
                </div>
                <div style={{ fontSize: '13px', color: '#94a3b8', marginTop: '2px' }}>
                  {t.role} • <span style={{ color: '#38bdf8' }}>{t.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
