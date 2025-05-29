
export const Hero = () => {
  return (
    <section id="hero" className="h-[60vh] bg-gradient-to-r from-[#FFE5D9] via-[#FFF5E6] to-[#FFE5D9] flex items-center justify-center bg-[url('/assets/paw-pattern.svg')] bg-repeat bg-center bg-[length:200px]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div className="flex flex-col items-center">
            <img 
              src="/assets/LOGO.png" 
              alt="Calico Cat Cafe Logo" 
              className="w-96 h-auto mb-12"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <a 
              href="#book" 
              className="bg-[#F6A76E] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#E69A5E] transition-all duration-300 ease-in-out transform hover:scale-105 text-center"
            >
              Book Your Visit
            </a>
            <a 
              href="#about" 
              className="border-2 border-[#F6A76E] text-[#F6A76E] px-8 py-4 rounded-lg font-semibold hover:bg-[#F6A76E] hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105 text-center"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};