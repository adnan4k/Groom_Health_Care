import React from 'react'

function RightSideCards({title,name,description,experience}) {
  return (
    <div className='flex flex-row rounded-xl bg-[#99F9F433] pb-10'>
        <div className='w-1/2 ml-3'>
            <h2 className='text-[20px] font-bold'>{name}</h2>
            <div className='flex flex-col sm:flex-row'>
                <h2 className='text-[22px]'>{title}</h2> 
                <div className='flex flex-grow '></div>
                <h2 className='text-[22px]'>{experience}+ Years</h2> 
            </div>
            <div className='description'>
            <p className='text-center font-semibold text-[15px] my-5'>{description}</p>
             </div>
             <div className='bg-[#0F8EF8] text-nowrap rounded-xl flex flex-row justify-center items-center w-[70%] sm:h-1/5 h-[10%]'>
                <button className='bg-[#0F8EF8] flex flex-row text-white'>
                    <img src="/images/call.png" alt="call" className='h-4 mt-2 mr-2'/>
                    <span className='sm:text-[20px]'>call now</span>
                    </button>
             </div>
        </div>
        <img src="/images/manDoctor.png" alt="female doctor" className='-mt-32 max-w-[60%] h-[20%]'/>
    </div>
  )
}

export default RightSideCards