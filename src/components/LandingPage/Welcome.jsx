

import React from "react";
import { FaMotorcycle } from "react-icons/fa";

const Welcome = () => {
  return (
    <section className="bg-blue-900 text-white py-12 px-6 md:px-16 text-center">
      <div className="max-w-4xl mx-auto">
        {/* Icon & Title */}
        <div className="flex justify-center items-center gap-3 mb-4">
          <FaMotorcycle className="text-4xl md:text-5xl text-white" />
          <h2 className="text-3xl md:text-4xl font-bold italic">Welcome to GNAPIKA TVS</h2>
        </div>

        {/* Subtitle */}
        <p className="text-sm md:text-base font-semibold text-gray-200">
          Authorized Main Dealer for TVS Motor Company in Eluru
        </p>

        {/* Description */}
        <p className="mt-4 text-gray-300 leading-relaxed">
          Welcome to GNAPIKA TVS, your trusted TVS dealership in Eluru! We are committed to bringing you the 
          best in two-wheeler innovation, performance, and reliability. Whether you're looking for a stylish 
          commuter bike, a powerful scooter, or a high-performance motorcycle, we have the perfect ride for you. 
          Our team of experts is here to guide you through every step—whether it's choosing the right model, 
          financing options, or after-sales support.
        </p>
      </div>
    </section>
  );
};

export default Welcome;
