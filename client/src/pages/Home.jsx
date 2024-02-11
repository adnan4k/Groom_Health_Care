import React from 'react'
import NavBar from '../components/NavBar'
import HeroSection from '../sections/HeroSection'
import Services from '../sections/Services'
import StaffSection from '../sections/StaffSection'
import AboutSection from '../sections/AboutSection'
import Fact from '../sections/Fact'
import Sertification from '../sections/Sertification'
import News from '../components/News'
import Testimony from '../components/Testimony'
import Contact from '../sections/Contact'
import Footer from '../sections/Footer'
import SimpleSlider from '../components/Testimony'

function Home() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Services />
      <StaffSection />
      <AboutSection />
      <Fact />
      <Sertification />
      <News />
      <h2 className='flex my-[7%] text-3xl font-bold text-black justify-center items-center '>Testimonial</h2>
      <SimpleSlider />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home