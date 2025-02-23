import React from 'react'
import HeroSection from '../components/LandingPage/HeroSection'
import OurServices from '../components/LandingPage/OurServices'
import OurProducts from '../components/LandingPage/OurProducts'
import BookTestRide from '../components/LandingPage/BookTestRide'
import GnapikaMap from '../components/LandingPage/GnapikaMap'
import ConnectUs from '../components/LandingPage/ConnectUs'
import Footer from '../components/LandingPage/Footer'
import Welcome from '../components/LandingPage/Welcome'

function HomePage() {
  return (
    <div>
        <HeroSection/>
        <Welcome/>
        <OurServices/>
        <OurProducts/>
        <BookTestRide/>
        <GnapikaMap/>
        <ConnectUs/>
        </div>
  )
}

export default HomePage