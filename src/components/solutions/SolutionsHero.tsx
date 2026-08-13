'use client';

import React from 'react';
import { Sparkles, Zap, Target, RefreshCw, DollarSign, HeartHandshake, Layers, ArrowRight } from 'lucide-react';

interface SolutionsHeroProps {
  onSelectCategory?: (category: string) => void;
  activeCategory?: string;
}

export default function SolutionsHero({ onSelectCategory, activeCategory }: SolutionsHeroProps) {
  const categories = [
    { id: 'all', label: 'All Solutions', icon: <Layers size={16} /> },
    { id: 'sales', label: 'Sales Automations', icon: <Target size={16} /> },
    { id: 'marketing', label: 'Marketing Journeys', icon: <Zap size={16} /> },
    { id: 'operations', label: 'Operations Pipelines', icon: <RefreshCw size={16} /> },
    { id: 'finance', label: 'Finance & Revenue', icon: <DollarSign size={16} /> },
    { id: 'cx', label: 'Customer Experience', icon: <HeartHandshake size={16} /> },
  ];

  const stats = [
    { value: '10x', label: 'Faster Lead Response', highlight: 'Sub-60 Second Intake' },
    { value: '70%', label: 'Support Ticket Deflection', highlight: 'AI-Powered Resolution' },
    { value: '100%', label: 'Error-Free Data Sync', highlight: 'Seamless CRM & ERP Sync' },
    { value: '24/7', label: 'Autonomous Operations', highlight: 'Zero Downtime Workflows' },
  ];

  return (
    <section className="section-xl" style={{ backgroundColor: '#010101', paddingTop: '150px', paddingBottom: '70px', position: 'relative', overflow: 'hidden' }}>
      
      {/* Background Radial Glow */}
      <div style={{
        position: 'absolute',
        top: '0%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '850px',
        height: '450px',
        background: 'radial-gradient(circle, rgba(168, 85, 247, 0.14) 0%, rgba(59, 130, 246, 0.08) 45%, rgba(0,0,0,0) 70%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        
        {/* Top Text Header */}
        <div style={{ textAlign: 'center', maxWidth: '940px', margin: '0 auto 48px auto' }}>
          
          {/* Pill Badge */}
          <div style={{ display: 'inline-block', marginBottom: '28px' }}>
            <div style={{
              padding: '1px',
              borderRadius: '100px',
              background: 'linear-gradient(90deg, #a855f7 0%, #3b82f6 50%, #10b981 100%)',
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
                <Sparkles size={15} color="#c084fc" />
                <span style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.08em', color: '#e2e8f0', textTransform: 'uppercase' }}>
                  END-TO-END AUTOMATION SOLUTIONS
                </span>
              </div>
            </div>
          </div>

          {/* Headline */}
          <h1 style={{
            fontSize: 'clamp(44px, 7.5vw, 84px)',
            fontWeight: 800,
            lineHeight: 1.06,
            color: '#ffffff',
            letterSpacing: '-0.035em',
            marginBottom: '28px'
          }}>
            AI-Powered Solutions<br />
            <span style={{
              background: 'linear-gradient(90deg, #c084fc 0%, #60a5fa 50%, #34d399 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Engineered for Enterprise Scale
            </span>
          </h1>

          {/* Subheading */}
          <p style={{
            fontSize: 'clamp(17px, 2.2vw, 22px)',
            lineHeight: 1.6,
            color: '#94a3b8',
            maxWidth: '840px',
            margin: '0 auto',
            fontWeight: 400
          }}>
            Turn complex manual tasks into self-sustaining, intelligent workflows across sales, marketing, operations, finance, and customer experience.
          </p>

        </div>

        {/* Quick Filter Pills */}
        <div style={{
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
                  backgroundColor: isActive ? 'rgba(168, 85, 247, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                  border: isActive ? '1px solid rgba(168, 85, 247, 0.6)' : '1px solid rgba(255, 255, 255, 0.1)',
                  color: isActive ? '#ffffff' : '#94a3b8',
                  padding: '10px 20px',
                  borderRadius: '100px',
                  fontSize: '14px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: isActive ? '0 0 20px rgba(168, 85, 247, 0.3)' : 'none'
                }}
              >
                {cat.icon}
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Stats Grid */}
        <div style={{
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
