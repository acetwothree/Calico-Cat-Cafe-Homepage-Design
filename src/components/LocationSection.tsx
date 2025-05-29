import React from 'react';
import { MapPinIcon, ClockIcon, PhoneIcon, MailIcon } from 'lucide-react';
export const LocationSection = () => {
  return <section id="location" className="py-16 bg-deep-charcoal">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#3A3335] mb-12">
          Find Us
        </h2>
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="lg:w-1/2">
              {/* This would typically be a map component, but we're using an image placeholder */}
              <img src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="Map to Calico Cat Cafe" className="w-full h-full object-cover" />
            </div>
            <div className="lg:w-1/2 p-8">
              <h3 className="text-2xl font-bold text-[#3A3335] mb-6">
                Contact & Location
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#FFCAA7] p-2 rounded-full mr-4">
                    <MapPinIcon size={20} className="text-[#3A3335]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#3A3335]">Address</h4>
                    <p className="text-gray-700">123 Whisker Lane</p>
                    <p className="text-gray-700">Catville, CA 90210</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#FFCAA7] p-2 rounded-full mr-4">
                    <ClockIcon size={20} className="text-[#3A3335]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#3A3335]">Hours</h4>
                    <p className="text-gray-700">
                      Tuesday - Sunday: 10am - 8pm
                    </p>
                    <p className="text-gray-700">Monday: Closed</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#FFCAA7] p-2 rounded-full mr-4">
                    <PhoneIcon size={20} className="text-[#3A3335]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#3A3335]">Phone</h4>
                    <p className="text-gray-700">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#FFCAA7] p-2 rounded-full mr-4">
                    <MailIcon size={20} className="text-[#3A3335]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#3A3335]">Email</h4>
                    <p className="text-gray-700">hello@calicocatcafe.com</p>
                  </div>
                </div>
                <div className="pt-4">
                  <h4 className="font-semibold text-[#3A3335] mb-2">
                    Getting Here
                  </h4>
                  <p className="text-gray-700 mb-2">
                    We're conveniently located just 2 blocks from Main Street
                    Station. Bus routes 5, 10, and 15 stop within a 5-minute
                    walk.
                  </p>
                  <p className="text-gray-700">
                    Free parking is available behind our building for cafe
                    guests.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};