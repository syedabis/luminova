'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import SolutionsHero from '@/components/solutions/SolutionsHero';
import SolutionsGrid from '@/components/solutions/SolutionsGrid';
import SolutionsFlowVisualizer from '@/components/solutions/SolutionsFlowVisualizer';
import SolutionsIntegrations from '@/components/solutions/SolutionsIntegrations';
import SolutionsFAQ from '@/components/solutions/SolutionsFAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';

export default function SolutionsPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const handleSelectCategory = (category: string) => {
    setActiveCategory(category);
    const el = document.getElementById('solutions-list');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="page-wrapper">
      <Navbar />
      <SolutionsHero onSelectCategory={handleSelectCategory} activeCategory={activeCategory} />
      <SolutionsGrid selectedCategory={activeCategory} />
      <SolutionsFlowVisualizer />
      <SolutionsIntegrations />
      <SolutionsFAQ />
      <CTA />
      <Footer />
      <ChatWidget />
    </main>
  );
}
