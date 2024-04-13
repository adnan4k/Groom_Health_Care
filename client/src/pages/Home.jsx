import React from 'react'
import NavBar from '../components/NavBar'
import HeroSection from '../sections/HeroSection'
import Fact from '../sections/Fact'
import Sertification from '../sections/Sertification'
import News from '../components/News'
import Footer from '../sections/Footer'
import SimpleSlider from '../components/Testimony'
import 'aos/dist/aos.css';
import { useEffect } from 'react'
import Aos from 'aos'
import VisionMission from '../components/VisionMission'
import AboutSection from '../sections/AboutSection'


function Home() {
  useEffect(() => {
    Aos.init({
      duration: 2000, // Global duration of animations in milliseconds
      once: false, // Whether animation should happen only once - while scrolling down
    });
    Aos.refresh();

  }, []);
  return (
    <div  data-aos="fade-up"
     className='overflow-hidden'>
      <div  data-aos="fade-up"
       className=''>
      <NavBar />
      </div>
      <div  data-aos="fade-up"
       className=''>
      <HeroSection />
      </div>
      <div>
         <AboutSection />
      </div>
      <div  data-aos="fade-up"
       className=''>
      <VisionMission/>
      </div>

      <div  data-aos="fade-up"
       className=''>
      <Fact />
      </div>
      
      <div  data-aos="fade-up"
       className=''>
        {/* <Values /> */}
      </div>
      {/* <div  data-aos="fade-up"
       className=''>
      <Sertification />
      </div> */}
      <div  data-aos="fade-do"
       id='news'>
      <News />
      </div>
      <div  data-aos="fade-up"
       className=''>
      <h2 className='flex my-[7%] text-3xl font-bold text-black justify-center items-center '>Testimonial</h2>
      <SimpleSlider />
      </div>
      
      <Footer />
    </div>
  )
}

export default Home