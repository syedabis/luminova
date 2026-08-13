'use client';

import React from 'react';
import { TrendingUp, Clock, AlertTriangle, CheckCircle2, ArrowRight } from 'lucide-react';

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
    }
  ];

  return (
    <section style={{ padding: '90px 0', backgroundColor: '#010101', position: 'relative' }}>
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
            Real-world performance metrics measured directly across client enterprise deployments.
          </p>
        </div>

        {/* 3 Comparative Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '28px' }}>
          {caseStudies.map((cs, idx) => (
            <div
              key={idx}
              style={{
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

                <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#ffffff', marginBottom: '24px', lineHeight: 1.3 }}>
                  {cs.title}
                </h3>

                {/* Before vs After Comparison Box */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
                  
                  {/* Before */}
                  <div style={{
                    backgroundColor: 'rgba(239, 68, 68, 0.06)',
                    border: '1px solid rgba(239, 68, 68, 0.2)',
                    borderRadius: '16px',
                    padding: '16px'
                  }}>
                    <div style={{ fontSize: '12px', fontWeight: 700, color: '#f87171', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px' }}>
                      <AlertTriangle size={14} /> BEFORE
                    </div>
                    <div style={{ fontSize: '13px', color: '#cbd5e1', marginBottom: '4px' }}>⏱ {cs.before.time}</div>
                    <div style={{ fontSize: '13px', color: '#cbd5e1', marginBottom: '4px' }}>💰 {cs.before.cost}</div>
                    <div style={{ fontSize: '13px', color: '#94a3b8' }}>⚠️ {cs.before.error}</div>
                  </div>

                  {/* After */}
                  <div style={{
                    backgroundColor: 'rgba(52, 211, 153, 0.06)',
                    border: '1px solid rgba(52, 211, 153, 0.2)',
                    borderRadius: '16px',
                    padding: '16px'
                  }}>
                    <div style={{ fontSize: '12px', fontWeight: 700, color: '#34d399', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px' }}>
                      <CheckCircle2 size={14} /> AFTER AI
                    </div>
                    <div style={{ fontSize: '13px', color: '#ffffff', fontWeight: 700, marginBottom: '4px' }}>⚡ {cs.after.time}</div>
                    <div style={{ fontSize: '13px', color: '#ffffff', fontWeight: 700, marginBottom: '4px' }}>💎 {cs.after.cost}</div>
                    <div style={{ fontSize: '13px', color: '#34d399' }}>✓ {cs.after.error}</div>
                  </div>

                </div>
              </div>

              {/* ROI Banner */}
              <div style={{
                backgroundColor: 'rgba(56, 189, 248, 0.08)',
                border: '1px solid rgba(56, 189, 248, 0.2)',
                borderRadius: '12px',
                padding: '12px 16px',
                textAlign: 'center',
                fontSize: '13px',
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
