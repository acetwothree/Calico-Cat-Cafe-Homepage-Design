import { Coffee, Soup, Utensils, Carrot, Egg, Sandwich, Coffee as CoffeeIcon } from 'lucide-react';

export const MenuPage = () => {
  return (
    <div className="bg-soft-cream py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#3A3335] mb-8 md:mb-12">
          <Utensils className="inline mr-2 text-[#FF7F50]" size={32} />
          Our Menu
        </h1>
        
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm mb-8">
          <p className="text-gray-700 mb-8 leading-relaxed text-lg text-center">
            Welcome to our self-serve menu! Our cafe offers a variety of delicious items for you to enjoy during your visit with our cats. 
            Grab a tray, pick your favorites, and relax.
          </p>
          
          {/* Ramen & Noodles Section */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <Soup className="text-[#FF7F50] mr-3" size={28} />
              <h2 className="text-2xl font-bold text-[#3A3335]">Ramen & Noodles</h2>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <p className="text-gray-700 mb-4">
                Choose from our wide variety of instant noodle options, including spicy, vegetarian, vegan, and gluten-free choices to accommodate everyone.
              </p>
              <div className="bg-white p-4 rounded border border-[#FFE8D9] mt-4">
                <p className="font-semibold text-[#3A3335] flex items-center">
                  <Soup className="text-[#FF7F50] mr-2" size={20} />
                  A Basic Ramen Bowl is $5
                </p>
                <p className="text-gray-600 text-sm mt-1">
                  This price includes a bowl of ramen and your choice of free toppings from our toppings bar.
                </p>
              </div>
            </div>
          </div>
          
          {/* Self-Serve Toppings Bar Section */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <Carrot className="text-[#FF7F50] mr-3" size={28} />
              <h2 className="text-2xl font-bold text-[#3A3335]">Self-Serve Toppings Bar</h2>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <p className="text-gray-700 mb-6">
                Customize your noodles with our fresh, refrigerated toppings.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Free Toppings */}
                <div className="bg-white p-4 rounded border border-[#E8F5E9]">
                  <h3 className="font-semibold text-lg text-[#2E7D32] mb-3">Free Toppings</h3>
                  <ul className="space-y-2">
                    {['Green Onions', 'Corn', 'Sliced Carrots', 'Sliced Mushrooms', 'Spinach', 'Edamame'].map((topping) => (
                      <li key={topping} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-[#4CAF50] rounded-full mr-2"></span>
                        {topping}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Premium Toppings */}
                <div className="bg-white p-4 rounded border border-[#FFF3E0]">
                  <h3 className="font-semibold text-lg text-[#E65100] mb-3">Premium Toppings</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Sandwich className="text-[#E65100] mr-2" size={18} />
                      American Cheese Slices
                    </li>
                    <li className="flex items-center">
                      <Egg className="text-[#E65100] mr-2" size={18} />
                      Hard-Boiled Eggs
                    </li>
                    <li className="flex items-center">
                      <Utensils className="text-[#E65100] mr-2" size={18} />
                      Spam
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Coffee & Drinks Section */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <CoffeeIcon className="text-[#FF7F50] mr-3" size={28} />
              <h2 className="text-2xl font-bold text-[#3A3335]">Coffee & Drinks</h2>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <p className="text-gray-700">
                We offer freshly brewed pour-over coffee for $4, featuring a different local roastery every week. A variety of other hot and cold beverages are also available.
              </p>
            </div>
          </div>
          
          {/* Snacks Section */}
          <div>
            <div className="flex items-center mb-6">
              <Coffee className="text-[#FF7F50] mr-3" size={28} />
              <h2 className="text-2xl font-bold text-[#3A3335]">Snacks</h2>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <p className="text-gray-700">
                We have many delicious pre-packaged snacks to choose from, perfect for a quick bite or a sweet treat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
