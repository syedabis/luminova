'use client';

import React, { useState } from 'react';
import { Mail, Calendar, CheckCircle2, ArrowRight, Sparkles, Terminal, MessageSquare } from 'lucide-react';

export default function EngineerContact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectScope: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="engineer-contact" style={{ padding: '90px 0 110px 0', backgroundColor: '#010101', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px' }}>
        
        <div style={{
          backgroundColor: '#0a0d14',
          border: '1px solid rgba(56, 189, 248, 0.2)',
          borderRadius: '28px',
          padding: '56px 40px',
          boxShadow: '0 30px 70px rgba(0,0,0,0.7)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          
          <div style={{
            position: 'absolute',
            top: '-50%',
            right: '-20%',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(56, 189, 248, 0.12) 0%, rgba(0,0,0,0) 70%)',
            pointerEvents: 'none'
          }} />

          {/* Card Header */}
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 40px auto' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(56, 189, 248, 0.1)',
              border: '1px solid rgba(56, 189, 248, 0.25)',
              borderRadius: '100px',
              padding: '6px 18px',
              marginBottom: '16px'
            }}>
              <Terminal size={15} color="#38bdf8" />
              <span style={{ fontSize: '12px', fontWeight: 700, color: '#38bdf8', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                DIRECT CONSULTATION WITH ALEX
              </span>
            </div>

            <h2 style={{ fontSize: 'clamp(32px, 4vw, 44px)', fontWeight: 800, color: '#ffffff', marginBottom: '14px', letterSpacing: '-0.02em' }}>
              Want to Automate Your Stack?
            </h2>
            <p style={{ fontSize: '16px', color: '#94a3b8', margin: 0 }}>
              Book a 1-on-1 technical discovery call with Alex Vance to review your AI feasibility and architecture roadmap.
            </p>
          </div>

          {submitted ? (
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: 'rgba(52, 211, 153, 0.15)',
                border: '2px solid #34d399',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px auto'
              }}>
                <CheckCircle2 size={32} color="#34d399" />
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#ffffff', marginBottom: '8px' }}>
                Consultation Request Dispatched!
              </h3>
              <p style={{ fontSize: '15px', color: '#94a3b8', maxWidth: '420px', margin: '0 auto' }}>
                Thanks <strong style={{ color: '#ffffff' }}>{formData.name}</strong>. Alex will review your workflow specs and respond to <strong style={{ color: '#38bdf8' }}>{formData.email}</strong> within 15 minutes.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ maxWidth: '640px', margin: '0 auto' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#cbd5e1', marginBottom: '8px' }}>Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Marcus Sterling"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: '12px',
                      padding: '14px 16px',
                      color: '#ffffff',
                      fontSize: '14px',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#cbd5e1', marginBottom: '8px' }}>Work Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="marcus@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: '12px',
                      padding: '14px 16px',
                      color: '#ffffff',
                      fontSize: '14px',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#cbd5e1', marginBottom: '8px' }}>Project / Workflow Goals *</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe your current software stack (CRMs, APIs) and the AI automation goals you want Alex to engineer..."
                  value={formData.projectScope}
                  onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                  style={{
                    width: '100%',
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '12px',
                    padding: '14px 16px',
                    color: '#ffffff',
                    fontSize: '14px',
                    outline: 'none',
                    resize: 'vertical'
                  }}
                />
              </div>

              <button
                type="submit"
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
                Book 1-on-1 Call with Alex Vance
                <ArrowRight size={18} />
              </button>
            </form>
          )}

        </div>

      </div>
    </section>
  );
}
