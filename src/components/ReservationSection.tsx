export const ReservationSection = () => {
  return (
    <section id="reservation" className="py-16 bg-pale-apricot">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#3A3335] mb-2">
          Reserve Your Visit
        </h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Reservations help us manage capacity and ensure our cats' comfort. 
          Choose from available time slots and secure your spot today.
        </p>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <div className="bg-[#D4E7C5] p-2 rounded-full mr-4">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                    </svg>
                    </div>
                    <span className="text-[#3A3335] font-medium">
                      Guarantee your spot during busy hours
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-[#D4E7C5] p-2 rounded-full mr-4">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    </div>
                    <span className="text-[#3A3335] font-medium">
                      Choose a time that works for you
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-[#D4E7C5] p-2 rounded-full mr-4">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                    </svg>
                    </div>
                    <span className="text-[#3A3335] font-medium">
                      Enjoy discounted rates for advance bookings
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-[#D4E7C5] p-2 rounded-full mr-4">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                    </div>
                    <span className="text-[#3A3335] font-medium">
                      Plan your visit around our cats' active hours
                    </span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-[#3A3335] text-white rounded-full py-4 px-8 inline-block">
                    <script id="setmore_script" type="text/javascript" src="https://assets.setmore.com/integration/static/setmoreIframeLive.js"></script>
                    <a className="float-none inline-block" id="Setmore_button_iframe" href="https://calicocatcafe.setmore.com">
                      <span className="text-xl font-bold">Book an Appointment</span>
                    </a>
                  </div>
                </div>
                <p className="text-center text-gray-600 mt-4">
                  Need help? Call 856-209-4972 or email hello@calicocatcafe.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};