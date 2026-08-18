'use client';

import { useRef, useEffect, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { Plus, X } from 'lucide-react';

// ─── FAQ data ────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: 'Will this replace my team?',
    a: 'No. AI and automation are designed to augment your team, not replace them. We eliminate repetitive, low-value tasks so your team can focus on high-impact strategic work and customer relationships.'
  },
  {
    q: "What's the difference between AI and automation?",
    a: 'Automation typically follows defined rules to perform tasks without manual input (e.g., sending reminders or updating systems). AI adds intelligence—such as making decisions, summarising data, or generating content—based on context and learning.'
  },
  {
    q: 'How long does it take to see results?',
    a: 'Most client automations are fully deployed and operational within 2 to 4 weeks. You will start seeing immediate time savings and efficiency gains as soon as your first workflow goes live.'
  },
  {
    q: 'Is AI suitable for small or mid-sized businesses?',
    a: 'Yes! Small and mid-sized businesses often see the highest ROI from AI automation because it allows them to operate with the efficiency and speed of an enterprise without adding headcount.'
  },
  {
    q: 'What types of processes can be automated with AI?',
    a: 'We automate lead qualification, sales follow-ups, client onboarding, invoice management, review collection, customer support tickets, content generation, and custom data processing.'
  },
  {
    q: 'What tools or platforms do you work with?',
    a: 'We integrate with all major tools including Make.com, n8n, OpenAI, Anthropic, HubSpot, Salesforce, ClickUp, Monday.com, Calendly, Typeform, Stripe, and custom REST APIs.'
  }
];

// ─── Config (mirrors AccordionGallery props) ──────────────────────────────────
const EXPAND_RATIO = 0.44;   // active panel gets 44% of available height
const CONTAINER_H  = 610;    // px — fixed height required for flex-grow to work
const GAP          = 8;      // px between panels
const DURATION     = 0.6;
const EASE         = 'power3.out';
const STAGGER      = 0.04;

export default function FAQ() {
  const rootRef    = useRef<HTMLDivElement>(null);
  const panelRefs  = useRef<(HTMLDivElement | null)[]>([]);
  const answerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const barRefs    = useRef<(HTMLDivElement | null)[]>([]);
  const tlRef      = useRef<gsap.core.Timeline | null>(null);
  const firstRun   = useRef(true);

  const count = faqs.length;
  const [active, setActive] = useState(1); // default open — Q2

  // grow factor: same formula as AccordionGallery
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

        // ── flex-grow expansion (the AccordionGallery core trick) ──
        tl.to(panel, { flexGrow: isActive ? grow : 1, duration: dur, ease: EASE }, 0);

        // ── green accent bar ──
        if (bar) {
          tl.to(
            bar,
            {
              scaleY:  isActive ? 1 : 0.3,
              opacity: isActive ? 1 : 0,
              backgroundColor: '#10b981',
              duration: dur,
              ease: EASE
            },
            0
          );
        }

        // ── answer text fade + slide ──
        if (answer) {
          tl.to(
            answer,
            {
              opacity:  isActive ? 1 : 0,
              y:        isActive ? 0 : 10,
              duration: isActive ? dur : dur * 0.45,
              ease:     EASE,
              delay:    isActive && animate ? STAGGER * i : 0
            },
            0
          );
        }
      });

      tlRef.current = tl;
    },
    [active, grow]
  );

  // Run layout on mount (instant) and on every active change (animated)
  useEffect(() => {
    applyLayout(!firstRun.current);
    firstRun.current = false;
  }, [applyLayout]);

  // Cleanup on unmount
  useEffect(() => () => { tlRef.current?.kill(); }, []);

  const handleClick = (i: number) => {
    setActive(i); // always keep one open (AccordionGallery behaviour)
  };

  const handleKeyDown = (i: number, e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ')       { e.preventDefault(); handleClick(i); }
    if (e.key === 'ArrowDown')                     { e.preventDefault(); setActive((i + 1) % count); }
    if (e.key === 'ArrowUp')                       { e.preventDefault(); setActive((i - 1 + count) % count); }
  };

  return (
    <section id="faq" className="section-xl" style={{ padding: '100px 0', backgroundColor: '#010101' }}>
      <div className="container" style={{ maxWidth: '1080px', margin: '0 auto', padding: '0 24px' }}>

        {/* Section header — unchanged copy */}
        <div style={{ marginBottom: '48px' }}>
          <h2 style={{
            fontSize: 'clamp(36px, 5.5vw, 56px)',
            fontWeight: 700,
            lineHeight: 1.15,
            color: '#ffffff',
            letterSpacing: '-0.02em',
            margin: 0
          }}>
            FAQs.{' '}
            <span style={{ color: '#94a3b8', fontWeight: 400 }}>
              We've answered some of the most common questions below about how we work and what to expect.
            </span>
          </h2>
        </div>

        {/* ── AccordionGallery-style vertical stack ── */}
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
                  borderRadius:    '12px',
                  cursor:          'pointer',
                  backgroundColor: isActive
                    ? 'rgba(16, 185, 129, 0.05)'
                    : 'rgba(255, 255, 255, 0.03)',
                  border: `1px solid ${
                    isActive
                      ? 'rgba(16, 185, 129, 0.22)'
                      : 'rgba(255, 255, 255, 0.06)'
                  }`,
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
                {/* ── Question row ── */}
                <div style={{
                  display:     'flex',
                  alignItems:  'flex-start',
                  gap:         '14px',
                  flexShrink:  0,
                }}>

                  {/* Accent bar — animated by GSAP (same as ag-panel__bar) */}
                  <div
                    ref={el => { barRefs.current[i] = el; }}
                    style={{
                      width:           '3px',
                      height:          '22px',
                      borderRadius:    '3px',
                      backgroundColor: '#10b981',
                      flexShrink:      0,
                      marginTop:       '2px',
                      opacity:         0,
                      transformOrigin: 'top center',
                      boxShadow:       '0 0 10px rgba(16, 185, 129, 0.5)',
                    }}
                  />

                  <span style={{
                    fontSize:   '17px',
                    fontWeight: 500,
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

                {/* ── Answer — GSAP fades + slides in (same as ag-panel__text) ── */}
                <div
                  ref={el => { answerRefs.current[i] = el; }}
                  style={{
                    opacity:    0,
                    marginTop:  '14px',
                    paddingLeft:'17px', // bar(3px) + gap(14px) = 17px
                    flex:       1,
                    overflow:   'hidden',
                  }}
                >
                  <p style={{
                    fontSize:   '15px',
                    color:      '#94a3b8',
                    lineHeight: 1.65,
                    fontWeight: 400,
                    margin:     0,
                  }}>
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
