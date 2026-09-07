'use client';

import React, { useState } from 'react';
import {
  Briefcase,
  Landmark,
  Stethoscope,
  Home,
  Users,
  Laptop,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Zap,
  ShieldCheck,
  Clock,
  TrendingUp,
  SlidersHorizontal
} from 'lucide-react';

interface IndustryVerticalsProps {
  selectedCategory?: string;
}

export default function IndustryVerticals({ selectedCategory = 'all' }: IndustryVerticalsProps) {
  const [expandedVertical, setExpandedVertical] = useState<string | null>(null);

  const verticals = [
    {
      id: 'professional-services',
      category: 'PROFESSIONAL SERVICES & CONSULTING',
      icon: <Briefcase size={22} color="#38bdf8" />,
      accentColor: '#38bdf8',
      bgGlow: 'rgba(56, 189, 248, 0.08)',
      title: 'Legal, Accounting & Executive Advisory',
      subtitle: 'Eliminate manual document drafting, streamline client onboarding, and automate billable project workflows.',
      impactMetric: '75% Time Saved on Client Intake',
      keyWorkflows: [
        'Automated Client Intake & Know-Your-Client (KYC) Verification',
        'AI Document Summarization & Contract Clause Extraction',
        'Smart Proposal & Engagement Letter Generation',
        'Automated Billing Reminders & Time Tracking Sync',
        'Client Portal Communication & Status Update Bots'
      ],
      techStack: ['HubSpot', 'Make.com', 'OpenAI API', 'DocuSign', 'Clio', 'Stripe'],
      beforeAfter: {
        before: 'Manual client intake taking 3+ days, lost follow-ups, and repetitive contract generation.',
        after: 'Instant autonomous onboarding, auto-generated agreements in 60 seconds, zero lead leaks.'
      },
      deepDive: 'For professional services firms, time is revenue. Our AI solutions integrate directly into your existing CRM and practice management tools to eliminate administrative overhead, allowing senior consultants and lawyers to focus purely on high-margin advisory work.'
    },
    {
      id: 'finance',
      category: 'FINANCIAL SERVICES & FINTECH',
      icon: <Landmark size={22} color="#10b981" />,
      accentColor: '#10b981',
      bgGlow: 'rgba(16, 185, 129, 0.08)',
      title: 'FinTech, Wealth Management & Lending',
      subtitle: 'Automate loan application processing, compliance audits, invoice reconciliation, and investor reporting.',
      impactMetric: '10x Faster Invoice & Document Audit',
      keyWorkflows: [
        'Automated Financial Document Parsing (PDFs, Invoices, Tax Returns)',
        'Real-time AML & Fraud Flag Alert System',
        'Autonomous Invoice Matching & Multi-Currency Reconciliation',
        'Automated Investor Briefings & Portfolio Performance Reports',
        'AI Support Assistant for Account & Compliance Inquiries'
      ],
      techStack: ['Plaid', 'Supabase', 'Python FastAPI', 'Make.com', 'QuickBooks', 'Xero'],
      beforeAfter: {
        before: 'Hours spent manually cross-checking invoices, bank statements, and compliance checklists.',
        after: 'Sub-second document extraction, 99.8% precision automated reconciliation, instant audit trail.'
      },
      deepDive: 'Financial institutions demand zero-tolerance security and auditability. Our solutions leverage air-gapped vector databases and strict data compliance rules, reducing processing timelines from days to seconds while maintaining full SOC2 alignment.'
    },
    {
      id: 'healthcare',
      category: 'HEALTHCARE & LIFE SCIENCES',
      icon: <Stethoscope size={22} color="#ec4899" />,
      accentColor: '#ec4899',
      bgGlow: 'rgba(236, 72, 153, 0.08)',
      title: 'Clinics, Medical Practices & Biotech',
      subtitle: 'HIPAA-compliant patient scheduling, automated claim pre-verification, and intelligent follow-up workflows.',
      impactMetric: '92% Reduction in No-Show Rates',
      keyWorkflows: [
        'HIPAA-Compliant AI Conversational Scheduling Agent',
        'Automated Insurance Pre-Authorization & Benefit Validation',
        'Post-Care Patient Follow-up & Treatment Care Journeys',
        'Clinical Notes Summarization & EMR Data Entry Assistance',
        'Lab Result Notification & Patient Q&A Portal'
      ],
      techStack: ['Retell AI', 'Twilio', 'Epic EHR Sync', 'Python', 'OpenAI', 'AWS MedTech'],
      beforeAfter: {
        before: 'Overloaded phone lines, manual appointment verification, high appointment no-shows.',
        after: '24/7 intelligent voice & SMS scheduling, automated appointment confirmations, seamless patient flow.'
      },
      deepDive: 'Healthcare providers waste thousands of administrative hours answering routine patient calls. Our HIPAA-compliant conversational voice agents handle appointment bookings and insurance checks, freeing clinical staff to focus on patient care.'
    },
    {
      id: 'real-estate',
      category: 'REAL ESTATE & PROPERTY MANAGEMENT',
      icon: <Home size={22} color="#f59e0b" />,
      accentColor: '#f59e0b',
      bgGlow: 'rgba(245, 158, 11, 0.08)',
      title: 'Commercial & Residential Real Estate',
      subtitle: 'Auto-respond to tenant inquiries 24/7, route maintenance requests instantly, and automate lease renewals.',
      impactMetric: 'Sub-30 Second Inquiry Response Time',
      keyWorkflows: [
        '24/7 AI Lead Responder & Property Viewing Scheduler',
        'Automated Maintenance Request Triage & Contractor Dispatch',
        'Lease Renewal Alert & Auto-Generated Agreement Flow',
        'Tenant Screening & Identity Verification Pipelines',
        'Multi-Channel Listing Sync & AI Description Generator'
      ],
      techStack: ['Yardi', 'AppFolio', 'WhatsApp API', 'Make.com', 'Zapier', 'OpenAI'],
      beforeAfter: {
        before: 'Delayed response to tenant inquiries, unorganized maintenance tickets, missed renewal deadlines.',
        after: 'Instant automated lead qualification, auto-scheduled property tours, 100% maintenance tracking.'
      },
      deepDive: 'Speed is everything in real estate sales and tenant retention. By deploying instant AI auto-responders across WhatsApp, email, and web chat, property teams close leases faster and manage tenant requests effortlessly.'
    },
    {
      id: 'recruitment',
      category: 'RECRUITMENT & HUMAN RESOURCES',
      icon: <Users size={22} color="#a855f7" />,
      accentColor: '#a855f7',
      bgGlow: 'rgba(168, 85, 247, 0.08)',
      title: 'Staffing Agencies & Enterprise HR',
      subtitle: 'Screen high volumes of candidate resumes, automate interview scheduling, and streamline employee onboarding.',
      impactMetric: '4x More Candidates Processed per Recruiter',
      keyWorkflows: [
        'AI Resume Parsing, Ranking & Skill Extraction',
        'Autonomous Interview Availability Match & Calendar Sync',
        'Automated Reference Check & Background Data Collection',
        'New Hire Onboarding Journey & Equipment Provisioning',
        'Internal Employee Policy & Benefits Q&A Knowledge Bot'
      ],
      techStack: ['Greenhouse', 'Lever', 'Workday', 'Make.com', 'OpenAI', 'Slack API'],
      beforeAfter: {
        before: 'Sifting manually through hundreds of PDFs, back-and-forth emails to schedule 30-minute interviews.',
        after: 'Instant candidate scorecards, automated 1-click scheduling, smooth candidate experience.'
      },
      deepDive: 'HR teams lose days to repetitive administrative tasks. Our AI recruiting agents read resumes against job specs, shortlist top candidates instantly, and handle all interview logistics automatically.'
    },
    {
      id: 'technology',
      category: 'TECHNOLOGY & SOFTWARE (SAAS)',
      icon: <Laptop size={22} color="#6366f1" />,
      accentColor: '#6366f1',
      bgGlow: 'rgba(99, 102, 241, 0.08)',
      title: 'SaaS Platforms, IT Services & Tech Startups',
      subtitle: 'Automate user onboarding, triage technical support tickets, and build proactive churn prevention triggers.',
      impactMetric: '65% Reduction in Support Ticket Load',
      keyWorkflows: [
        'Tier-1 Technical Support Auto-Resolution & Ticket Categorization',
        'User Onboarding Activation Workflows & Feature Prompts',
        'Proactive Churn Alert & Usage Anomaly Detection',
        'Customer Health Score Calculator & CRM Sync',
        'Developer Documentation AI Search & Code Assistant'
      ],
      techStack: ['Zendesk', 'Intercom', 'Next.js', 'Pinecone Vector DB', 'PostgreSQL', 'Stripe'],
      beforeAfter: {
        before: 'Support inbox flooded with routine questions, delayed response times leading to customer churn.',
        after: 'Instant resolution of 60%+ common tickets, seamless escalation for complex technical queries.'
      },
      deepDive: 'For SaaS products, scaling support while keeping headcount lean is critical. We build intelligent RAG agents trained on your technical documentation to provide immediate, accurate answers to user queries 24/7.'
    }
  ];

  const filteredVerticals = selectedCategory === 'all'
    ? verticals
    : verticals.filter(v => v.id === selectedCategory);

  const toggleExpand = (id: string) => {
    setExpandedVertical(expandedVertical === id ? null : id);
  };

  return (
    <section id="verticals" className="section-xl" style={{ padding: '90px 0', backgroundColor: '#010101' }}>
      <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 64px auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '100px',
            padding: '6px 18px',
            marginBottom: '20px'
          }}>
            <SlidersHorizontal size={14} color="#60a5fa" />
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              INDUSTRY DEEP-DIVE
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
            Custom Workflows Built for Your Industry
          </h2>
          <p style={{
            fontSize: '17px',
            color: '#94a3b8',
            lineHeight: 1.6,
            margin: 0
          }}>
            Explore our domain-tailored AI automations designed to integrate seamlessly into your existing software tools and eliminate manual bottlenecks.
          </p>
        </div>

        {/* Verticals List / Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {filteredVerticals.map((item) => {
            const isExpanded = expandedVertical === item.id;
            return (
              <div
                key={item.id}
                id={item.id}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.025)',
                  border: `1px solid ${isExpanded ? item.accentColor : 'rgba(255, 255, 255, 0.08)'}`,
                  borderRadius: '24px',
                  padding: '40px',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: isExpanded ? `0 10px 30px ${item.bgGlow}` : 'none'
                }}
                className="hover-card-glow"
              >
                {/* Background Accent Pill */}
                <div style={{
                  position: 'absolute',
                  top: '-40px',
                  right: '-40px',
                  width: '200px',
                  height: '200px',
                  background: `radial-gradient(circle, ${item.bgGlow} 0%, rgba(0,0,0,0) 70%)`,
                  pointerEvents: 'none'
                }} />

                {/* Top Info Bar */}
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px', marginBottom: '24px' }}>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '16px',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      {item.icon}
                    </div>

                    <div>
                      <span style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.08em', color: item.accentColor, textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                        {item.category}
                      </span>
                      <h3 style={{ fontSize: 'clamp(22px, 3vw, 28px)', fontWeight: 700, color: '#ffffff', margin: 0, letterSpacing: '-0.02em' }}>
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Impact Metric Badge */}
                  <div style={{
                    backgroundColor: item.bgGlow,
                    border: `1px solid ${item.accentColor}40`,
                    padding: '8px 18px',
                    borderRadius: '100px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <TrendingUp size={15} color={item.accentColor} />
                    <span style={{ fontSize: '13px', fontWeight: 700, color: item.accentColor }}>
                      {item.impactMetric}
                    </span>
                  </div>

                </div>

                {/* Subtitle */}
                <p style={{ fontSize: '16px', color: '#cbd5e1', lineHeight: 1.6, marginBottom: '28px', maxWidth: '900px' }}>
                  {item.subtitle}
                </p>

                {/* Workflows Grid */}
                <div style={{ marginBottom: '28px' }}>
                  <h4 style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.06em', color: '#64748b', textTransform: 'uppercase', marginBottom: '16px' }}>
                    Key Automated Workflows:
                  </h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '14px' }}>
                    {item.keyWorkflows.map((wf, wIdx) => (
                      <div key={wIdx} style={{ display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: 'rgba(255, 255, 255, 0.02)', padding: '10px 14px', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                        <CheckCircle2 size={16} color={item.accentColor} style={{ flexShrink: 0 }} />
                        <span style={{ fontSize: '14px', color: '#e2e8f0', fontWeight: 500 }}>{wf}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '24px' }}>
                  <span style={{ fontSize: '12px', color: '#64748b', fontWeight: 600 }}>Integrated Stack:</span>
                  {item.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        color: '#94a3b8',
                        fontSize: '12px',
                        fontWeight: 600,
                        padding: '4px 12px',
                        borderRadius: '6px'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Expanded Section (Before/After & Deep Dive) */}
                {isExpanded && (
                  <div style={{
                    marginTop: '28px',
                    paddingTop: '28px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px'
                  }}>
                    {/* Before vs After Comparison */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
                      <div style={{ backgroundColor: 'rgba(239, 68, 68, 0.06)', border: '1px solid rgba(239, 68, 68, 0.2)', padding: '18px 20px', borderRadius: '12px' }}>
                        <div style={{ fontSize: '12px', fontWeight: 800, color: '#f87171', textTransform: 'uppercase', marginBottom: '8px' }}>
                          Traditional Manual Bottleneck
                        </div>
                        <p style={{ fontSize: '14px', color: '#cbd5e1', margin: 0, lineHeight: 1.5 }}>
                          {item.beforeAfter.before}
                        </p>
                      </div>

                      <div style={{ backgroundColor: 'rgba(16, 185, 129, 0.06)', border: '1px solid rgba(16, 185, 129, 0.2)', padding: '18px 20px', borderRadius: '12px' }}>
                        <div style={{ fontSize: '12px', fontWeight: 800, color: '#34d399', textTransform: 'uppercase', marginBottom: '8px' }}>
                          Cortexa AI Automated State
                        </div>
                        <p style={{ fontSize: '14px', color: '#cbd5e1', margin: 0, lineHeight: 1.5 }}>
                          {item.beforeAfter.after}
                        </p>
                      </div>
                    </div>

                    {/* Deep Dive Description */}
                    <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                      <p style={{ fontSize: '14px', color: '#94a3b8', margin: 0, lineHeight: 1.6 }}>
                        {item.deepDive}
                      </p>
                    </div>
                  </div>
                )}

                {/* Bottom Action Bar */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '16px', marginTop: '16px' }}>
                  <button
                    onClick={() => toggleExpand(item.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: item.accentColor,
                      cursor: 'pointer',
                      fontSize: '14px',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: 0
                    }}
                  >
                    {isExpanded ? (
                      <>Hide Full Details <ChevronUp size={16} /></>
                    ) : (
                      <>View Architecture & Comparison <ChevronDown size={16} /></>
                    )}
                  </button>

                  <a
                    href="#contact"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      color: '#ffffff',
                      fontSize: '14px',
                      fontWeight: 600,
                      textDecoration: 'none'
                    }}
                  >
                    Request Industry Audit <ArrowRight size={14} color={item.accentColor} />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
