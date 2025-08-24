import { AboutSection } from '../components/AboutSection';
import { AdmissionSection } from '../components/AdmissionSection';
import { GallerySection } from '../components/GallerySection';
import { GuidelinesSection } from '../components/GuidelinesSection';
import { Hero } from '../components/Hero';
import { LocationSection } from '../components/LocationSection';
import { ReservationSection } from '../components/ReservationSection';

export const HomePage = () => {
  return (
    <main>
      <Hero />
      <AboutSection />
      <GallerySection />
      <AdmissionSection />
      <GuidelinesSection />
      <ReservationSection />
      <LocationSection />
    </main>
  );
};
