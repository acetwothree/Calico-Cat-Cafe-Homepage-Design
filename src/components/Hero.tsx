import React from 'react';
export const Hero = () => {
  return <section id="hero" className="min-h-screen bg-sandy-brown flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-[#3A3335] mb-4">
              Welcome to Calico Cat Cafe
            </h1>
            <p className="text-lg text-[#3A3335] mb-6">
              A purr-fect place to enjoy delicious treats while making feline
              friends. Our cozy cat cafe offers a unique experience for cat
              lovers of all ages.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#book" className="bg-[#3A3335] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#554e50] transition-colors">
                Book Your Visit
              </a>
              <a href="#about" className="bg-white text-[#3A3335] border border-[#3A3335] px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Learn More
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <img src="https://images.unsplash.com/photo-1570824104453-508955ab713e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" alt="Calico cat relaxing in cafe" className="rounded-lg shadow-lg w-full h-auto object-cover" />
          </div>
        </div>
      </div>

    </section>;
};