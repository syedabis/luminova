import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EngineerHero from '@/components/engineer/EngineerHero';
import EngineerProjects from '@/components/engineer/EngineerProjects';
import EngineerCaseStudies from '@/components/engineer/EngineerCaseStudies';
import EngineerTechStack from '@/components/engineer/EngineerTechStack';
import EngineerExperience from '@/components/engineer/EngineerExperience';
import EngineerOpenSource from '@/components/engineer/EngineerOpenSource';
import EngineerTestimonials from '@/components/engineer/EngineerTestimonials';
import EngineerCertifications from '@/components/engineer/EngineerCertifications';
import EngineerContact from '@/components/engineer/EngineerContact';

export const metadata = {
  title: 'Alex Vance | Lead AI & Autonomous Systems Architect @ Formiqa',
  description: 'Portfolio of Alex Vance, Lead AI Engineer at Formiqa. Specializing in LLM multi-agent orchestration, RAG vector search, and production AI workflows.',
};

export default function EngineerPortfolioPage() {
  return (
    <main style={{ backgroundColor: '#010101', minHeight: '100vh', color: '#ffffff' }}>
      <Navbar />
      <EngineerHero />
      <EngineerProjects />
      <EngineerCaseStudies />
      <EngineerTechStack />
      <EngineerExperience />
      <EngineerOpenSource />
      <EngineerTestimonials />
      <EngineerCertifications />
      <EngineerContact />
      <Footer />
    </main>
  );
}
