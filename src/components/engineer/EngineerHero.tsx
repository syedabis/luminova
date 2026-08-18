'use client';

import React from 'react';
import { Sparkles, Terminal, Code2, Cpu, ShieldCheck, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';

export default function EngineerHero() {
  return (
    <section style={{
      paddingTop: '160px',
      paddingBottom: '100px',
      backgroundColor: '#010101',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      {/* Radial Glows matching Homepage UI */}
      <div style={{
        position: 'absolute',
        top: '15%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '1000px',
        height: '450px',
        background: 'radial-gradient(circle, rgba(56, 189, 248, 0.14) 0%, rgba(192, 132, 252, 0.08) 50%, rgba(0,0,0,0) 75%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '60px', alignItems: 'center' }} className="hero-engineer-grid">
          <style jsx>{`
            @media (min-width: 992px) {
              .hero-engineer-grid {
                grid-template-columns: 1.2fr 0.8fr !important;
              }
            }
          `}</style>

          {/* Left Column: Bio & Intro */}
          <div>
            
            {/* Status Pill Badge */}
            <div className="hero-badge" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(52, 211, 153, 0.1)',
              border: '1px solid rgba(52, 211, 153, 0.3)',
              borderRadius: '100px',
              padding: '6px 18px',
              marginBottom: '28px'
            }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#34d399', boxShadow: '0 0 10px #34d399' }} />
              <span style={{ fontSize: '12px', fontWeight: 700, color: '#34d399', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                LEAD AI ARCHITECT @ FORMIQA AGENCY
              </span>
            </div>

            {/* Engineer Name & Headline */}
            <h1 className="hero-heading" style={{
              fontSize: 'clamp(40px, 5.5vw, 64px)',
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: '-0.035em',
              lineHeight: 1.08,
              marginBottom: '20px'
            }}>
              Hi, I'm <span style={{
                background: 'linear-gradient(135deg, #38bdf8 0%, #c084fc 50%, #34d399 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>Syed Abis</span>. <br />
              I Build Autonomous AI Systems.
            </h1>

            <p className="hero-desc" style={{
              fontSize: '18px',
              color: '#94a3b8',
              lineHeight: 1.6,
              maxWidth: '620px',
              marginBottom: '36px'
            }}>
              Specialized in LLM Multi-Agent Orchestration, High-Throughput RAG Architectures, and Custom API Automation Workflows for enterprise clients worldwide.
            </p>

            {/* CTA Action Buttons */}
            <div className="feature-1-wrap" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '48px' }}>
              <a
                href="#projects"
                className="hero-btn"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: '#38bdf8',
                  color: '#010101',
                  padding: '14px 28px',
                  borderRadius: '100px',
                  fontSize: '15px',
                  fontWeight: 700,
                  textDecoration: 'none',
                  boxShadow: '0 8px 25px rgba(56, 189, 248, 0.3)',
                  transition: 'all 0.3s ease'
                }}
              >
                View Deployed Systems <ArrowUpRight size={18} />
              </a>

              <a
                href="#engineer-contact"
                className="hero-btn"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  color: '#ffffff',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  padding: '14px 28px',
                  borderRadius: '100px',
                  fontSize: '15px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}
              >
                Book 1-on-1 Audit Call
              </a>
            </div>

            {/* Stats Bar */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '20px',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              paddingTop: '32px'
            }}>
              <div>
                <div style={{ fontSize: '28px', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em' }}>45+</div>
                <div style={{ fontSize: '13px', color: '#94a3b8', marginTop: '4px' }}>Enterprise AI Agents</div>
              </div>
              <div>
                <div style={{ fontSize: '28px', fontWeight: 800, color: '#c084fc', letterSpacing: '-0.02em' }}>12M+</div>
                <div style={{ fontSize: '13px', color: '#94a3b8', marginTop: '4px' }}>Tokens / Day</div>
              </div>
              <div>
                <div style={{ fontSize: '28px', fontWeight: 800, color: '#34d399', letterSpacing: '-0.02em' }}>99.9%</div>
                <div style={{ fontSize: '13px', color: '#94a3b8', marginTop: '4px' }}>Pipeline Uptime</div>
              </div>
            </div>

          </div>

          {/* Right Column: Code & Terminal Spec Card */}
          <div className="hero-visual" style={{
            backgroundColor: '#0a0d14',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '24px',
            padding: '32px',
            boxShadow: '0 25px 60px rgba(0,0,0,0.6)',
            position: 'relative'
          }}>
            {/* Terminal Header Bar */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#f59e0b' }} />
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#10b981' }} />
                <span style={{ fontSize: '13px', color: '#64748b', marginLeft: '8px', fontFamily: 'monospace' }}>
                  syed_abis.config.ts
                </span>
              </div>
              <Terminal size={16} color="#38bdf8" />
            </div>

            {/* Code Snippet Display */}
            <div style={{ fontFamily: 'monospace', fontSize: '13px', lineHeight: 1.7, color: '#cbd5e1' }}>
              <div><span style={{ color: '#c084fc' }}>const</span> <span style={{ color: '#38bdf8' }}>engineer</span> = &#123;</div>
              <div style={{ paddingLeft: '20px' }}><span style={{ color: '#94a3b8' }}>name:</span> <span style={{ color: '#34d399' }}>'Syed Abis'</span>,</div>
              <div style={{ paddingLeft: '20px' }}><span style={{ color: '#94a3b8' }}>role:</span> <span style={{ color: '#34d399' }}>'Principal AI & Automation Architect'</span>,</div>
              <div style={{ paddingLeft: '20px' }}><span style={{ color: '#94a3b8' }}>agency:</span> <span style={{ color: '#34d399' }}>'Formiqa AI'</span>,</div>
              <div style={{ paddingLeft: '20px' }}><span style={{ color: '#94a3b8' }}>stack:</span> [</div>
              <div style={{ paddingLeft: '40px', color: '#f59e0b' }}>'OpenAI GPT-4o', 'Claude 3.5', 'LangChain',</div>
              <div style={{ paddingLeft: '40px', color: '#f59e0b' }}>'Pinecone', 'Python FastAPI', 'Make/n8n'</div>
              <div style={{ paddingLeft: '20px' }}>],</div>
              <div style={{ paddingLeft: '20px' }}><span style={{ color: '#94a3b8' }}>specialization:</span> <span style={{ color: '#34d399' }}>'Zero-Latency Workflows & Autonomous Agents'</span></div>
              <div>&#125;;</div>

              <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px dashed rgba(255,255,255,0.1)', color: '#34d399', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Sparkles size={14} />
                <span>SYSTEM STATUS: 100% ONLINE & READY</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
