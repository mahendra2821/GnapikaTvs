import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section className="bg-gray-100 mt-[15vh]">
      {/* Hero Section */}
      <div className="relative w-full h-72 mt-15vh] bg-cover bg-center flex items-center justify-center text-center text-white" 
        style={{ backgroundImage: `url('https://cdn4.singleinterface.com/files/enterprise/coverphoto/132996/06-TVS-Corporate-Range-Banner-Revised-1366x450px-01-12-08-24-03-10-57.jpg')` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <motion.h2 
          className="relative text-4xl font-bold z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About GNAPIKA TVS
        </motion.h2>
      </div>

      {/* About Content */}
      <div className="max-w-6xl mx-auto py-12 px-6 md:px-12 grid md:grid-cols-2 gap-12">
        {/* Left - Text Content */}
        <div>
          <motion.h3 
            className="text-3xl font-bold text-gray-900"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            Committed to Quality Service
          </motion.h3>
          <p className="text-gray-700 mt-4">
            At <span className="text-blue-600 font-semibold">GNAPIKA TVS</span>, we understand the importance of maintaining your **TVS two-wheeler**. 
            Our **authorized service center** provides **top-notch repair and maintenance services** to ensure your bike performs at its best.
          </p>
          <p className="text-gray-700 mt-3">
            With our **experienced technicians, advanced tools, and high-quality parts**, we ensure timely and efficient servicing for all 
            TVS two-wheelers, giving you the best riding experience.
          </p>
          <p className="text-gray-700 mt-3">
            We operate **7 days a week** to provide continuous support, ensuring you never have to worry about your vehicle’s performance.
          </p>
        </div>

        {/* Right - Image & Highlights */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src="https://source.unsplash.com/500x350/?bike,repair" alt="About GNAPIKA TVS" className="rounded-lg shadow-lg" />
          <div className="absolute top-0 left-0 bg-blue-600 text-white px-4 py-2 rounded-br-lg shadow-md">
            <span className="font-semibold">Your Trusted TVS Partner</span>
          </div>
        </motion.div>
      </div>

      {/* Stats & Mission Section */}
      <div className="bg-white py-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <motion.div 
            className="p-6 border rounded-lg shadow-md bg-gray-50"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h4 className="text-blue-600 text-4xl font-bold">10+</h4>
            <p className="text-gray-700 mt-2">Years of Service</p>
          </motion.div>

          <motion.div 
            className="p-6 border rounded-lg shadow-md bg-gray-50"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h4 className="text-blue-600 text-4xl font-bold">5000+</h4>
            <p className="text-gray-700 mt-2">Satisfied Customers</p>
          </motion.div>

          <motion.div 
            className="p-6 border rounded-lg shadow-md bg-gray-50"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h4 className="text-blue-600 text-4xl font-bold">100%</h4>
            <p className="text-gray-700 mt-2">Genuine Parts & Quality Service</p>
          </motion.div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center py-12 bg-gray-600 text-white">
        <h3 className="text-2xl font-bold">Looking for the Best TVS Service?</h3>
        <p className="mt-2">Book an appointment today and experience excellence!</p>
        <a href="/contact" className="mt-4 inline-block bg-white text-blue-700 font-semibold py-2 px-6 rounded-full shadow-md hover:bg-gray-200 transition">
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default AboutUs;
