import { Heart, Home, Users, PawPrint } from 'lucide-react';

export const RescuesPage = () => {
  return (
    <div className="bg-soft-cream py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#3A3335] mb-8 md:mb-12">
          <span className="flex items-center justify-center">
            <PawPrint className="text-[#FF7F50] mr-2" size={32} />
            Our Rescues
          </span>
        </h1>
        
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm mb-8">
          <p className="text-gray-700 mb-8 leading-relaxed text-lg">
            At The Calico Cat Cafe, every feline friend you meet is a rescue from a local shelter, eagerly waiting to find their forever home. 
            Our mission is to provide a safe, loving environment where these wonderful cats can thrive while they wait to be adopted.
          </p>
          
          {/* Partner Shelter Section */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <Home className="text-[#FF7F50] mr-3" size={28} />
              <h2 className="text-2xl font-bold text-[#3A3335]">Proudly Partnering with Homeward Bound Pet Adoption Center</h2>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <p className="text-gray-700 mb-4">
                We're honored to partner with <strong>Homeward Bound Pet Adoption Center</strong> in Blackwood, NJ, who provides all the wonderful cats in our cafe. 
                Their dedication to rescuing, rehabilitating, and rehoming animals in need makes them the perfect partner for our mission.
              </p>
              <a 
                href="https://www.homewardboundnj.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#FF7F50] hover:text-[#E5713F] font-medium mt-2"
              >
                Visit Homeward Bound's website
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Adoption Process Section */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <Heart className="text-[#FF7F50] mr-3" size={28} />
              <h2 className="text-2xl font-bold text-[#3A3335]">The Adoption Process</h2>
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-[#FF7F50] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 mr-4">1</div>
                <div>
                  <h3 className="font-semibold text-lg text-[#3A3335] mb-1">Meet Your Match</h3>
                  <p className="text-gray-700">Visit our cafe and spend time with our resident cats. Find that special connection that could last a lifetime.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#FF7F50] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 mr-4">2</div>
                <div>
                  <h3 className="font-semibold text-lg text-[#3A3335] mb-1">Complete Your Application</h3>
                  <p className="text-gray-700">Our friendly staff will assist you with the adoption application process through Homeward Bound.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#FF7F50] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 mr-4">3</div>
                <div>
                  <h3 className="font-semibold text-lg text-[#3A3335] mb-1">Approval & Adoption</h3>
                  <p className="text-gray-700">Homeward Bound will review your application. Once approved, you'll be ready to welcome your new family member home!</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Current Residents Section */}
          <div className="mb-8">
            <div className="flex items-center mb-6">
              <Users className="text-[#FF7F50] mr-3" size={28} />
              <h2 className="text-2xl font-bold text-[#3A3335]">Meet Our Current Residents</h2>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <p className="text-gray-700 mb-4">
                Our cafe is still getting ready to open, and we can't wait to introduce you to our very first group of feline residents!
              </p>
              <p className="text-gray-700 mb-6">
                Check back soon to meet the wonderful cats who will be calling our cafe their temporary home. Each will have their own unique personality and story to share.
              </p>
              <p className="text-gray-700 font-medium">
                Follow us on social media for the latest updates and to be the first to meet our cats when they arrive!
              </p>
            </div>
          </div>
          
          {/* Conclusion */}
          <div className="bg-[#FFF9F5] p-6 rounded-lg border border-[#FFE8D9] text-center">
            <p className="text-gray-700 text-lg leading-relaxed">
              Thank you for supporting our mission to help rescue cats find loving homes. 
              Every visit, adoption, and share helps us continue our work and make a difference in these animals' lives.
            </p>
            <p className="text-gray-700 mt-4 font-medium">
              Together, we're creating happy endings, one purr at a time. ❤️
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
