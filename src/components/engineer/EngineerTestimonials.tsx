'use client';

import React from 'react';
import { Quote, Star, MessageSquare } from 'lucide-react';

export default function EngineerTestimonials() {
  const testimonials = [
    {
      quote: "Alex re-engineered our entire lead intake infrastructure in under 10 days. Our response times went from 4 hours to 15 seconds, driving an immediate 35% boost in booked client calls.",
      author: "David Sterling",
      role: "VP of Growth & Operations",
      company: "Apex Global Logistics",
      stars: 5
    },
    {
      quote: "The AP invoice extraction system built by Alex processes 5,000+ multi-page PDF documents monthly with zero manual errors. He is one of the sharpest AI systems architects in the industry.",
      author: "Elena Rostova",
      role: "Chief Technology Officer",
      company: "FinTech ScaleUp Corp",
      stars: 5
    },
    {
      quote: "Our front desk staff was overwhelmed by phone calls. Alex deployed a custom voice AI agent that handles appointment bookings effortlessly. It's like adding 3 full-time staff members overnight.",
      author: "Dr. Marcus Vance",
      role: "Founder & Lead Physician",
      company: "HealthPulse Medical",
      stars: 5
    }
  ];

  return (
    <section style={{ padding: '90px 0', backgroundColor: '#010101', position: 'relative' }}>
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
            Direct feedback from business leaders whose operations are powered by Alex Vance's AI architectures.
          </p>
        </div>

        {/* 3 Testimonial Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '28px' }}>
          {testimonials.map((t, idx) => (
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
                <div style={{ display: 'flex', gap: '4px', marginBottom: '20px' }}>
                  {[...Array(t.stars)].map((_, sIdx) => (
                    <Star key={sIdx} size={16} color="#f59e0b" fill="#f59e0b" />
                  ))}
                </div>

                <p style={{ fontSize: '15px', color: '#e2e8f0', lineHeight: 1.65, fontStyle: 'italic', marginBottom: '28px' }}>
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
