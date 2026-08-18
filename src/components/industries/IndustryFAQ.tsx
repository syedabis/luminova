'use client';

import { useRef, useEffect, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { HelpCircle, Plus, X } from 'lucide-react';

const faqs = [
  {
    q: "How long does it take to deploy a custom AI automation for our industry?",
    a: "Most custom industry automations are deployed within 2 to 4 weeks. We start with a 3-day discovery and system audit, followed by rapid prototyping, testing in a staging environment, and seamless production integration."
  },
  {
    q: "Can your AI workflows integrate with our legacy industry tools & ERPs?",
    a: "Yes! We build custom webhooks, REST API connectors, and middleware agents that bridge modern AI capabilities with legacy software like Clio, Yardi, Epic EHR, QuickBooks, Salesforce, and custom SQL databases."
  },
  {
    q: "Is our industry data kept completely confidential?",
    a: "100%. We sign strict non-disclosure agreements (NDAs) and Business Associate Agreements (BAAs) for HIPAA compliance. Your proprietary data is never used to train public AI models and can be hosted within your private cloud."
  },
  {
    q: "How do you handle edge cases or when an AI agent is unsure of an answer?",
    a: "We design all automated agents with 'Human-in-the-Loop' safeguards. If confidence falls below a configured threshold (e.g. 95%), the agent seamlessly escalates the task to a human team member with full context logged."
  },
  {
    q: "What support and maintenance options do you provide post-deployment?",
    a: "We offer continuous 24/7 system monitoring, monthly AI model optimizations, schema updates when third-party APIs change, and dedicated priority support to guarantee maximum uptime."
  },
  {
    q: "How do we measure ROI after implementation?",
    a: "Before launch, we establish clear baseline KPIs (e.g. client intake speed, call resolution rate, hours saved per employee). We build custom analytics dashboards so you can track real-time cost savings and volume processed."
  }
];

const EXPAND_RATIO = 0.44;
const CONTAINER_H  = 640;
const GAP          = 10;
const DURATION     = 0.6;
const EASE         = 'power3.out';
const STAGGER      = 0.04;
const ACCENT       = '#10b981';

export default function IndustryFAQ() {
  const rootRef    = useRef<HTMLDivElement>(null);
  const panelRefs  = useRef<(HTMLDivElement | null)[]>([]);
  const answerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const barRefs    = useRef<(HTMLDivElement | null)[]>([]);
  const tlRef      = useRef<gsap.core.Timeline | null>(null);
  const firstRun   = useRef(true);

  const count = faqs.length;
  const [active, setActive] = useState(0);

  const grow = count > 1 ? (EXPAND_RATIO * (count - 1)) / (1 - EXPAND_RATIO) : 1;

  const applyLayout = useCallback(
    (animate: boolean) => {
      const panels  = panelRefs.current;
      const answers = answerRefs.current;
      const bars    = barRefs.current;
      if (!panels.length) return;

      tlRef.current?.kill();
      const dur = animate ? DURATION : 0;
      const tl  = gsap.timeline();

      panels.forEach((panel, i) => {
        if (!panel) return;
        const isActive = i === active;
        const answer   = answers[i];
        const bar      = bars[i];

        tl.to(panel, { flexGrow: isActive ? grow : 1, duration: dur, ease: EASE }, 0);

        if (bar) {
          tl.to(bar, {
            scaleY: isActive ? 1 : 0.3,
            opacity: isActive ? 1 : 0,
            backgroundColor: ACCENT,
            duration: dur,
            ease: EASE
          }, 0);
        }

        if (answer) {
          tl.to(answer, {
            opacity:  isActive ? 1 : 0,
            y:        isActive ? 0 : 10,
            duration: isActive ? dur : dur * 0.45,
            ease:     EASE,
            delay:    isActive && animate ? STAGGER * i : 0
          }, 0);
        }
      });

      tlRef.current = tl;
    },
    [active, grow]
  );

  useEffect(() => {
    applyLayout(!firstRun.current);
    firstRun.current = false;
  }, [applyLayout]);

  useEffect(() => () => { tlRef.current?.kill(); }, []);

  return (
    <section id="industry-faq" className="section-xl" style={{ padding: '90px 0', backgroundColor: '#010101' }}>
      <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px' }}>

        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            backgroundColor: 'rgba(16, 185, 129, 0.08)',
            border: '1px solid rgba(16, 185, 129, 0.22)',
            borderRadius: '100px', padding: '6px 18px', marginBottom: '20px'
          }}>
            <HelpCircle size={15} color={ACCENT} />
            <span style={{ fontSize: '12px', fontWeight: 700, color: ACCENT, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              FREQUENTLY ASKED QUESTIONS
            </span>
          </div>

          <h2 style={{
            fontSize: 'clamp(32px, 4.5vw, 48px)', fontWeight: 800,
            color: '#ffffff', letterSpacing: '-0.03em', lineHeight: 1.15, margin: 0
          }}>
            Got Questions About Industry AI Implementation?
          </h2>
        </div>

        <div
          ref={rootRef}
          role="list"
          aria-label="Industry FAQ accordion"
          style={{ display: 'flex', flexDirection: 'column', gap: `${GAP}px`, height: `${CONTAINER_H}px`, perspective: '1400px' }}
        >
          {faqs.map((faq, i) => {
            const isActive = i === active;
            return (
              <div
                key={i}
                ref={el => { panelRefs.current[i] = el; }}
                role="listitem"
                tabIndex={0}
                aria-expanded={isActive}
                aria-label={faq.q}
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                onKeyDown={e => {
                  if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActive(i); }
                  if (e.key === 'ArrowDown') { e.preventDefault(); setActive((i + 1) % count); }
                  if (e.key === 'ArrowUp')   { e.preventDefault(); setActive((i - 1 + count) % count); }
                }}
                style={{
                  flex: 1, minHeight: 0, overflow: 'hidden', borderRadius: '14px', cursor: 'pointer',
                  backgroundColor: isActive ? 'rgba(16, 185, 129, 0.04)' : 'rgba(255, 255, 255, 0.02)',
                  border: `1px solid ${isActive ? 'rgba(16, 185, 129, 0.22)' : 'rgba(255, 255, 255, 0.07)'}`,
                  padding: '18px 24px', display: 'flex', flexDirection: 'column', outline: 'none',
                  willChange: 'flex-grow', transition: 'background-color 0.35s ease, border-color 0.35s ease',
                  transformStyle: 'preserve-3d', transformOrigin: 'center top',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', flexShrink: 0 }}>
                  <div
                    ref={el => { barRefs.current[i] = el; }}
                    style={{
                      width: '3px', height: '22px', borderRadius: '3px',
                      backgroundColor: ACCENT, flexShrink: 0, marginTop: '2px',
                      opacity: 0, transformOrigin: 'top center',
                      boxShadow: `0 0 10px rgba(16, 185, 129, 0.5)`,
                    }}
                  />
                  <span style={{
                    fontSize: '17px', fontWeight: 600,
                    color: isActive ? '#ffffff' : '#cbd5e1',
                    lineHeight: 1.4, flex: 1, transition: 'color 0.3s ease',
                  }}>
                    {faq.q}
                  </span>
                  <div style={{ color: '#94a3b8', flexShrink: 0, marginTop: '2px' }}>
                    {isActive ? <X size={18} /> : <Plus size={18} />}
                  </div>
                </div>

                <div
                  ref={el => { answerRefs.current[i] = el; }}
                  style={{ opacity: 0, marginTop: '14px', paddingLeft: '17px', flex: 1, overflow: 'hidden' }}
                >
                  <p style={{ fontSize: '15px', color: '#94a3b8', lineHeight: 1.65, fontWeight: 400, margin: 0 }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
