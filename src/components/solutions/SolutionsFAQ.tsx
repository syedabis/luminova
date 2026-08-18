'use client';

import { useRef, useEffect, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { HelpCircle, Plus, X } from 'lucide-react';

const faqs = [
  {
    q: "Do we need to switch from our existing CRM or ERP software?",
    a: "Not at all. Our core design principle is zero-friction integration. We build custom API connectors and middleware workflows that connect directly into your current CRM (HubSpot, Salesforce), billing tools, or databases."
  },
  {
    q: "How are solution automations customized for our specific workflow?",
    a: "During our initial strategy blueprint session, we map out every manual step in your process. We write custom system prompts, configure logic decision trees, and map data fields to match your exact business logic."
  },
  {
    q: "What happens if a third-party API (like HubSpot or OpenAI) updates or breaks?",
    a: "All our enterprise solutions are backed by active error monitoring and API fallbacks. If an endpoint undergoes a breaking change, our automated alert system notifies our engineering team and triggers secondary failover workflows immediately."
  },
  {
    q: "Can these solutions handle high volumes of leads or calls simultaneously?",
    a: "Yes! Our architectures leverage cloud microservices (AWS, Supabase, Make enterprise, serverless functions). They automatically scale horizontally to process thousands of concurrent calls or form submissions without delay."
  },
  {
    q: "How do you ensure AI responses are 100% accurate and don't make things up?",
    a: "We utilize Retrieval-Augmented Generation (RAG) with strict temperature settings and system constraints. The AI model is required to quote only from your approved knowledge base, with instant human escalation for any edge cases."
  },
  {
    q: "What is the typical deployment timeline for a full solution build?",
    a: "Initial prototypes are delivered within 7 to 10 days. Full end-to-end testing, security audits, and production integration typically take 2 to 3 weeks total."
  }
];

const EXPAND_RATIO = 0.44;
const CONTAINER_H  = 640;
const GAP          = 10;
const DURATION     = 0.6;
const EASE         = 'power3.out';
const STAGGER      = 0.04;
const ACCENT       = '#c084fc';

export default function SolutionsFAQ() {
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
    <section id="solutions-faq" className="section-xl" style={{ padding: '90px 0', backgroundColor: '#090b0e', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
      <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px' }}>

        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            backgroundColor: 'rgba(168, 85, 247, 0.1)',
            border: '1px solid rgba(168, 85, 247, 0.25)',
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
            Questions About Our Automation Solutions?
          </h2>
        </div>

        <div
          ref={rootRef}
          role="list"
          aria-label="Solutions FAQ accordion"
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
                  backgroundColor: isActive ? 'rgba(168, 85, 247, 0.04)' : 'rgba(255, 255, 255, 0.02)',
                  border: `1px solid ${isActive ? 'rgba(168, 85, 247, 0.25)' : 'rgba(255, 255, 255, 0.07)'}`,
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
                      boxShadow: `0 0 10px rgba(192, 132, 252, 0.5)`,
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
