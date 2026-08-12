'use client';

import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(1); // Default Q2 open like in screenshot

  const faqs = [
    {
      q: "Will this replace my team?",
      a: "No. AI and automation are designed to augment your team, not replace them. We eliminate repetitive, low-value tasks so your team can focus on high-impact strategic work and customer relationships."
    },
    {
      q: "What’s the difference between AI and automation?",
      a: "Automation typically follows defined rules to perform tasks without manual input (e.g., sending reminders or updating systems). AI adds intelligence—such as making decisions, summarising data, or generating content—based on context and learning."
    },
    {
      q: "How long does it take to see results?",
      a: "Most client automations are fully deployed and operational within 2 to 4 weeks. You will start seeing immediate time savings and efficiency gains as soon as your first workflow goes live."
    },
    {
      q: "Is AI suitable for small or mid-sized businesses?",
      a: "Yes! Small and mid-sized businesses often see the highest ROI from AI automation because it allows them to operate with the efficiency and speed of an enterprise without adding headcount."
    },
    {
      q: "What types of processes can be automated with AI?",
      a: "We automate lead qualification, sales follow-ups, client onboarding, invoice management, review collection, customer support tickets, content generation, and custom data processing."
    },
    {
      q: "What tools or platforms do you work with?",
      a: "We integrate with all major tools including Make.com, n8n, OpenAI, Anthropic, HubSpot, Salesforce, ClickUp, Monday.com, Calendly, Typeform, Stripe, and custom REST APIs."
    }
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="section-xl" style={{ padding: '100px 0', backgroundColor: '#010101' }}>
      <div className="container" style={{ maxWidth: '1080px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Section Header */}
        <div style={{ marginBottom: '56px' }}>
          <h2 style={{
            fontSize: 'clamp(36px, 5.5vw, 56px)',
            fontWeight: 700,
            lineHeight: 1.15,
            color: '#ffffff',
            letterSpacing: '-0.02em',
            margin: 0
          }}>
            FAQs.{' '}
            <span style={{ color: '#94a3b8', fontWeight: 400 }}>
              We’ve answered some of the most common questions below about how we work and what to expect.
            </span>
          </h2>
        </div>

        {/* Accordion Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '12px',
                  padding: '24px 32px',
                  transition: 'background-color 0.2s ease, border-color 0.2s ease',
                  cursor: 'pointer'
                }}
                onClick={() => toggle(idx)}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '20px'
                }}>
                  <span style={{
                    fontSize: '18px',
                    fontWeight: 500,
                    color: isOpen ? '#ffffff' : '#cbd5e1',
                    lineHeight: 1.4
                  }}>
                    {faq.q}
                  </span>
                  
                  <div style={{ color: '#94a3b8', flexShrink: 0 }}>
                    {isOpen ? <X size={20} /> : <Plus size={20} />}
                  </div>
                </div>

                {isOpen && (
                  <p style={{
                    fontSize: '15px',
                    color: '#94a3b8',
                    lineHeight: 1.65,
                    marginTop: '16px',
                    marginBottom: 0,
                    fontWeight: 400
                  }}>
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
