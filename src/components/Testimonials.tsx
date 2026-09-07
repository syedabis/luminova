'use client';

import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const bottomCards = [
    {
      beforeLabel: "BEFORE",
      beforeQuote: '"Our sales team spent hours manually qualifying leads and updating HubSpot CRM. We lost high-intent prospects during weekends and off-hours."',
      afterLabel: "AFTER",
      afterQuote: '"Cortexa built a 24/7 AI Lead Responder that engages inbound leads instantly. Our lead-to-meeting conversion rate jumped by 42% in 30 days."',
      author: "David Chen",
      role: "VP of Growth, Nexus Logistics",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80"
    },
    {
      beforeLabel: "BEFORE",
      beforeQuote: '"Chasing overdue client invoices and sending manual payment reminders was dragging down our cash flow and taking up half our Operations Manager\'s time."',
      afterLabel: "AFTER",
      afterQuote: '"The automated smart invoice & review collection workflow Cortexa deployed cut late payments to near zero and generated 45+ new 5-star reviews on autopilot."',
      author: "Sarah Jenkins",
      role: "Operations Director, Apex B2B Services",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
    },
    {
      beforeLabel: "BEFORE",
      beforeQuote: '"We wanted an enterprise AI knowledge bot trained on our private company SOPs and technical docs, but couldn\'t risk data leaks or external API vulnerabilities."',
      afterLabel: "AFTER",
      afterQuote: '"Cortexa engineered a secure, fine-tuned RAG assistant for our internal team. It reduced employee onboarding time by 50% with zero data privacy concerns."',
      author: "Elena Rostova",
      role: "Chief Technology Officer, Vantage Cloud",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section id="testimonials" className="section-xl" style={{ padding: '100px 0', backgroundColor: '#010101', overflow: 'hidden' }}>
      <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 56px auto' }}>
          <h2 style={{
            fontSize: 'clamp(36px, 5.5vw, 56px)',
            fontWeight: 800,
            lineHeight: 1.1,
            color: '#ffffff',
            letterSpacing: '-0.03em',
            margin: 0
          }}>
            Founders don't just automate. <span style={{ color: '#10b981' }}>They scale.</span>
          </h2>
        </div>

        {/* Featured Top Split Card (Before vs After) */}
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.025)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '20px',
          padding: '36px 40px',
          marginBottom: '24px'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px'
          }}>
            
            {/* Left Column: BEFORE CORTEXA */}
            <div style={{ borderRight: '1px solid rgba(255, 255, 255, 0.06)', paddingRight: '20px' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                marginBottom: '20px'
              }}>
                <span style={{ color: '#64748b', fontSize: '12px' }}>•</span>
                <span style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  color: '#64748b',
                  textTransform: 'uppercase'
                }}>
                  BEFORE CORTEXA
                </span>
              </div>

              <p style={{
                fontSize: '17px',
                color: '#64748b',
                lineHeight: 1.65,
                fontStyle: 'italic',
                margin: 0,
                fontWeight: 400
              }}>
                "Our team was losing 25+ hours every week handling manual client onboarding, spreadsheet updates, and repetitive support tickets. Operations were bottlenecked."
              </p>
            </div>

            {/* Right Column: AFTER CORTEXA */}
            <div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                marginBottom: '20px'
              }}>
                <span style={{ color: '#10b981', fontSize: '12px' }}>•</span>
                <span style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  color: '#10b981',
                  textTransform: 'uppercase'
                }}>
                  AFTER CORTEXA
                </span>
              </div>

              <h3 style={{
                fontSize: '22px',
                fontWeight: 700,
                color: '#ffffff',
                lineHeight: 1.35,
                marginBottom: '32px'
              }}>
                "Cortexa deployed an automated AI workflow that reduced client onboarding time by 80% and saved our executive team 30+ hours weekly."
              </h3>

              {/* Divider & Author Meta */}
              <div style={{
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                paddingTop: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                    alt="Marcus Vance"
                    style={{ width: '42px', height: '42px', borderRadius: '50%', objectFit: 'cover' }}
                  />
                  <div>
                    <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#ffffff', margin: 0 }}>
                      Marcus Vance
                    </h4>
                    <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>
                      CEO & Co-Founder, SaaSify Enterprise
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '3px' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} fill="#10b981" color="#10b981" />
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Bottom 3 Grid Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '20px'
        }}>
          {bottomCards.map((card, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.025)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '16px',
                padding: '28px 24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease'
              }}
              className="hover-card-glow"
            >
              <div>
                {/* BEFORE */}
                <div style={{ marginBottom: '20px' }}>
                  <span style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    color: '#64748b',
                    textTransform: 'uppercase',
                    display: 'block',
                    marginBottom: '8px'
                  }}>
                    {card.beforeLabel}
                  </span>
                  <p style={{
                    fontSize: '13px',
                    color: '#64748b',
                    lineHeight: 1.6,
                    fontStyle: 'italic',
                    margin: 0
                  }}>
                    {card.beforeQuote}
                  </p>
                </div>

                <div style={{ borderTop: '1px stroke rgba(255,255,255,0.06)', margin: '16px 0' }} />

                {/* AFTER */}
                <div style={{ marginBottom: '28px' }}>
                  <span style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    color: '#10b981',
                    textTransform: 'uppercase',
                    display: 'block',
                    marginBottom: '8px'
                  }}>
                    {card.afterLabel}
                  </span>
                  <p style={{
                    fontSize: '15px',
                    color: '#ffffff',
                    fontWeight: 700,
                    lineHeight: 1.5,
                    margin: 0
                  }}>
                    {card.afterQuote}
                  </p>
                </div>
              </div>

              {/* Author Footer */}
              <div style={{
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                paddingTop: '18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '10px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <img
                    src={card.avatar}
                    alt={card.author}
                    style={{ width: '38px', height: '38px', borderRadius: '50%', objectFit: 'cover' }}
                  />
                  <div>
                    <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#ffffff', margin: 0 }}>
                      {card.author}
                    </h4>
                    <p style={{ fontSize: '12px', color: '#64748b', margin: 0 }}>
                      {card.role}
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '2px' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} fill="#10b981" color="#10b981" />
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
