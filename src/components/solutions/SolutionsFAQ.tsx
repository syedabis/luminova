'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function SolutionsFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Do we need to switch from our existing CRM or ERP software?",
      answer: "Not at all. Our core design principle is zero-friction integration. We build custom API connectors and middleware workflows that connect directly into your current CRM (HubSpot, Salesforce), billing tools, or databases."
    },
    {
      question: "How are solution automations customized for our specific workflow?",
      answer: "During our initial strategy blueprint session, we map out every manual step in your process. We write custom system prompts, configure logic decision trees, and map data fields to match your exact business logic."
    },
    {
      question: "What happens if a third-party API (like HubSpot or OpenAI) updates or breaks?",
      answer: "All our enterprise solutions are backed by active error monitoring and API fallbacks. If an endpoint undergoes a breaking change, our automated alert system notifies our engineering team and triggers secondary failover workflows immediately."
    },
    {
      question: "Can these solutions handle high volumes of leads or calls simultaneously?",
      answer: "Yes! Because our architectures leverage cloud microservices (AWS, Supabase, Make enterprise, serverless functions), they automatically scale horizontally to process thousands of concurrent calls or form submissions without delay."
    },
    {
      question: "How do you ensure AI responses are 100% accurate and don't make things up?",
      answer: "We utilize Retrieval-Augmented Generation (RAG) with strict temperature settings and system constraints. The AI model is strictly required to quote only from your approved knowledge base, with instant human escalation for any edge cases."
    },
    {
      question: "What is the typical deployment timeline for a full solution build?",
      answer: "Initial prototypes are delivered within 7 to 10 days. Full end-to-end testing, security audits, and production integration typically take 2 to 3 weeks total."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="solutions-faq" className="section-xl" style={{ padding: '90px 0', backgroundColor: '#090b0e', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
      <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
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
            Questions About Our Automation Solutions?
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
