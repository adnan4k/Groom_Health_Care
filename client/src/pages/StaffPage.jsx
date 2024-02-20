import React from 'react'
import StaffSection from '../sections/StaffSection'
import NavBar from '../components/NavBar'
import Footer from '../sections/Footer'

function StaffPage() {
  return (
    <div>
      <NavBar />
        <div  data-aos="fade-up" className='my-14'
       id='staff'>
      <StaffSection />
      </div>
     <Footer />
      </div>
  )
}

export default StaffPage