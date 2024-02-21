import React from 'react'

function AboutSection() {
  return (
    <div className='flex flex-col sm:flex-row'>
        <img src="/images/about.png" alt="about" className='h-[10%] w-[90%] ml-[7%]' />
        <div className='flex flex-col justify-center items-center bg-[#17a49d33] mr-[7%]'>
            <h3 className='text-black font-bold text-[30px]'>About Groom Health Service</h3>
            <p className='text-black font-semibold text-[16px] w-[80%] text-center my-5'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
             quis nostrud exercitation ullamco laboris nisi ut aliquip Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi
            </p>
        </div>
    </div>
  )
}

export default AboutSection