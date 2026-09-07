'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const frameRef   = useRef<HTMLDivElement>(null);
  const mediaRef   = useRef<HTMLImageElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const frame   = frameRef.current;
    const media   = mediaRef.current;
    const overlay = overlayRef.current;

    if (!section || !frame || !media || !overlay) return;

    const ctx = gsap.context(() => {
      // 1. Initial set to prevent layout flash
      gsap.set(frame, { '--expand-p': 0 });
      gsap.set(media, { scale: 1.35, opacity: 0.25 });
      gsap.set(overlay, { opacity: 0, y: 30 });

      // 2. Timeline with ScrollTrigger scrub
      // Animating the single CSS variable '--expand-p' guarantees that the browser 
      // calculates all 4 inset edges symmetrically at the exact same time.
      gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',         // starts animating when the top of the section enters the bottom of the screen
          end: 'center center+=10%',    // reaches full width slightly past the center of the screen
          scrub: 1                     // smooth scroll scrub
        }
      })
      .to(frame, {
        '--expand-p': 1,
        ease: 'none'
      }, 0)
      .to(media, {
        scale: 1,
        ease: 'none'
      }, 0)
      .to(overlay, {
        opacity: 1,
        y: 0,
        ease: 'none'
      }, 0.5); // starts fading in halfway through the expansion
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      id="contact" 
      style={{ 
        height: '100vh', 
        minHeight: '650px',
        backgroundColor: '#010101', 
        position: 'relative', 
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {/* Clip-Path Frame */}
      <div 
        ref={frameRef} 
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          backgroundColor: '#0c0e12',
          willChange: 'clip-path',
          // Symmetrical calculation using a single CSS custom property driven by GSAP
          clipPath: 'inset(calc(18% * (1 - var(--expand-p))) calc(28% * (1 - var(--expand-p))) calc(18% * (1 - var(--expand-p))) calc(28% * (1 - var(--expand-p))) round calc(24px * (1 - var(--expand-p))))',
          '--expand-p': 0
        } as React.CSSProperties}
      >
        {/* Background Image */}
        <img
          ref={mediaRef}
          src="/images/asset_51_684fab152a79b702fed055b9_Shape_20_232_20_Dark_20theme_.png"
          alt="CTA background graphic"
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            position: 'absolute',
            inset: 0,
            willChange: 'transform'
          }}
        />

        {/* Dark overlay scrim */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2))',
          pointerEvents: 'none'
        }} />

        {/* Content Card (Fades in on scroll) */}
        <div 
          ref={overlayRef} 
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            willChange: 'opacity, transform'
          }}
        >
          <div style={{
            backgroundColor: 'rgba(20, 24, 33, 0.8)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '32px',
            padding: '64px 48px',
            textAlign: 'center',
            boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
            maxWidth: '860px',
            width: '100%'
          }}>
            
            <span style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.08em', color: '#60a5fa', textTransform: 'uppercase', marginBottom: '16px', display: 'block' }}>
              THE CORTEXA APPROACH
            </span>

            <h2 style={{ fontSize: 'clamp(22px, 3.5vw, 38px)', fontWeight: 700, color: '#ffffff', lineHeight: 1.3, marginBottom: '24px' }}>
              Inspired by intelligent systems, collaboration & efficiency.
            </h2>

            <p style={{ fontSize: '16px', color: '#cbd5e1', lineHeight: 1.7, marginBottom: '24px', maxWidth: '780px', margin: '0 auto 24px auto' }}>
              Cortexa is inspired by intelligent neural architecture — a symbol of adaptive systems, collaboration and efficiency. The name reflects our focus on building seamless, scalable automations that power complex operations behind the scenes.
            </p>

            <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: 1.6, marginBottom: '40px', maxWidth: '720px', margin: '0 auto 40px auto' }}>
              Whether you’re considering building or migrating, our team can guide or answer any questions you might have. Click below to request an appointment.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Link
                href="mailto:hello@cortexastudios.com"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  backgroundColor: '#ffffff',
                  color: '#0c0e12',
                  padding: '16px 36px',
                  borderRadius: '100px',
                  fontSize: '16px',
                  fontWeight: 700,
                  textDecoration: 'none',
                  boxShadow: '0 10px 25px rgba(255,255,255,0.2)',
                  transition: 'all 0.2s ease'
                }}
              >
                Get in Touch <ArrowUpRight size={20} />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
