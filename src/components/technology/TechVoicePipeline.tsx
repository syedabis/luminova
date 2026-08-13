'use client';

import React from 'react';
import { Mic, PhoneCall, Radio, Zap, Volume2, ShieldCheck } from 'lucide-react';

export default function TechVoicePipeline() {
  const components = [
    {
      title: "1. Telecom & Inbound PSTN",
      tech: "Twilio Telephony & SIP Trunking",
      desc: "Instant carrier-grade phone number provisioning with global inbound/outbound call routing and WebSocket streaming.",
      color: "#ec4899"
    },
    {
      title: "2. Real-Time Speech-to-Text",
      tech: "Deepgram Nova-2 STT",
      desc: "<120ms ultra-fast audio transcription with domain-specific keyword boosting, medical jargon parsing, and noise suppression.",
      color: "#38bdf8"
    },
    {
      title: "3. Turn-Taking LLM Orchestrator",
      tech: "Retell AI & Vapi Engine",
      desc: "Human-like natural conversation turn-taking engine that detects interjections, pauses, and backchannel agreement in real-time.",
      color: "#c084fc"
    },
    {
      title: "4. Neural Text-to-Speech",
      tech: "ElevenLabs & Cartesia TTS",
      desc: "Hyper-realistic voice synthesis rendering human warmth, inflections, and zero robotic monotone artifacts.",
      color: "#34d399"
    }
  ];

  return (
    <section style={{ padding: '100px 0', backgroundColor: '#06080d', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 64px auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'rgba(52, 211, 153, 0.1)',
            border: '1px solid rgba(52, 211, 153, 0.25)',
            borderRadius: '100px',
            padding: '6px 18px',
            marginBottom: '20px'
          }}>
            <Mic size={15} color="#34d399" />
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#34d399', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              LOW-LATENCY TELEPHONY INFRASTRUCTURE
            </span>
          </div>

          <h2 style={{
            fontSize: 'clamp(34px, 4.8vw, 52px)',
            fontWeight: 800,
            color: '#ffffff',
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            marginBottom: '16px'
          }}>
            Conversational Voice AI Pipeline (&lt;350ms Latency)
          </h2>
          <p style={{ fontSize: '16px', color: '#94a3b8', margin: 0 }}>
            Streaming bidirectional WebSockets connecting live PSTN telephone callers to real-time neural voice synthesis.
          </p>
        </div>

        {/* 4 Pipeline Stages */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '28px' }}>
          {components.map((c, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '24px',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
              className="hover-card-glow"
            >
              <div>
                <div style={{ fontSize: '12px', fontWeight: 700, color: c.color, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '8px' }}>
                  {c.title}
                </div>

                <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#ffffff', marginBottom: '14px', lineHeight: 1.3 }}>
                  {c.tech}
                </h3>

                <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
                  {c.desc}
                </p>
              </div>

              <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: c.color, fontWeight: 700 }}>
                <Zap size={14} /> Sub-Second WebSockets
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
