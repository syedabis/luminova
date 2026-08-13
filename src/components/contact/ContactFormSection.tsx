'use client';

import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Calendar,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  MessageSquare,
  Globe,
  Headphones
} from 'lucide-react';

export default function ContactFormSection() {
  const [activeTab, setActiveTab] = useState<'form' | 'calendar'>('form');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    industry: 'Professional Services',
    budget: '$10k - $25k',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 1200);
  };

  return (
    <section id="contact-form" style={{ padding: '80px 0 100px 0', backgroundColor: '#010101', position: 'relative' }}>
      
      <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Mode Switcher Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '48px' }}>
          <div style={{
            display: 'inline-flex',
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '100px',
            padding: '6px'
          }}>
            <button
              onClick={() => setActiveTab('form')}
              style={{
                padding: '12px 28px',
                borderRadius: '100px',
                border: 'none',
                backgroundColor: activeTab === 'form' ? '#38bdf8' : 'transparent',
                color: activeTab === 'form' ? '#010101' : '#94a3b8',
                fontSize: '14px',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <Send size={16} />
              Send Us a Message
            </button>

            <button
              onClick={() => setActiveTab('calendar')}
              style={{
                padding: '12px 28px',
                borderRadius: '100px',
                border: 'none',
                backgroundColor: activeTab === 'calendar' ? '#c084fc' : 'transparent',
                color: activeTab === 'calendar' ? '#010101' : '#94a3b8',
                fontSize: '14px',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <Calendar size={16} />
              Book 15-Min Discovery Call
            </button>
          </div>
        </div>

        {/* Main Grid: Form / Calendar (Left) + Contact Details Sidebar (Right) */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px' }} className="contact-main-grid">
          <style jsx>{`
            @media (min-width: 992px) {
              .contact-main-grid {
                grid-template-columns: 1.4fr 1fr !important;
              }
            }
          `}</style>

          {/* Left Column: Interactive Form or Calendar */}
          <div style={{
            backgroundColor: '#0a0d14',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '24px',
            padding: '40px',
            boxShadow: '0 25px 60px rgba(0,0,0,0.5)'
          }}>

            {activeTab === 'form' ? (
              formSubmitted ? (
                /* Success State */
                <div style={{ textAlign: 'center', padding: '60px 20px' }}>
                  <div style={{
                    width: '72px',
                    height: '72px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(52, 211, 153, 0.15)',
                    border: '2px solid #34d399',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 24px auto'
                  }}>
                    <CheckCircle2 size={36} color="#34d399" />
                  </div>

                  <h3 style={{ fontSize: '28px', fontWeight: 800, color: '#ffffff', marginBottom: '12px' }}>
                    Message Received!
                  </h3>

                  <p style={{ fontSize: '16px', color: '#94a3b8', maxWidth: '480px', margin: '0 auto 32px auto', lineHeight: 1.6 }}>
                    Thank you <strong style={{ color: '#ffffff' }}>{formData.fullName || 'there'}</strong>. Our senior automation architect will review your project requirements and respond to <strong style={{ color: '#38bdf8' }}>{formData.email}</strong> within 15 minutes.
                  </p>

                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ fullName: '', email: '', company: '', industry: 'Professional Services', budget: '$10k - $25k', message: '' });
                    }}
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      color: '#ffffff',
                      padding: '12px 28px',
                      borderRadius: '100px',
                      fontSize: '14px',
                      fontWeight: 600,
                      cursor: 'pointer'
                    }}
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                /* Form Inputs */
                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: '32px' }}>
                    <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#ffffff', marginBottom: '8px' }}>
                      Send Us Your Automation Scope
                    </h3>
                    <p style={{ fontSize: '14px', color: '#94a3b8', margin: 0 }}>
                      Fill out the form below and receive a detailed project roadmap & SLA proposal.
                    </p>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                    {/* Full Name */}
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#cbd5e1', marginBottom: '8px' }}>
                        Full Name <span style={{ color: '#ef4444' }}>*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Sarah Jenkins"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        style={{
                          width: '100%',
                          backgroundColor: 'rgba(255, 255, 255, 0.03)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          borderRadius: '12px',
                          padding: '14px 16px',
                          color: '#ffffff',
                          fontSize: '14px',
                          outline: 'none'
                        }}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#cbd5e1', marginBottom: '8px' }}>
                        Work Email <span style={{ color: '#ef4444' }}>*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="sarah@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        style={{
                          width: '100%',
                          backgroundColor: 'rgba(255, 255, 255, 0.03)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          borderRadius: '12px',
                          padding: '14px 16px',
                          color: '#ffffff',
                          fontSize: '14px',
                          outline: 'none'
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                    {/* Company */}
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#cbd5e1', marginBottom: '8px' }}>
                        Company Name
                      </label>
                      <input
                        type="text"
                        placeholder="Acme Corp"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        style={{
                          width: '100%',
                          backgroundColor: 'rgba(255, 255, 255, 0.03)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          borderRadius: '12px',
                          padding: '14px 16px',
                          color: '#ffffff',
                          fontSize: '14px',
                          outline: 'none'
                        }}
                      />
                    </div>

                    {/* Industry */}
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#cbd5e1', marginBottom: '8px' }}>
                        Industry Sector
                      </label>
                      <select
                        value={formData.industry}
                        onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                        style={{
                          width: '100%',
                          backgroundColor: '#0f141f',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          borderRadius: '12px',
                          padding: '14px 16px',
                          color: '#ffffff',
                          fontSize: '14px',
                          outline: 'none'
                        }}
                      >
                        <option value="Professional Services">Professional Services</option>
                        <option value="Finance & Accounting">Finance & Accounting</option>
                        <option value="Real Estate & Property">Real Estate & Property</option>
                        <option value="E-Commerce & Retail">E-Commerce & Retail</option>
                        <option value="Healthcare & Legal">Healthcare & Legal</option>
                      </select>
                    </div>
                  </div>

                  {/* Budget */}
                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#cbd5e1', marginBottom: '8px' }}>
                      Estimated Project Budget
                    </label>
                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                      {['<$10k', '$10k - $25k', '$25k - $50k', '$50k+ Enterprise'].map((b) => (
                        <button
                          type="button"
                          key={b}
                          onClick={() => setFormData({ ...formData, budget: b })}
                          style={{
                            padding: '10px 18px',
                            borderRadius: '100px',
                            border: formData.budget === b ? '1px solid #38bdf8' : '1px solid rgba(255, 255, 255, 0.1)',
                            backgroundColor: formData.budget === b ? 'rgba(56, 189, 248, 0.15)' : 'rgba(255, 255, 255, 0.02)',
                            color: formData.budget === b ? '#ffffff' : '#94a3b8',
                            fontSize: '13px',
                            fontWeight: 600,
                            cursor: 'pointer',
                            transition: 'all 0.2s ease'
                          }}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div style={{ marginBottom: '28px' }}>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#cbd5e1', marginBottom: '8px' }}>
                      Project Description & Automation Goals <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us about the workflows you want to automate, tools involved (e.g. HubSpot, QuickBooks, Retell AI), and key bottlenecks..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{
                        width: '100%',
                        backgroundColor: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '12px',
                        padding: '14px 16px',
                        color: '#ffffff',
                        fontSize: '14px',
                        outline: 'none',
                        resize: 'vertical'
                      }}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      width: '100%',
                      backgroundColor: '#38bdf8',
                      color: '#010101',
                      border: 'none',
                      borderRadius: '12px',
                      padding: '16px',
                      fontSize: '16px',
                      fontWeight: 800,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '10px',
                      boxShadow: '0 8px 25px rgba(56, 189, 248, 0.3)',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <Sparkles size={18} className="spin-slow" />
                        Encrypting & Transmitting...
                      </>
                    ) : (
                      <>
                        Submit Inquiry & Get SLA Roadmap
                        <ArrowRight size={18} />
                      </>
                    )}
                  </button>
                </form>
              )
            ) : (
              /* Calendar Booking View */
              <div style={{ textAlign: 'center', padding: '20px 0' }}>
                <div style={{ marginBottom: '24px' }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '16px',
                    backgroundColor: 'rgba(168, 85, 247, 0.15)',
                    border: '1px solid rgba(168, 85, 247, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px auto'
                  }}>
                    <Calendar size={28} color="#c084fc" />
                  </div>
                  <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#ffffff', marginBottom: '8px' }}>
                    Schedule a Live 1-on-1 Discovery Call
                  </h3>
                  <p style={{ fontSize: '14px', color: '#94a3b8', maxWidth: '440px', margin: '0 auto' }}>
                    Select an available 15-minute slot with our Principal Automation Architect.
                  </p>
                </div>

                {/* Simulated Interactive Calendly Widget Card */}
                <div style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '16px',
                  padding: '24px',
                  textAlign: 'left'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '16px' }}>
                    <div>
                      <div style={{ fontSize: '15px', fontWeight: 700, color: '#ffffff' }}>15-Min AI Feasibility Audit</div>
                      <div style={{ fontSize: '12px', color: '#94a3b8' }}>Google Meet • Video Audio Call</div>
                    </div>
                    <span style={{ backgroundColor: 'rgba(52, 211, 153, 0.15)', color: '#34d399', fontSize: '12px', fontWeight: 700, padding: '4px 10px', borderRadius: '100px' }}>
                      ● 4 Slots Available Today
                    </span>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '12px', marginBottom: '24px' }}>
                    {['02:00 PM EST', '03:30 PM EST', '05:00 PM EST', '06:15 PM EST'].map((time, tIdx) => (
                      <button
                        key={tIdx}
                        onClick={() => alert(`Slot ${time} reserved! A calendar invite has been dispatched to your email.`)}
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.04)',
                          border: '1px solid rgba(168, 85, 247, 0.3)',
                          color: '#ffffff',
                          padding: '12px',
                          borderRadius: '100px',
                          fontSize: '13px',
                          fontWeight: 700,
                          cursor: 'pointer',
                          textAlign: 'center',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        {time}
                      </button>
                    ))}
                  </div>

                  <div style={{ fontSize: '12px', color: '#64748b', textAlign: 'center' }}>
                    Instant confirmation email with calendar link dispatched immediately.
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Right Column: Direct Contact Details & Agency Access */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* Direct Email & Phone Card */}
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '24px',
              padding: '32px'
            }}>
              <h4 style={{ fontSize: '18px', fontWeight: 800, color: '#ffffff', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Headphones size={20} color="#38bdf8" />
                Direct Communication Hub
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: 'rgba(56, 189, 248, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Mail size={20} color="#38bdf8" />
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', color: '#94a3b8', fontWeight: 600 }}>GENERAL INQUIRIES & NDAS</div>
                    <a href="mailto:hello@formiqa.ai" style={{ fontSize: '16px', fontWeight: 700, color: '#ffffff', textDecoration: 'none' }}>
                      hello@formiqa.ai
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: 'rgba(168, 85, 247, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Phone size={20} color="#c084fc" />
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', color: '#94a3b8', fontWeight: 600 }}>ENTERPRISE PHONE DESK</div>
                    <a href="tel:+18004829012" style={{ fontSize: '16px', fontWeight: 700, color: '#ffffff', textDecoration: 'none' }}>
                      +1 (800) 482-9012
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: 'rgba(52, 211, 153, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MessageSquare size={20} color="#34d399" />
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', color: '#94a3b8', fontWeight: 600 }}>24/7 WHATSAPP ADVISORY</div>
                    <a href="https://wa.me/18004829012" target="_blank" rel="noreferrer" style={{ fontSize: '16px', fontWeight: 700, color: '#34d399', textDecoration: 'none' }}>
                      Chat on WhatsApp →
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Global Response Guarantee Card */}
            <div style={{
              backgroundColor: 'rgba(56, 189, 248, 0.05)',
              border: '1px solid rgba(56, 189, 248, 0.2)',
              borderRadius: '24px',
              padding: '28px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <Globe size={20} color="#38bdf8" />
                <span style={{ fontSize: '14px', fontWeight: 800, color: '#38bdf8' }}>GLOBAL SLA GUARANTEE</span>
              </div>
              <p style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: 1.6, margin: 0 }}>
                We operate across 3 primary engineering time zones (PST, AST, PKT). Every inquiry receives an initial technical review by an engineer within 15 minutes.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
