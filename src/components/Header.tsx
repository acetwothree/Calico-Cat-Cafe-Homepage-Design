import { useState } from 'react';
import { MenuIcon, XIcon, InstagramIcon, FacebookIcon, TwitterIcon } from 'lucide-react';

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
                <a href="#" className="text-[#3A3335] hover:text-[#FF7F50] font-medium text-base">
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="https://calicocatcafe.setmore.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#3A3335] hover:text-[#FF7F50] font-medium text-base"
                >
                  Book Now
                </a>
              </li>
              <li>
                <a href="#" className="text-[#3A3335] hover:text-[#FF7F50] font-medium text-base">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="text-[#3A3335] hover:text-[#FF7F50] font-medium text-base">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="text-[#3A3335] hover:text-[#FF7F50] font-medium text-base">
                  Rescues
                </a>
              </li>
              <li>
                <a href="#" className="text-[#3A3335] hover:text-[#FF7F50] font-medium text-base">
                  Menu
                </a>
              </li>
              <li>
                <a href="#" className="text-[#3A3335] hover:text-[#FF7F50] font-medium text-base">
                  FAQ
                </a>
              </li>
            </ul>
          </nav>

          {/* Right Section - Social Icons */}
          <div className="flex items-center gap-4 pl-5">
            <a href="#" className="text-[#3A3335] hover:text-[#FF7F50] transition-colors">
              <InstagramIcon size={20} />
            </a>
            <a href="#" className="text-[#3A3335] hover:text-[#FF7F50] transition-colors">
              <FacebookIcon size={20} />
            </a>
            <a href="#" className="text-[#3A3335] hover:text-[#FF7F50] transition-colors">
              <TwitterIcon size={20} />
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
        {isMenuOpen && <nav className="md:hidden mt-4 pb-4">
            <ul className="flex flex-col space-y-3">
              <li>
                <a href="#" className="text-[#3A3335] hover:text-[#FF7F50] font-medium block">
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="https://calicocatcafe.setmore.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#3A3335] hover:text-[#FFCAA7] font-medium block"
                >
                  Book Now
                </a>
              </li>
              <li>
                <a href="#" className="text-[#3A3335] hover:text-[#FFCAA7] font-medium block">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="text-[#3A3335] hover:text-[#FFCAA7] font-medium block">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="text-[#3A3335] hover:text-[#FFCAA7] font-medium block">
                  Rescues
                </a>
              </li>
              <li>
                <a href="#" className="text-[#3A3335] hover:text-[#FFCAA7] font-medium block">
                  Sponsors
                </a>
              </li>
              <li>
                <a href="#" className="text-[#3A3335] hover:text-[#FFCAA7] font-medium block">
                  Menu
                </a>
              </li>
              <li>
                <a href="#" className="text-[#3A3335] hover:text-[#FFCAA7] font-medium block">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="text-[#3A3335] hover:text-[#FFCAA7] font-medium block">
                  Employment
                </a>
              </li>
              <li>
                <a href="#" className="text-[#3A3335] hover:text-[#FFCAA7] font-medium block">
                  FAQ
                </a>
              </li>
              <div className="flex space-x-4 pt-3">
                <a href="#" className="text-[#3A3335] hover:text-[#FFCAA7]">
                  <InstagramIcon size={20} />
                </a>
                <a href="#" className="text-[#3A3335] hover:text-[#FFCAA7]">
                  <FacebookIcon size={20} />
                </a>
                <a href="#" className="text-[#3A3335] hover:text-[#FFCAA7]">
                  <TwitterIcon size={20} />
                </a>
              </div>
            </ul>
          </nav>}
      </div>
    </header>
  );
};