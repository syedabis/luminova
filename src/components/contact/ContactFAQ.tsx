'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What happens after I submit a contact inquiry?",
      a: "Our lead automation architect reviews your input within 15 minutes. We schedule a brief 15-to-30 minute discovery call to map your software stack and present a fixed-scope proposal with clear KPIs."
    },
    {
      q: "Do you sign NDAs before discussing custom workflows?",
      a: "Yes, absolutely. We sign mutual non-disclosure agreements (NDAs) prior to reviewing proprietary SOPs, custom databases, internal CRM pipelines, or confidential client workflows."
    },
    {
      q: "How fast can an initial automation pilot be deployed?",
      a: "Our rapid proof-of-concept (PoC) pilots are deployed within 7 to 14 business days, allowing you to test live automated lead intake, voice AI, or invoice extraction without disrupting ongoing operations."
    },
    {
      q: "What software systems do you support for integration?",
      a: "We integrate with 500+ cloud applications, CRMs (HubSpot, Salesforce, GoHighLevel), ERPs (QuickBooks, Stripe, Xero), AI Models (OpenAI, Claude, Pinecone), Voice APIs (Retell AI, Vapi, Twilio), and custom REST/GraphQL webhooks."
    },
    {
      q: "What is your pricing and engagement model?",
      a: "We offer fixed-fee project implementations for custom builds, as well as monthly automation retainers for ongoing workflow monitoring, optimization, and AI model upgrades."
    }
  ];

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section style={{ padding: '90px 0', backgroundColor: '#010101', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '960px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
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
            <HelpCircle size={15} color="#38bdf8" />
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#38bdf8', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
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
            Everything You Need to Know Before Reaching Out
          </h2>
        </div>

        {/* Accordion FAQ List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: isOpen ? 'rgba(255, 255, 255, 0.035)' : 'rgba(255, 255, 255, 0.018)',
                  border: `1px solid ${isOpen ? 'rgba(56, 189, 248, 0.3)' : 'rgba(255, 255, 255, 0.08)'}`,
                  borderRadius: '18px',
                  padding: '24px 28px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onClick={() => toggleFAQ(idx)}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
                  <h3 style={{ fontSize: '17px', fontWeight: 700, color: isOpen ? '#38bdf8' : '#ffffff', margin: 0 }}>
                    {faq.q}
                  </h3>
                  <ChevronDown
                    size={18}
                    color={isOpen ? '#38bdf8' : '#94a3b8'}
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'none',
                      transition: 'transform 0.3s ease',
                      flexShrink: 0
                    }}
                  />
                </div>

                {isOpen && (
                  <p style={{
                    fontSize: '15px',
                    color: '#94a3b8',
                    lineHeight: 1.6,
                    marginTop: '16px',
                    marginBottom: 0,
                    borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                    paddingTop: '16px'
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
