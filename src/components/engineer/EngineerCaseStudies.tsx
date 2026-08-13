'use client';

import React from 'react';
import { TrendingUp, AlertTriangle, CheckCircle2 } from 'lucide-react';

export default function EngineerCaseStudies() {
  const caseStudies = [
    {
      client: "FinTech ScaleUp Corp",
      industry: "Financial Services",
      title: "Automated AP Invoice Extraction & Reconciliation",
      before: {
        time: "45 mins / invoice",
        cost: "$140,000 / year",
        error: "8.4% human error rate"
      },
      after: {
        time: "8 seconds / invoice",
        cost: "$4,200 / year",
        error: "0.1% error rate (auto-flagged)"
      },
      roi: "97% Cost Reduction • 320x Speedup"
    },
    {
      client: "Apex Global Logistics",
      industry: "Supply Chain & Logistics",
      title: "24/7 Multi-Channel Lead Intake & Phone Dispatch",
      before: {
        time: "4.5 hour response lag",
        cost: "35% dropped leads",
        error: "Manual CRM entry gaps"
      },
      after: {
        time: "15 second SLA",
        cost: "98.2% lead conversion",
        error: "Instant HubSpot & SMS sync"
      },
      roi: "+$480,000 New Pipeline Revenue"
    },
    {
      client: "HealthPulse Medical",
      industry: "Healthcare & Dental",
      title: "Conversational Voice AI Appointment Coordinator",
      before: {
        time: "18 min phone hold times",
        cost: "$85,000 front desk overhead",
        error: "25% missed booking calls"
      },
      after: {
        time: "Zero wait time",
        cost: "70% reduced call burden",
        error: "100% calendar accuracy"
      },
      roi: "1,400+ Calls Handled / Day"
    },
    {
      client: "CommerceVibe Retail",
      industry: "E-Commerce & Retail",
      title: "Real-time Review & Refund Sentiment Engine",
      before: {
        time: "24 hour ticket queue",
        cost: "14% negative review churn",
        error: "Unresolved refund disputes"
      },
      after: {
        time: "Instant AI escalation",
        cost: "85% auto-refund resolution",
        error: "4.9★ Customer Satisfaction"
      },
      roi: "10k Reviews / Day Processed"
    },
    {
      client: "LegalPulse Partners",
      industry: "Legal & Corporate Compliance",
      title: "Vector RAG Document Discovery & Analysis",
      before: {
        time: "32 hours paralegal search",
        cost: "$220,000 review budget",
        error: "Overlooked clause details"
      },
      after: {
        time: "45 seconds per query",
        cost: "80% discovery cost drop",
        error: "100% citation accuracy"
      },
      roi: "10M+ Legal Documents Indexed"
    },
    {
      client: "UrbanEstate Realty",
      industry: "Real Estate & Property",
      title: "Instant Property Lead Matcher & SMS Bot",
      before: {
        time: "2 day agent follow-up",
        cost: "40% lost buyer inquiries",
        error: "Stale property listings"
      },
      after: {
        time: "30 second SMS engagement",
        cost: "4x increase in property viewings",
        error: "Automated Calendly bookings"
      },
      roi: "+$1.2M Closed Sales Volume"
    }
  ];

  // Triplicate the 6 case studies to form a seamless infinite marquee track
  const loopCaseStudies = [...caseStudies, ...caseStudies, ...caseStudies];

  return (
    <section style={{ padding: '90px 0', backgroundColor: '#010101', overflow: 'hidden', position: 'relative' }}>
      
      {/* Keyframe animation for continuous horizontal auto loop */}
      <style jsx>{`
        @keyframes marqueeCases {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.333%); }
        }
        .cases-marquee-track {
          display: flex;
          gap: 28px;
          width: max-content;
          animation: marqueeCases 35s linear infinite;
        }
        .cases-marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 56px auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'rgba(52, 211, 153, 0.1)',
            border: '1px solid rgba(52, 211, 153, 0.25)',
            borderRadius: '100px',
            padding: '6px 18px',
            marginBottom: '20px'
          }}>
            <TrendingUp size={15} color="#34d399" />
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#34d399', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              QUANTIFIABLE CLIENT IMPACT
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
            Before vs. After AI Transformation
          </h2>
          <p style={{ fontSize: '16px', color: '#94a3b8', margin: 0 }}>
            Real-world performance metrics measured directly across client enterprise deployments. Hover to pause auto-loop.
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
        <div className="cases-marquee-track">
          {loopCaseStudies.map((cs, idx) => (
            <div
              key={idx}
              style={{
                width: '400px',
                flexShrink: 0,
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '24px',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
              className="hover-card-glow"
            >
              <div>
                <div style={{ fontSize: '12px', fontWeight: 700, color: '#38bdf8', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '8px' }}>
                  {cs.client} • {cs.industry}
                </div>

                <h3 style={{ fontSize: '19px', fontWeight: 800, color: '#ffffff', marginBottom: '20px', lineHeight: 1.3, height: '48px', overflow: 'hidden' }}>
                  {cs.title}
                </h3>

                {/* Before vs After Comparison Box */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '20px' }}>
                  
                  {/* Before */}
                  <div style={{
                    backgroundColor: 'rgba(239, 68, 68, 0.06)',
                    border: '1px solid rgba(239, 68, 68, 0.2)',
                    borderRadius: '14px',
                    padding: '14px'
                  }}>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: '#f87171', display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '8px' }}>
                      <AlertTriangle size={13} /> BEFORE
                    </div>
                    <div style={{ fontSize: '12px', color: '#cbd5e1', marginBottom: '4px' }}>⏱ {cs.before.time}</div>
                    <div style={{ fontSize: '12px', color: '#cbd5e1', marginBottom: '4px' }}>💰 {cs.before.cost}</div>
                    <div style={{ fontSize: '12px', color: '#94a3b8' }}>⚠️ {cs.before.error}</div>
                  </div>

                  {/* After */}
                  <div style={{
                    backgroundColor: 'rgba(52, 211, 153, 0.06)',
                    border: '1px solid rgba(52, 211, 153, 0.2)',
                    borderRadius: '14px',
                    padding: '14px'
                  }}>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: '#34d399', display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '8px' }}>
                      <CheckCircle2 size={13} /> AFTER AI
                    </div>
                    <div style={{ fontSize: '12px', color: '#ffffff', fontWeight: 700, marginBottom: '4px' }}>⚡ {cs.after.time}</div>
                    <div style={{ fontSize: '12px', color: '#ffffff', fontWeight: 700, marginBottom: '4px' }}>💎 {cs.after.cost}</div>
                    <div style={{ fontSize: '12px', color: '#34d399' }}>✓ {cs.after.error}</div>
                  </div>

                </div>
              </div>

              {/* ROI Banner */}
              <div style={{
                backgroundColor: 'rgba(56, 189, 248, 0.08)',
                border: '1px solid rgba(56, 189, 248, 0.2)',
                borderRadius: '12px',
                padding: '10px 14px',
                textAlign: 'center',
                fontSize: '12px',
                fontWeight: 800,
                color: '#38bdf8'
              }}>
                🎯 ROI: {cs.roi}
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
