import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Services() {
  // Static array of service objects as dummy data
  const dummyData = [
    {
      id: 1,
      image: 'hero1.jpg',
      title: 'Service One',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis arcu sed massa efficitur, at semper dui elementum.'
    },
    {
      id: 2,
      image: 'hero1.jpg',
      title: 'Service Two',
      description: 'Phasellus ultricies justo non velit feugiat, vel feugiat arcu luctus. Suspendisse potenti. Cras ultricies metus nec turpis suscipit vehicula.'
    },
    {
      id: 3,
      image: 'hero1.jpg',
      title: 'Service Three',
      description: 'Curabitur nec sollicitudin erat, ac consectetur augue. Maecenas vel tortor convallis, efficitur ligula nec, viverra urna.'
    }
  ];

  const [data, setData] = useState([]);

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        // Commenting out the API call and setting dummy data
        // const response = await axios.get('http://localhost:4000/service/get-service');
        // setData(response.data); // Assuming the response data is the array of services

        // Use dummy data for now
        setData(dummyData);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchData();
  }, []);

  const truncateText = (text, maxLength = 250) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  return (
    <div className='flex flex-col justify-center items-center'>
      <h2 className='text-black text-3xl my-10 font-bold'>Our Services</h2>
      <div className='container flex flex-col sm:flex-row justify-center items-center'>
        {data.map((service, index) => (
          <div key={index} className='flex flex-col items-center justify-center m-5 p-5 rounded-2xl bg-[#17a49d33] font-sans'>
            <img src={`http://localhost:4000/images/${service.image}`} alt={service.title} className='rounded-sm' />
            <h3 className='items-center m-5 text-xl text-center font-semibold'>{service.title}</h3>
            <p className='text-center'>{truncateText(service.description)}</p>
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
