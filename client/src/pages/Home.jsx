import React from 'react'
import NavBar from '../components/NavBar'
import HeroSection from '../sections/HeroSection'
import Fact from '../sections/Fact'
import Sertification from '../sections/Sertification'
import News from '../components/NewsAndArticles'
import Footer from '../sections/Footer'
import SimpleSlider from '../components/Testimony'
import 'aos/dist/aos.css';
import { useEffect } from 'react'
import Aos from 'aos'
import VisionMission from '../components/VisionMission'
import AboutSection from '../sections/AboutSection'
import Subscription from '../sections/Subscription'


function Home() {
  useEffect(() => {
    Aos.init({
      duration: 2000, // Global duration of animations in milliseconds
      once: false, // Whether animation should happen only once - while scrolling down
    });
    Aos.refresh();

  }, []);
  return (
    <div  
     className='overflow-hidden'>
      <div  
       className=''>
      <NavBar />
      </div>
      <div  
       className=''>
      <HeroSection />
      </div>
      <div id='about'>
         <AboutSection />
      </div>
      
      <div  
       className=''>
      <VisionMission/>
      </div>

      <div
       className=''>
      <Fact />
      </div>
      
      <div  
       className=''>
        {/* <Values /> */}
      </div>
      
      <div  
       id='news'>
      <News />
      </div>
      <div  
       className=''>
      <h2 className='flex my-[4%] text-3xl font-bold text-indigo-600 justify-center items-center '>Client Testimonies</h2>
      <SimpleSlider  />
      </div>
      <div>
        <Subscription />
      </div>
      <Footer />
    </div>
  )
}

export default Home