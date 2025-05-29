import React from 'react';
import { PawPrintIcon, CarIcon, CoffeeIcon, UtensilsIcon, HeartIcon } from 'lucide-react';
export const AboutSection = () => {
  return <section id="about" className="py-16 bg-soft-cream">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#3A3335] mb-12">
          About Our Cafe
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Atmosphere */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="bg-[#FFCAA7] p-3 rounded-full">
                <HeartIcon size={24} className="text-[#3A3335]" />
              </div>
              <h3 className="ml-4 text-xl font-semibold text-[#3A3335]">
                Cozy Atmosphere
              </h3>
            </div>
            <p className="text-gray-700">
              Our cafe offers a warm, welcoming environment where you can relax
              with our feline friends. Comfortable seating, gentle lighting, and
              calming music create the perfect backdrop for quality time with
              cats.
            </p>
          </div>
          {/* Cats */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="bg-[#FFCAA7] p-3 rounded-full">
                <PawPrintIcon size={24} className="text-[#3A3335]" />
              </div>
              <h3 className="ml-4 text-xl font-semibold text-[#3A3335]">
                Our Feline Friends
              </h3>
            </div>
            <p className="text-gray-700">
              Meet our family of 15 rescue cats, each with their own personality
              and charm. All our cats have been rescued, rehabilitated, and are
              available for adoption to loving homes.
            </p>
          </div>
          {/* Parking */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="bg-[#FFCAA7] p-3 rounded-full">
                <CarIcon size={24} className="text-[#3A3335]" />
              </div>
              <h3 className="ml-4 text-xl font-semibold text-[#3A3335]">
                Convenient Parking
              </h3>
            </div>
            <p className="text-gray-700">
              Free parking is available in our dedicated lot behind the cafe.
              Street parking is also available, and we're just a 5-minute walk
              from the Main Street bus stop.
            </p>
          </div>
          {/* Drinks */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="bg-[#FFCAA7] p-3 rounded-full">
                <CoffeeIcon size={24} className="text-[#3A3335]" />
              </div>
              <h3 className="ml-4 text-xl font-semibold text-[#3A3335]">
                Drinks & Beverages
              </h3>
            </div>
            <p className="text-gray-700">
              Enjoy our selection of specialty coffees, teas, and cat-themed
              drinks. Try our signature "Calico Latte" with cinnamon and caramel
              swirls that mimic calico patterns.
            </p>
          </div>
          {/* Food */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="bg-[#FFCAA7] p-3 rounded-full">
                <UtensilsIcon size={24} className="text-[#3A3335]" />
              </div>
              <h3 className="ml-4 text-xl font-semibold text-[#3A3335]">
                Delicious Treats
              </h3>
            </div>
            <p className="text-gray-700">
              Our menu features freshly baked pastries, light sandwiches, and
              adorable cat-shaped cookies. We offer vegetarian, vegan, and
              gluten-free options to accommodate all dietary preferences.
            </p>
          </div>
        </div>
      </div>
    </section>;
};