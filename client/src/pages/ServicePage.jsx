import React from 'react'
import Services from '../sections/Services'
import NavBar from '../components/NavBar'
import Footer from '../sections/Footer'

function ServicePage() {
  return (
    <div>
        <NavBar />
        <div  data-aos="fade-up" className='my-14'
       id='service'>
      <Services />
      </div>
      <Footer />
    </div>
  )
}

export default ServicePage