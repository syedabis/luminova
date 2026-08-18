'use client';

import React from 'react';
import Link from 'next/link';
import { Linkedin, Youtube, Github, MapPin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#010101', padding: '12px', color: '#cbd5e1' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        
        {/* Loro Labs Inspired Card Container */}
        <div 
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '1800px',
            overflow: 'hidden',
            borderRadius: '24px',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            background: 'linear-gradient(180deg, hsl(0deg 0% 3.94%) 0%, hsl(0deg 0% 4.72%) 100%)'
          }}
        >
          {/* Subtle Top-Left Glow (adapted for Formiqa's primary green theme) */}
          <div style={{
            position: 'absolute',
            top: '-150px',
            left: '-150px',
            width: '350px',
            height: '350px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.12) 0%, rgba(16, 185, 129, 0) 70%)',
            pointerEvents: 'none',
            zIndex: 1
          }} />

          <div style={{ position: 'relative', zIndex: 10, display: 'flex', minHeight: '30rem', flexDirection: 'column' }}>
            
            {/* Top Grid Area */}
            <div style={{ flex: 1, borderBottom: '1px solid rgba(255,255,255,0.1)', padding: '56px 48px 40px 48px' }}>
              <div className="loro-footer-grid">
                
                {/* 1. Brand Column (Col Span 4) */}
                <div className="loro-col-span-4" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <Link href="/" style={{ display: 'inline-block' }}>
                    <img 
                      src="/images/Cortexa icon 5.png" 
                      alt="Cortexa Logo" 
                      style={{ height: '44px', width: 'auto', opacity: 0.95 }}
                    />
                  </Link>
                  <p style={{ fontSize: '14px', lineHeight: 1.5, color: '#94a3b8', maxWidth: '340px', margin: 0 }}>
                    Building seamless, scalable automations that power complex operations behind the scenes.
                  </p>
                  
                  {/* Social Icons Row */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', paddingTop: '8px' }}>
                    <a 
                      href="https://www.linkedin.com/company/formiqa" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label="LinkedIn"
                      style={{ color: '#cbd5e1', transition: 'color 0.2s', display: 'inline-flex' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#10b981'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#cbd5e1'}
                    >
                      <Linkedin size={20} />
                    </a>
                    
                    <a 
                      href="https://youtube.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label="YouTube"
                      style={{ color: '#cbd5e1', transition: 'color 0.2s', display: 'inline-flex' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#10b981'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#cbd5e1'}
                    >
                      <Youtube size={20} />
                    </a>
                    
                    <a 
                      href="https://github.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label="GitHub"
                      style={{ color: '#cbd5e1', transition: 'color 0.2s', display: 'inline-flex' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#10b981'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#cbd5e1'}
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>

                {/* 2. Quick Links Column (Col Span 2) */}
                <div className="loro-col-span-2" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <h3 style={{ fontSize: '12px', fontWeight: 700, color: '#ffffff', textTransform: 'uppercase', margin: 0, letterSpacing: '0.05em' }}>
                    Quick Links
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <li>
                      <Link href="/" className="footer-hover-link" style={{ '--link-c': '#F92C53' } as React.CSSProperties}>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="/solutions" className="footer-hover-link" style={{ '--link-c': '#00C9A7' } as React.CSSProperties}>
                        Solutions
                      </Link>
                    </li>
                    <li>
                      <Link href="/industries" className="footer-hover-link" style={{ '--link-c': '#2563EB' } as React.CSSProperties}>
                        Industries
                      </Link>
                    </li>
                    <li>
                      <Link href="#technology" className="footer-hover-link" style={{ '--link-c': '#EEAB21' } as React.CSSProperties}>
                        Technology
                      </Link>
                    </li>
                    <li>
                      <Link href="#faq" className="footer-hover-link" style={{ '--link-c': '#7C3AED' } as React.CSSProperties}>
                        FAQs
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="footer-hover-link" style={{ '--link-c': '#DB2777' } as React.CSSProperties}>
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* 3. Services Column (Col Span 2) */}
                <div className="loro-col-span-2" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <h3 style={{ fontSize: '12px', fontWeight: 700, color: '#ffffff', textTransform: 'uppercase', margin: 0, letterSpacing: '0.05em' }}>
                    Services
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <li>
                      <Link href="#services" className="footer-hover-link" style={{ '--link-c': '#00C9A7' } as React.CSSProperties}>
                        Strategy & Delivery
                      </Link>
                    </li>
                    <li>
                      <Link href="#services" className="footer-hover-link" style={{ '--link-c': '#2563EB' } as React.CSSProperties}>
                        AI Automation Audits
                      </Link>
                    </li>
                    <li>
                      <Link href="#services" className="footer-hover-link" style={{ '--link-c': '#7C3AED' } as React.CSSProperties}>
                        Consulting & Advisory
                      </Link>
                    </li>
                    <li>
                      <Link href="#services" className="footer-hover-link" style={{ '--link-c': '#DB2777' } as React.CSSProperties}>
                        Support & SLA Plans
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* 4. Studio & Contact Column (Col Span 4) */}
                <div className="loro-col-span-4" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div>
                    <h3 style={{ fontSize: '12px', fontWeight: 700, color: '#ffffff', textTransform: 'uppercase', margin: 0 }}>
                      Studio & Contact
                    </h3>
                    <p style={{ marginTop: '4px', fontSize: '10px', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '2px', color: '#64748b', margin: 0 }}>
                      Formiqa Technologies
                    </p>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    {/* Address */}
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <MapPin size={16} color="#cbd5e1" style={{ marginTop: '2px', flexShrink: 0 }} />
                      <a 
                        href="https://maps.google.com/?q=500%20Howard%20Street%2C%20Suite%20400%2C%20San%20Francisco%2C%20CA%2094105" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        style={{ fontSize: '13px', lineHeight: '1.4', color: '#cbd5e1', textDecoration: 'none', transition: 'color 0.2s' }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#cbd5e1'}
                      >
                        500 Howard Street, Suite 400, San Francisco, CA 94105
                      </a>
                    </div>

                    {/* Phone */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <Phone size={16} color="#cbd5e1" style={{ flexShrink: 0 }} />
                      <a 
                        href="tel:+14155550199" 
                        style={{ fontSize: '13px', color: '#cbd5e1', textDecoration: 'none', transition: 'color 0.2s' }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#cbd5e1'}
                      >
                        +1 (415) 555-0199
                      </a>
                    </div>

                    {/* Mail */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <Mail size={16} color="#cbd5e1" style={{ flexShrink: 0 }} />
                      <a 
                        href="mailto:hello@formiqa.io" 
                        style={{ fontSize: '13px', color: '#cbd5e1', textDecoration: 'none', transition: 'color 0.2s' }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#cbd5e1'}
                      >
                        hello@formiqa.io
                      </a>
                    </div>
                  </div>

                  {/* Get Quote button */}
                  <Link 
                    href="/contact"
                    style={{
                      marginTop: '4px',
                      alignSelf: 'flex-start',
                      backgroundColor: '#10b981',
                      color: '#010101',
                      padding: '8px 20px',
                      borderRadius: '8px',
                      fontSize: '12px',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      textDecoration: 'none',
                      boxShadow: '0 4px 12px rgba(16, 185, 129, 0.2)',
                      transition: 'all 0.2s ease',
                      textAlign: 'center'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#34d399';
                      e.currentTarget.style.boxShadow = '0 6px 16px rgba(16, 185, 129, 0.35)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#10b981';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(16, 185, 129, 0.2)';
                    }}
                  >
                    Get Quote
                  </Link>
                </div>

              </div>
            </div>

            {/* Bottom Disclaimer Row */}
            <div style={{ padding: '24px 48px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
              <div 
                className="loro-footer-bottom-row"
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between', 
                  flexDirection: 'row', 
                  flexWrap: 'wrap', 
                  gap: '16px' 
                }}
              >
                {/* Copyright */}
                <p style={{ fontSize: '13px', color: '#94a3b8', margin: 0 }}>
                  © {new Date().getFullYear()} Formiqa. All rights reserved.
                </p>

                {/* Tagline Quote */}
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', margin: 0, fontStyle: 'italic', textAlign: 'center' }}>
                  “We build with empathy, creativity, and purpose.”
                </p>

                {/* Legal Links */}
                <div style={{ display: 'flex', gap: '16px' }}>
                  <Link href="/privacy" className="footer-hover-link" style={{ '--link-c': '#7C3AED' } as React.CSSProperties}>
                    Privacy
                  </Link>
                  <Link href="/terms" className="footer-hover-link" style={{ '--link-c': '#2563EB' } as React.CSSProperties}>
                    Terms
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}
