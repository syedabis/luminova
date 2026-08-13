'use client';

import React from 'react';
import { Code } from 'lucide-react';

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
      title: "24/7 Smart Customer Support Chatbot",
      category: "Customer Support AI",
      metrics: "<500ms Response • 88% Resolution",
      description: "Context-aware multi-turn AI chatbot integrated with enterprise knowledge bases and CRM systems to resolve customer inquiries, troubleshoot issues, and escalate priority tickets automatically.",
      stack: ["OpenAI API", "Pinecone DB", "LangChain", "Next.js"],
      color: "#c084fc"
    },
    {
      title: "Conversational Voice AI Phone Bot",
      category: "Voice AI & Telephony",
      metrics: "<350ms Audio Latency • 1,200 Calls/Day",
      description: "Ultra-low-latency voice AI agent capable of handling live inbound client calls, answering dynamic FAQs, taking appointments, and executing real-time database lookups during phone conversations.",
      stack: ["Retell AI", "Vapi API", "Twilio Voice", "Python FastAPI"],
      color: "#34d399"
    },
    {
      title: "Social Media & Content Automation Engine",
      category: "Marketing & Social AI",
      metrics: "10x Content Output • 100% Automated",
      description: "Autonomous multi-platform social media engine that generates branded post graphics, drafts engaging copy, optimizes publishing schedules, and monitors comments across LinkedIn, Twitter & Instagram.",
      stack: ["Claude 3.5 Sonnet", "n8n Workflows", "Buffer API", "Canva API"],
      color: "#f59e0b"
    },
    {
      title: "HR Resume Screening & Candidate Scoring Bot",
      category: "HR & Talent Operations",
      metrics: "85% Time Savings • 500+ Applicants/Hr",
      description: "Autonomous HR screening pipeline that extracts resume PDF text, evaluates candidates against strict job descriptions using custom rubric prompts, and schedules top talent interviews on Calendly.",
      stack: ["Python FastAPI", "OpenAI API", "Workday API", "Calendly"],
      color: "#ec4899"
    },
    {
      title: "Smart Email Triaging & Auto-Responder Agent",
      category: "Email & Workflow Automation",
      metrics: "90% Inbox Reduction • Zero Delay",
      description: "Enterprise email assistant that categorizes incoming inbox messages, drafts hyper-personalized responses, extracts key action items, and syncs follow-up reminders to Google Workspace & Slack.",
      stack: ["Gmail API", "GPT-4o Vision", "Make.com", "Slack API"],
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
            A curated portfolio of production-grade AI agents, voice bots, and automated pipelines built for client organizations.
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
