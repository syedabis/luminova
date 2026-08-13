'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: scrolled ? 'rgba(12, 14, 18, 0.85)' : 'rgba(12, 14, 18, 0.5)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        transition: 'all 0.3s ease'
      }}
    >
      <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px' }}>
          
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Link href="/">
              <img
                src="/images/asset_2_685639011aed581e24280e05_Logo-flat.svg"
                alt="Formiqa Logo"
                style={{ height: '32px', width: 'auto', display: 'block' }}
              />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="nav-center-desktop">
            
            {/* Industries Dropdown */}
            <div style={{ position: 'relative' }}>
              <button
                onClick={() => toggleDropdown('industries')}
                style={{
                  background: 'none',
                  border: 'none',
                  color: activeDropdown === 'industries' ? '#ffffff' : '#a1a8b8',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontSize: '15px',
                  fontWeight: 500,
                  transition: 'color 0.2s ease'
                }}
              >
                Industries <ChevronDown size={14} style={{ transform: activeDropdown === 'industries' ? 'rotate(180deg)' : 'none', transition: '0.2s' }} />
              </button>

              {activeDropdown === 'industries' && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  marginTop: '16px',
                  backgroundColor: '#14171f',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '16px',
                  padding: '16px',
                  minWidth: '240px',
                  zIndex: 1000,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.6)'
                }}>
                  <Link href="/industries" onClick={() => setActiveDropdown(null)} style={{ display: 'block', padding: '10px 14px', color: '#60a5fa', fontSize: '14px', fontWeight: 600, borderRadius: '8px', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.08)', marginBottom: '6px' }} className="dropdown-item-hover">
                    All Industries Overview →
                  </Link>
                  <Link href="/industries#professional-services" onClick={() => setActiveDropdown(null)} style={{ display: 'block', padding: '10px 14px', color: '#e2e8f0', fontSize: '14px', borderRadius: '8px', textDecoration: 'none' }} className="dropdown-item-hover">
                    Professional Services
                  </Link>
                  <Link href="/industries#finance" onClick={() => setActiveDropdown(null)} style={{ display: 'block', padding: '10px 14px', color: '#e2e8f0', fontSize: '14px', borderRadius: '8px', textDecoration: 'none' }} className="dropdown-item-hover">
                    Finance & FinTech
                  </Link>
                  <Link href="/industries#healthcare" onClick={() => setActiveDropdown(null)} style={{ display: 'block', padding: '10px 14px', color: '#e2e8f0', fontSize: '14px', borderRadius: '8px', textDecoration: 'none' }} className="dropdown-item-hover">
                    Healthcare & Life Sciences
                  </Link>
                  <Link href="/industries#real-estate" onClick={() => setActiveDropdown(null)} style={{ display: 'block', padding: '10px 14px', color: '#e2e8f0', fontSize: '14px', borderRadius: '8px', textDecoration: 'none' }} className="dropdown-item-hover">
                    Real Estate & Property
                  </Link>
                  <Link href="/industries#recruitment" onClick={() => setActiveDropdown(null)} style={{ display: 'block', padding: '10px 14px', color: '#e2e8f0', fontSize: '14px', borderRadius: '8px', textDecoration: 'none' }} className="dropdown-item-hover">
                    Recruitment & HR
                  </Link>
                  <Link href="/industries#technology" onClick={() => setActiveDropdown(null)} style={{ display: 'block', padding: '10px 14px', color: '#e2e8f0', fontSize: '14px', borderRadius: '8px', textDecoration: 'none' }} className="dropdown-item-hover">
                    Technology & Software
                  </Link>
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div style={{ position: 'relative' }}>
              <button
                onClick={() => toggleDropdown('solutions')}
                style={{
                  background: 'none',
                  border: 'none',
                  color: activeDropdown === 'solutions' ? '#ffffff' : '#a1a8b8',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontSize: '15px',
                  fontWeight: 500,
                  transition: 'color 0.2s ease'
                }}
              >
                Solutions <ChevronDown size={14} style={{ transform: activeDropdown === 'solutions' ? 'rotate(180deg)' : 'none', transition: '0.2s' }} />
              </button>

              {activeDropdown === 'solutions' && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  marginTop: '16px',
                  backgroundColor: '#14171f',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '16px',
                  padding: '16px',
                  minWidth: '240px',
                  zIndex: 1000,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.6)'
                }}>
                  <Link href="/solutions" onClick={() => setActiveDropdown(null)} style={{ display: 'block', padding: '10px 14px', color: '#c084fc', fontSize: '14px', fontWeight: 600, borderRadius: '8px', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.08)', marginBottom: '6px' }} className="dropdown-item-hover">
                    All Solutions Overview →
                  </Link>
                  <Link href="/solutions#sales" onClick={() => setActiveDropdown(null)} style={{ display: 'block', padding: '10px 14px', color: '#e2e8f0', fontSize: '14px', borderRadius: '8px', textDecoration: 'none' }} className="dropdown-item-hover">
                    Sales Automations
                  </Link>
                  <Link href="/solutions#marketing" onClick={() => setActiveDropdown(null)} style={{ display: 'block', padding: '10px 14px', color: '#e2e8f0', fontSize: '14px', borderRadius: '8px', textDecoration: 'none' }} className="dropdown-item-hover">
                    Marketing Journeys
                  </Link>
                  <Link href="/solutions#operations" onClick={() => setActiveDropdown(null)} style={{ display: 'block', padding: '10px 14px', color: '#e2e8f0', fontSize: '14px', borderRadius: '8px', textDecoration: 'none' }} className="dropdown-item-hover">
                    Operations & Pipelines
                  </Link>
                  <Link href="/solutions#finance" onClick={() => setActiveDropdown(null)} style={{ display: 'block', padding: '10px 14px', color: '#e2e8f0', fontSize: '14px', borderRadius: '8px', textDecoration: 'none' }} className="dropdown-item-hover">
                    Finance & Revenue
                  </Link>
                  <Link href="/solutions#cx" onClick={() => setActiveDropdown(null)} style={{ display: 'block', padding: '10px 14px', color: '#e2e8f0', fontSize: '14px', borderRadius: '8px', textDecoration: 'none' }} className="dropdown-item-hover">
                    Customer Experience & Voice
                  </Link>
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div style={{ position: 'relative' }}>
              <button
                onClick={() => toggleDropdown('services')}
                style={{
                  background: 'none',
                  border: 'none',
                  color: activeDropdown === 'services' ? '#ffffff' : '#a1a8b8',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontSize: '15px',
                  fontWeight: 500,
                  transition: 'color 0.2s ease'
                }}
              >
                Services <ChevronDown size={14} style={{ transform: activeDropdown === 'services' ? 'rotate(180deg)' : 'none', transition: '0.2s' }} />
              </button>

              {activeDropdown === 'services' && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  marginTop: '16px',
                  backgroundColor: '#14171f',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '16px',
                  padding: '16px',
                  minWidth: '260px',
                  zIndex: 1000,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.6)'
                }}>
                  <Link href="#services" onClick={() => setActiveDropdown(null)} style={{ display: 'block', padding: '10px 14px', color: '#e2e8f0', fontSize: '14px', borderRadius: '8px', textDecoration: 'none' }} className="dropdown-item-hover">
                    Strategy + Delivery
                  </Link>
                  <Link href="#services" onClick={() => setActiveDropdown(null)} style={{ display: 'block', padding: '10px 14px', color: '#e2e8f0', fontSize: '14px', borderRadius: '8px', textDecoration: 'none' }} className="dropdown-item-hover">
                    AI & Automation Audits
                  </Link>
                  <Link href="#services" onClick={() => setActiveDropdown(null)} style={{ display: 'block', padding: '10px 14px', color: '#e2e8f0', fontSize: '14px', borderRadius: '8px', textDecoration: 'none' }} className="dropdown-item-hover">
                    Consulting & Advisory
                  </Link>
                  <Link href="#services" onClick={() => setActiveDropdown(null)} style={{ display: 'block', padding: '10px 14px', color: '#e2e8f0', fontSize: '14px', borderRadius: '8px', textDecoration: 'none' }} className="dropdown-item-hover">
                    Support & Maintenance
                  </Link>
                </div>
              )}
            </div>

            {/* Learn Dropdown */}
            <div style={{ position: 'relative' }}>
              <button
                onClick={() => toggleDropdown('learn')}
                style={{
                  background: 'none',
                  border: 'none',
                  color: activeDropdown === 'learn' ? '#ffffff' : '#a1a8b8',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontSize: '15px',
                  fontWeight: 500,
                  transition: 'color 0.2s ease'
                }}
              >
                Learn <ChevronDown size={14} style={{ transform: activeDropdown === 'learn' ? 'rotate(180deg)' : 'none', transition: '0.2s' }} />
              </button>

              {activeDropdown === 'learn' && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  marginTop: '16px',
                  backgroundColor: '#14171f',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '16px',
                  padding: '16px',
                  minWidth: '200px',
                  zIndex: 1000,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.6)'
                }}>
                  <Link href="#faq" onClick={() => setActiveDropdown(null)} style={{ display: 'block', padding: '10px 14px', color: '#e2e8f0', fontSize: '14px', borderRadius: '8px', textDecoration: 'none' }} className="dropdown-item-hover">
                    Insights
                  </Link>
                  <Link href="#faq" onClick={() => setActiveDropdown(null)} style={{ display: 'block', padding: '10px 14px', color: '#e2e8f0', fontSize: '14px', borderRadius: '8px', textDecoration: 'none' }} className="dropdown-item-hover">
                    Resources
                  </Link>
                </div>
              )}
            </div>

            <Link href="#technology" style={{ color: '#a1a8b8', fontSize: '15px', fontWeight: 500, textDecoration: 'none', transition: 'color 0.2s ease' }}>
              Technology
            </Link>

            <Link href="/contact" style={{ color: '#a1a8b8', fontSize: '15px', fontWeight: 500, textDecoration: 'none', transition: 'color 0.2s ease' }}>
              Contact
            </Link>

          </div>

          {/* Right Side CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <Link
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: '#ffffff',
                color: '#0c0e12',
                padding: '10px 22px',
                borderRadius: '100px',
                fontSize: '14px',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                boxShadow: '0 4px 14px rgba(255,255,255,0.15)'
              }}
            >
              Get in Touch <ArrowUpRight size={16} />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                background: 'none',
                border: 'none',
                color: '#ffffff',
                cursor: 'pointer',
                padding: '4px',
                display: 'none'
              }}
              className="mobile-menu-btn"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          backgroundColor: '#0c0e12',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          <Link href="/industries" onClick={() => setMobileMenuOpen(false)} style={{ color: '#fff', fontSize: '18px', textDecoration: 'none' }}>Industries</Link>
          <Link href="/solutions" onClick={() => setMobileMenuOpen(false)} style={{ color: '#fff', fontSize: '18px', textDecoration: 'none' }}>Solutions</Link>
          <Link href="#services" onClick={() => setMobileMenuOpen(false)} style={{ color: '#fff', fontSize: '18px', textDecoration: 'none' }}>Services</Link>
          <Link href="#technology" onClick={() => setMobileMenuOpen(false)} style={{ color: '#fff', fontSize: '18px', textDecoration: 'none' }}>Technology</Link>
          <Link href="#faq" onClick={() => setMobileMenuOpen(false)} style={{ color: '#fff', fontSize: '18px', textDecoration: 'none' }}>Learn</Link>
          <Link href="#contact" onClick={() => setMobileMenuOpen(false)} style={{ color: '#fff', fontSize: '18px', textDecoration: 'none' }}>Contact</Link>
          <Link
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              backgroundColor: '#fff',
              color: '#000',
              padding: '12px',
              borderRadius: '50px',
              textAlign: 'center',
              fontWeight: 600,
              textDecoration: 'none',
              marginTop: '12px'
            }}
          >
            Get in Touch
          </Link>
        </div>
      )}
    </header>
  );
}
