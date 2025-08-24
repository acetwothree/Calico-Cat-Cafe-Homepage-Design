import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { FAQPage } from './pages/FAQPage';
import { OurStoryPage } from './pages/OurStoryPage';
import { OurTeamPage } from './pages/OurTeamPage';
import { RescuesPage } from './pages/RescuesPage';

const AnnouncementBanner = () => {
  return (
    <div className="bg-[#FF7F50] text-white text-center py-2 px-4 w-full">
      <p className="text-sm md:text-base font-medium">
        🎉 Opening in September! Booking will be available soon. Stay Tuned! 🐱
      </p>
    </div>
  );
};

export function App() {
  return (
    <Router>
      <div className="font-sans bg-[#FFF1E6] min-h-screen">
        <AnnouncementBanner />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/our-story" element={<OurStoryPage />} />
          <Route path="/our-team" element={<OurTeamPage />} />
          <Route path="/rescues" element={<RescuesPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}