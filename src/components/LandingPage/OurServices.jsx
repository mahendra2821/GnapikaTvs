import React from "react";

const services = [
  {
    title: "Book a Test Ride",
    description: "Explore our website and call for a test ride with a program that is affordable & easy to enhance.",
    icon: "🏍️",
  },
  {
    title: "24/7 Support",
    description: "Improving relationships around the clock. Your 24/7 Support Partner.",
    icon: "⏰",
  },
  {
    title: "Book a Service",
    description: "Improving bike, fast tracking security, easy to track services, and focused payments.",
    icon: "🔧",
  },
];

const OurServices = () => {
  return (
    <section className="py-12 px-6">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
        Our <span className="text-black">Services</span>
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-blue-900 text-white p-6 w-72 text-center rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
          >
            <div className="text-4xl mb-2">{service.icon}</div>
            <h3 className="text-lg font-bold">{service.title}</h3>
            <p className="text-sm opacity-90 mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
