import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import LefSideCards from '../components/LefSideCards'
import RightSideCards from '../components/RightSideCard'

function StaffSection() {
  const [data,setData] = useState([]);
  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/staff/get-staff');
        console.log(response.data[0].title,'after called');
        setData(response.data); // Assuming the response data is the array of testimonies
      } catch (error) {
        console.error("Error fetching testimonies:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
    <div  className='flex flex-col justify-center items-center'>
        <h2 className='text-3xl font-bold'>Our Staff</h2>
        <div className='flex flex-col sm:mt-[5%] sm:flex-row justify-center items-center'>
          <div className='mx-[5%]'> <LefSideCards
          title={data[0]?.title}
          name={data[0]?.name}
          experience={data[0]?.experience}
          description ={data[0]?.description}

          /></div>
            
          <div className='mx-[5%] mt-[25%] sm:mt-[20%]'><RightSideCards
          
          title={data[1]?.title}
          name={data[1]?.name}
          experience={data[1]?.experience}
          description ={data[1]?.description}
          /> </div>
        </div>
        <div className='flex flex-col sm:flex-row justify-center items-center'>
          <div className='mx-[5%] mt-[25%] sm:-mt-[15%]'> <LefSideCards
           title={data[2]?.title}
           name={data[2]?.name}
           experience={data[2]?.experience}
           description ={data[2]?.description}
            /></div>
            
          <div className='mx-[5%] mb-[10%] mt-[25%] sm:mt-[15%]'><RightSideCards 
           title={data[3]?.title}
           name={data[3]?.name}
           experience={data[3]?.experience}
           description ={data[3]?.description}
            /> </div>
        </div>    
      </div>
      </div>
  )
}

export default StaffSection