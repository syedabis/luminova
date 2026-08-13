'use client';

import React, { useState } from 'react';
import {
  Target,
  Zap,
  RefreshCw,
  DollarSign,
  HeartHandshake,
  Bot,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Workflow,
  Sliders
} from 'lucide-react';

interface SolutionsGridProps {
  selectedCategory?: string;
}

export default function SolutionsGrid({ selectedCategory = 'all' }: SolutionsGridProps) {
  const [expandedSolution, setExpandedSolution] = useState<string | null>(null);

  const solutions = [
    {
      id: 'sales',
      category: 'SALES & PIPELINE',
      icon: <Target size={22} color="#38bdf8" />,
      accentColor: '#38bdf8',
      bgGlow: 'rgba(56, 189, 248, 0.08)',
      title: 'Autonomous Lead Intake & CRM Pipeline Agent',
      subtitle: 'Instantly respond to inbound leads in under 30 seconds, pre-qualify prospects, and automatically schedule sales calls on your team’s calendar.',
      keyFeatures: [
        'Sub-30 second instant lead qualification & SMS/Email reply',
        'Dynamic calendar booking with real-time rep availability matching',
        'Automated proposal & contract generation based on form inputs',
        'Bi-directional CRM sync with automated lead enrichment (HubSpot, Salesforce)'
      ],
      techStack: ['Make.com', 'OpenAI API', 'HubSpot', 'Calendly', 'Twilio', 'Stripe'],
      workflowSteps: [
        { step: '1. Inbound Trigger', desc: 'Prospect submits contact form or requests demo on site.' },
        { step: '2. AI Qualification', desc: 'LLM analyzes company size, budget, & intent, ranking lead urgency.' },
        { step: '3. Action & Sync', desc: 'Sends personalized SMS/email with calendar link & creates CRM deal record.' }
      ]
    },
    {
      id: 'marketing',
      category: 'MARKETING & NURTURING',
      icon: <Zap size={22} color="#ec4899" />,
      accentColor: '#ec4899',
      bgGlow: 'rgba(236, 72, 153, 0.08)',
      title: 'Automated Customer Journeys & Review Engines',
      subtitle: 'Turn cold lead magnet downloads into sales-ready appointments with behavioral email sequences and automated 5-star review collection.',
      keyFeatures: [
        'Automated multi-channel lead magnet delivery & tracking',
        'Behavior-driven email sequence triggers based on engagement',
        'Post-service review collection workflows via SMS & Email',
        'Ad platform conversion feedback loops for Meta & Google Ads'
      ],
      techStack: ['ActiveCampaign', 'Klaviyo', 'Zapier', 'Google Reviews API', 'OpenAI', 'Meta API'],
      workflowSteps: [
        { step: '1. Content Trigger', desc: 'Lead downloads PDF guide or completes webinar registration.' },
        { step: '2. Smart Nurture', desc: 'AI sends 5-part tailored educational sequence based on lead industry.' },
        { step: '3. Conversion Conversion', desc: 'Triggers automated booking link when engagement score exceeds threshold.' }
      ]
    },
    {
      id: 'operations',
      category: 'OPERATIONS & WORKFLOWS',
      icon: <RefreshCw size={22} color="#a855f7" />,
      accentColor: '#a855f7',
      bgGlow: 'rgba(168, 85, 247, 0.08)',
      title: 'Client Onboarding & Document OCR Automation',
      subtitle: 'Deliver smooth client onboarding by automating intake forms, document verification, project creation, and team task assignments.',
      keyFeatures: [
        'Zero-touch client onboarding sequences & kickoff task creation',
        'AI OCR document parsing (PDFs, identity, invoices, contracts)',
        'Automated Slack/Teams notification alerts for milestone completion',
        'Cross-platform database synchronization (Supabase, Notion, ClickUp)'
      ],
      techStack: ['Supabase', 'Python OCR', 'ClickUp', 'Asana', 'Make.com', 'Slack API'],
      workflowSteps: [
        { step: '1. Agreement Signed', desc: 'DocuSign webhook fires contract execution event.' },
        { step: '2. Project Provisioning', desc: 'AI creates project workspace, folder structures, and assigns task templates.' },
        { step: '3. Client Welcome', desc: 'Sends client portal access details & welcome video automatically.' }
      ]
    },
    {
      id: 'finance',
      category: 'FINANCE & REVENUE OPS',
      icon: <DollarSign size={22} color="#10b981" />,
      accentColor: '#10b981',
      bgGlow: 'rgba(16, 185, 129, 0.08)',
      title: 'Smart Invoice Reminders & Payment Reconciliation',
      subtitle: 'Eliminate overdue receivables with intelligent multi-stage payment reminders, automated invoice matching, and financial audit logs.',
      keyFeatures: [
        'Smart automated invoice reminders with personalized follow-up logic',
        'Bank statement & invoice line-item automated reconciliation',
        'Automated subscription billing triggers & dunning management',
        'Real-time financial cash flow alert dashboards'
      ],
      techStack: ['QuickBooks', 'Xero', 'Stripe API', 'Plaid', 'Python', 'SendGrid'],
      workflowSteps: [
        { step: '1. Due Date Trigger', desc: 'Invoice approaches 3 days prior or post due-date.' },
        { step: '2. Intelligent Follow-up', desc: 'AI selects friendly SMS/Email template matching client history.' },
        { step: '3. Auto-Reconcile', desc: 'Stripe payment webhook updates ledger & marks invoice paid instantly.' }
      ]
    },
    {
      id: 'cx',
      category: 'CUSTOMER EXPERIENCE',
      icon: <HeartHandshake size={22} color="#f59e0b" />,
      accentColor: '#f59e0b',
      bgGlow: 'rgba(245, 158, 11, 0.08)',
      title: '24/7 AI Voice & Support Assistants',
      subtitle: 'Deploy human-sounding conversational voice and chat bots trained on your company knowledge base to resolve 70%+ of customer inquiries.',
      keyFeatures: [
        'Sub-second latency voice AI phone assistants (inbound & outbound)',
        'RAG knowledge base chat bot trained on SOPs and internal docs',
        'Automated ticket categorization & intelligent human escalation',
        'Multilingual support capabilities across 30+ languages'
      ],
      techStack: ['Retell AI', 'Vapi', 'Twilio', 'Pinecone Vector DB', 'Zendesk', 'Intercom'],
      workflowSteps: [
        { step: '1. Inbound Call/Chat', desc: 'Customer reaches out via phone line or live website widget.' },
        { step: '2. RAG Knowledge Lookup', desc: 'AI queries vector database to pull accurate company SOP answer.' },
        { step: '3. Instant Resolution', desc: 'Answers question, books appointment, or escalates ticket if complex.' }
      ]
    },
    {
      id: 'intelligence',
      category: 'MULTI-AGENT INTELLIGENCE',
      icon: <Bot size={22} color="#6366f1" />,
      accentColor: '#6366f1',
      bgGlow: 'rgba(99, 102, 241, 0.08)',
      title: 'Autonomous Research & Competitor Intelligence Crew',
      subtitle: 'Deploy dedicated networks of specialized AI agents that monitor market trends, analyze competitor pricing, and draft daily executive briefings.',
      keyFeatures: [
        'Multi-agent collaborative workflows (Researcher, Analyst, Writer)',
        'Automated web scraping & sentiment analysis monitors',
        'Daily/Weekly executive briefing reports delivered to Slack or Email',
        'Custom analytics dashboard integrations'
      ],
      techStack: ['CrewAI', 'LangChain', 'Claude 3.5 Sonnet', 'Tavily API', 'Python', 'Streamlit'],
      workflowSteps: [
        { step: '1. Schedule Trigger', desc: 'Cron job triggers market research crew every morning at 6 AM.' },
        { step: '2. Multi-Agent Audit', desc: 'Scraper agent gathers web data; Analyst agent evaluates metrics.' },
        { step: '3. Briefing Delivered', desc: 'Writer agent compiles synthesized executive summary into Slack channel.' }
      ]
    }
  ];

  const filteredSolutions = selectedCategory === 'all'
    ? solutions
    : solutions.filter(s => s.id === selectedCategory);

  const toggleExpand = (id: string) => {
    setExpandedSolution(expandedSolution === id ? null : id);
  };

  return (
    <section id="solutions-list" className="section-xl" style={{ padding: '90px 0', backgroundColor: '#010101' }}>
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
            <Sliders size={14} color="#c084fc" />
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              SOLUTION CATALOG
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
            Turn Operating Bottlenecks into Competitive Advantages
          </h2>
          <p style={{
            fontSize: '17px',
            color: '#94a3b8',
            lineHeight: 1.6,
            margin: 0
          }}>
            Click any solution to explore step-by-step architecture flows and integration technical stacks.
          </p>
        </div>

        {/* Solutions Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '32px' }}>
          {filteredSolutions.map((item) => {
            const isExpanded = expandedSolution === item.id;
            return (
              <div
                key={item.id}
                id={item.id}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.025)',
                  border: `1px solid ${isExpanded ? item.accentColor : 'rgba(255, 255, 255, 0.08)'}`,
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
                  {/* Top Bar */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '12px',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        {item.icon}
                      </div>
                      <span style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.08em', color: item.accentColor, textTransform: 'uppercase' }}>
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#ffffff', marginBottom: '14px', lineHeight: 1.3, letterSpacing: '-0.01em' }}>
                    {item.title}
                  </h3>

                  {/* Subtitle */}
                  <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: 1.6, marginBottom: '24px', fontWeight: 400 }}>
                    {item.subtitle}
                  </p>

                  {/* Key Features List */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                    {item.keyFeatures.map((feat, fIdx) => (
                      <div key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                        <CheckCircle2 size={16} color={item.accentColor} style={{ marginTop: '2px', flexShrink: 0 }} />
                        <span style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: 1.5 }}>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px' }}>
                    {item.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                          color: '#94a3b8',
                          fontSize: '11px',
                          fontWeight: 500,
                          padding: '3px 9px',
                          borderRadius: '6px'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Expanded Step-by-Step Workflow View */}
                  {isExpanded && (
                    <div style={{
                      marginTop: '20px',
                      paddingTop: '20px',
                      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '12px'
                    }}>
                      <div style={{ fontSize: '12px', fontWeight: 800, color: item.accentColor, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '4px' }}>
                        Architecture Step-by-Step Flow:
                      </div>
                      {item.workflowSteps.map((ws, wIdx) => (
                        <div key={wIdx} style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', padding: '12px 14px', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                          <div style={{ fontSize: '12px', fontWeight: 700, color: '#ffffff', marginBottom: '2px' }}>{ws.step}</div>
                          <div style={{ fontSize: '13px', color: '#94a3b8' }}>{ws.desc}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Bottom Toggle Bar */}
                <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '16px', marginTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <button
                    onClick={() => toggleExpand(item.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: item.accentColor,
                      cursor: 'pointer',
                      fontSize: '13px',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: 0
                    }}
                  >
                    {isExpanded ? (
                      <>Hide Flow Diagram <ChevronUp size={15} /></>
                    ) : (
                      <>View Architecture Flow <ChevronDown size={15} /></>
                    )}
                  </button>

                  <a
                    href="#contact"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      color: '#ffffff',
                      fontSize: '13px',
                      fontWeight: 600,
                      textDecoration: 'none'
                    }}
                  >
                    Build This <ArrowRight size={14} color={item.accentColor} />
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
