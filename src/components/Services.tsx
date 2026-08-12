'use client';

import React from 'react';
import { ArrowRight, Bot, Cpu, Database, Eye, Users, PhoneCall, Check } from 'lucide-react';

export default function Services() {
  const projects = [
    {
      category: "ENTERPRISE AUTOMATION",
      badge: "High Impact",
      badgeBg: "rgba(16, 185, 129, 0.15)",
      badgeColor: "#10b981",
      badgeBorder: "rgba(16, 185, 129, 0.3)",
      icon: <Cpu size={18} color="#10b981" />,
      title: "Autonomous Lead Intake & CRM Agent",
      desc: "Instantly qualify inbound leads, schedule calendar bookings, generate custom proposals, and update CRM records in real-time.",
      tags: ["Make.com", "OpenAI API", "HubSpot", "Calendly"],
      footerTag: "10x Response Speed",
      footerTagColor: "#10b981"
    },
    {
      category: "FULL-STACK AI APPLICATIONS",
      badge: "Turnkey SaaS",
      badgeBg: "rgba(245, 158, 11, 0.15)",
      badgeColor: "#fbbf24",
      badgeBorder: "rgba(245, 158, 11, 0.3)",
      icon: <Database size={18} color="#fbbf24" />,
      title: "Custom B2B AI SaaS Platform",
      desc: "End-to-end custom AI SaaS application featuring secure authentication, multi-tenant database architecture, Stripe billing, and custom LLM workflows.",
      tags: ["Next.js", "Supabase", "Tailwind", "Stripe"],
      footerTag: "Enterprise Ready",
      footerTagColor: "#34d399"
    },
    {
      category: "PROPRIETARY LLMS",
      badge: "Custom RAG",
      badgeBg: "rgba(236, 72, 153, 0.15)",
      badgeColor: "#f472b6",
      badgeBorder: "rgba(236, 72, 153, 0.3)",
      icon: <Bot size={18} color="#f472b6" />,
      title: "Fine-Tuned Enterprise Knowledge Bot",
      desc: "Train private open-source LLMs on your company internal docs, knowledge base, and SOPs with strict data privacy and zero external leaks.",
      tags: ["Llama 3", "Vector DB", "LangChain", "FastAPI"],
      footerTag: "100% Data Privacy",
      footerTagColor: "#34d399"
    },
    {
      category: "COMPUTER VISION",
      badge: "Edge AI",
      badgeBg: "rgba(59, 130, 246, 0.15)",
      badgeColor: "#60a5fa",
      badgeBorder: "rgba(59, 130, 246, 0.3)",
      icon: <Eye size={18} color="#60a5fa" />,
      title: "AI Quality Control Defect Inspector",
      desc: "Deploy real-time computer vision models on edge devices to automatically detect manufacturing defects, catalog anomalies, and trigger instant alerts.",
      tags: ["YOLOv8", "OpenCV", "PyTorch", "FastAPI"],
      footerTag: "99.8% Precision",
      footerTagColor: "#34d399"
    },
    {
      category: "MULTI-AGENT SYSTEMS",
      badge: "Autonomous Crew",
      badgeBg: "rgba(20, 184, 166, 0.15)",
      badgeColor: "#2dd4bf",
      badgeBorder: "rgba(20, 184, 166, 0.3)",
      icon: <Users size={18} color="#2dd4bf" />,
      title: "Autonomous Market Intelligence Crew",
      desc: "Deploy specialized teams of AI agents (Research, Analysis, Copywriting) that conduct competitor audits, synthesize data, and draft executive briefings.",
      tags: ["CrewAI", "Tavily API", "Claude 3.5", "Python"],
      footerTag: "24/7 Autopilot",
      footerTagColor: "#34d399"
    },
    {
      category: "VOICE & CUSTOMER AGENTS",
      badge: "Voice AI",
      badgeBg: "rgba(168, 85, 247, 0.15)",
      badgeColor: "#c084fc",
      badgeBorder: "rgba(168, 85, 247, 0.3)",
      icon: <PhoneCall size={18} color="#c084fc" />,
      title: "AI Conversational Voice Assistant",
      desc: "Human-like conversational AI voice bots for 24/7 customer service, appointment scheduling, and instant phone call resolution.",
      tags: ["Retell AI", "Vapi", "Twilio", "OpenAI"],
      footerTag: "Instant Call Resolution",
      footerTagColor: "#34d399"
    }
  ];

  // Repeat array for seamless infinite marquee loop
  const loopProjects = [...projects, ...projects, ...projects];

  return (
    <section id="services" className="section-xl" style={{ padding: '100px 0', backgroundColor: '#010101', overflow: 'hidden' }}>
      
      {/* CSS Keyframes for Single Row Continuous Horizontal Marquee Loop */}
      <style jsx>{`
        @keyframes singleRowMarquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.333%); }
        }
        .single-row-marquee-track {
          display: flex;
          gap: 20px;
          width: max-content;
          animation: singleRowMarquee 40s linear infinite;
        }
        .single-row-marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Top Header Block */}
        <div style={{ textAlign: 'center', maxWidth: '860px', margin: '0 auto 56px auto' }}>
          
          {/* Top Pill Badge */}
          <div style={{ display: 'inline-block', marginBottom: '24px' }}>
            <div style={{
              backgroundColor: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              borderRadius: '100px',
              padding: '6px 20px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <span style={{
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.08em',
                color: '#10b981',
                textTransform: 'uppercase'
              }}>
                PRODUCTION PORTFOLIO • AI AGENCY CAPABILITIES
              </span>
            </div>
          </div>

          {/* Main Title */}
          <h2 style={{
            fontSize: 'clamp(36px, 5.5vw, 64px)',
            fontWeight: 800,
            lineHeight: 1.1,
            color: '#ffffff',
            letterSpacing: '-0.03em',
            marginBottom: '20px'
          }}>
            Production AI Solutions We<br />
            <span style={{ color: '#10b981' }}>Build & Deploy</span>
          </h2>

          {/* Subheading Description */}
          <p style={{
            fontSize: 'clamp(15px, 1.8vw, 18px)',
            lineHeight: 1.6,
            color: '#94a3b8',
            maxWidth: '780px',
            margin: '0 auto',
            fontWeight: 400
          }}>
            Enterprise-grade AI systems, custom workflows, and autonomous agents engineered to scale your operations and drive revenue.
          </p>

        </div>

      </div>

      {/* Single Row Continuous Auto Horizontal Loop Container */}
      <div style={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        marginBottom: '56px',
        maskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)'
      }}>
        <div className="single-row-marquee-track">
          {loopProjects.map((item, idx) => (
            <div
              key={idx}
              style={{
                width: '380px',
                flexShrink: 0,
                backgroundColor: 'rgba(255, 255, 255, 0.025)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '16px',
                padding: '28px 24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'border-color 0.3s ease, transform 0.3s ease',
                cursor: 'pointer',
                minHeight: '380px'
              }}
              className="hover-card-glow"
            >
              {/* Card Top: Category & Badge */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', gap: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {item.icon}
                    <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.06em', color: '#64748b', textTransform: 'uppercase' }}>
                      {item.category}
                    </span>
                  </div>

                  <span style={{
                    fontSize: '11px',
                    fontWeight: 600,
                    backgroundColor: item.badgeBg,
                    color: item.badgeColor,
                    border: `1px solid ${item.badgeBorder}`,
                    padding: '3px 10px',
                    borderRadius: '100px',
                    whiteSpace: 'nowrap'
                  }}>
                    {item.badge}
                  </span>
                </div>

                {/* Card Title */}
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  color: '#ffffff',
                  marginBottom: '12px',
                  lineHeight: 1.3
                }}>
                  {item.title}
                </h3>

                {/* Card Description */}
                <p style={{
                  fontSize: '13px',
                  color: '#94a3b8',
                  lineHeight: 1.6,
                  marginBottom: '24px',
                  fontWeight: 400
                }}>
                  {item.desc}
                </p>
              </div>

              {/* Card Bottom: Tech Stack Tags & Footer Meta */}
              <div>
                {/* Tech Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        color: '#cbd5e1',
                        fontSize: '11px',
                        padding: '3px 8px',
                        borderRadius: '6px',
                        fontWeight: 500
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer Divider */}
                <div style={{
                  borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                  paddingTop: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Check size={14} color={item.footerTagColor} />
                    <span style={{ fontSize: '12px', color: item.footerTagColor, fontWeight: 600 }}>
                      {item.footerTag}
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#94a3b8', fontSize: '12px', fontWeight: 600 }}>
                    View Solution <ArrowRight size={13} />
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA Button */}
      <div style={{ textAlign: 'center' }}>
        <a
          href="#contact"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            backgroundColor: '#10b981',
            color: '#010101',
            padding: '16px 40px',
            borderRadius: '100px',
            fontSize: '16px',
            fontWeight: 700,
            textDecoration: 'none',
            boxShadow: '0 0 30px rgba(16, 185, 129, 0.4)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease'
          }}
        >
          Get Started with Custom AI Solutions <ArrowRight size={18} />
        </a>
      </div>

    </section>
  );
}
