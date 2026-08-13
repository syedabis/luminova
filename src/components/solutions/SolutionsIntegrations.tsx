'use client';

import React from 'react';
import { Link as LinkIcon, Check } from 'lucide-react';

export default function SolutionsIntegrations() {
  const integrationCategories = [
    {
      title: "AI Models & Vector Engine",
      tools: ["OpenAI GPT-4o", "Claude 3.5 Sonnet", "Llama 3", "Pinecone Vector DB", "LangChain"]
    },
    {
      title: "Automation & Middleware",
      tools: ["Make.com", "Zapier", "n8n Workflows", "Custom Webhooks", "Python FastAPI"]
    },
    {
      title: "CRM & Sales Platforms",
      tools: ["HubSpot", "Salesforce", "Pipedrive", "Calendly", "GoHighLevel"]
    },
    {
      title: "Finance & Operations",
      tools: ["Stripe", "QuickBooks", "Xero", "Plaid", "DocuSign"]
    },
    {
      title: "Customer Support & Voice",
      tools: ["Retell AI", "Vapi", "Twilio API", "Zendesk", "Intercom"]
    },
    {
      title: "Databases & Productivity",
      tools: ["Supabase", "PostgreSQL", "Notion API", "Slack API", "Google Workspace"]
    }
  ];

  // Repeat items 3 times for a smooth, seamless infinite loop
  const loopCategories = [...integrationCategories, ...integrationCategories, ...integrationCategories];

  return (
    <section id="integrations" className="section-xl" style={{ padding: '90px 0', backgroundColor: '#010101', overflow: 'hidden' }}>
      
      {/* Keyframe animation for continuous horizontal auto loop */}
      <style jsx>{`
        @keyframes marqueeContinuous {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.333%); }
        }
        .cards-marquee-track {
          display: flex;
          gap: 24px;
          width: max-content;
          animation: marqueeContinuous 32s linear infinite;
        }
        .cards-marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 56px auto' }}>
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
            <LinkIcon size={15} color="#38bdf8" />
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#38bdf8', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              INTEGRATION ECOSYSTEM
            </span>
          </div>

          <h2 style={{
            fontSize: 'clamp(36px, 5vw, 56px)',
            fontWeight: 800,
            color: '#ffffff',
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            marginBottom: '20px'
          }}>
            Connect Seamlessly to Your Existing Software Stack
          </h2>
          <p style={{
            fontSize: '17px',
            color: '#94a3b8',
            lineHeight: 1.6,
            margin: 0
          }}>
            No need to replace your existing tools. Our AI solutions integrate directly into your CRMs, ERPs, databases, and communication channels.
          </p>
        </div>

      </div>

      {/* Full Width Infinite Horizontal Loop Container */}
      <div style={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        maskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)'
      }}>
        
        {/* Single Horizontal Continuous Auto Loop Track */}
        <div className="cards-marquee-track">
          {loopCategories.map((cat, idx) => (
            <div
              key={idx}
              style={{
                width: '360px',
                flexShrink: 0,
                backgroundColor: 'rgba(255, 255, 255, 0.025)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '20px',
                padding: '32px',
                transition: 'all 0.3s ease'
              }}
              className="hover-card-glow"
            >
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#ffffff', marginBottom: '20px', letterSpacing: '-0.01em' }}>
                {cat.title}
              </h3>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {cat.tools.map((tool, tIdx) => (
                  <div
                    key={tIdx}
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#e2e8f0',
                      fontSize: '13px',
                      fontWeight: 600,
                      padding: '8px 14px',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                    className="tool-badge-item"
                  >
                    <Check size={13} color="#34d399" />
                    <span>{tool}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
