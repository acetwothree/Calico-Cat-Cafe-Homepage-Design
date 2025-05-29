import React, { useState } from 'react';
import { MenuIcon, XIcon, InstagramIcon, FacebookIcon, TwitterIcon } from 'lucide-react';
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return <header className="bg-[#FFF1E6] sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src="https://placehold.co/50x50/FFCAA7/3A3335?text=CC" alt="Calico Cat Cafe Logo" className="h-12 w-12 rounded-full" />
            <h1 className="ml-3 text-[#3A3335] font-bold text-xl md:text-2xl">
              Calico Cat Cafe
            </h1>
          </div>
          {/* Social Media Icons */}
          <div className="hidden md:flex items-center space-x-3">
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
          {/* Mobile Menu Button */}
          <button className="md:hidden text-[#3A3335]" onClick={toggleMenu}>
            {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex">
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="text-[#3A3335] hover:text-[#FFCAA7] font-medium">
                  Home
                </a>
              </li>
              <li>
                <a href="#book" className="text-[#3A3335] hover:text-[#FFCAA7] font-medium">
                  Book Now
                </a>
              </li>
              <li>
                <a href="#" className="text-[#3A3335] hover:text-[#FFCAA7] font-medium">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="text-[#3A3335] hover:text-[#FFCAA7] font-medium">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="text-[#3A3335] hover:text-[#FFCAA7] font-medium">
                  Rescues
                </a>
              </li>
              <li>
                <a href="#" className="text-[#3A3335] hover:text-[#FFCAA7] font-medium">
                  Menu
                </a>
              </li>
              <li>
                <a href="#" className="text-[#3A3335] hover:text-[#FFCAA7] font-medium">
                  FAQ
                </a>
              </li>
            </ul>
          </nav>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && <nav className="md:hidden mt-4 pb-4">
            <ul className="flex flex-col space-y-3">
              <li>
                <a href="#" className="text-[#3A3335] hover:text-[#FFCAA7] font-medium block">
                  Home
                </a>
              </li>
              <li>
                <a href="#book" className="text-[#3A3335] hover:text-[#FFCAA7] font-medium block">
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
    </header>;
};