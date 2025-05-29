import React from 'react';
import { ShieldIcon, HandIcon, BanIcon, VolumeIcon } from 'lucide-react';
export const GuidelinesSection = () => {
  return <section id="guidelines" className="py-16 bg-sandy-brown">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#3A3335] mb-3">
            Protecting Our Cats
          </h2>
          <p className="text-center text-[#3A3335] mb-10 max-w-2xl mx-auto">
            Our feline friends' health and safety are our top priority. Please
            follow these guidelines during your visit.
          </p>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="bg-[#D4E7C5] p-3 rounded-full">
                    <ShieldIcon size={24} className="text-[#3A3335]" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-[#3A3335] mb-2">
                    Sanitizing Hands
                  </h3>
                  <p className="text-gray-700">
                    All visitors must use hand sanitizer before entering the cat
                    lounge. This helps protect our cats from potential germs and
                    bacteria.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="bg-[#D4E7C5] p-3 rounded-full">
                    <HandIcon size={24} className="text-[#3A3335]" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-[#3A3335] mb-2">
                    Gentle Interaction
                  </h3>
                  <p className="text-gray-700">
                    Always let cats approach you. Never force interaction or
                    pick up cats that don't want to be held. Gentle petting is
                    encouraged.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="bg-[#D4E7C5] p-3 rounded-full">
                    <BanIcon size={24} className="text-[#3A3335]" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-[#3A3335] mb-2">
                    Remove Shoes
                  </h3>
                  <p className="text-gray-700">
                    We ask all guests to remove their shoes before entering the
                    cat lounge. Clean slippers are provided for your comfort.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="bg-[#D4E7C5] p-3 rounded-full">
                    <VolumeIcon size={24} className="text-[#3A3335]" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-[#3A3335] mb-2">
                    Quiet Environment
                  </h3>
                  <p className="text-gray-700">
                    Please keep your voice down and avoid sudden loud noises
                    that might startle our cats. A calm atmosphere helps them
                    feel safe.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 p-4 bg-[#FFF1E6] rounded-lg">
              <p className="text-center text-[#3A3335]">
                <strong>Note:</strong> If you have allergies or are feeling
                unwell, we kindly ask you to reschedule your visit. This helps
                keep our cats healthy and ensures a better experience for
                everyone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};