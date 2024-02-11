import React from 'react'

function LefSideCards() {
  return (
    <div className='flex flex-row rounded-xl bg-[#99F9F433]'>
        <img src="/images/doctor1.png" alt="female doctor" className='-mt-32 h-[20%]'/>
        <div className='w-1/2'>
            <h2 className='text-[20px] font-bold'>Dr. Samantha</h2>
            <div className='flex flex-row'>
                <h2 className='text-[22px]'>Surgeon</h2> 
                <div className='flex flex-grow '></div>
                <h2 className='text-[22px]'>10+ Years</h2> 
            </div>
            <div className='description'>
            <p className='text-center font-semibold text-[15px] my-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam.</p>
             </div>
             <div className='bg-[#0F8EF8] rounded-xl flex flex-row justify-center items-center w-[70%] h-1/5'>
                <button className='bg-[#0F8EF8] flex flex-row text-white'>
                    <img src="/images/call.png" alt="call" className=' mr-2'/>
                    <span className='text-[20px]'>call now</span>
                    </button>
             </div>
        </div>
    </div>
  )
}

export default LefSideCards