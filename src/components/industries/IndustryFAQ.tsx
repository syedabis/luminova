'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function IndustryFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How long does it take to deploy a custom AI automation for our industry?",
      answer: "Most custom industry automations are deployed within 2 to 4 weeks. We start with a 3-day discovery and system audit, followed by rapid prototyping, testing in a staging environment, and seamless production integration."
    },
    {
      question: "Can your AI workflows integrate with our legacy industry tools & ERPs?",
      answer: "Yes! We build custom webhooks, REST API connectors, and middleware agents that bridge modern AI capabilities with legacy software like Clio, Yardi, Epic EHR, QuickBooks, Salesforce, and custom SQL databases."
    },
    {
      question: "Is our industry data kept completely confidential?",
      answer: "100%. We sign strict non-disclosure agreements (NDAs) and Business Associate Agreements (BAAs) for HIPAA compliance. Your proprietary data is never used to train public AI models and can be hosted within your private cloud."
    },
    {
      question: "How do you handle edge cases or when an AI agent is unsure of an answer?",
      answer: "We design all automated agents with 'Human-in-the-Loop' safeguards. If confidence falls below a configured threshold (e.g. 95%), the agent seamlessly escalates the task to a human team member with full context logged."
    },
    {
      question: "What support and maintenance options do you provide post-deployment?",
      answer: "We offer continuous 24/7 system monitoring, monthly AI model optimizations, schema updates when third-party APIs change, and dedicated priority support to guarantee maximum uptime."
    },
    {
      question: "How do we measure ROI after implementation?",
      answer: "Before launch, we establish clear baseline KPIs (e.g. client intake speed, call resolution rate, hours saved per employee). We build custom analytics dashboards so you can track real-time cost savings and volume processed."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="industry-faq" className="section-xl" style={{ padding: '90px 0', backgroundColor: '#010101' }}>
      <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
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
            <HelpCircle size={15} color="#c084fc" />
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#c084fc', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              FREQUENTLY ASKED QUESTIONS
            </span>
          </div>

          <h2 style={{
            fontSize: 'clamp(32px, 4.5vw, 48px)',
            fontWeight: 800,
            color: '#ffffff',
            letterSpacing: '-0.03em',
            lineHeight: 1.15
          }}>
            Got Questions About Industry AI Implementation?
          </h2>
        </div>

        {/* Accordion List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.025)',
                  border: `1px solid ${isOpen ? 'rgba(192, 132, 252, 0.3)' : 'rgba(255, 255, 255, 0.08)'}`,
                  borderRadius: '16px',
                  overflow: 'hidden',
                  transition: 'all 0.25s ease'
                }}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  style={{
                    width: '100%',
                    padding: '24px 28px',
                    backgroundColor: 'transparent',
                    border: 'none',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                    textAlign: 'left',
                    cursor: 'pointer'
                  }}
                >
                  <span style={{ fontSize: '17px', fontWeight: 700, lineHeight: 1.4 }}>
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    color="#c084fc"
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.25s ease',
                      flexShrink: 0
                    }}
                  />
                </button>

                {isOpen && (
                  <div style={{
                    padding: '0 28px 24px 28px',
                    color: '#94a3b8',
                    fontSize: '15px',
                    lineHeight: 1.65,
                    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                    paddingTop: '16px'
                  }}>
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
