import React from 'react';
import { Link } from 'react-router-dom';

function HeroSection() {
  // -mt-[10%] -ml-[10%]  bg-gradient-to-b from-cyan-200/20 to-blue-500/10 ... rounded-full
  const bgImage  = '/images/newEllipse.png'
  const ellipseStyle = {
    background: `url(${bgImage})`,
    backgroundSize: 'cover', // Ensure the image covers the ellipse
    backgroundPosition: 'center', // Center the background image
    height: '600px', // Adjust based on your design needs
    // borderRadius: '50% 70% 70% 50%', // Creates an elliptical border-radius (horizontal / vertical radius)
    // marginRight:'-30%',
  };
  const bgImage1  = '/images/background.png'

  const ellipseStyle1 = {
    background: `url(${bgImage1})`,
    backgroundSize: 'cover', // Ensure the image covers the ellipse
    backgroundPosition: 'center', // Center the background image
    // height: '700px',
    };
  return (
    <div className='flex flex-col sm:flex-row bg-[#17a49d33]' >
      <div style={ellipseStyle}  className='sm:w-full h-[10px] sm:h-[600px] sm:-ml-[10%]  '></div>
      <div class="pt-10  z-50 sm:-mt-0 -mt-[600px] sm:-ml-[40%] ">
       <div className='containe flex flex-col w-[80%] ml-[10%] mt-10 justify-center'>
        <h1 className='w-1/2  text-4xl font-bold '>Serving your health needs is our priority</h1>
        <p className='w-[80%] my-[5%] text-lg'> 
          Groom Health Service is a leading company in the healthcare industry, offering up to
          date support and expertise to improve healthcare access, address health issues, and
          enhance the overall quality of medical care.
        </p>

        <div className='buttons flex flex-row'>
          <button className=' flex text-nowrap mr-10    sm:text-sm   bg-[#0F8EF8] text-white  rounded-xl px-5 py-2'>
            <span><img src="/images/call.png" className='hidden sm:inline-block h-5 pr-2' alt="call" /></span>
            CALL US
            </button>
          {/* <div className='flex flex-grow'></div> */}
          <Link to='/appointment' className='inline-block'>
          <button  className='ml-[90%] px-5 bg-[#0F8EF8] text-white rounded-xl  py-2'>Appointment</button>
          </Link>
        </div>
      </div>
      </div>
         <div className='flex flex-grow'></div>
      {/* <div className='w-[45%]   '  style={ellipseStyle}> */}
        <div className='sm:w-full h-[400px] sm:h-[700px] sm:-mr-[50%] mt-16  sm:mt-0' style={ellipseStyle1}></div>
        <div className='w-[55%] sm:ml-0 ml-5 z-50 sm:mt-10 -mt-[90%]'>
        <img src="/images/mydoctor.png" alt="doctor" className='mb-2'/>
        <div className=''>
        <div className='flex flex-row w-full  sm:py-2 z-50 bg-white sm:bg-white shadow-xl  border-[1px] rounded-lg sm:border-[#0F8EF8]'>
          <div className='card-container mx-4 bg-white w-full z-50 '>
            <div className='image-container flex flex-row'>
            <img src="/images/dr1.png" className='px-2 h-5' alt="doctor male" />
            <h3 className=' text-black sm:text-[15px] text-sm font-semibold'>Dr John Doe</h3>
            </div>
            <div className='title'>
                <h3 className='ml-6'>Cardologist</h3>
            </div>
          </div>
          <div className='card-container mx-4 w-full bg-white z-50'>
            <div className='image-container flex flex-row'>
            <img src="/images/dr2.png" className='h-5 px-2 ' alt="doctor male" />
            <h3 className='text-black sm:text-[15px] text-sm font-semibold'>Dr John Doe</h3>
            </div>
            <div className='title'>
                <h3 className='ml-6'>Cardologist</h3>
            </div>
          </div>
          <div className='card-container -mx-4 sm:mx-4  bg-white w-full'>
            <div className='image-container flex flex-row'>
            <img src="/images/dr3.png" className='h-5 px-2 ' alt="doctor male" />
            <h3 className='text-black sm:text-[15px] text-sm font-semibold'>Dr John Doe</h3>
            </div>
            <div className='title'>
                <h3 className='ml-6'>Cardologist</h3>
            </div>
          </div>
        </div>
        </div>
        <div>
         
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default HeroSection;
