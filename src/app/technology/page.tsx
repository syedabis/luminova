import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TechHero from '@/components/technology/TechHero';
import TechModels from '@/components/technology/TechModels';
import TechVectorRAG from '@/components/technology/TechVectorRAG';
import TechVoicePipeline from '@/components/technology/TechVoicePipeline';
import TechSecurity from '@/components/technology/TechSecurity';
import TechIntegrations from '@/components/technology/TechIntegrations';
import TechPlayground from '@/components/technology/TechPlayground';
import TechCTA from '@/components/technology/TechCTA';

export const metadata = {
  title: 'Enterprise AI Stack & Infrastructure Technology | Cortexa',
  description: 'Explore Cortexa’s enterprise AI technology stack: LLM multi-agent gateways, hybrid vector search RAG, sub-350ms voice AI, zero-hallucination guardrails, and native API connectors.',
};

export default function TechnologyPage() {
  return (
    <main style={{ backgroundColor: '#010101', minHeight: '100vh', color: '#ffffff' }}>
      <Navbar />
      <TechHero />
      <TechModels />
      <TechVectorRAG />
      <TechVoicePipeline />
      <TechSecurity />
      <TechIntegrations />
      <TechPlayground />
      <TechCTA />
      <Footer />
    </main>
  );
}
