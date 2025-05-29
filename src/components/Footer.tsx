import React from 'react';
import { InstagramIcon, FacebookIcon, TwitterIcon, HeartIcon } from 'lucide-react';
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
              <a href="#" className="text-white hover:text-[#FFCAA7]">
                <InstagramIcon size={24} />
              </a>
              <a href="#" className="text-white hover:text-[#FFCAA7]">
                <FacebookIcon size={24} />
              </a>
              <a href="#" className="text-white hover:text-[#FFCAA7]">
                <TwitterIcon size={24} />
              </a>
              <a href="#" className="text-white hover:text-[#FFCAA7]">
                <div size={24} />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-[#FFCAA7]">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#book" className="text-gray-300 hover:text-[#FFCAA7]">
                    Book Now
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-[#FFCAA7]">
                    Our Story
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-[#FFCAA7]">
                    Menu
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-[#FFCAA7]">
                    Shop
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Information</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-[#FFCAA7]">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-[#FFCAA7]">
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-[#FFCAA7]">
                    Rescues
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-[#FFCAA7]">
                    Sponsors
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-[#FFCAA7]">
                    Employment
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-gray-300">123 Whisker Lane</li>
                <li className="text-gray-300">Catville, CA 90210</li>
                <li className="text-gray-300">(555) 123-4567</li>
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