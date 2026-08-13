'use client';

import React from 'react';
import { Cpu, Zap, Database, MessageSquare, Bot, Code, CheckCircle, ExternalLink, ArrowRight } from 'lucide-react';

export default function EngineerProjects() {
  const projects = [
    {
      title: "Autonomous Sales Intake & CRM Agent",
      category: "Sales Automation",
      metrics: "94% Speed Increase • 120s SLA",
      description: "End-to-end sales lead processing pipeline. Parses multi-channel web forms, enriches lead data via HubSpot & Apollo API, scores intent using GPT-4o, and dispatches instant personalized SMS booking links.",
      stack: ["OpenAI GPT-4o", "HubSpot API", "Twilio SMS", "Make.com"],
      color: "#38bdf8"
    },
    {
      title: "Vision OCR Invoice & Ledger Sync Engine",
      category: "Finance & Accounting",
      metrics: "99.8% Field Precision • 0 Manual Data Entry",
      description: "Automated AP accounting pipeline. Scans complex PDF invoices using Claude 3.5 Sonnet Vision, validates PO numbers against ERP rules, and syncs reconciled entries into QuickBooks & Stripe API.",
      stack: ["Claude 3.5 Sonnet", "Vision OCR", "QuickBooks API", "Stripe API"],
      color: "#c084fc"
    },
    {
      title: "24/7 Conversational Voice AI Representative",
      category: "Customer Support & Voice",
      metrics: "<350ms Audio Latency • 1,200 Calls/Day",
      description: "Ultra-low-latency voice AI agent capable of handling live inbound client calls, answering dynamic FAQs, taking appointments, and executing real-time database lookups during phone conversations.",
      stack: ["Retell AI", "Vapi API", "Twilio", "Python FastAPI"],
      color: "#34d399"
    },
    {
      title: "Multi-Vector Enterprise RAG Engine",
      category: "Knowledge Base AI",
      metrics: "10M+ Documents Indexed • 99.4% Retrieval Accuracy",
      description: "Custom hybrid search system combining semantic vector embeddings with keyword BM25 retrieval across millions of enterprise PDFs, Notion documents, and SQL database records.",
      stack: ["Pinecone Vector DB", "LangChain", "Llama 3", "Supabase"],
      color: "#f59e0b"
    },
    {
      title: "HR Resume Screening & Scoring Bot",
      category: "Recruitment & Operations",
      metrics: "85% Time Savings • 500+ Applicants / Hr",
      description: "Autonomous HR screening pipeline that extracts resume PDF text, evaluates candidates against strict job descriptions using custom rubric prompts, and schedules top talent interviews on Calendly.",
      stack: ["Python FastAPI", "OpenAI API", "Workday API", "Calendly"],
      color: "#ec4899"
    },
    {
      title: "E-Commerce Review & Sentiment Analyzer",
      category: "E-Commerce & Marketing",
      metrics: "Real-time Escalation • 10k Reviews / Day",
      description: "Continuous sentiment monitoring bot for Shopify stores. Categorizes customer product reviews, auto-responds to positive feedback, and dispatches urgent Slack alerts for critical support cases.",
      stack: ["n8n Workflows", "Shopify API", "Slack Webhooks", "GPT-4o"],
      color: "#6366f1"
    }
  ];

  return (
    <section id="projects" style={{ padding: '100px 0', backgroundColor: '#06080d', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 64px auto' }}>
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
            <Code size={15} color="#38bdf8" />
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#38bdf8', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              DEPLOYED ARCHITECTURES & SYSTEMS
            </span>
          </div>

          <h2 style={{
            fontSize: 'clamp(36px, 5vw, 54px)',
            fontWeight: 800,
            color: '#ffffff',
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            marginBottom: '18px'
          }}>
            Featured Enterprise Projects
          </h2>
          <p style={{ fontSize: '17px', color: '#94a3b8', margin: 0 }}>
            A curated portfolio of production-grade AI agents, RAG engines, and automated pipelines built for client organizations.
          </p>
        </div>

        {/* 6 Projects Portfolio Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '32px' }}>
          {projects.map((proj, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '24px',
                padding: '36px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.35s ease'
              }}
              className="hover-card-glow"
            >
              <div>
                {/* Top Badge & Category */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <span style={{
                    fontSize: '12px',
                    fontWeight: 700,
                    color: proj.color,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    backgroundColor: `${proj.color}15`,
                    border: `1px solid ${proj.color}33`,
                    padding: '4px 12px',
                    borderRadius: '100px'
                  }}>
                    {proj.category}
                  </span>

                  <span style={{ fontSize: '12px', color: '#64748b', fontWeight: 600 }}>
                    {proj.metrics}
                  </span>
                </div>

                {/* Title */}
                <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#ffffff', marginBottom: '14px', lineHeight: 1.25 }}>
                  {proj.title}
                </h3>

                {/* Description */}
                <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: 1.6, marginBottom: '24px' }}>
                  {proj.description}
                </p>
              </div>

              {/* Tech Badges Stack */}
              <div>
                <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {proj.stack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#cbd5e1',
                        fontSize: '12px',
                        fontWeight: 600,
                        padding: '4px 10px',
                        borderRadius: '6px'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
