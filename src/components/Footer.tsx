import { InstagramIcon, FacebookIcon, HeartIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AcuityButton } from './AcuityButton';

export const Footer = () => {
  return <footer className="bg-[#3A3335] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <img src="https://placehold.co/50x50/FFCAA7/3A3335?text=CC" alt="Calico Cat Cafe Logo" className="h-12 w-12 rounded-full" />
              <h2 className="ml-3 text-xl font-bold">Calico Cat Cafe</h2>
            </div>
            <p className="mt-4 max-w-xs text-gray-300">
              A cozy place where cats and humans come together to share warmth,
              comfort, and delicious treats.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="https://www.instagram.com/calicocatcafenj" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FF7F50] transition-colors">
                <InstagramIcon size={24} strokeWidth={1.5} />
              </a>
              <a href="https://www.facebook.com/calicocatcafenj" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FF7F50] transition-colors">
                <FacebookIcon size={24} strokeWidth={1.5} />
              </a>
              <a href="https://www.tiktok.com/@calicocatcafenj" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <img src="/assets/tiktok.png" alt="TikTok" className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-[#FFCAA7] transition-colors block" onClick={() => window.scrollTo(0, 0)}>
                    Home
                  </Link>
                </li>
                <li>
                  <AcuityButton className="w-full text-left p-0">
                    <span className="text-gray-300 hover:text-[#FFCAA7] transition-colors font-normal">
                      Book Now
                    </span>
                  </AcuityButton>
                </li>
                <li>
                  <Link to="/menu" className="text-gray-300 hover:text-[#FFCAA7] transition-colors block" onClick={() => window.scrollTo(0, 0)}>
                    Menu
                  </Link>
                </li>
                <li>
                  <Link to="/rescues" className="text-gray-300 hover:text-[#FFCAA7] transition-colors block" onClick={() => window.scrollTo(0, 0)}>
                    Rescues
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Info</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/our-story" className="text-gray-300 hover:text-[#FFCAA7] transition-colors block" onClick={() => window.scrollTo(0, 0)}>
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link to="/our-team" className="text-gray-300 hover:text-[#FFCAA7] transition-colors block" onClick={() => window.scrollTo(0, 0)}>
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="text-gray-300 hover:text-[#FFCAA7] transition-colors block" onClick={() => window.scrollTo(0, 0)}>
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-gray-300">918 White Horse Pike</li>
                <li className="text-gray-300">Oaklyn, NJ 08107</li>
                <li className="text-gray-300">(856) 209-4972</li>
                <li className="text-gray-300">hello@calicocatcafe.com</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Calico Cat Cafe. All rights reserved.
          </p>
          <div className="flex justify-center items-center mt-4 text-sm text-gray-400">
            <span>Made with</span>
            <HeartIcon size={16} className="mx-1 text-[#FFCAA7]" />
            <span>and lots of purrs</span>
          </div>
        </div>
      </div>
    </footer>;
};