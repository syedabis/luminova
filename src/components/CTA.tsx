'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contact" className="section-xl" style={{ padding: '120px 0', backgroundColor: '#0c0e12', position: 'relative', overflow: 'hidden' }}>
      
      {/* Background Graphic Shape */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', opacity: 0.25, zIndex: 0 }}>
        <img
          src="/images/asset_51_684fab152a79b702fed055b9_Shape_20_232_20_Dark_20theme_.png"
          alt="CTA background graphic"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '960px', margin: '0 auto' }}>
        
        <div style={{
          backgroundColor: 'rgba(20, 24, 33, 0.8)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          borderRadius: '32px',
          padding: '64px 48px',
          textAlign: 'center',
          boxShadow: '0 30px 60px rgba(0,0,0,0.5)'
        }}>
          
          <span style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.08em', color: '#60a5fa', textTransform: 'uppercase', marginBottom: '16px', display: 'block' }}>
            THE FORMIQA APPROACH
          </span>

          <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 40px)', fontWeight: 700, color: '#ffffff', lineHeight: 1.3, marginBottom: '24px' }}>
            Inspired by intelligent systems, collaboration & efficiency.
          </h2>

          <p style={{ fontSize: '17px', color: '#cbd5e1', lineHeight: 1.7, marginBottom: '24px', maxWidth: '780px', margin: '0 auto 24px auto' }}>
            Formiqa is inspired by the Latin word <i>formica</i>, meaning ant — a symbol of intelligent systems, collaboration and efficiency. The name reflects our focus on building seamless, scalable automations that power complex operations behind the scenes.
          </p>

          <p style={{ fontSize: '15px', color: '#94a3b8', lineHeight: 1.6, marginBottom: '40px', maxWidth: '720px', margin: '0 auto 40px auto' }}>
            Whether you’re considering building or migrating, our team can guide or answer any questions you might have. Click below to request an appointment.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Link
              href="mailto:hello@formiqa.io"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                backgroundColor: '#ffffff',
                color: '#0c0e12',
                padding: '16px 36px',
                borderRadius: '100px',
                fontSize: '16px',
                fontWeight: 700,
                textDecoration: 'none',
                boxShadow: '0 10px 25px rgba(255,255,255,0.2)',
                transition: 'all 0.2s ease'
              }}
            >
              Get in Touch <ArrowUpRight size={20} />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
