import React from 'react'

function Footer() {
  return (
    <footer className='bg-[#001E36] grid grid-cols-1 overflow-hidden justify-center items-center w-full mt-[2%] pt-1 p-[5%] sm:grid sm:grid-cols-4'>
        {/* <h1>hello mother fucker</h1> */}
        <div>
          <img src="/images/footer.png" className='' alt="logo of groom" />
          <h3>Groom Health and Social Service</h3>
          <h3>Groom Health and Social Service</h3>
        </div>
        <ul>
          <li className='text-2xl text-white font-semibold'>Important Links</li>
          <li className='text-[#04F9ED] font-semibold text-xl ml-[13%]'><a href="/">Home</a></li> 
          <li className='text-[#04F9ED] font-semibold text-xl ml-[13%]'><a href="/">Home</a></li> 
          <li className='text-[#04F9ED] font-semibold text-xl ml-[13%]'><a href="/">Home</a></li> 
          <li className='text-[#04F9ED] font-semibold text-xl ml-[13%]'><a href="/">Home</a></li> 
          <li className='text-[#04F9ED] font-semibold text-xl ml-[13%]'><a href="/">Home</a></li> 
        </ul>  

        <div className='mt-10'>
          <div>
            <h2 className='text-white text-2xl  ml-5'> Socials</h2>
          </div>
          <div className='flex my-4'>
            <img src="/images/facebook.png" className='h-8 w-8 mx-4' alt="" />
            <h2 className='text-xl text-white font-semibold'>Facebook</h2>
          </div>
          <div className='flex my-4'>
            <img src="/images/facebook.png" className='h-8 w-8 mx-4' alt="" />
            <h2 className='text-xl text-white font-semibold'>Facebook</h2>
          </div>
          <div className='flex my-4'>
            <img src="/images/facebook.png" className='h-8 w-8 mx-4' alt="" />
            <h2 className='text-xl text-white font-semibold'>Facebook</h2>
          </div>
          <div className='flex my-4'>
            <img src="/images/facebook.png" className='h-8 w-8 mx-4' alt="" />
            <h2 className='text-xl text-white font-semibold'>Facebook</h2>
          </div>
        </div>  

        <div className='justify-center items-center'>
          <h2 className='text-white text-2xl font-semibold my-5'>News Letter</h2>
          <p className='text-white w-full text-center'>Stay up-to-date on our constantly evolving health service features 
            and cutting-edge technologies. Enter your e-mail address and subscribe to our newsletter
            .</p>
            <div className='flex'>
              <input type="text" className='rounded-tr-none rounded-br-none rounded-tl-lg rounded-bl-lg h-[40px]'/>
              <button className='text-white text-xl font-semibold rounded-tr-lg rounded-br-lg rounded-tl-none rounded-bl-none bg-[#0F8EF8]'>Subscribe </button>
            </div>
        </div>
    </footer>
  )
}

export default Footer