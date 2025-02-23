import React from "react";

const Service = () => {
  return (
    <section className="bg-white p-6 md:p-12 shadow-lg mt-[15vh] rounded-lg">
      {/* Header Section */}
      <div className="text-center">
        <h2 className="text-blue-700 font-bold uppercase text-sm">
          WE ARE AN AUTHORISED TVS SERVICE CENTER
        </h2>
        <h3 className="text-xl font-bold text-gray-800">
          GNAPIKA TVS – SERVICE & PARTS
        </h3>
        <p className="text-md font-semibold text-black mt-2">
          SOLVE YOUR BIGGEST CONCERNS ABOUT TWO WHEELER VEHICLE MAINTENANCE AT OUR TVS SERVICE CENTRE
        </p>
      </div>

      {/* Description Section */}
      <p className="text-gray-600 mt-4 text-center">
        Discover The Problems That Your TVS Two-Wheeler Vehicle Is Facing And Unlock The Accurate Services And Solutions
        To Help It Improve And Perform Effectively With GNAPIKA TVS – Service & Parts. <br />
        Our TVS Service Center Offers A Full Spectrum Of Services & Utilities And Also Aims To Deliver High-Quality
        Service And Repair For All Kinds Of TVS Two-Wheelers In A Timely Process.
      </p>

      {/* Appointment Booking Header */}
      <div className="bg-blue-800 text-white text-center py-2 mt-6 font-semibold rounded-md">
        Book Your Service Appointment:
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* Left Side - Booking Form */}
        <div className="p-8 border-3 border-blue-600 shadow-lg rounded-lg">
          <h3 className="text-xl font-bold text-black mb-4">Book A Service Appointment</h3>
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full p-3 border-none rounded-md focus:ring-2 focus:ring-blue-300 outline-none shadow-md"
              required
            />
            <input
              type="tel"
              placeholder="Enter Your Contact Number"
              className="w-full p-3 border-none rounded-md focus:ring-2 focus:ring-blue-300 outline-none shadow-md"
              required
            />
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full p-3 border-none rounded-md focus:ring-2 focus:ring-blue-300 outline-none shadow-md"
              required
            />

            <select className="w-full p-3 border-none rounded-md focus:ring-2 focus:ring-blue-300 outline-none shadow-md">
              <option>Select Your Model</option>
              <option>TVS Apache</option>
              <option>TVS Jupiter</option>
              <option>TVS iQube</option>
            </select>

            <label className="block text-white font-medium">Do you require Pickup & Drop Facility?</label>
            <div className="flex gap-4">
              <label className="flex items-center text-balck">
                <input type="radio" name="pickupDrop" value="Yes" className="mr-2" /> Yes
              </label>
              <label className="flex items-center text-white">
                <input type="radio" name="pickupDrop" value="No" className="mr-2" /> No
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 text-white p-3 rounded-md font-semibold shadow-md hover:bg-red-700 transition-all duration-300"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right Side - Information & Contact */}
        <div className="p-6">
          <h3 className="text-lg font-bold text-red-600">7 Days Workshop</h3>
          <p className="text-gray-700 mt-2">
            Our Authorised TVS Service Centre Brings You 7 Days of Support.
            We are open all 7 days of the week to provide repair service and assistance for your TVS bike,
            TVS scooter, and TVS moped.
          </p>

          {/* Contact Details */}
          <div className="mt-4 space-y-3">
            <p><strong>📍 Location:</strong> Satyanapalli, Eluru, Andhra Pradesh</p>
            <p><strong>📧 E-Mail:</strong> gnapikatvs@gmail.com</p>
            <p><strong>📞 Call Us:</strong> +91-7995705959</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
