


import React from "react";

const products = [
  {
    title: "MOTORCYCLES",
    image: "/assets/TvsSports.jpg", // Placeholder to test
  },
  {
    title: "SCOOTERS",
    image: "/assets/ScootyTvs.jpg",
  },
  {
    title: "MOPEDS",
    image: "/assets/Xl100Tvs.jpg",
  },
  {
    title: "ELECTRIC TVS iQube",
    image: "/assets/TvsElectric.jpg",
  },
];

const OurProducts = () => {
  return (
    <section className="py-12 px-6">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">
        OUR <span className="text-black">PRODUCTS</span>
      </h2>

      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-6">
        Find the best TVS bike of your choice and enjoy every ride! Explore our collection of bikes 
        designed to deliver the best riding experience.
      </p>

      {/* Mobile Scrollable View */}
      <div className="block md:hidden">
        <div className="flex overflow-x-auto gap-6 scrollbar-hide snap-x snap-mandatory pb-4">
          {products.map((product, index) => (
            <div key={index} className="flex-none w-64 snap-start rounded-lg overflow-hidden shadow-lg">
              <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Grid View */}
      <div className="hidden md:grid grid-cols-2 gap-6 max-w-5xl mx-auto">
        {products.map((product, index) => (
          <div key={index} className="w-full rounded-lg overflow-hidden shadow-lg">
            <img src={product.image} alt={product.title} className="w-full h-60 object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurProducts;

