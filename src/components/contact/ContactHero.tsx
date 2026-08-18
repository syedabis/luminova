'use client';

import React from 'react';
import { Mail, MessageSquare, Clock, ShieldCheck, Zap, Sparkles, PhoneCall } from 'lucide-react';

export default function ContactHero() {
  return (
    <section style={{
      paddingTop: '160px',
      paddingBottom: '80px',
      backgroundColor: '#06080d',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      {/* Background Radial Glows matching Homepage UI */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '1100px',
        height: '450px',
        background: 'radial-gradient(circle, rgba(56, 189, 248, 0.12) 0%, rgba(168, 85, 247, 0.08) 45%, rgba(0,0,0,0) 70%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        
        {/* Top Badge */}
        <div className="hero-badge" style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'rgba(56, 189, 248, 0.1)',
            border: '1px solid rgba(56, 189, 248, 0.25)',
            borderRadius: '100px',
            padding: '6px 20px'
          }}>
            <MessageSquare size={15} color="#38bdf8" />
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#38bdf8', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              GET IN TOUCH & START AUTOMATING
            </span>
          </div>
        </div>

        {/* Hero Title & Subtitle */}
        <div style={{ textAlign: 'center', maxWidth: '880px', margin: '0 auto 48px auto' }}>
          <h1 className="hero-heading" style={{
            fontSize: 'clamp(40px, 6vw, 68px)',
            fontWeight: 800,
            color: '#ffffff',
            letterSpacing: '-0.035em',
            lineHeight: 1.05,
            marginBottom: '24px'
          }}>
            Let's Engineer Your <br />
            <span style={{
              background: 'linear-gradient(135deg, #38bdf8 0%, #c084fc 50%, #34d399 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Autonomous AI Infrastructure
            </span>
          </h1>

          <p className="hero-desc" style={{
            fontSize: '18px',
            color: '#94a3b8',
            lineHeight: 1.6,
            maxWidth: '720px',
            margin: '0 auto'
          }}>
            Have a custom workflow to automate, a legacy CRM to modernize, or an enterprise AI agent pilot in mind? Connect directly with our lead automation architects.
          </p>
        </div>

        {/* Quick Response Highlights Bar */}
        <div className="hero-visual" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '20px',
          maxWidth: '1050px',
          margin: '0 auto'
        }}>
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '16px',
            padding: '20px 24px',
            display: 'flex',
            alignItems: 'center',
            gap: '16px'
          }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              backgroundColor: 'rgba(56, 189, 248, 0.15)',
              border: '1px solid rgba(56, 189, 248, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <Clock size={22} color="#38bdf8" />
            </div>
            <div>
              <div style={{ fontSize: '16px', fontWeight: 800, color: '#ffffff' }}>&lt; 15-Min Response</div>
              <div style={{ fontSize: '13px', color: '#94a3b8' }}>Dedicated SLA on working hours</div>
            </div>
          </div>

          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '16px',
            padding: '20px 24px',
            display: 'flex',
            alignItems: 'center',
            gap: '16px'
          }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              backgroundColor: 'rgba(168, 85, 247, 0.15)',
              border: '1px solid rgba(168, 85, 247, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <ShieldCheck size={22} color="#c084fc" />
            </div>
            <div>
              <div style={{ fontSize: '16px', fontWeight: 800, color: '#ffffff' }}>Strict Mutual NDA</div>
              <div style={{ fontSize: '13px', color: '#94a3b8' }}>SOC-2 & GDPR compliant handling</div>
            </div>
          </div>

          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '16px',
            padding: '20px 24px',
            display: 'flex',
            alignItems: 'center',
            gap: '16px'
          }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              backgroundColor: 'rgba(52, 211, 153, 0.15)',
              border: '1px solid rgba(52, 211, 153, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <Zap size={22} color="#34d399" />
            </div>
            <div>
              <div style={{ fontSize: '16px', fontWeight: 800, color: '#ffffff' }}>Free Audit Call</div>
              <div style={{ fontSize: '13px', color: '#94a3b8' }}>Zero-risk 30-min discovery session</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
