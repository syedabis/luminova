'use client';

import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="feature-1-wrap background-colour-a section-xl" style={{ backgroundColor: '#010101', paddingTop: '160px', paddingBottom: '80px', position: 'relative', overflow: 'hidden' }}>
      
      {/* Top Text Content Container */}
      <div className="container" style={{ maxWidth: '1080px', margin: '0 auto', textAlign: 'center', padding: '0 24px' }}>
        
        {/* Gradient Outline Badge */}
        <div className="hero-badge" style={{ display: 'inline-block', marginBottom: '32px', opacity: 0 }}>
          <div style={{
            padding: '1px',
            borderRadius: '100px',
            background: 'linear-gradient(90deg, #3b82f6 0%, #a855f7 50%, #ec4899 100%)',
            display: 'inline-flex'
          }}>
            <div style={{
              backgroundColor: '#0f121a',
              borderRadius: '100px',
              padding: '8px 24px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <Sparkles size={15} color="#a855f7" />
              <span style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.08em', color: '#e2e8f0', textTransform: 'uppercase' }}>
                AI & AUTOMATION
              </span>
            </div>
          </div>
        </div>

        {/* Headline */}
        <h1 className="hero-heading" style={{
          fontSize: 'clamp(56px, 8.5vw, 108px)',
          fontWeight: 700,
          lineHeight: 1.04,
          color: '#ffffff',
          letterSpacing: '-0.035em',
          marginBottom: '32px',
          opacity: 0
        }}>
          Align. Automate.<br />
          Accelerate.
        </h1>

        {/* Description */}
        <p className="hero-desc" style={{
          fontSize: 'clamp(18px, 2.4vw, 24px)',
          lineHeight: 1.55,
          color: '#94a3b8',
          maxWidth: '840px',
          margin: '0 auto 16px auto',
          fontWeight: 400,
          opacity: 0
        }}>
          We help B2B service teams streamline operations and grow revenue through AI-powered automation — reducing manual tasks, saving time and elevating the customer experience.
        </p>

      </div>

      {/* Video Container */}
      <div className="hero-video-container" style={{
        width: '100%',
        maxWidth: '1280px',
        margin: '0 auto',
        position: 'relative',
        borderRadius: '24px',
        padding: '0 24px',
        opacity: 0
      }}>
        <div style={{
          position: 'relative',
          borderRadius: '24px',
          overflow: 'hidden',
          boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
          border: '1px solid rgba(255, 255, 255, 0.08)'
        }}>
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              transform: 'scale(1.12) translateY(-4.5%)',
              transformOrigin: 'center top'
            }}
          >
            <source src="/images/asset_12_file.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

    </section>
  );
}

