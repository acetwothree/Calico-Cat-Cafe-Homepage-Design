import { Users, HeartPulse, PawPrint, Home, Stethoscope, ShoppingBasket } from 'lucide-react';

export const OurTeamPage = () => {
  return (
    <div className="bg-soft-cream py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#3A3335] mb-8 md:mb-12">Our Team</h1>
        
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm mb-8">
          <p className="text-gray-700 mb-8 leading-relaxed">
            The Calico Cat Cafe is more than a business; it's a community-driven project brought to life by a team of dedicated individuals and partners.
          </p>
          
          {/* Founders Section */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <Users className="text-[#FF7F50] mr-3" size={28} />
              <h2 className="text-2xl font-bold text-[#3A3335]">Founders</h2>
            </div>
            <h3 className="text-xl font-semibold text-[#3A3335] mb-4">Benjamin Hudes & Dora Govorko</h3>
            <p className="text-gray-700 leading-relaxed">
              We are the co-founders and dreamers behind The Calico Cat Cafe. What started as an idea born from our shared love for cats has become a mission to create a unique space for our community. We handle everything from the day-to-day operations and building renovations to marketing and community outreach. We are passionate about creating a safe, fun, and relaxing environment for both people and cats.
            </p>
          </div>
          
          {/* Volunteers Section */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <HeartPulse className="text-[#FF7F50] mr-3" size={28} />
              <h2 className="text-2xl font-bold text-[#3A3335]">Our Valued Volunteers</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              The Calico Cat Cafe would not be possible without the incredible support of our volunteers. A huge thank you to the dozens of dedicated individuals who have generously given their time, energy, and skills to help us build this cafe from the ground up. From carpentry and painting to creative design, your contributions have transformed our vision into a reality. This cafe is a testament to the power of a caring community.
            </p>
          </div>
          
          {/* Partners Section */}
          <div>
            <div className="flex items-center mb-6">
              <PawPrint className="text-[#FF7F50] mr-3" size={28} />
              <h2 className="text-2xl font-bold text-[#3A3335]">Our Partners</h2>
            </div>
            <p className="text-gray-700 mb-8 leading-relaxed">
              We are proud to partner with organizations that share our commitment to animal welfare.
            </p>
            
            <div className="space-y-8">
              {/* Homeward Bound */}
              <div className="bg-gray-50 p-5 rounded-lg">
                <div className="flex items-center mb-3">
                  <Home className="text-[#FF7F50] mr-2" />
                  <h3 className="text-xl font-semibold text-[#3A3335]">Homeward Bound Pet Adoption Center</h3>
                </div>
                <p className="text-gray-600 mb-2">Blackwood, NJ</p>
                <p className="text-gray-700">
                  We are thrilled to partner with Homeward Bound, who provides all of the wonderful cats in our lounge. Every cat you meet at our cafe is available for adoption, and we are honored to help find these felines their perfect forever homes.
                </p>
              </div>
              
              {/* Animals First */}
              <div className="bg-gray-50 p-5 rounded-lg">
                <div className="flex items-center mb-3">
                  <Stethoscope className="text-[#FF7F50] mr-2" />
                  <h3 className="text-xl font-semibold text-[#3A3335]">Animals First Veterinary Clinic</h3>
                </div>
                <p className="text-gray-600 mb-2">Haddon Township, NJ</p>
                <p className="text-gray-700">
                  The health and safety of our cats are our top priority. We work closely with the amazing team at Animals First to ensure every cat in our care receives the best possible medical attention and support.
                </p>
              </div>
              
              {/* Garden State Pet Center */}
              <div className="bg-gray-50 p-5 rounded-lg">
                <div className="flex items-center mb-3">
                  <ShoppingBasket className="text-[#FF7F50] mr-2" />
                  <h3 className="text-xl font-semibold text-[#3A3335]">Garden State Pet Center</h3>
                </div>
                <p className="text-gray-600 mb-2">Audubon, NJ</p>
                <p className="text-gray-700">
                  We are grateful for our partnership with Garden State Pet Center, which will provide starter kits to every person who adopts a cat from our cafe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
