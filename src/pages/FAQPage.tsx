export const FAQPage = () => {
  return (
    <div className="bg-soft-cream py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#3A3335] mb-8 md:mb-12">Frequently Asked Questions</h1>

        {/* Cafe & Cat Lounge Access */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-[#3A3335] mb-4 md:mb-6 pb-2 border-b border-gray-100">Cafe & Cat Lounge Access</h2>
          <div className="space-y-5 md:space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-[#3A3335]">Q: Can I visit the cafe area without paying admission?</h3>
              <p className="text-gray-700 mt-2">A: Yes! Our cafe area is free to enter and open to everyone at any time. You can come in to enjoy our self-serve ramen, coffee, and other menu items and take them to-go, or sit and relax.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#3A3335]">Q: How do I get into the cat lounge?</h3>
              <p className="text-gray-700 mt-2">A: To enter the cat lounge and spend time with our cats, you must purchase a time-based admission ticket. This helps us ensure a safe and comfortable environment for the cats by managing the number of guests in the lounge at any given time.</p>
            </div>
          </div>
        </div>

        {/* Reservations & Pricing */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-[#3A3335] mb-4 md:mb-6 pb-2 border-b border-gray-100">Reservations & Pricing</h2>
          <div className="space-y-5 md:space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-[#3A3335]">Q: Do I need a reservation to visit the cafe?</h3>
              <p className="text-gray-700 mt-2">A: We highly recommend making a reservation online to guarantee your spot in the cat lounge. Walk-ins are welcome if space is available, but admission is not guaranteed without a prior booking.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#3A3335]">Q: How much does a visit cost?</h3>
              <p className="text-gray-700 mt-2">A: We have a simple pricing structure for cat lounge admission:</p>
              <ul className="list-disc list-inside text-gray-700 mt-2 ml-4">
                <li>Half-hour visit: $12 per person</li>
                <li>One-hour visit: $20 per person</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#3A3335]">Q: Do you offer any discounts?</h3>
              <p className="text-gray-700 mt-2">A: Yes! We offer punch cards that provide your 6th visit free after 5 visits. We also have bundle deals that discount the ramen when you purchase it with cat lounge admission.</p>
            </div>
          </div>
        </div>

        {/* The Cats */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-[#3A3335] mb-4 md:mb-6 pb-2 border-b border-gray-100">The Cats</h2>
          <div className="space-y-5 md:space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-[#3A3335]">Q: Can I adopt a cat from the cafe?</h3>
              <p className="text-gray-700 mt-2">A: Yes! All of the cats in our lounge are adoptable. We partner with Homeward Bound animal shelter to find forever homes for these wonderful cats. If you fall in love with a cat, you can fill out an adoption application. Our staff can answer any questions and guide you through the process.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#3A3335]">Q: What is the cat-to-human ratio in the lounge?</h3>
              <p className="text-gray-700 mt-2">A: We have a limited capacity to ensure a calm and stress-free environment for our cats. The ratio is carefully managed to prevent overcrowding, and is around 1:1.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#3A3335]">Q: Are all your cats friendly?</h3>
              <p className="text-gray-700 mt-2">A: Our cats are chosen for their friendly and social personalities. However, please remember that they are living creatures and can get tired or overstimulated. We ask that you respect their space and follow our rules for interaction.</p>
            </div>
          </div>
        </div>

        {/* Cafe & Lounge Rules */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-[#3A3335] mb-4 md:mb-6 pb-2 border-b border-gray-100">Cafe & Lounge Rules</h2>
          <div className="space-y-5 md:space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-[#3A3335]">Q: What are the rules for interacting with the cats?</h3>
              <p className="text-gray-700 mt-2">A: To ensure the safety and happiness of our cats, we ask that you please:</p>
              <ul className="list-disc list-inside text-gray-700 mt-2 ml-4">
                <li>Do not pick up the cats.</li>
                <li>Do not wake a sleeping cat.</li>
                <li>Do not feed the cats any human food.</li>
                <li>Do not use flash photography.</li>
                <li>Always use a calm, gentle voice.</li>
                <li>Supervise children closely.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#3A3335]">Q: Can I bring my own cat to the cafe?</h3>
              <p className="text-gray-700 mt-2">A: For the safety of our resident cats and to comply with health regulations, outside animals are not permitted.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#3A3335]">Q: Is there an age limit for the cat lounge?</h3>
              <p className="text-gray-700 mt-2">A: Children are welcome in the cafe, but for safety reasons, we require that children under 12 be supervised by an adult at all times within the cat lounge.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#3A3335]">Q: Can I bring outside food and drinks?</h3>
              <p className="text-gray-700 mt-2">A: Our menu includes a variety of delicious food and drinks for you to enjoy. Please do not bring outside food or drinks into the cafe or lounge.</p>
            </div>
          </div>
        </div>

        {/* Our Menu */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-[#3A3335] mb-4 md:mb-6 pb-2 border-b border-gray-100">Our Menu</h2>
          <div className="space-y-5 md:space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-[#3A3335]">Q: What do you offer on your menu?</h3>
              <p className="text-gray-700 mt-2">A: We offer a variety of self-serve items, including:</p>
              <ul className="list-disc list-inside text-gray-700 mt-2 ml-4">
                <li>Self-serve ramen with a variety of toppings</li>
                <li>Freshly brewed pour-over coffee from local roasters</li>
                <li>A selection of teas, juices, and soft drinks</li>
                <li>A variety of delicious snacks and treats</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
