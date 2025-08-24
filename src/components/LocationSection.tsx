import { MapPinIcon, ClockIcon, PhoneIcon, NavigationIcon } from 'lucide-react';

export const LocationSection = () => {
  const address = "918 White Horse Pike, Oaklyn, NJ 08028";
  const phone = "(856) 209-4972";
  const encodedAddress = encodeURIComponent(address);
  const googleMapsUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3065.764521810106!2d-75.0852!3d39.9017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c7f8b9b9b9b9%3A0x9b9b9b9b9b9b9b9b!2s${encodedAddress}!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus`;
  const directionsUrl = `https://www.google.com/maps/dir//${encodedAddress}`;

  return (
    <section id="location" className="py-16 bg-warm-sand">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#3A3335] mb-12">
          Find Us
        </h2>
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="lg:w-1/2 h-96 lg:h-auto">
              <iframe
                src={googleMapsUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Calico Cat Cafe Location"
                className="w-full h-full object-cover"
              ></iframe>
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
                    <p className="text-gray-700">918 White Horse Pike</p>
                    <p className="text-gray-700">Oaklyn, NJ 08028</p>
                    <a 
                      href={directionsUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#F6A76E] hover:underline inline-flex items-center mt-1"
                    >
                      <NavigationIcon size={16} className="mr-1" />
                      Get Directions
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#FFCAA7] p-2 rounded-full mr-4">
                    <ClockIcon size={20} className="text-[#3A3335]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#3A3335]">Hours</h4>
                    <p className="text-gray-700">Daily: 9am - 9pm</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#FFCAA7] p-2 rounded-full mr-4">
                    <PhoneIcon size={20} className="text-[#3A3335]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#3A3335]">Phone</h4>
                    <a 
                      href={`tel:${phone.replace(/[^\d+]/g, '')}`} 
                      className="text-gray-700 hover:text-[#F6A76E] transition-colors"
                    >
                      {phone}
                    </a>
                  </div>
                </div>
                <div className="pt-4">
                  <h4 className="font-semibold text-[#3A3335] mb-2">
                    Getting Here
                  </h4>
                  <p className="text-gray-700 mb-2">
                    We're conveniently located near Cherry Hill and just steps from a Wawa.
                  </p>
                  <p className="text-gray-700">
                    Free parking is available on the street in front and to the side of the building for our café guests. Please do not park in the private lot behind the building.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};