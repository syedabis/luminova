import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ValueProps from '@/components/ValueProps';
import Solutions from '@/components/Solutions';
import Technology from '@/components/Technology';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';

export default function HomePage() {
  return (
    <main className="page-wrapper">
      <Navbar />
      <Hero />
      <ValueProps />
      <Solutions />
      <Technology />
      <Services />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
      <ChatWidget />
    </main>
  );
}
