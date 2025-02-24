

import React from "react";
import { Link } from "react-router-dom";

const BookTestRide = () => {
  return (
    <section className="bg-white py-12 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">
          BOOK A <span className="text-black">TVS TEST RIDE</span>
        </h2>

        <p className="text-lg text-gray-700 font-semibold mb-3">
          A Chance to Take the TVS Two-Wheeler of Your Choice for a Spin & Taste the Wave of Adventure
        </p>

        <p className="text-gray-600 mb-6">
          Encounter the exhilarating experience & pleasure of riding the TVS bike of your dreams!  
          Click below to schedule a test ride at the TVS two-wheeler of your choice, either at your  
          convenience or at your nearest dealership.
        </p>

     <Link to="/testride"> <button
          
          className="bg-blue-700 text-white px-6 py-3 text-lg font-bold rounded-lg hover:bg-blue-900 transition duration-300"
        >
          Click Here
        </button> </Link> 
      </div>
    </section>
  );
};

export default BookTestRide;

