'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const EASE = 'power3.out';
const EASE4 = 'power4.out';

/**
 * Global scroll-driven reveal animations for ALL pages.
 *
 * KEY RULES to prevent invisible/stuck elements:
 *  - `once: true` so the animation fires exactly once.
 *  - `clearProps: 'filter'` ensures blur is fully removed after the animation ends.
 */
export default function PageAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    const rafId = requestAnimationFrame(() => {
      const ctx = gsap.context(() => {

        // ─── Hero entry animations (plays immediately) ───────────────────────
        const heroTl = gsap.timeline({ defaults: { ease: EASE4 } });

        heroTl.fromTo('.hero-badge', 
          { y: 20, opacity: 0, filter: 'blur(6px)' },
          { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.6, clearProps: 'filter' }
        , 0);

        heroTl.fromTo('.hero-heading, .hero-heading-all', 
          { y: 44, opacity: 0, filter: 'blur(10px)' },
          { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.85, clearProps: 'filter' }
        , 0.15); // Distinct gap for heading

        heroTl.fromTo('.hero-desc', 
          { y: 28, opacity: 0, filter: 'blur(7px)' },
          { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.7, clearProps: 'filter' }
        , 0.35); // Distinct gap for description

        heroTl.fromTo('.hero-btn, .feature-1-wrap a, .feature-1-wrap button', 
          { y: 18, opacity: 0, filter: 'blur(5px)' },
          { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.6, stagger: 0.08, clearProps: 'filter' }
        , 0.5); // Distinct gap for buttons

        heroTl.fromTo('.hero-visual, .hero-video-container', 
          { y: 55, opacity: 0, scale: 0.97, filter: 'blur(10px)' },
          { y: 0, opacity: 1, scale: 1, filter: 'blur(0px)', duration: 0.95, clearProps: 'filter' }
        , 0.65); // Final stagger for the main visual

        // ─── h2 headings (scroll driven) ─────────────────────────────────────
        gsap.utils.toArray<HTMLElement>('section h2').forEach(el => {
          gsap.from(el, {
            y: 40, opacity: 0, filter: 'blur(10px)', duration: 0.9, ease: EASE,
            clearProps: 'filter',
            scrollTrigger: { trigger: el, start: 'top 90%', once: true },
          });
        });

        // ─── h3 sub-headings ──────────────────────────────────────────────────
        gsap.utils.toArray<HTMLElement>('section h3').forEach(el => {
          gsap.from(el, {
            y: 26, opacity: 0, filter: 'blur(7px)', duration: 0.8, ease: EASE,
            clearProps: 'filter',
            scrollTrigger: { trigger: el, start: 'top 92%', once: true },
          });
        });

        // ─── Section paragraphs ───────────────────────────────────────────────
        gsap.utils.toArray<HTMLElement>('section > div > div > p').forEach(el => {
          gsap.from(el, {
            y: 22, opacity: 0, filter: 'blur(7px)', duration: 0.8, ease: EASE,
            clearProps: 'filter',
            scrollTrigger: { trigger: el, start: 'top 92%', once: true },
          });
        });

        // ─── SpotlightCards ───────────────────────────────────────────────────
        gsap.utils.toArray<HTMLElement>('.card-spotlight').forEach((el, i) => {
          gsap.from(el, {
            y: 40, opacity: 0, filter: 'blur(9px)', duration: 0.85, ease: EASE,
            delay: (i % 3) * 0.07,
            clearProps: 'filter',
            scrollTrigger: { trigger: el, start: 'top 92%', once: true },
          });
        });

        // ─── hover-card-glow cards ────────────────────────────────────────────
        gsap.utils.toArray<HTMLElement>('.hover-card-glow').forEach((el, i) => {
          gsap.from(el, {
            y: 36, opacity: 0, filter: 'blur(9px)', duration: 0.85, ease: EASE,
            delay: (i % 4) * 0.09,
            clearProps: 'filter',
            scrollTrigger: { trigger: el, start: 'top 92%', once: true },
          });
        });

        // ─── CTA sections ──────────────────────────────────────────────────────
        gsap.utils.toArray<HTMLElement>('section[id="cta"], section[class*="cta"]').forEach(el => {
          gsap.from(el, {
            y: 28, opacity: 0, filter: 'blur(7px)', duration: 0.85, ease: EASE,
            clearProps: 'filter',
            scrollTrigger: { trigger: el, start: 'top 88%', once: true },
          });
        });

      });

      (window as any).__pageAnimCtx = ctx;
    });

    return () => {
      cancelAnimationFrame(rafId);
      (window as any).__pageAnimCtx?.revert();
    };
  }, [pathname]);

  return null;
}
