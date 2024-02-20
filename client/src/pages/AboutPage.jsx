import React from 'react'
import AboutSection from '../sections/AboutSection'
import NavBar from '../components/NavBar'
import Footer from '../sections/Footer'

function AboutPage() {
  return (
    <div>
     <NavBar />
     <div  data-aos="fade-up" 
       id='about' className='my-14'>
      <AboutSection />
      </div>
      <Footer/>
    </div>
  )
}

export default AboutPage