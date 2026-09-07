'use client';

import React from 'react';
import { ArrowUpRight, Award, CheckCircle, Star } from 'lucide-react';

export default function IndustryCaseStudies() {
  const caseStudies = [
    {
      industry: "PROFESSIONAL SERVICES",
      company: "Apex Legal & Advisory Group",
      logoText: "APEX",
      accent: "#38bdf8",
      headline: "Automated client onboarding & retainer drafting in under 60 seconds.",
      problem: "Attorneys spent 15+ hours per week manually gathering client information, running conflict checks, and copy-pasting retainer agreements.",
      solution: "Implemented an integrated Make.com + OpenAI pipeline tied to HubSpot CRM and DocuSign API.",
      results: [
        "82% reduction in client onboarding time",
        "$140,000 annual billable capacity reclaimed",
        "Zero error rate in contract clause selection"
      ],
      quote: "Cortexa transformed our operational workflow. What used to take our paralegals 3 days now happens automatically before our first client kickoff call.",
      author: "Marcus Vance",
      title: "Managing Partner, Apex Legal"
    },
    {
      industry: "HEALTHCARE & CLINICS",
      company: "Luminary Dental & Surgical Network",
      logoText: "LUMINARY",
      accent: "#ec4899",
      headline: "Deployed 24/7 conversational voice AI for appointment bookings & pre-validation.",
      problem: "Front-desk staff missed 35% of inbound calls during peak clinical hours, leading to patient drop-off and lost bookings.",
      solution: "Engineered a Retell AI + Twilio voice agent connected to their practice management system to handle booking, rescheduling, and FAQ calls.",
      results: [
        "70% reduction in receptionist call volume",
        "94% appointment confirmation rate",
        "+$210,000 additional annual booking revenue"
      ],
      quote: "Patients love that they can call at 10 PM and instantly confirm an appointment without waiting on hold or leaving a voicemail.",
      author: "Dr. Sarah Lin",
      title: "Clinical Operations Director"
    },
    {
      industry: "FINANCIAL SERVICES",
      company: "Vanguard Asset Management",
      logoText: "VANGUARD",
      accent: "#10b981",
      headline: "Sub-second document extraction & automated portfolio reconciliation.",
      problem: "Financial analysts manually audited hundreds of monthly client brokerage PDFs and multi-currency statements, causing reporting delays.",
      solution: "Created a custom document parsing microservice using Python FastAPI, vector embeddings, and automated reconciliation triggers.",
      results: [
        "Reconciliation reduced from 3 days to 4 minutes",
        "100% data audit compliance for regulatory reviews",
        "Allowed firm to scale 3x assets without hiring additional back-office staff"
      ],
      quote: "The speed and accuracy of Cortexa's document AI has given our analysts hours back every day to focus on portfolio strategy.",
      author: "David Sterling",
      title: "Chief Operating Officer"
    }
  ];

  return (
    <section id="case-studies" className="section-xl" style={{ padding: '90px 0', backgroundColor: '#010101' }}>
      <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 64px auto' }}>
          
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'rgba(245, 158, 11, 0.1)',
            border: '1px solid rgba(245, 158, 11, 0.25)',
            borderRadius: '100px',
            padding: '6px 18px',
            marginBottom: '20px'
          }}>
            <Award size={15} color="#f59e0b" />
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#fbbf24', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              PROVEN INDUSTRY IMPACT
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
            Real Results from Enterprise Clients
          </h2>
          <p style={{
            fontSize: '17px',
            color: '#94a3b8',
            lineHeight: 1.6,
            margin: 0
          }}>
            Discover how leading organizations across key verticals use our custom AI automation systems to drive measurable growth.
          </p>

        </div>

        {/* 3 Case Studies Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '32px' }}>
          {caseStudies.map((cs, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.025)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '24px',
                padding: '36px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease',
                position: 'relative'
              }}
              className="hover-card-glow"
            >
              <div>
                {/* Header Badge */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.08em', color: cs.accent, textTransform: 'uppercase' }}>
                    {cs.industry}
                  </span>
                  <div style={{ display: 'flex', gap: '4px' }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="#fbbf24" color="#fbbf24" />
                    ))}
                  </div>
                </div>

                {/* Company Name */}
                <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#ffffff', marginBottom: '12px', lineHeight: 1.25 }}>
                  {cs.company}
                </h3>

                {/* Headline */}
                <p style={{ fontSize: '15px', fontWeight: 600, color: '#e2e8f0', lineHeight: 1.5, marginBottom: '24px' }}>
                  "{cs.headline}"
                </p>

                {/* Results List */}
                <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', padding: '20px', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.06)', marginBottom: '28px' }}>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: '#64748b', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>
                    Key Performance Indicators:
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {cs.results.map((res, rIdx) => (
                      <div key={rIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#34d399', fontWeight: 600 }}>
                        <CheckCircle size={15} color="#34d399" />
                        <span>{res}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <p style={{ fontSize: '14px', color: '#94a3b8', fontStyle: 'italic', lineHeight: 1.6, marginBottom: '20px' }}>
                  "{cs.quote}"
                </p>
              </div>

              {/* Author Footer */}
              <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: '#ffffff' }}>{cs.author}</div>
                  <div style={{ fontSize: '12px', color: '#64748b' }}>{cs.title}</div>
                </div>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff'
                }}>
                  <ArrowUpRight size={18} />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
