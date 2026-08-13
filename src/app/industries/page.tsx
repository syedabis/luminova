'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import IndustriesHero from '@/components/industries/IndustriesHero';
import IndustryVerticals from '@/components/industries/IndustryVerticals';
import IndustryRoiCalculator from '@/components/industries/IndustryRoiCalculator';
import IndustryCaseStudies from '@/components/industries/IndustryCaseStudies';
import IndustrySecurity from '@/components/industries/IndustrySecurity';
import IndustryFAQ from '@/components/industries/IndustryFAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';

export default function IndustriesPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const handleSelectCategory = (category: string) => {
    setActiveCategory(category);
    // Smooth scroll down to verticals section if selecting a specific category
    const el = document.getElementById('verticals');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="page-wrapper">
      <Navbar />
      <IndustriesHero onSelectCategory={handleSelectCategory} activeCategory={activeCategory} />
      <IndustryVerticals selectedCategory={activeCategory} />
      <IndustryRoiCalculator />
      <IndustryCaseStudies />
      <IndustrySecurity />
      <IndustryFAQ />
      <CTA />
      <Footer />
      <ChatWidget />
    </main>
  );
}
