import React from 'react'

function Sertification() {
  return (
    <div className='flex flex-col justify-center items-center'>
    <div>
        <h2 className='text-3xl my-[10%] text-black font-bold'>Certification and Standards</h2>
    </div>
    <div className='grid sm:grid-cols-3 justify-center  items-center my-10 place-items-center bg-[#A8FFFB33] w-full '>
        <img src="/images/exodus.png" alt="exodus" className='p-5 '  />
        <img src="/images/samsara.png" alt="samsara" className='p-5' />
        <img src="/images/robinhood.png" alt="robinhood" className='p-5' />
    </div>
    </div>
  )
}

export default Sertification