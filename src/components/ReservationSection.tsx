import React, { useState } from 'react';
import { CalendarIcon, ClockIcon, UsersIcon, CheckIcon } from 'lucide-react';

export const ReservationSection = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    // In a real app, you would send the form data to your server here
  };

  return (
    <section id="reservation" className="py-16 bg-pale-apricot">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#3A3335] mb-3">
          Reserve Your Visit
        </h2>
        <p className="text-center text-gray-700 mb-10 max-w-2xl mx-auto">
          Book your time slot in advance to guarantee your spot in our cat
          lounge. Reservations are recommended, especially on weekends and
          holidays.
        </p>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 bg-[#D4E7C5] p-8">
                <h3 className="text-2xl font-bold text-[#3A3335] mb-6">
                  Why Reserve?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-white p-1 rounded-full mr-3">
                      <CheckIcon size={16} className="text-[#3A3335]" />
                    </div>
                    <span className="text-[#3A3335]">
                      Guarantee your spot during busy hours
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-white p-1 rounded-full mr-3">
                      <CheckIcon size={16} className="text-[#3A3335]" />
                    </div>
                    <span className="text-[#3A3335]">
                      Choose the time that works best for you
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-white p-1 rounded-full mr-3">
                      <CheckIcon size={16} className="text-[#3A3335]" />
                    </div>
                    <span className="text-[#3A3335]">
                      Special rates for advance bookings
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-white p-1 rounded-full mr-3">
                      <CheckIcon size={16} className="text-[#3A3335]" />
                    </div>
                    <span className="text-[#3A3335]">
                      Plan your visit around our cats' active hours
                    </span>
                  </li>
                </ul>
                <div className="mt-8">
                  <h4 className="font-semibold text-[#3A3335] mb-2">
                    Need Help?
                  </h4>
                  <p className="text-[#3A3335]">
                    Call us at (555) 123-4567 or email{' '}
                    <a href="mailto:reservations@calicocatcafe.com" className="underline">
                      reservations@calicocatcafe.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                {formSubmitted ? <div className="h-full flex flex-col items-center justify-center text-center">
                    <div className="bg-[#D4E7C5] p-3 rounded-full mb-4">
                      <CheckIcon size={32} className="text-[#3A3335]" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#3A3335] mb-2">
                      Reservation Received!
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Thank you for booking with us. We've sent a confirmation
                      to your email.
                    </p>
                    <button onClick={() => setFormSubmitted(false)} className="text-[#3A3335] underline">
                      Make another reservation
                    </button>
                  </div> : <form onSubmit={handleSubmit}>
                    <h3 className="text-2xl font-bold text-[#3A3335] mb-6">
                      Book Your Time Slot
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-[#3A3335] font-medium mb-1">
                          Your Name
                        </label>
                        <input type="text" id="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFCAA7]" required />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-[#3A3335] font-medium mb-1">
                          Email Address
                        </label>
                        <input type="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFCAA7]" required />
                      </div>
                      <div className="flex space-x-4">
                        <div className="flex-1">
                          <label htmlFor="date" className="block text-[#3A3335] font-medium mb-1">
                            <div className="flex items-center">
                              <CalendarIcon size={16} className="mr-1" />
                              <span>Date</span>
                            </div>
                          </label>
                          <input type="date" id="date" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFCAA7]" required />
                        </div>
                        <div className="flex-1">
                          <label htmlFor="time" className="block text-[#3A3335] font-medium mb-1">
                            <div className="flex items-center">
                              <ClockIcon size={16} className="mr-1" />
                              <span>Time</span>
                            </div>
                          </label>
                          <select id="time" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFCAA7]" required>
                            <option value="">Select Time</option>
                            <option value="10:00">10:00 AM</option>
                            <option value="11:00">11:00 AM</option>
                            <option value="12:00">12:00 PM</option>
                            <option value="13:00">1:00 PM</option>
                            <option value="14:00">2:00 PM</option>
                            <option value="15:00">3:00 PM</option>
                            <option value="16:00">4:00 PM</option>
                            <option value="17:00">5:00 PM</option>
                            <option value="18:00">6:00 PM</option>
                            <option value="19:00">7:00 PM</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label htmlFor="guests" className="block text-[#3A3335] font-medium mb-1">
                          <div className="flex items-center">
                            <UsersIcon size={16} className="mr-1" />
                            <span>Number of Guests</span>
                          </div>
                        </label>
                        <select id="guests" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFCAA7]" required>
                          <option value="1">1 Person</option>
                          <option value="2">2 People</option>
                          <option value="3">3 People</option>
                          <option value="4">4 People</option>
                          <option value="5">5 People</option>
                          <option value="6">6 People</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="special" className="block text-[#3A3335] font-medium mb-1">
                          Special Requests (Optional)
                        </label>
                        <textarea id="special" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFCAA7]" rows={3}></textarea>
                      </div>
                      <button type="submit" className="w-full bg-[#FFCAA7] text-[#3A3335] py-3 rounded-lg font-medium hover:bg-[#ffc093] transition-colors">
                        Reserve Now
                      </button>
                    </div>
                  </form>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}