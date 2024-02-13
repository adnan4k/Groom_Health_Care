import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';

function Services() {
  // Array of service objects
  const [data,setData] = useState([]);
  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/service/get-service');
        // console.log(response.data[0].image);
        setData(response.data); // Assuming the response data is the array of testimonies
      } catch (error) {
        console.error("Error fetching testimonies:", error);
      }
    };

    fetchData();
  }, []);


  return (
    <div className='flex flex-col justify-center items-center'>
      <h2 className='text-black text-3xl my-10 font-bold'>Our Services</h2>
      <div className='container flex flex-col sm:flex-row justify-center items-center'>
        {data.map((service, index) => (
          <div key={index} className='flex flex-col items-center justify-center m-5'>
            <img src={`http://localhost:4000/images/${service.image}`} alt={service.title} className='rounded-sm' />
            <h3 className='items-center m-5 text-xl text-center font-semibold'>{service.title}</h3>
            <p className='text-center'>{service.description}</p>
          </div>
        ))}
      </div>
      <div className='m-10'>
        <img src="/images/dot.png" alt="dot" />
      </div>
    </div>
  );
}

export default Services;
