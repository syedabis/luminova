'use client';

import React, { useState } from 'react';
import { Calculator, ArrowRight, DollarSign, Clock, CheckCircle, Sparkles } from 'lucide-react';

export default function IndustryRoiCalculator() {
  const [industry, setIndustry] = useState('professional-services');
  const [teamSize, setTeamSize] = useState(15);
  const [weeklyHoursPerPerson, setWeeklyHoursPerPerson] = useState(8);
  const [hourlyRate, setHourlyRate] = useState(65);

  // Calculations
  const totalWeeklyHoursSpent = teamSize * weeklyHoursPerPerson;
  const estimatedSavingsFactor = 0.75; // 75% average reduction
  const weeklyHoursSaved = Math.round(totalWeeklyHoursSpent * estimatedSavingsFactor);
  const monthlyHoursSaved = Math.round(weeklyHoursSaved * 4.33);
  const annualMoneySaved = Math.round(weeklyHoursSaved * 52 * hourlyRate);

  const industryAutomations: Record<string, string[]> = {
    'professional-services': [
      'Automated Client Intake & Contract Generation',
      'AI Time Tracking & Invoice Reminders',
      'Proposal Auto-Fulfillment Workflow'
    ],
    'finance': [
      'Invoice & Tax Document OCR Extraction',
      'Automated Multi-Account Reconciliation',
      'Compliance Audit Alert System'
    ],
    'healthcare': [
      '24/7 AI Voice & SMS Patient Booking',
      'Insurance Pre-Verification Agent',
      'Automated Care Journey Reminders'
    ],
    'real-estate': [
      '24/7 Inquiry Lead Qualification & Tour Booking',
      'Maintenance Request Auto-Dispatch',
      'Lease Agreement Auto-Renewal Trigger'
    ],
    'recruitment': [
      'AI Resume Screening & Scorecard Generator',
      'Automated Candidate Interview Scheduler',
      'Onboarding Document Collector'
    ],
    'technology': [
      'Tier-1 AI Technical Support Resolution Bot',
      'Proactive Customer Churn Alert Trigger',
      'User Onboarding Activation Workflows'
    ]
  };

  return (
    <section id="roi-calculator" className="section-xl" style={{ padding: '90px 0', backgroundColor: '#090b0e', position: 'relative' }}>
      
      {/* Decorative Border Line */}
      <div style={{ position: 'absolute', top: 0, left: '10%', right: '10%', height: '1px', background: 'linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(255,255,255,0.1) 50%, rgba(0,0,0,0) 100%)' }} />

      <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 56px auto' }}>
          
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            border: '1px solid rgba(59, 130, 246, 0.25)',
            borderRadius: '100px',
            padding: '6px 18px',
            marginBottom: '20px'
          }}>
            <Calculator size={15} color="#3b82f6" />
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#60a5fa', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              INTERACTIVE ROI CALCULATOR
            </span>
          </div>

          <h2 style={{
            fontSize: 'clamp(36px, 5vw, 56px)',
            fontWeight: 800,
            color: '#ffffff',
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            marginBottom: '20px'
          }}>
            Estimate Your Industry Automation Savings
          </h2>
          <p style={{
            fontSize: '17px',
            color: '#94a3b8',
            lineHeight: 1.6,
            margin: 0
          }}>
            Adjust the sliders below to see how much time and money custom AI automations can save your enterprise team annually.
          </p>

        </div>

        {/* Calculator Grid Container */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '32px',
          backgroundColor: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '24px',
          padding: '40px'
        }}>
          
          {/* Left Controls Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            
            {/* Industry Selector */}
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: 700, color: '#e2e8f0', marginBottom: '10px' }}>
                1. Select Industry Vertical
              </label>
              <select
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  backgroundColor: '#121620',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: '12px',
                  color: '#ffffff',
                  fontSize: '15px',
                  outline: 'none',
                  cursor: 'pointer'
                }}
              >
                <option value="professional-services">Professional Services & Consulting</option>
                <option value="finance">Financial Services & FinTech</option>
                <option value="healthcare">Healthcare & Life Sciences</option>
                <option value="real-estate">Real Estate & Property Management</option>
                <option value="recruitment">Recruitment & Human Resources</option>
                <option value="technology">Technology & SaaS</option>
              </select>
            </div>

            {/* Team Size Slider */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <label style={{ fontSize: '14px', fontWeight: 700, color: '#e2e8f0' }}>
                  2. Team Size (Employees)
                </label>
                <span style={{ fontSize: '16px', fontWeight: 800, color: '#60a5fa' }}>
                  {teamSize} People
                </span>
              </div>
              <input
                type="range"
                min="3"
                max="100"
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#3b82f6', cursor: 'pointer', height: '6px' }}
              />
            </div>

            {/* Weekly Manual Hours Slider */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <label style={{ fontSize: '14px', fontWeight: 700, color: '#e2e8f0' }}>
                  3. Weekly Repetitive Hours / Person
                </label>
                <span style={{ fontSize: '16px', fontWeight: 800, color: '#c084fc' }}>
                  {weeklyHoursPerPerson} hrs/week
                </span>
              </div>
              <input
                type="range"
                min="2"
                max="25"
                value={weeklyHoursPerPerson}
                onChange={(e) => setWeeklyHoursPerPerson(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#a855f7', cursor: 'pointer', height: '6px' }}
              />
            </div>

            {/* Average Hourly Cost Slider */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <label style={{ fontSize: '14px', fontWeight: 700, color: '#e2e8f0' }}>
                  4. Average Fully Loaded Hourly Rate
                </label>
                <span style={{ fontSize: '16px', fontWeight: 800, color: '#34d399' }}>
                  ${hourlyRate}/hr
                </span>
              </div>
              <input
                type="range"
                min="25"
                max="180"
                step="5"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#10b981', cursor: 'pointer', height: '6px' }}
              />
            </div>

          </div>

          {/* Right Results Column */}
          <div style={{
            backgroundColor: '#0c0f17',
            border: '1px solid rgba(59, 130, 246, 0.25)',
            borderRadius: '20px',
            padding: '32px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
          }}>
            <div>
              <span style={{ fontSize: '12px', fontWeight: 800, color: '#64748b', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '20px' }}>
                PROJECTED AUTOMATION ROI
              </span>

              {/* Main Annual Savings Number */}
              <div style={{ marginBottom: '28px' }}>
                <div style={{ fontSize: '14px', color: '#94a3b8', marginBottom: '6px' }}>Estimated Annual Cost Savings:</div>
                <div style={{
                  fontSize: 'clamp(40px, 5vw, 56px)',
                  fontWeight: 900,
                  color: '#10b981',
                  lineHeight: 1,
                  letterSpacing: '-0.03em'
                }}>
                  ${annualMoneySaved.toLocaleString()}
                </div>
              </div>

              {/* Monthly Hours Saved */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                padding: '16px',
                borderRadius: '12px',
                marginBottom: '28px',
                border: '1px solid rgba(255, 255, 255, 0.06)'
              }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(59, 130, 246, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Clock size={22} color="#60a5fa" />
                </div>
                <div>
                  <div style={{ fontSize: '20px', fontWeight: 800, color: '#ffffff' }}>
                    {monthlyHoursSaved.toLocaleString()} Hours / Month
                  </div>
                  <div style={{ fontSize: '13px', color: '#94a3b8' }}>
                    Reclaimed team capacity for growth
                  </div>
                </div>
              </div>

              {/* Recommended Automations list */}
              <div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#e2e8f0', marginBottom: '12px' }}>
                  Recommended High-ROI Automations:
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {(industryAutomations[industry] || []).map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#cbd5e1' }}>
                      <CheckCircle size={14} color="#10b981" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA inside calculator */}
            <div style={{ marginTop: '32px' }}>
              <a
                href="#contact"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  width: '100%',
                  backgroundColor: '#ffffff',
                  color: '#010101',
                  padding: '14px 24px',
                  borderRadius: '100px',
                  fontSize: '15px',
                  fontWeight: 700,
                  textDecoration: 'none',
                  boxShadow: '0 4px 20px rgba(255,255,255,0.2)'
                }}
              >
                Claim Your Custom Industry Strategy <ArrowRight size={16} />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
