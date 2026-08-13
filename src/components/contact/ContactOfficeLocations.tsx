'use client';

import React from 'react';
import { MapPin, Building2, Clock, Globe } from 'lucide-react';

export default function ContactOfficeLocations() {
  const offices = [
    {
      city: "United States (HQ)",
      country: "San Francisco, USA",
      address: "500 Howard Street, Suite 400",
      cityZip: "San Francisco, CA 94105",
      timezone: "PST (UTC-8)",
      badgeColor: "#38bdf8"
    },
    {
      city: "Saudi Arabia",
      country: "Riyadh, KSA",
      address: "King Fahd Road, Al Olaya District",
      cityZip: "Riyadh 12214, Saudi Arabia",
      timezone: "AST (UTC+3)",
      badgeColor: "#c084fc"
    },
    {
      city: "Pakistan",
      country: "Lahore / Islamabad",
      address: "Gulberg III, Main Boulevard",
      cityZip: "Lahore 54000, Pakistan",
      timezone: "PKT (UTC+5)",
      badgeColor: "#34d399"
    }
  ];

  return (
    <section style={{ padding: '80px 0', backgroundColor: '#06080d', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 56px auto' }}>
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
            <Globe size={15} color="#c084fc" />
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#c084fc', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              GLOBAL PRESENCE
            </span>
          </div>

          <h2 style={{
            fontSize: 'clamp(32px, 4.5vw, 50px)',
            fontWeight: 800,
            color: '#ffffff',
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            marginBottom: '16px'
          }}>
            Our Global Engineering Hubs
          </h2>
          <p style={{ fontSize: '16px', color: '#94a3b8', margin: 0 }}>
            Serving enterprise clients across North America, the Middle East, and Asia with 24/7 continuous automation coverage.
          </p>
        </div>

        {/* 3 Office Location Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
          {offices.map((office, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.025)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '24px',
                padding: '32px',
                position: 'relative',
                overflow: 'hidden'
              }}
              className="hover-card-glow"
            >
              {/* Header Top Badge */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  backgroundColor: `${office.badgeColor}18`,
                  border: `1px solid ${office.badgeColor}44`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Building2 size={22} color={office.badgeColor} />
                </div>

                <span style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#94a3b8',
                  fontSize: '12px',
                  fontWeight: 600,
                  padding: '4px 12px',
                  borderRadius: '100px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <Clock size={12} color={office.badgeColor} />
                  {office.timezone}
                </span>
              </div>

              {/* City Title */}
              <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#ffffff', marginBottom: '4px' }}>
                {office.city}
              </h3>
              <p style={{ fontSize: '13px', color: office.badgeColor, fontWeight: 700, marginBottom: '20px' }}>
                {office.country}
              </p>

              {/* Address */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14px', color: '#cbd5e1', lineHeight: 1.5, marginBottom: '20px' }}>
                <MapPin size={16} color="#64748b" style={{ marginTop: '3px', flexShrink: 0 }} />
                <div>
                  <div>{office.address}</div>
                  <div>{office.cityZip}</div>
                </div>
              </div>

              <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', color: '#64748b' }}>Status</span>
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#34d399', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#34d399' }} />
                  Operational Hub
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
