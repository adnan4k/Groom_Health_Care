import React from 'react'
import LefSideCards from '../components/LefSideCards'
import RightSideCards from '../components/RightSideCard'

function StaffSection() {
  return (
    <div className='flex flex-col justify-center items-center'>
        <h2 className='text-3xl font-bold'>Our Staff</h2>
        <div className='flex flex-col sm:mt-[5%] sm:flex-row justify-center items-center'>
          <div className='mx-[5%]'> <LefSideCards /></div>
            
          <div className='mx-[5%] mt-[25%] sm:mt-[20%]'><RightSideCards /> </div>
        </div>
        <div className='flex flex-col sm:flex-row justify-center items-center'>
          <div className='mx-[5%] mt-[25%] sm:-mt-[15%]'> <LefSideCards /></div>
            
          <div className='mx-[5%] mb-[10%] mt-[25%] sm:mt-[15%]'><RightSideCards /> </div>
        </div>    
      </div>
  )
}

export default StaffSection