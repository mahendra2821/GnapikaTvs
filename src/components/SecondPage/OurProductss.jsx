import React from "react";

const motorcycles = [
  {
    name: "Apache RR 310",
    price: "₹2,72,000/- Onwards",
    image: "/assets/Apacherr310.jpg",
  },
  {
    name: "TVS Apache RTR 310",
    price: "₹2,42,990/- Onwards",
    image: "/assets/TVSApacheRTR310.jpg",
  },
  {
    name: "TVS Ronin",
    price: "₹1,49,100/- Onwards",
    image: "/assets/tvsronin.jpg",
  },
  {
    name: "TVS Rider",
    price: "₹98,709/- Onwards",
    image: "/assets/TvsRider.jpg",
  },
  {
    name: "TVS Rider",
    price: "₹98,709/- Onwards",
    image: "/assets/TvsRider.jpg",
  },
  {
    name: "TVS Ronin",
    price: "₹1,49,100/- Onwards",
    image: "/assets/tvsronin.jpg",
  },
];

const OurProductss = () => {
  return (
    <section className="py-10">
      <h2 className="text-2xl font-bold text-center text-blue-800 mb-6 mt-10">Motorcycle</h2>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 px-4 md:px-12">
        {motorcycles.map((bike, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            <img src={bike.image} alt={bike.name} className="w-full h-99 object-cover rounded-md" />
            <h3 className="text-lg font-semibold mt-3">{bike.name}</h3>
            <p className="text-gray-600">Ex-showroom, Eluru</p>
            <p className="text-red-600 font-bold">{bike.price}</p>
            <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
              KNOW MORE
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurProductss;
