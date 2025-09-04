import { useState } from 'react';
import { MenuIcon, XIcon, InstagramIcon, FacebookIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AcuityButton } from './AcuityButton';

// TikTok Icon Component using the provided image
const TikTokIcon = ({ className = '' }) => (
  <img 
    src="/assets/tiktok.png" 
    alt="TikTok" 
    className={`w-5 h-5 ${className}`}
  />
);

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#FFF1E6] sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-5 py-3">
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between w-full">
          {/* Left Section - Logo */}
          <div className="flex items-center pr-5">
            <img 
              src="/assets/logowindow.png" 
              alt="Calico Cat Café Logo" 
              className="h-10 w-10 mr-3"
            />
            <h1 className="text-[#3A3335] font-bold text-2xl whitespace-nowrap">
              Calico Cat Café
            </h1>
          </div>

          {/* Center Section - Navigation */}
          <nav className="flex-1 flex justify-center pr-16">
            <ul className="flex gap-8 -ml-7">
              <li>
                <Link to="/" className="text-[#3A3335] hover:text-[#FF7F50] font-medium text-base">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-[#3A3335] hover:text-[#FF7F50] font-medium text-base">
                  FAQ
                </Link>
              </li>
              <li>
                <AcuityButton>
                  <span className="text-[#3A3335] hover:text-[#FF7F50] font-medium text-base">
                    Book Now
                  </span>
                </AcuityButton>
              </li>
              <li>
                <Link to="/our-story" className="text-[#3A3335] hover:text-[#FF7F50] font-medium text-base">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/our-team" className="text-[#3A3335] hover:text-[#FF7F50] font-medium text-base">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/rescues" className="text-[#3A3335] hover:text-[#FF7F50] font-medium text-base">
                  Rescues
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-[#3A3335] hover:text-[#FF7F50] font-medium text-base">
                  Menu
                </Link>
              </li>
            </ul>
          </nav>

          {/* Right Section - Social Icons */}
          <div className="flex items-center gap-4 pl-5">
            <a 
              href="https://www.instagram.com/calicocatcafenj/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#3A3335] hover:text-[#FF7F50] transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon size={20} />
            </a>
            <a 
              href="https://www.facebook.com/p/Calico-Cat-Cafe-61578005157205/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#3A3335] hover:text-[#FF7F50] transition-colors"
              aria-label="Facebook"
            >
              <FacebookIcon size={20} />
            </a>
            <a 
              href="https://www.tiktok.com/@calicocatcafenj" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#3A3335] hover:text-[#FF7F50] transition-colors"
              aria-label="TikTok"
            >
              <TikTokIcon className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="/assets/logowindow.png" 
              alt="Calico Cat Café Logo" 
              className="h-10 w-10 mr-3"
            />
            <h1 className="text-[#3A3335] font-bold text-xl">
              Calico Cat Café
            </h1>
          </div>
          <button 
            className="text-[#3A3335] p-2" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 bg-[#FFF1E6] w-full">
            <ul className="flex flex-col space-y-4 px-4">
              <li>
                <Link 
                  to="/" 
                  className="text-lg text-[#3A3335] hover:text-[#FF7F50] font-medium block py-2 border-b border-gray-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/faq" 
                  className="text-lg text-[#3A3335] hover:text-[#FF7F50] font-medium block py-2 border-b border-gray-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  FAQ
                </Link>
              </li>
              <li>
                <AcuityButton className="w-full text-left">
                  <span className="text-lg text-[#3A3335] hover:text-[#FF7F50] font-medium block py-2">
                    Book Now
                  </span>
                </AcuityButton>
              </li>
              <li>
                <Link 
                  to="/our-story" 
                  className="text-lg text-[#3A3335] hover:text-[#FF7F50] font-medium block py-2 border-b border-gray-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link 
                  to="/our-team" 
                  className="text-lg text-[#3A3335] hover:text-[#FF7F50] font-medium block py-2 border-b border-gray-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link 
                  to="/rescues" 
                  className="text-lg text-[#3A3335] hover:text-[#FF7F50] font-medium block py-2 border-b border-gray-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Rescues
                </Link>
              </li>
              <li>
                <Link 
                  to="/menu" 
                  className="text-lg text-[#3A3335] hover:text-[#FF7F50] font-medium block py-2 border-b border-gray-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Menu
                </Link>
              </li>
              
              {/* Social Icons */}
              <div className="flex justify-center space-x-6 pt-4">
                <a 
                  href="https://www.instagram.com/calicocatcafenj/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#3A3335] hover:text-[#FF7F50] transition-colors"
                  aria-label="Instagram"
                >
                  <InstagramIcon size={24} />
                </a>
                <a 
                  href="https://www.facebook.com/p/Calico-Cat-Cafe-61578005157205/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#3A3335] hover:text-[#FF7F50] transition-colors"
                  aria-label="Facebook"
                >
                  <FacebookIcon size={24} />
                </a>
                <a 
                  href="https://www.tiktok.com/@calicocatcafenj" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#3A3335] hover:text-[#FF7F50] transition-colors"
                  aria-label="TikTok"
                >
                  <TikTokIcon className="w-6 h-6" />
                </a>
              </div>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};