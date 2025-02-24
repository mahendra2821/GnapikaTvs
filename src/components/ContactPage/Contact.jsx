import React from "react";

const Contact = () => {
  return (
    <section className="bg-gray-100">
      {/* Background Header */}
      <div className="relative p-10 w-full h-64 bg-cover bg-center" 
        style={{ backgroundImage: `url('https://cdn.pixabay.com/photo/2015/10/30/15/07/contact-us-1014232_1280.png')` }}>
        <div className="absolute inset-0 bg-black opacity-50 flex items-center justify-center">
          <h2 className="text-white text-3xl font-bold">Contact Us</h2>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-6xl mx-auto py-12 px-6 md:px-12 grid md:grid-cols-2 gap-12">
        {/* Left - Contact Info */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900">WE ARE ALWAYS HERE TO HELP YOU.</h3>
          <p className="text-gray-600 mt-3">
            Please fill out the form and send us a message. We will get back to you as soon as possible.
          </p>

          <div className="mt-6 space-y-4">
            <div className="flex items-center space-x-4">
              <span className="text-blue-600 text-xl">📍</span>
              <p> Satrampadu, Eluru, Andhra Pradesh 534002</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-blue-600 text-xl">📧</span>
              <p className="text-blue-700 font-medium">gnapikatvs@gmail.com</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-blue-600 text-xl">📞</span>
              <p className="font-medium">+91 7995705959</p>
            </div>
          </div>
        </div>

        {/* Right - Contact Form */}
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-8">
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Your Name *" className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500" required />
              <input type="email" placeholder="Email Address *" className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500" required />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="tel" placeholder="Phone Number *" className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500" required />
              <input type="text" placeholder="Subject *" className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500" required />
            </div>
            <textarea placeholder="Write Message*" className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500 h-32" required></textarea>
            <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
