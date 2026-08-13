'use client';

import React, { useState, useEffect } from 'react';
import {
  Workflow,
  ArrowRight,
  Play,
  Pause,
  Mail,
  PhoneCall,
  DollarSign,
  Cpu,
  Zap,
  Database,
  CheckCircle2,
  Bell,
  Layers,
  Sparkles,
  UserCheck,
  FileCheck,
  ShoppingBag
} from 'lucide-react';

type WorkflowKey = 'sales' | 'billing' | 'voice' | 'onboarding' | 'recruitment' | 'ecommerce';

export default function SolutionsFlowVisualizer() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [selectedWorkflow, setSelectedWorkflow] = useState<WorkflowKey>('sales');

  const workflows: Record<WorkflowKey, {
    title: string;
    subtitle: string;
    steps: Array<{
      num: string;
      title: string;
      sub: string;
      desc: string;
      icon: React.ReactNode;
      color: string;
    }>;
  }> = {
    sales: {
      title: "Inbound Lead Intake & Auto-Booking Pipeline",
      subtitle: "Qualifies prospects in sub-30 seconds & books calendar appointments automatically.",
      steps: [
        {
          num: "01",
          title: "Form Submission",
          sub: "Trigger Event",
          desc: "Lead submits contact form or requests demo",
          icon: <Mail size={22} color="#38bdf8" />,
          color: "#38bdf8"
        },
        {
          num: "02",
          title: "CRM Enrichment",
          sub: "Context Ingestion",
          desc: "Queries HubSpot DB for prior lead history",
          icon: <Database size={22} color="#a855f7" />,
          color: "#a855f7"
        },
        {
          num: "03",
          title: "GPT-4o Intent Evaluation",
          sub: "AI Logic Node",
          desc: "Evaluates budget, company size & intent score",
          icon: <Cpu size={22} color="#c084fc" />,
          color: "#c084fc"
        },
        {
          num: "04",
          title: "Calendly & SMS Dispatch",
          sub: "Action Execution",
          desc: "Sends personalized booking link via Twilio SMS",
          icon: <Zap size={22} color="#10b981" />,
          color: "#10b981"
        },
        {
          num: "05",
          title: "Instant Appointment",
          sub: "Business Impact",
          desc: "Call booked on sales rep calendar in < 30s",
          icon: <CheckCircle2 size={22} color="#34d399" />,
          color: "#34d399"
        }
      ]
    },
    billing: {
      title: "Autonomous Invoice Extraction & Ledger Sync",
      subtitle: "Parses PDF invoices, matches accounts payable, and updates accounting ledgers.",
      steps: [
        {
          num: "01",
          title: "Invoice Email Received",
          sub: "Trigger Event",
          desc: "Vendor emails PDF invoice to billing in-box",
          icon: <DollarSign size={22} color="#10b981" />,
          color: "#10b981"
        },
        {
          num: "02",
          title: "Vision OCR Extraction",
          sub: "Data Ingestion",
          desc: "Extracts line items, tax IDs & total balance",
          icon: <Database size={22} color="#38bdf8" />,
          color: "#38bdf8"
        },
        {
          num: "03",
          title: "Audit & Compliance Check",
          sub: "AI Logic Node",
          desc: "Validates PO numbers against procurement rules",
          icon: <Cpu size={22} color="#c084fc" />,
          color: "#c084fc"
        },
        {
          num: "04",
          title: "QuickBooks & Stripe API",
          sub: "Action Execution",
          desc: "Creates expense entry & schedules ACH payment",
          icon: <Zap size={22} color="#f59e0b" />,
          color: "#f59e0b"
        },
        {
          num: "05",
          title: "100% Reconciled",
          sub: "Business Impact",
          desc: "Zero manual entry required; ledger instantly updated",
          icon: <CheckCircle2 size={22} color="#34d399" />,
          color: "#34d399"
        }
      ]
    },
    voice: {
      title: "24/7 Conversational Voice AI & Ticket Escalation",
      subtitle: "Handles inbound calls in natural spoken voice and syncs with support desk.",
      steps: [
        {
          num: "01",
          title: "Inbound Phone Call",
          sub: "Trigger Event",
          desc: "Customer calls phone line outside office hours",
          icon: <PhoneCall size={22} color="#ec4899" />,
          color: "#ec4899"
        },
        {
          num: "02",
          title: "Speech-To-Text Stream",
          sub: "Audio Processing",
          desc: "Converts voice audio to text stream in < 200ms",
          icon: <Layers size={22} color="#38bdf8" />,
          color: "#38bdf8"
        },
        {
          num: "03",
          title: "Retell RAG AI Agent",
          sub: "AI Logic Node",
          desc: "Searches vector DB for exact SOP resolution",
          icon: <Cpu size={22} color="#c084fc" />,
          color: "#c084fc"
        },
        {
          num: "04",
          title: "Zendesk & SMS Dispatch",
          sub: "Action Execution",
          desc: "Updates support ticket & sends confirmation SMS",
          icon: <Bell size={22} color="#f59e0b" />,
          color: "#f59e0b"
        },
        {
          num: "05",
          title: "Zero Missed Calls",
          sub: "Business Impact",
          desc: "Customer issue resolved 24/7 without wait time",
          icon: <CheckCircle2 size={22} color="#34d399" />,
          color: "#34d399"
        }
      ]
    },
    onboarding: {
      title: "Client Onboarding & Document OCR Automation",
      subtitle: "Zero-touch onboarding: parses KYC documents, creates projects, and emails portal access.",
      steps: [
        {
          num: "01",
          title: "Contract Signed",
          sub: "Trigger Event",
          desc: "Client signs contract via DocuSign webhook",
          icon: <FileCheck size={22} color="#a855f7" />,
          color: "#a855f7"
        },
        {
          num: "02",
          title: "Document Vision OCR",
          sub: "KYC Extraction",
          desc: "Extracts tax IDs, company registration & identity",
          icon: <Database size={22} color="#38bdf8" />,
          color: "#38bdf8"
        },
        {
          num: "03",
          title: "Project Provisioning",
          sub: "AI Logic Node",
          desc: "Creates ClickUp workspace, folders & assigns team",
          icon: <Cpu size={22} color="#c084fc" />,
          color: "#c084fc"
        },
        {
          num: "04",
          title: "Portal Credential Sync",
          sub: "Action Execution",
          desc: "Generates secure client portal login & welcome email",
          icon: <Zap size={22} color="#10b981" />,
          color: "#10b981"
        },
        {
          num: "05",
          title: "< 60s Onboarding",
          sub: "Business Impact",
          desc: "Client fully onboarded without staff manual intervention",
          icon: <CheckCircle2 size={22} color="#34d399" />,
          color: "#34d399"
        }
      ]
    },
    recruitment: {
      title: "HR Candidate Screening & Auto-Scheduling",
      subtitle: "Parses applicant resumes, ranks candidates against JDs, and invites top candidates.",
      steps: [
        {
          num: "01",
          title: "Resume Submitted",
          sub: "Trigger Event",
          desc: "Applicant submits PDF resume via job portal",
          icon: <UserCheck size={22} color="#38bdf8" />,
          color: "#38bdf8"
        },
        {
          num: "02",
          title: "Resume Data Parsing",
          sub: "Attribute Extraction",
          desc: "Extracts work history, tech stack & education",
          icon: <Database size={22} color="#a855f7" />,
          color: "#a855f7"
        },
        {
          num: "03",
          title: "GPT-4o JD Matcher",
          sub: "AI Logic Node",
          desc: "Scores applicant fit & ranks candidate intent",
          icon: <Cpu size={22} color="#c084fc" />,
          color: "#c084fc"
        },
        {
          num: "04",
          title: "Invite Link Dispatch",
          sub: "Action Execution",
          desc: "Invites top 15% candidates via Calendly SMS",
          icon: <Zap size={22} color="#f59e0b" />,
          color: "#f59e0b"
        },
        {
          num: "05",
          title: "85% Screening Saved",
          sub: "Business Impact",
          desc: "Recruiters interview pre-vetted top talent fast",
          icon: <CheckCircle2 size={22} color="#34d399" />,
          color: "#34d399"
        }
      ]
    },
    ecommerce: {
      title: "E-Commerce Review & Loyalty Automation",
      subtitle: "Monitors customer feedback, triggers review collection, and automates customer retention.",
      steps: [
        {
          num: "01",
          title: "Order Delivered",
          sub: "Trigger Event",
          desc: "Shopify webhook fires post-delivery notification",
          icon: <ShoppingBag size={22} color="#10b981" />,
          color: "#10b981"
        },
        {
          num: "02",
          title: "Sentiment Check",
          sub: "Feedback Ingestion",
          desc: "Sends 1-click 5-star rating SMS to buyer",
          icon: <Mail size={22} color="#ec4899" />,
          color: "#ec4899"
        },
        {
          num: "03",
          title: "Smart Router Agent",
          sub: "AI Logic Node",
          desc: "Directs 5-star to Google/Trustpilot; 1-star to CS",
          icon: <Cpu size={22} color="#c084fc" />,
          color: "#c084fc"
        },
        {
          num: "04",
          title: "Reward Incentive",
          sub: "Action Execution",
          desc: "Issues instant discount code for next purchase",
          icon: <Zap size={22} color="#38bdf8" />,
          color: "#38bdf8"
        },
        {
          num: "05",
          title: "+35% Repeat Sales",
          sub: "Business Impact",
          desc: "Multiplies positive reviews & customer LTV",
          icon: <CheckCircle2 size={22} color="#34d399" />,
          color: "#34d399"
        }
      ]
    }
  };

  const currentFlow = workflows[selectedWorkflow];
  const stepsCount = currentFlow.steps.length;

  // Auto-loop step ticker
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setActiveStep((prevStep) => (prevStep + 1) % stepsCount);
    }, 2800);

    return () => clearInterval(interval);
  }, [isPlaying, stepsCount]);

  const handleWorkflowChange = (key: WorkflowKey) => {
    setSelectedWorkflow(key);
    setActiveStep(0);
  };

  const projectButtons: Array<{ key: WorkflowKey; label: string; activeColor: string }> = [
    { key: 'sales', label: 'Sales Lead Intake', activeColor: '#38bdf8' },
    { key: 'billing', label: 'Invoice & Billing Engine', activeColor: '#10b981' },
    { key: 'voice', label: '24/7 Voice AI Assistant', activeColor: '#ec4899' },
    { key: 'onboarding', label: 'Client Onboarding & OCR', activeColor: '#a855f7' },
    { key: 'recruitment', label: 'HR Resume Screening', activeColor: '#38bdf8' },
    { key: 'ecommerce', label: 'E-Commerce Review Bot', activeColor: '#34d399' },
  ];

  return (
    <section id="flow-visualizer" className="section-xl" style={{ padding: '90px 0', backgroundColor: '#06080d', position: 'relative', overflow: 'hidden' }}>
      
      {/* Radial ambient background glow */}
      <div style={{
        position: 'absolute',
        top: '30%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '1000px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(168, 85, 247, 0.08) 0%, rgba(56, 189, 248, 0.05) 50%, rgba(0,0,0,0) 70%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div className="container" style={{ maxWidth: '1380px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 48px auto' }}>
          
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'rgba(168, 85, 247, 0.1)',
            border: '1px solid rgba(168, 85, 247, 0.25)',
            borderRadius: '100px',
            padding: '6px 18px',
            marginBottom: '20px'
          }}>
            <Workflow size={15} color="#c084fc" />
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#c084fc', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              AUTONOMOUS PIPELINE LOOPER
            </span>
          </div>

          <h2 style={{
            fontSize: 'clamp(34px, 4.5vw, 54px)',
            fontWeight: 800,
            color: '#ffffff',
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            marginBottom: '20px'
          }}>
            Watch Automation Steps Execute in Real-Time
          </h2>
          <p style={{
            fontSize: '17px',
            color: '#94a3b8',
            lineHeight: 1.6,
            margin: 0
          }}>
            Select from our 6 featured automation projects below to watch data flow across connected applications in one continuous horizontal workflow.
          </p>

        </div>

        {/* Workflow Controls Bar (Presets + Play/Pause) */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          backgroundColor: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '16px',
          padding: '16px 24px',
          marginBottom: '40px'
        }}>
          {/* Preset Buttons - 6 Projects */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {projectButtons.map((btn) => {
              const isSelected = selectedWorkflow === btn.key;
              return (
                <button
                  key={btn.key}
                  onClick={() => handleWorkflowChange(btn.key)}
                  style={{
                    padding: '10px 18px',
                    borderRadius: '100px',
                    border: isSelected ? `1px solid ${btn.activeColor}` : '1px solid rgba(255,255,255,0.08)',
                    backgroundColor: isSelected ? `${btn.activeColor}22` : 'rgba(255,255,255,0.02)',
                    color: isSelected ? '#ffffff' : '#94a3b8',
                    fontSize: '13px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: isSelected ? `0 4px 15px ${btn.activeColor}33` : 'none'
                  }}
                >
                  {btn.label}
                </button>
              );
            })}
          </div>


        </div>



        {/* ONE HORIZONTAL ROW OF AUTOMATION STEPS */}
        <div style={{
          position: 'relative',
          backgroundColor: '#0a0d14',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '24px',
          padding: '40px 32px',
          boxShadow: '0 25px 60px rgba(0,0,0,0.7)',
          overflowX: 'auto'
        }}>

          {/* Top Progress Line Bar (ABOVE CARDS) */}
          <div style={{
            position: 'relative',
            minWidth: '1050px',
            marginBottom: '28px',
            padding: '0 60px'
          }}>
            {/* Base Track Line */}
            <div style={{
              height: '3px',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              borderRadius: '100px',
              position: 'relative'
            }}>
              {/* Active Animated Progress Beam */}
              <div style={{
                height: '100%',
                width: `${((activeStep + 1) / stepsCount) * 100}%`,
                background: 'linear-gradient(90deg, #38bdf8 0%, #a855f7 50%, #34d399 100%)',
                transition: 'width 0.5s ease',
                boxShadow: '0 0 15px rgba(56, 189, 248, 0.8)',
                borderRadius: '100px'
              }} />
            </div>

            {/* Step Node Dots along the top line */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              position: 'absolute',
              top: '-5px',
              left: '60px',
              right: '60px',
              pointerEvents: 'none'
            }}>
              {currentFlow.steps.map((step, idx) => {
                const isActive = activeStep === idx;
                const isPast = activeStep >= idx;
                return (
                  <div
                    key={idx}
                    style={{
                      width: '14px',
                      height: '14px',
                      borderRadius: '50%',
                      backgroundColor: isPast ? step.color : '#0f172a',
                      border: `2px solid ${isPast ? step.color : 'rgba(255, 255, 255, 0.2)'}`,
                      boxShadow: isActive ? `0 0 14px ${step.color}` : 'none',
                      transition: 'all 0.3s ease'
                    }}
                  />
                );
              })}
            </div>
          </div>

          {/* Horizontal Steps Grid / Flex Row */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'stretch',
            gap: '20px',
            minWidth: '1050px',
            position: 'relative',
            zIndex: 1
          }}>
            {currentFlow.steps.map((step, idx) => {
              const isActive = activeStep === idx;
              const isPast = activeStep > idx;

              return (
                <div
                  key={idx}
                  onClick={() => {
                    setActiveStep(idx);
                    setIsPlaying(false);
                  }}
                  style={{
                    flex: '1 1 0px',
                    backgroundColor: isActive
                      ? 'rgba(255, 255, 255, 0.05)'
                      : isPast
                      ? 'rgba(255, 255, 255, 0.02)'
                      : 'rgba(255, 255, 255, 0.015)',
                    border: `1.5px solid ${
                      isActive ? step.color : isPast ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.06)'
                    }`,
                    borderRadius: '20px',
                    padding: '24px 20px',
                    cursor: 'pointer',
                    transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                    transform: isActive ? 'translateY(-6px)' : 'translateY(0)',
                    boxShadow: isActive ? `0 12px 30px ${step.color}33` : 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    {/* Top Row: Step Number & Icon */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                      <div style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '12px',
                        backgroundColor: isActive ? `${step.color}22` : 'rgba(255, 255, 255, 0.04)',
                        border: `1px solid ${isActive ? step.color : 'rgba(255, 255, 255, 0.08)'}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.3s ease'
                      }}>
                        {step.icon}
                      </div>

                      <span style={{
                        fontSize: '12px',
                        fontWeight: 800,
                        fontFamily: 'monospace',
                        color: isActive ? step.color : '#64748b',
                        backgroundColor: 'rgba(255, 255, 255, 0.04)',
                        padding: '3px 8px',
                        borderRadius: '6px'
                      }}>
                        STEP {step.num}
                      </span>
                    </div>

                    {/* Step Category Sub-badge */}
                    <span style={{
                      fontSize: '10px',
                      fontWeight: 800,
                      color: isActive ? step.color : '#64748b',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      display: 'block',
                      marginBottom: '6px'
                    }}>
                      {step.sub}
                    </span>

                    {/* Title */}
                    <h4 style={{
                      fontSize: '16px',
                      fontWeight: 700,
                      color: isActive ? '#ffffff' : '#cbd5e1',
                      marginBottom: '10px',
                      lineHeight: 1.3
                    }}>
                      {step.title}
                    </h4>

                    {/* Description */}
                    <p style={{
                      fontSize: '13px',
                      color: isActive ? '#94a3b8' : '#64748b',
                      lineHeight: 1.5,
                      margin: 0
                    }}>
                      {step.desc}
                    </p>
                  </div>

                  {/* Active Indicator Pulse Bar */}
                  <div style={{ marginTop: '20px', paddingTop: '14px', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
                    {isActive ? (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', fontWeight: 700, color: step.color }}>
                        <Sparkles size={13} className="spin-slow" />
                        <span>PROCESSING...</span>
                      </div>
                    ) : isPast ? (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', fontWeight: 600, color: '#34d399' }}>
                        <CheckCircle2 size={13} />
                        <span>COMPLETED</span>
                      </div>
                    ) : (
                      <div style={{ fontSize: '11px', color: '#475569', fontWeight: 500 }}>
                        QUEUED
                      </div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>

          {/* Live Execution Console Line */}
          <div style={{
            marginTop: '36px',
            backgroundColor: '#040609',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '12px',
            padding: '14px 20px',
            fontFamily: 'monospace',
            fontSize: '12px',
            color: '#34d399',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: currentFlow.steps[activeStep].color,
                boxShadow: `0 0 8px ${currentFlow.steps[activeStep].color}`
              }} />
              <span>
                [AUTO-LOOP STEP {currentFlow.steps[activeStep].num}/05]: Executing "{currentFlow.steps[activeStep].title}" — {currentFlow.steps[activeStep].desc}
              </span>
            </div>
            <span style={{ color: '#64748b' }}>LATENCY: 120ms</span>
          </div>

        </div>

      </div>
    </section>
  );
}
