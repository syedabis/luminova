'use client';

import React from 'react';
import SpotlightCard from './SpotlightCard';

export default function Solutions() {
  const solutions = [
    {
      category: "FINANCE",
      title: "Smart Invoice Reminders",
      desc: "Automate invoice follow-ups with smart triggers to reduce late payments and boost cash flow — no manual chasing required."
    },
    {
      category: "OPERATIONS",
      title: "Automated Review Collection",
      desc: "Trigger review requests post-service or milestone to grow 5-star feedback and build trust — without lifting a finger."
    },
    {
      category: "OPERATIONS",
      title: "Automated Onboarding",
      desc: "Deliver a smooth client onboarding journey with automated emails, tasks, and scheduling — all synced to your systems."
    },
    {
      category: "MARKETING",
      title: "Lead Magnet Nurturing",
      desc: "Turn downloads into leads with automated email journeys that follow up, educate, and drive conversion — on autopilot."
    },
    {
      category: "SALES",
      title: "Automated Booking Systems →",
      desc: "Let leads instantly book the right time with the right person — synced with your calendar, CRM, and workflows."
    },
    {
      category: "SALES",
      title: "Smart Lead Responders",
      desc: "Auto-respond to new leads in seconds with personalised replies, booking links, and CRM updates — speed wins deals."
    }
  ];

  return (
    <section id="solutions" className="section-xl" style={{ padding: '100px 0', backgroundColor: '#010101' }}>
      <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Section Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: '40px',
          marginBottom: '64px',
          flexWrap: 'wrap'
        }}>
          <h2 style={{
            fontSize: 'clamp(40px, 6vw, 64px)',
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
            margin: 0
          }}>
            Solutions
          </h2>
          <p style={{
            fontSize: 'clamp(16px, 1.8vw, 20px)',
            color: '#94a3b8',
            maxWidth: '560px',
            lineHeight: 1.6,
            margin: 0
          }}>
            Discover a range of smart automation solutions designed to save time, reduce manual work, and unlock new efficiencies across your business.
          </p>
        </div>

        {/* 3x2 Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '24px' }}>
          {solutions.map((item, idx) => (
            <SpotlightCard
              key={idx}
              className="custom-spotlight-card"
              spotlightColor="rgba(16, 185, 129, 0.2)"
            >
              {/* Category Tag */}
              <span style={{
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.08em',
                color: '#64748b',
                textTransform: 'uppercase',
                marginBottom: '16px',
                display: 'block'
              }}>
                {item.category}
              </span>

              {/* Title */}
              <h3 style={{
                fontSize: '22px',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '16px',
                lineHeight: 1.25,
                letterSpacing: '-0.01em'
              }}>
                {item.title}
              </h3>

              {/* Description */}
              <p style={{
                fontSize: '15px',
                color: '#94a3b8',
                lineHeight: 1.65,
                margin: 0,
                fontWeight: 400
              }}>
                {item.desc}
              </p>
            </SpotlightCard>
          ))}
        </div>

      </div>
    </section>
  );
}
