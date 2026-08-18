'use client';

import { useRef, useEffect, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { HelpCircle } from 'lucide-react';
import { Plus, X } from 'lucide-react';

const faqs = [
  {
    q: "What happens after I submit a contact inquiry?",
    a: "Our lead automation architect reviews your input within 15 minutes. We schedule a brief 15-to-30 minute discovery call to map your software stack and present a fixed-scope proposal with clear KPIs."
  },
  {
    q: "Do you sign NDAs before discussing custom workflows?",
    a: "Yes, absolutely. We sign mutual non-disclosure agreements (NDAs) prior to reviewing proprietary SOPs, custom databases, internal CRM pipelines, or confidential client workflows."
  },
  {
    q: "How fast can an initial automation pilot be deployed?",
    a: "Our rapid proof-of-concept (PoC) pilots are deployed within 7 to 14 business days, allowing you to test live automated lead intake, voice AI, or invoice extraction without disrupting ongoing operations."
  },
  {
    q: "What software systems do you support for integration?",
    a: "We integrate with 500+ cloud applications, CRMs (HubSpot, Salesforce, GoHighLevel), ERPs (QuickBooks, Stripe, Xero), AI Models (OpenAI, Claude, Pinecone), Voice APIs (Retell AI, Vapi, Twilio), and custom REST/GraphQL webhooks."
  },
  {
    q: "What is your pricing and engagement model?",
    a: "We offer fixed-fee project implementations for custom builds, as well as monthly automation retainers for ongoing workflow monitoring, optimization, and AI model upgrades."
  }
];

const EXPAND_RATIO = 0.44;
const CONTAINER_H  = 580;
const GAP          = 10;
const DURATION     = 0.6;
const EASE         = 'power3.out';
const STAGGER      = 0.04;
const ACCENT       = '#38bdf8';

export default function ContactFAQ() {
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

  const handleClick = (i: number) => { setActive(i); };

  const handleKeyDown = (i: number, e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ')  { e.preventDefault(); handleClick(i); }
    if (e.key === 'ArrowDown')               { e.preventDefault(); setActive((i + 1) % count); }
    if (e.key === 'ArrowUp')                 { e.preventDefault(); setActive((i - 1 + count) % count); }
  };

  return (
    <section style={{ padding: '90px 0', backgroundColor: '#010101', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '960px', margin: '0 auto', padding: '0 24px' }}>

        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'rgba(56, 189, 248, 0.1)',
            border: '1px solid rgba(56, 189, 248, 0.25)',
            borderRadius: '100px',
            padding: '6px 18px',
            marginBottom: '20px'
          }}>
            <HelpCircle size={15} color={ACCENT} />
            <span style={{ fontSize: '12px', fontWeight: 700, color: ACCENT, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              FREQUENTLY ASKED QUESTIONS
            </span>
          </div>

          <h2 style={{
            fontSize: 'clamp(32px, 4.5vw, 48px)',
            fontWeight: 800,
            color: '#ffffff',
            letterSpacing: '-0.03em',
            lineHeight: 1.15,
            margin: 0
          }}>
            Everything You Need to Know Before Reaching Out
          </h2>
        </div>

        {/* GSAP Accordion */}
        <div
          ref={rootRef}
          role="list"
          aria-label="FAQ accordion"
          style={{
            display:       'flex',
            flexDirection: 'column',
            gap:           `${GAP}px`,
            height:        `${CONTAINER_H}px`,
            perspective:   '1400px',
          }}
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
                onClick={() => handleClick(i)}
                onKeyDown={e => handleKeyDown(i, e)}
                style={{
                  flex:            1,
                  minHeight:       0,
                  overflow:        'hidden',
                  borderRadius:    '14px',
                  cursor:          'pointer',
                  backgroundColor: isActive
                    ? 'rgba(56, 189, 248, 0.04)'
                    : 'rgba(255, 255, 255, 0.02)',
                  border: `1px solid ${isActive
                    ? 'rgba(56, 189, 248, 0.25)'
                    : 'rgba(255, 255, 255, 0.07)'}`,
                  padding:         '18px 24px',
                  display:         'flex',
                  flexDirection:   'column',
                  outline:         'none',
                  willChange:      'flex-grow',
                  transition:      'background-color 0.35s ease, border-color 0.35s ease',
                  transformStyle:  'preserve-3d',
                  transformOrigin: 'center top',
                }}
              >
                {/* Question row */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', flexShrink: 0 }}>
                  {/* Accent bar */}
                  <div
                    ref={el => { barRefs.current[i] = el; }}
                    style={{
                      width:           '3px',
                      height:          '22px',
                      borderRadius:    '3px',
                      backgroundColor: ACCENT,
                      flexShrink:      0,
                      marginTop:       '2px',
                      opacity:         0,
                      transformOrigin: 'top center',
                      boxShadow:       `0 0 10px rgba(56, 189, 248, 0.5)`,
                    }}
                  />
                  <span style={{
                    fontSize:   '17px',
                    fontWeight: 600,
                    color:      isActive ? '#ffffff' : '#cbd5e1',
                    lineHeight: 1.4,
                    flex:       1,
                    transition: 'color 0.3s ease',
                  }}>
                    {faq.q}
                  </span>
                  <div style={{ color: '#94a3b8', flexShrink: 0, marginTop: '2px' }}>
                    {isActive ? <X size={18} /> : <Plus size={18} />}
                  </div>
                </div>

                {/* Answer — GSAP fades in */}
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
