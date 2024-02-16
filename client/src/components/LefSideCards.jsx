import React from 'react'

function LefSideCards({title,name,description,expereince}) {
  return (
    <div className='flex pr-20 flex-row rounded-xl bg-[#99F9F433] pb-10'>
        <img src="/images/doctor1.png" alt="female doctor" className='-mt-32 h-[20%]'/>
        <div className='w-1/2'>
            <h2 className='text-[20px] font-bold'>{name}</h2>
            <div className='flex flex-row'>
                <h2 className='text-[22px]'>{title}</h2> 
                <div className='flex flex-grow '></div>
                <h2 className='text-[22px]'>{expereince}+ Years</h2> 
            </div>
            <div className='description'>
            <p className='text-center font-semibold text-[15px] my-5'>{description}</p>
             </div>
             <div className='bg-[#0F8EF8] px-18  mr-32 sm:px-14  text-nowrap rounded-xl  flex flex-row justify-center items-center w-[70%] h-[12%]'>
                <button className='bg-[#0F8EF8] flex  flex-row text-white'>
                    <img src="/images/call.png" alt="call" className=' mr-2 h-5 mt-1'/>
                    <span className='text-[18px]'>call now</span>
                    </button>
             </div>
        </div>
    </div>
  )
}

export default LefSideCards