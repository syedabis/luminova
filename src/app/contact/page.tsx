import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactHero from '@/components/contact/ContactHero';
import ContactFormSection from '@/components/contact/ContactFormSection';
import ContactOfficeLocations from '@/components/contact/ContactOfficeLocations';
import ContactFAQ from '@/components/contact/ContactFAQ';
import CTA from '@/components/CTA';

export const metadata = {
  title: 'Contact Us & Book AI Discovery Audit | Cortexa AI Agency',
  description: 'Reach out to Cortexa AI & Automation Agency. Book a 15-minute feasibility discovery call or send your workflow scope for a custom SLA proposal.',
};

export default function ContactPage() {
  return (
    <main style={{ backgroundColor: '#010101', minHeight: '100vh', color: '#ffffff' }}>
      <Navbar />
      <ContactHero />
      <ContactFormSection />
      <ContactOfficeLocations />
      <ContactFAQ />
      <CTA />
      <Footer />
    </main>
  );
}
