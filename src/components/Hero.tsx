export const Hero = () => {
  return (
    <section id="hero" className="h-[80vh] md:h-[60vh] bg-[#FFF8F0] flex flex-col justify-center items-center relative overflow-hidden">
      <div className="absolute inset-0 polka-dots"></div>
      <div className="container mx-auto px-4 pt-8 pb-16 md:pt-0 md:pb-0 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="flex flex-col items-center">
            <img 
              src="/assets/LOGO.png" 
              alt="Calico Cat Cafe Logo" 
              className="w-96 h-auto mb-12 z-10"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <button 
              onClick={() => window.open('https://calicocatcafe.setmore.com/', '_blank')}
              className="bg-[#F6A76E] text-white px-10 py-4 rounded-lg font-semibold hover:bg-[#E69A5E] transition-all duration-300 ease-in-out transform hover:scale-105 text-center min-w-[180px]"
            >
              Book Your Visit
            </button>
            <a 
              href="#about" 
              className="bg-[#F6A76E] text-white px-10 py-4 rounded-lg font-semibold hover:bg-[#E69A5E] transition-all duration-300 ease-in-out transform hover:scale-105 text-center min-w-[180px]"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};