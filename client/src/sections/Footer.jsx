import React from 'react'

function Footer() {
  return (
    <footer className='bg-[#001E36] pl-24 grid grid-cols-1 overflow-hidden justify-center items-center w-full mt-[2%] pt-1 p-[5%] sm:grid sm:grid-cols-'>
        {/* <h1>hello mother fucker</h1> */}
        <div className='text-white'>
          <img src="/images/footer.png" className='' alt="logo of groom" />
          <h3 className='font-semibold text-lg'>Expertise Solutions for Health</h3>
        </div>
        
        <ul className='ml-10 '>
          <li className='text-2xl text-white font-medium '>Important Links</li>
          <li className='text-[#04F9ED] font-medium text-lg '><a href="/">Home</a></li> 
          <li className='text-[#04F9ED] font-medium text-lg '><a href="#about">About us</a></li> 
          <li className='text-[#04F9ED] font-medium text-lg '><a href="/">Our Service</a></li> 
          <li className='text-[#04F9ED] font-medium text-lg '><a href="#staff">Our Doctors</a></li> 
          <li className='text-[#04F9ED] font-medium text-lg '><a href="#contact">Contact us</a></li> 
        </ul>  

        <div className=''>
          <div>
            <h2 className='text-white text-2xl sm:mt-10 mt-10  ml-5'> Socials</h2>
          </div>
          <div className='flex my-4'>
            <a href="https://www.facebook.com/profile.php?id=100071094020686&mibextid=ZbWKwL">
            <img src="/images/facebook.png" className='h-8 w-8 inline mx-4' alt="" />
            <h2 className='text-xl text-white inline font-semibold'>Facebook</h2>
            </a>
          </div>
          <div className='flex my-4'>
            <a href="/">
            <img src="/images/instagram.png" className='h-8 w-8 mx-4 inline' alt="" />
            <h2 className='text-xl text-white inline font-semibold'>Instagram</h2>
            </a>
          </div>
          <div className='flex my-4'>
              <a href="https://t.me/+bSkp7e1AL305Njdk">
            <img src="/images/telegram.png" className='h-8 w-8 mx-4 inline' alt="" />
            <h2 className='text-xl inline text-white font-semibold'>Telegram</h2>
            </a>
          </div>
          
          {/* <div className='flex my-4'>
            <img src="/images/facebook.png" className='h-8 w-8 mx-4' alt="" />
            <h2 className='text-xl text-white font-semibold'>Linkedin</h2>
          </div> */}
          <div className='flex my-4'>
            <a href="grooming1st@gmail.com">
            <img src="/images/mail.png" className='h-8 w-8 mx-4 inline'  alt="" />
            <h2 className='text-xl inline text-white font-semibold'>Mail</h2>
            </a>
          </div>
        </div>  

        {/* <div className='justify-center items-center'>
          <h2 className='text-white text-2xl font-semibold my-5'>News Letter</h2>
          <p className='text-white w-full text-center'>Stay up-to-date on our constantly evolving health service features 
            and cutting-edge technologies. Enter your e-mail address and subscribe to our newsletter
            .</p>
            <div className='flex'>
              <input type="text" className='rounded-tr-none rounded-br-none rounded-tl-lg rounded-bl-lg h-[40px]'/>
              <button className='text-white text-xl font-semibold rounded-tr-lg rounded-br-lg rounded-tl-none rounded-bl-none px-2 bg-[#0F8EF8]'>Subscribe </button>
            </div>
        </div> */}
    </footer>
  )
}

export default Footer