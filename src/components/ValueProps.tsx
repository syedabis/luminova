'use client';

import React from 'react';
import { Gauge, PiggyBank, Award } from 'lucide-react';

export default function ValueProps() {
  const cards = [
    {
      icon: <Gauge size={20} color="#a855f7" />,
      title: "BOOST PROFITABILITY",
      desc: "Businesses adopting AI report a 38% increase in profitability (Accenture). Automation and AI can drastically reduce time-consuming tasks—like data entry, client onboarding, or reporting."
    },
    {
      icon: <PiggyBank size={20} color="#a855f7" />,
      title: "EARLY ACTION. ENDURING IMPACT.",
      desc: "B2B service teams that embrace AI-powered automation early aren't just saving time — they're unlocking compounding advantages. From faster workflows and leaner operations to elevated customer experiences and new revenue streams, the payoff for early adoption is real."
    },
    {
      icon: <Award size={20} color="#a855f7" />,
      title: "PERSONALISED JOURNEYS, LASTING LOYALTY",
      desc: "AI-powered personalisation is reshaping how businesses retain customers. By analysing behaviour, preferences, and patterns in real time, we help you deliver tailored experiences that resonate deeply—turning one-time buyers into loyal advocates."
    }
  ];

  return (
    <section className="section-xl" style={{ padding: '60px 0 100px 0', backgroundColor: '#010101' }}>
      <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px' }}>
          {cards.map((card, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start'
              }}
            >
              {/* Icon Square Badge */}
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '10px',
                backgroundColor: '#181a20',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px'
              }}>
                {card.icon}
              </div>

              {/* Uppercase Bold Title */}
              <h3 style={{
                fontSize: '15px',
                fontWeight: 700,
                color: '#ffffff',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                marginBottom: '16px',
                lineHeight: 1.3
              }}>
                {card.title}
              </h3>

              {/* Description Paragraph */}
              <p style={{
                fontSize: '15px',
                color: '#94a3b8',
                lineHeight: 1.65,
                fontWeight: 400,
                margin: 0
              }}>
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
