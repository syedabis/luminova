'use client';

import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Cpu, ShieldCheck } from 'lucide-react';

export default function TechCTA() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    techStack: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          fullName: formData.name,
          email: formData.email,
          company: 'N/A (Tech Audit)',
          industry: 'Enterprise Architecture Audit',
          budget: 'N/A',
          message: formData.techStack
        })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(data.error || 'Failed to submit form. Please try again.');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setErrorMessage('A network error occurred. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section style={{ padding: '90px 0 120px 0', backgroundColor: '#010101', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px' }}>
        
        <div style={{
          backgroundColor: '#0a0d14',
          border: '1px solid rgba(56, 189, 248, 0.25)',
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
            background: 'radial-gradient(circle, rgba(56, 189, 248, 0.14) 0%, rgba(192, 132, 252, 0.08) 50%, rgba(0,0,0,0) 70%)',
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
              <Cpu size={15} color="#38bdf8" />
              <span style={{ fontSize: '12px', fontWeight: 700, color: '#38bdf8', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                ENTERPRISE ARCHITECTURE FEASIBILITY AUDIT
              </span>
            </div>

            <h2 style={{ fontSize: 'clamp(32px, 4vw, 44px)', fontWeight: 800, color: '#ffffff', marginBottom: '14px', letterSpacing: '-0.02em' }}>
              Architect Your AI Stack with Formiqa
            </h2>
            <p style={{ fontSize: '16px', color: '#94a3b8', margin: 0 }}>
              Book a complimentary 30-minute technical session with our lead AI architects to review model routing, vector RAG, and API integration feasibility.
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
                Architecture Session Requested!
              </h3>
              <p style={{ fontSize: '15px', color: '#94a3b8', maxWidth: '420px', margin: '0 auto' }}>
                Thank you <strong style={{ color: '#ffffff' }}>{formData.name}</strong>. Our senior AI systems team will review your stack details and reach out to <strong style={{ color: '#38bdf8' }}>{formData.email}</strong> shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ maxWidth: '640px', margin: '0 auto' }}>
              
              {errorMessage && (
                <div style={{ 
                  padding: '12px 16px', 
                  backgroundColor: 'rgba(239, 68, 68, 0.1)', 
                  border: '1px solid rgba(239, 68, 68, 0.2)', 
                  borderRadius: '8px', 
                  color: '#f87171', 
                  fontSize: '14px', 
                  marginBottom: '20px',
                  textAlign: 'center'
                }}>
                  {errorMessage}
                </div>
              )}

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#cbd5e1', marginBottom: '8px' }}>Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Elena Rostova"
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
                    placeholder="elena@company.com"
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
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#cbd5e1', marginBottom: '8px' }}>Current Stack & Automation Goals *</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Outline your current software stack (CRMs, SQL DBs, APIs) and the AI features or latency targets you want to implement..."
                  value={formData.techStack}
                  onChange={(e) => setFormData({ ...formData, techStack: e.target.value })}
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
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  boxShadow: '0 8px 25px rgba(56, 189, 248, 0.3)',
                  transition: 'all 0.3s ease',
                  opacity: isSubmitting ? 0.7 : 1
                }}
              >
                {isSubmitting ? 'Requesting Session...' : 'Request Architecture Feasibility Session'}
                {!isSubmitting && <ArrowRight size={18} />}
              </button>
            </form>
          )}

        </div>

      </div>
    </section>
  );
}
