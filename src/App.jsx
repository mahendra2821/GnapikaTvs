import React from 'react'
import "./index.css";
import {Routes, Route } from "react-router-dom";
import Header from './components/LandingPage/Header';
import HomePage from './Pages/HomePage';
import Footer from './components/LandingPage/Footer';
import OurProductss from './components/SecondPage/OurProductss';
import Service from './components/ThirdPage/Service';
import Blog from './components/FourthPage/Blog';
import Contact from './components/ContactPage/Contact';
import AboutUs from './components/AboutUs/AboutUs';
import TestRide from './Pages/TestRide';


const App = () => {
  return (
    <>

      <Header/>
      <div className="mt-16">
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/products" element={<OurProductss />} />
           <Route path="/service" element={<Service />} /> 
           <Route path="/blog" element={<Blog />} /> 
           <Route path="/contact" element={<Contact />} /> 
           <Route path="/aboutus" element={<AboutUs />} /> 
           <Route path="/testride" element={<TestRide />} /> 
          
       

        </Routes> 
        <Footer/>
     </div>
      </>
  );
};

export default App;
