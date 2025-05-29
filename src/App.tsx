import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { AdmissionSection } from './components/AdmissionSection';
import { GuidelinesSection } from './components/GuidelinesSection';
import { ReservationSection } from './components/ReservationSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
export function App() {
  return <div className="font-sans bg-[#FFF1E6] min-h-screen">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <GallerySection />
        <AdmissionSection />
        <GuidelinesSection />
        <ReservationSection />
        <LocationSection />
      </main>
      <Footer />
    </div>;
}