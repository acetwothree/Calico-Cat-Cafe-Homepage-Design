import { TicketIcon, ClockIcon, UtensilsCrossed } from 'lucide-react';
export const AdmissionSection = () => {
  return <section id="admission" className="py-16 bg-blush-pink">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#3A3335] mb-10">
          Admission Information
        </h2>
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8 bg-[#FFCAA7]">
              <h3 className="text-2xl font-bold text-[#3A3335] mb-4">
                Visiting Fees
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-full mr-4">
                    <TicketIcon size={20} className="text-[#3A3335]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#3A3335]">
                      Standard Admission
                    </h4>
                    <p className="text-[#3A3335]">
                      $12 for half an hour / $20 for 1 hour
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-full mr-4">
                    <UtensilsCrossed size={20} className="text-[#3A3335]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#3A3335]">
                      Ramen Bundle Deal
                    </h4>
                    <p className="text-[#3A3335]">
                      Get more purr for your buck! Our ramen is normally $5, but when you bundle it with your visit, you save $2.
                    </p>
                    <ul className="list-disc list-inside text-[#3A3335] mt-2 space-y-1">
                      <li>Half-hour visit ($12) + Ramen ($3) = $15</li>
                      <li>One-hour visit ($20) + Ramen ($3) = $23</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 p-8">
              <h3 className="text-2xl font-bold text-[#3A3335] mb-4">
                Hours & Policies
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#FFCAA7] p-2 rounded-full mr-4">
                    <ClockIcon size={20} className="text-[#3A3335]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#3A3335]">
                      Operating Hours
                    </h4>
                    <p className="text-gray-700">Every day: 9am - 9pm</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-[#3A3335] mb-2">
                    What's Included:
                  </h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Interaction with our friendly cats</li>
                    <li>Comfortable seating in our cat lounge</li>
                    <li>Free WiFi</li>
                    <li>Cat toys to play with</li>
                    <li>Board games to enjoy</li>
                  </ul>
                </div>
                <div>
                  <p className="text-gray-700 italic">
                    All admission fees help support our rescue efforts and
                    provide care for our cats.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};