import React from 'react'
import Contact from '../sections/Contact'
import NavBar from '../components/NavBar'
import Footer from '../sections/Footer'

function ContactPage() {
  return (
    <div>
      <NavBar />
        <div  data-aos="fade-up"  className='my-14'
       id='contact'>
      <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default ContactPage