'use client';

import React from 'react';
import { Sparkles, Building2, Briefcase, Landmark, Stethoscope, Home, Users, Laptop, ArrowRight } from 'lucide-react';

interface IndustriesHeroProps {
  onSelectCategory?: (category: string) => void;
  activeCategory?: string;
}

export default function IndustriesHero({ onSelectCategory, activeCategory }: IndustriesHeroProps) {
  const categories = [
    { id: 'all', label: 'All Industries', icon: <Building2 size={16} /> },
    { id: 'professional-services', label: 'Professional Services', icon: <Briefcase size={16} /> },
    { id: 'finance', label: 'Financial Services', icon: <Landmark size={16} /> },
    { id: 'healthcare', label: 'Healthcare & Life Sciences', icon: <Stethoscope size={16} /> },
    { id: 'real-estate', label: 'Real Estate & Property', icon: <Home size={16} /> },
    { id: 'recruitment', label: 'Recruitment & HR', icon: <Users size={16} /> },
    { id: 'technology', label: 'Technology & SaaS', icon: <Laptop size={16} /> },
  ];

  const stats = [
    { value: '85%', label: 'Average Task Reduction', highlight: 'Across 12+ Verticals' },
    { value: '4.2x', label: 'Faster Client Onboarding', highlight: 'Automated Workflows' },
    { value: '99.9%', label: 'Data Accuracy & Security', highlight: 'SOC2 & HIPAA Compliant' },
    { value: '$180k+', label: 'Avg Annual Savings', highlight: 'Per Enterprise Team' },
  ];

  return (
    <section className="section-xl" style={{ backgroundColor: '#010101', paddingTop: '150px', paddingBottom: '70px', position: 'relative', overflow: 'hidden' }}>
      
      {/* Background Subtle Gradient Glow */}
      <div style={{
        position: 'absolute',
        top: '0%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '800px',
        height: '450px',
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, rgba(168, 85, 247, 0.08) 40%, rgba(0,0,0,0) 70%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        
        {/* Top Text Header */}
        <div style={{ textAlign: 'center', maxWidth: '920px', margin: '0 auto 48px auto' }}>
          
          {/* Badge */}
          <div className="hero-badge" style={{ display: 'inline-block', marginBottom: '28px' }}>
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
                <Sparkles size={15} color="#3b82f6" />
                <span style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.08em', color: '#e2e8f0', textTransform: 'uppercase' }}>
                  INDUSTRY-SPECIFIC AUTOMATION
                </span>
              </div>
            </div>
          </div>

          {/* Headline */}
          <h1 className="hero-heading" style={{
            fontSize: 'clamp(44px, 7.5vw, 84px)',
            fontWeight: 800,
            lineHeight: 1.06,
            color: '#ffffff',
            letterSpacing: '-0.035em',
            marginBottom: '28px'
          }}>
            Tailored AI Automations for<br />
            <span style={{
              background: 'linear-gradient(90deg, #60a5fa 0%, #c084fc 50%, #f472b6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              High-Growth Industries
            </span>
          </h1>

          {/* Subheading */}
          <p className="hero-desc" style={{
            fontSize: 'clamp(17px, 2.2vw, 22px)',
            lineHeight: 1.6,
            color: '#94a3b8',
            maxWidth: '820px',
            margin: '0 auto',
            fontWeight: 400
          }}>
            We build domain-specific AI workflows and autonomous agent networks customized for the unique operational challenges, compliance standards, and tech stacks of your industry.
          </p>

        </div>

        {/* Quick Filter Pills */}
        <div className="feature-1-wrap" style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '12px',
          marginBottom: '56px'
        }}>
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory && onSelectCategory(cat.id)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: isActive ? 'rgba(59, 130, 246, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                  border: isActive ? '1px solid rgba(59, 130, 246, 0.6)' : '1px solid rgba(255, 255, 255, 0.1)',
                  color: isActive ? '#ffffff' : '#94a3b8',
                  padding: '10px 20px',
                  borderRadius: '100px',
                  fontSize: '14px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: isActive ? '0 0 20px rgba(59, 130, 246, 0.3)' : 'none'
                }}
              >
                {cat.icon}
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Key Metrics / Highlights Bar */}
        <div className="hero-visual" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '20px',
          backgroundColor: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '20px',
          padding: '32px 28px'
        }}>
          {stats.map((stat, idx) => (
            <div key={idx} style={{ textAlign: 'center', padding: '12px' }}>
              <div style={{
                fontSize: 'clamp(36px, 4vw, 48px)',
                fontWeight: 800,
                color: '#ffffff',
                lineHeight: 1,
                marginBottom: '8px',
                letterSpacing: '-0.02em',
                background: 'linear-gradient(180deg, #ffffff 0%, #cbd5e1 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '15px', fontWeight: 700, color: '#e2e8f0', marginBottom: '4px' }}>
                {stat.label}
              </div>
              <div style={{ fontSize: '12px', color: '#64748b', fontWeight: 500 }}>
                {stat.highlight}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
