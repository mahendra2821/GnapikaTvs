import React from "react";

const TestRideAppointment = () => {
  return (
    <div className="w-full max-w-md border-2 border-red-500 rounded-lg shadow-lg overflow-hidden">
      <div className="bg-blue-700 p-6 text-white">
        <h3 className="text-xl font-semibold text-center">Test Ride Appointment</h3>
      </div>
      <div className="p-6 bg-white">
        <form className="space-y-4">
          <input type="text" placeholder="Name" className="w-full p-2 border rounded" required />
          <input type="tel" placeholder="Contact Number" className="w-full p-2 border rounded" required />
          <input type="email" placeholder="Email" className="w-full p-2 border rounded" required />
          <select className="w-full p-2 border rounded">
            <option>Select Model</option>
            <option>TVS Apache</option>
            <option>TVS Jupiter</option>
            <option>TVS iQube</option>
          </select>
          <select className="w-full p-2 border rounded">
            <option>Select Showroom</option>
            <option>Satyanapalli</option>
            <option>Rajahmundry</option>
          </select>

          <label className="block font-medium">Would you like a test ride at home?</label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input type="radio" name="testRide" value="Yes" className="mr-2" /> Yes
            </label>
            <label className="flex items-center">
              <input type="radio" name="testRide" value="No" className="mr-2" /> No
            </label>
          </div>

          <button type="submit" className="w-full bg-red-600 text-white p-2 rounded hover:bg-red-700">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

const BookServiceAppointment = () => {
  return (
    <div className="w-full max-w-md border-2 border-blue-500 rounded-lg shadow-lg overflow-hidden">
      <div className="bg-blue-600 p-6 text-white">
        <h3 className="text-xl font-semibold text-center">Book A Service Appointment</h3>
      </div>
      <div className="p-6 bg-white">
        <form className="space-y-4">
          <input type="text" placeholder="Name" className="w-full p-2 border rounded" required />
          <input type="tel" placeholder="Contact Number" className="w-full p-2 border rounded" required />
          <input type="email" placeholder="Email" className="w-full p-2 border rounded" required />
          <select className="w-full p-2 border rounded">
            <option>Select Model</option>
            <option>TVS Apache</option>
            <option>TVS Jupiter</option>
            <option>TVS iQube</option>
          </select>

          <label className="block font-medium">Pickup & Drop Facility</label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input type="radio" name="pickupDrop" value="Yes" className="mr-2" /> Yes
            </label>
            <label className="flex items-center">
              <input type="radio" name="pickupDrop" value="No" className="mr-2" /> No
            </label>
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

const ConnectUs = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-10 py-12">
      {/* Left Side - Test Ride Appointment */}
      <TestRideAppointment />

      {/* Middle Content - Contact Information */}
      <div className="  text-center space-y-3">
        <h4 className="text-lg font-semibold">Contact our team for more information</h4>
        <p><strong>📍 Location:</strong> Eluru, Andhra Pradesh</p>
        <p><strong>📧 E-Mail:</strong> gnapikatvs@gmail.com</p>
        <p><strong>📞 Call Us:</strong> +91-7750509919</p>
      </div>

      {/* Right Side - Book Service Appointment */}
      <BookServiceAppointment />
    </div>
  );
};

export default ConnectUs;
