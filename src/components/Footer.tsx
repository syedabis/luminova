'use client';

import React from 'react';
import Link from 'next/link';
import { Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#090b0e', borderTop: '1px solid rgba(255, 255, 255, 0.08)', padding: '80px 0 40px 0', color: '#94a3b8' }}>
      <div className="container">
        
        {/* Main Footer Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '48px', marginBottom: '64px' }}>
          
          {/* Brand Info Column */}
          <div style={{ gridColumn: 'span 1' }}>
            <Link href="/" style={{ display: 'inline-block', marginBottom: '20px' }}>
              <img
                src="/images/asset_2_685639011aed581e24280e05_Logo-flat.svg"
                alt="Formiqa Logo"
                style={{ height: '30px', width: 'auto' }}
              />
            </Link>
            <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#64748b', maxWidth: '280px' }}>
              Building seamless, scalable automations that power complex operations behind the scenes.
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h4 style={{ fontSize: '15px', fontWeight: 600, color: '#ffffff', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Services
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><Link href="#services" style={{ color: '#94a3b8', fontSize: '14px', textDecoration: 'none' }}>Strategy + Delivery</Link></li>
              <li><Link href="#services" style={{ color: '#94a3b8', fontSize: '14px', textDecoration: 'none' }}>AI & Automation Audits</Link></li>
              <li><Link href="#services" style={{ color: '#94a3b8', fontSize: '14px', textDecoration: 'none' }}>Consulting & Advisory</Link></li>
              <li><Link href="#services" style={{ color: '#94a3b8', fontSize: '14px', textDecoration: 'none' }}>Support & Maintenance</Link></li>
            </ul>
          </div>

          {/* Industries Column */}
          <div>
            <h4 style={{ fontSize: '15px', fontWeight: 600, color: '#ffffff', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              <Link href="/industries" style={{ color: '#ffffff', textDecoration: 'none' }}>Industries</Link>
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><Link href="/industries#professional-services" style={{ color: '#94a3b8', fontSize: '14px', textDecoration: 'none' }}>Professional Services</Link></li>
              <li><Link href="/industries#finance" style={{ color: '#94a3b8', fontSize: '14px', textDecoration: 'none' }}>Finance & FinTech</Link></li>
              <li><Link href="/industries#healthcare" style={{ color: '#94a3b8', fontSize: '14px', textDecoration: 'none' }}>Healthcare & Life Sciences</Link></li>
              <li><Link href="/industries#real-estate" style={{ color: '#94a3b8', fontSize: '14px', textDecoration: 'none' }}>Real Estate & Property</Link></li>
              <li><Link href="/industries#recruitment" style={{ color: '#94a3b8', fontSize: '14px', textDecoration: 'none' }}>Recruitment & HR</Link></li>
              <li><Link href="/industries#technology" style={{ color: '#94a3b8', fontSize: '14px', textDecoration: 'none' }}>Technology & Software</Link></li>
            </ul>
          </div>

          {/* Solutions Column */}
          <div>
            <h4 style={{ fontSize: '15px', fontWeight: 600, color: '#ffffff', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              <Link href="/solutions" style={{ color: '#ffffff', textDecoration: 'none' }}>Solutions</Link>
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><Link href="/solutions#sales" style={{ color: '#94a3b8', fontSize: '14px', textDecoration: 'none' }}>Sales Automations</Link></li>
              <li><Link href="/solutions#marketing" style={{ color: '#94a3b8', fontSize: '14px', textDecoration: 'none' }}>Marketing Journeys</Link></li>
              <li><Link href="/solutions#operations" style={{ color: '#94a3b8', fontSize: '14px', textDecoration: 'none' }}>Operations & Pipelines</Link></li>
              <li><Link href="/solutions#finance" style={{ color: '#94a3b8', fontSize: '14px', textDecoration: 'none' }}>Finance & Revenue</Link></li>
              <li><Link href="/solutions#cx" style={{ color: '#94a3b8', fontSize: '14px', textDecoration: 'none' }}>Customer Experience</Link></li>
            </ul>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 style={{ fontSize: '15px', fontWeight: 600, color: '#ffffff', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Company
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><Link href="#technology" style={{ color: '#94a3b8', fontSize: '14px', textDecoration: 'none' }}>Technology</Link></li>
              <li><Link href="#faq" style={{ color: '#94a3b8', fontSize: '14px', textDecoration: 'none' }}>FAQs</Link></li>
              <li><Link href="#contact" style={{ color: '#94a3b8', fontSize: '14px', textDecoration: 'none' }}>Get in Touch</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Disclaimer & Copyright Row */}
        <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.06)', paddingTop: '32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          
          <div style={{ fontSize: '13px', color: '#64748b' }}>
            © {new Date().getFullYear()} Formiqa. All rights reserved. Built with Next.js.
          </div>

          {/* Social Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <a
              href="https://www.linkedin.com/company/formiqa"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                transition: 'background-color 0.2s ease'
              }}
            >
              <Linkedin size={18} />
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                transition: 'background-color 0.2s ease'
              }}
            >
              <Youtube size={18} />
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}
