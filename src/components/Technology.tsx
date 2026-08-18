'use client';

import React, { useState } from 'react';
import LogoLoop from './LogoLoop';

export default function Technology() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'AI Models', 'CRMs & Sales', 'Productivity', 'Forms & Scheduling', 'Communication'];

  const tools = [
    { name: 'OpenAI GPT-4', category: 'AI Models', logo: '/images/asset_38_68515af0e8671c59c291543e_openai-gpt-3.webp' },
    { name: 'Anthropic Claude', category: 'AI Models', logo: '/images/asset_37_68515b0631a74f2ee6825c73_anthropic-claude.webp' },
    { name: 'Gemini AI', category: 'AI Models', logo: '/images/asset_39_68515b3b40c1c26f67fff651_gemini-ai.webp' },
    { name: 'Groq', category: 'AI Models', logo: '/images/asset_36_68515b18ec15b50f5d3b7370_groq.webp' },
    { name: 'HubSpot CRM', category: 'CRMs & Sales', logo: '/images/asset_43_68515b79fa79485d81cd7fca_hubspotcrm.webp' },
    { name: 'Salesforce', category: 'CRMs & Sales', logo: '/images/asset_40_68515b5f1f661445e55dbc01_salesforce.webp' },
    { name: 'Apollo.io', category: 'CRMs & Sales', logo: '/images/asset_19_6852adbea2bafeec4aa51db2_apollo.webp' },
    { name: 'Instantly', category: 'CRMs & Sales', logo: '/images/asset_20_6852ad4ee41ef30290eb79a1_instantly.webp' },
    { name: 'ClickUp', category: 'Productivity', logo: '/images/asset_41_68515bd33e141ac990f8ab97_clickup.webp' },
    { name: 'Monday.com', category: 'Productivity', logo: '/images/asset_42_68515bad425c97f62c070d7e_monday.webp' },
    { name: 'Calendly', category: 'Forms & Scheduling', logo: '/images/asset_33_68515e332789a3f7cfb3e2ed_calendly.webp' },
    { name: 'Typeform', category: 'Forms & Scheduling', logo: '/images/asset_35_68515d4c8f75c4c208a3fa6e_typeform.webp' },
    { name: 'Mailchimp', category: 'CRMs & Sales', logo: '/images/asset_24_68516164cbf3238518bcfb8e_mailchimp.webp' },
    { name: 'Microsoft Teams', category: 'Communication', logo: '/images/asset_14_68537ede643a128e5a0062ae_microsoft-teams.webp' },
    { name: 'Zoom', category: 'Communication', logo: '/images/asset_13_68537f0f98d1d0395cbae074_zoom-user.webp' },
    { name: 'DocuSign', category: 'Productivity', logo: '/images/asset_25_685160db3203fefeb000e800_docusign.webp' },
  ];

  const filteredTools = activeCategory === 'All' ? tools : tools.filter(t => t.category === activeCategory);

  // Split into 2 rows for dual-direction marquee loops
  const half = Math.ceil(filteredTools.length / 2);
  const row1Items = filteredTools.slice(0, half > 0 ? half : 1);
  const row2Items = filteredTools.slice(half);

  return (
    <section id="technology" className="section-xl" style={{ padding: '100px 0', backgroundColor: '#010101', overflow: 'hidden' }}>

      <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 40px auto' }}>
          <span style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', color: '#60a5fa', textTransform: 'uppercase', marginBottom: '12px', display: 'block' }}>
            SEAMLESS INTEGRATIONS
          </span>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 700, color: '#ffffff', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
            Connected with the platforms you already rely on.
          </h2>
        </div>

        {/* Categories Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '48px' }}>
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveCategory(cat)}
              style={{
                backgroundColor: activeCategory === cat ? '#ffffff' : 'rgba(255, 255, 255, 0.05)',
                color: activeCategory === cat ? '#010101' : '#94a3b8',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '8px 20px',
                borderRadius: '100px',
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

      </div>

      {/* Marquee Loop Container */}
      <div style={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
        
        {/* Row 1: Left Auto Loop */}
        <LogoLoop
          logos={row1Items}
          direction="left"
          speed={60}
          logoHeight={58}
          gap={16}
          fadeOut
          fadeOutColor="#010101"
          renderItem={(tool) => (
            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '14px',
                padding: '16px 24px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '14px',
                whiteSpace: 'nowrap',
                height: '56px'
              }}
            >
              <img
                src={tool.logo}
                alt={tool.name}
                style={{ width: '24px', height: '24px', objectFit: 'contain' }}
              />
              <span style={{ fontSize: '15px', fontWeight: 600, color: '#f1f5f9' }}>
                {tool.name}
              </span>
            </div>
          )}
        />

        {/* Row 2: Right Auto Loop */}
        <LogoLoop
          logos={row2Items.length ? row2Items : row1Items}
          direction="right"
          speed={60}
          logoHeight={58}
          gap={16}
          fadeOut
          fadeOutColor="#010101"
          renderItem={(tool) => (
            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '14px',
                padding: '16px 24px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '14px',
                whiteSpace: 'nowrap',
                height: '56px'
              }}
            >
              <img
                src={tool.logo}
                alt={tool.name}
                style={{ width: '24px', height: '24px', objectFit: 'contain' }}
              />
              <span style={{ fontSize: '15px', fontWeight: 600, color: '#f1f5f9' }}>
                {tool.name}
              </span>
            </div>
          )}
        />

      </div>

    </section>
  );
}
