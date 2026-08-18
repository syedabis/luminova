'use client';

import React, { useEffect, useRef, useState } from 'react';
import './SmoothDOMGallery.css';

function lerp(p1: number, p2: number, t: number) {
  return p1 + (p2 - p1) * t;
}

interface SmoothDOMGalleryProps {
  items: React.ReactNode[];
  scrollSpeed?: number;
  scrollEase?: number;
  itemWidth?: number;
}

export default function SmoothDOMGallery({
  items,
  scrollSpeed = 2,
  scrollEase = 0.05,
  itemWidth = 420
}: SmoothDOMGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  // We duplicate items to ensure infinite looping works smoothly
  const displayItems = [...items, ...items];
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let isDown = false;
    let startX = 0;
    
    const scroll = { ease: scrollEase, current: 0, target: 0, last: 0, position: 0 };
    let rafId: number;

    const extras = new Array(displayItems.length).fill(0);
    const gap = 60; // gap between items
    const totalItemWidth = itemWidth + gap;
    const widthTotal = totalItemWidth * displayItems.length;

    // Center alignment offset
    let screenWidth = container.clientWidth;

    const update = () => {
      scroll.current = lerp(scroll.current, scroll.target, scroll.ease);
      const direction = scroll.current > scroll.last ? 'right' : 'left';
      const speed = scroll.current - scroll.last;

      itemsRef.current.forEach((el, index) => {
        if (!el) return;

        // Base X position for this item
        const baseX = totalItemWidth * index;
        
        // Calculate raw X position based on scroll
        let x = baseX - scroll.current - extras[index];

        // Infinite loop logic
        const halfWidth = widthTotal / 2;
        const viewportOffset = screenWidth / 2 + totalItemWidth; // buffer zone
        
        // Center the gallery
        const displayX = x + (screenWidth / 2) - (itemWidth / 2);

        // Teleport items if they go out of bounds
        if (direction === 'right' && x < -viewportOffset) {
          extras[index] -= widthTotal;
        }
        if (direction === 'left' && x > viewportOffset) {
          extras[index] += widthTotal;
        }

        // Apply transform (no tilt/bend as requested)
        el.style.transform = `translate3d(${displayX}px, 0, 0)`;
      });

      scroll.last = scroll.current;
      rafId = requestAnimationFrame(update);
    };

    const handleResize = () => {
      screenWidth = container.clientWidth;
    };

    const handleTouchDown = (e: MouseEvent | TouchEvent) => {
      isDown = true;
      scroll.position = scroll.current;
      startX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      container.style.cursor = 'grabbing';
    };

    const handleTouchMove = (e: MouseEvent | TouchEvent) => {
      if (!isDown) return;
      const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const distance = (startX - x) * (scrollSpeed * 0.5);
      scroll.target = scroll.position + distance;
    };

    const handleTouchUp = () => {
      isDown = false;
      container.style.cursor = 'grab';
      
      // Snap to closest item
      const itemIndex = Math.round(scroll.target / totalItemWidth);
      scroll.target = itemIndex * totalItemWidth;
    };

    // Events
    window.addEventListener('resize', handleResize);
    container.addEventListener('mousedown', handleTouchDown);
    window.addEventListener('mousemove', handleTouchMove);
    window.addEventListener('mouseup', handleTouchUp);
    container.addEventListener('touchstart', handleTouchDown, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchUp);

    // Start loop
    rafId = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousedown', handleTouchDown);
      window.removeEventListener('mousemove', handleTouchMove);
      window.removeEventListener('mouseup', handleTouchUp);
      container.removeEventListener('touchstart', handleTouchDown);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchUp);
    };
  }, [displayItems.length, scrollSpeed, scrollEase, itemWidth]);

  return (
    <div 
      className="smooth-dom-gallery" 
      ref={containerRef}
    >
      {displayItems.map((child, i) => (
        <div 
          key={i}
          ref={(el) => { itemsRef.current[i] = el; }}
          className="smooth-dom-item"
          style={{ width: itemWidth }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}

// Ensure type on window for snapTimeout
declare global {
  interface Window {
    snapTimeout: number;
  }
}
