import React from 'react';

function HeroSection() {
  // -mt-[10%] -ml-[10%]  bg-gradient-to-b from-cyan-200/20 to-blue-500/10 ... rounded-full
  return (
    <div className='flex flex-col sm:flex-row '>
      <div class="mt-10" >
       <div className='container flex flex-col w-[80%] ml-[10%] justify-center'>
        <h1 className='w-1/2  text-4xl font-bold '>Serving your health needs is our priority</h1>
        <p className='w-[80%] my-[5%]'> 
          Groom Health Service is a leading company in the healthcare industry, offering up to
          date support and expertise to improve healthcare access, address health issues, and
          enhance the overall quality of medical care.
        </p>

        <div className='buttons flex flex-row'>
          <button className='bg-[#0F8EF8] text-white  rounded-xl px-4 py-2'>
            <span><img src="/images/call.png" className='inline-block pr-2' alt="call" /></span>
            EMERGENCY CALL</button>
          <div className='flex flex-grow'></div>
          <button  className='mr-[40%] bg-[#0F8EF8] text-white rounded-xl px-4 py-2'>Appointment</button>
        </div>
      </div>
      </div>
         <div className='flex flex-grow'></div>
      <div className='w-[45%]' >
        <img src="/images/doctor.png" alt="doctor" className='mb-2'/>
        <div className='flex flex-row w-fullp-2'>
          <div className='card-container mx-4 w-full '>
            <div className='image-container flex flex-row'>
            <img src="/images/doctor-male.png" alt="doctor male" />
            <h3 className=' text-black font-semibold'>Dr John Doe</h3>
            </div>
            <div className='title'>
                <h3 className=''>Cardologist</h3>
            </div>
          </div>
          <div className='card-container mx-4 w-full w'>
            <div className='image-container flex flex-row'>
            <img src="/images/doctor-male.png" alt="doctor male" />
            <h3 className='text-black font-semibold'>Dr John Doe</h3>
            </div>
            <div className='title'>
                <h3 className=''>Cardologist</h3>
            </div>
          </div>
          <div className='card-container mx-4 w-full'>
            <div className='image-container flex flex-row'>
            <img src="/images/doctor-male.png" alt="doctor male" />
            <h3 className='text-black font-semibold'>Dr John Doe</h3>
            </div>
            <div className='title'>
                <h3 className=''>Cardologist</h3>
            </div>
          </div>
        </div>
        <div>
         
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
