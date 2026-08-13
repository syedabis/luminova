'use client';

import React from 'react';
import { Layers } from 'lucide-react';

export default function TechIntegrations() {
  const integrations = [
    { name: "HubSpot CRM", cat: "Sales & Marketing", color: "#ff7a59" },
    { name: "Salesforce Cloud", cat: "Enterprise CRM", color: "#00a1e0" },
    { name: "QuickBooks Online", cat: "Accounting ERP", color: "#2ca01c" },
    { name: "Shopify Plus", cat: "E-Commerce", color: "#95bf47" },
    { name: "Twilio Telephony", cat: "Voice & SMS", color: "#f22f46" },
    { name: "Pinecone Vector", cat: "Knowledge Base", color: "#38bdf8" },
    { name: "Supabase PgVector", cat: "PostgreSQL DB", color: "#3ecf8e" },
    { name: "Stripe Billing", cat: "Payments API", color: "#635bff" },
    { name: "Slack Enterprise", cat: "Messaging Bot", color: "#e01e5a" },
    { name: "Workday HCM", cat: "HR & Recruitment", color: "#005cb9" },
    { name: "Make.com & n8n", cat: "Workflow Automation", color: "#c084fc" },
    { name: "AWS Bedrock", cat: "Cloud AI Infrastructure", color: "#ff9900" }
  ];

  // Triplicate array for smooth continuous auto loop
  const loopIntegrations = [...integrations, ...integrations, ...integrations];

  return (
    <section style={{ padding: '90px 0', backgroundColor: '#06080d', overflow: 'hidden', position: 'relative' }}>
      
      {/* Keyframe animation for continuous horizontal auto loop */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marqueeIntegrations {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.333%); }
        }
        .tech-marquee-track {
          display: flex;
          gap: 24px;
          width: max-content;
          animation: marqueeIntegrations 35s linear infinite;
        }
        .tech-marquee-track:hover {
          animation-play-state: paused;
        }
      ` }} />

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
            <Layers size={15} color="#38bdf8" />
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#38bdf8', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              NATIVE API CONNECTORS & MIDDLEWARE
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
            Seamless Enterprise Software Sync
          </h2>
          <p style={{ fontSize: '16px', color: '#94a3b8', margin: 0 }}>
            Connect custom AI agents into your existing software stack without replacing legacy CRMs or ERPs.
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
        <div className="tech-marquee-track">
          {loopIntegrations.map((item, idx) => (
            <div
              key={idx}
              style={{
                width: '260px',
                flexShrink: 0,
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '16px',
                padding: '20px 24px',
                display: 'flex',
                alignItems: 'center',
                gap: '14px'
              }}
              className="hover-card-glow"
            >
              <div style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: item.color,
                boxShadow: `0 0 10px ${item.color}`
              }} />
              <div>
                <div style={{ fontSize: '15px', fontWeight: 800, color: '#ffffff' }}>
                  {item.name}
                </div>
                <div style={{ fontSize: '12px', color: '#94a3b8', marginTop: '2px' }}>
                  {item.cat}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
