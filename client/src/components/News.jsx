import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';

function News() {
  const [data,setData] = useState([]);
  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/news/get-news');
        console.log(response.data[0].image);
        setData(response.data); // Assuming the response data is the array of testimonies
      } catch (error) {
        console.error("Error fetching testimonies:", error);
      }
    };

    fetchData();
  }, [])
  return (
    <div className='justify-center items-center'>
      <h1 className='text-center text-3xl font-bold my-[3%] '>Article and News</h1>
    <div className='grid  sm:grid-cols-3 justify-center items-center ml-[2%] gap-10 w-[95%] '>
      {data.map((item) => (
        <div key={item.id} className='card1 flex flex-col justify-center items-center bg-[#007A7433]'>
          <img  src={`http://localhost:4000/images/${item.image}`}  alt="news" className='w-full'/>
          <h2 className='title text-black font-bold text-2xl'>{item.title}</h2>
          <p className='content font-semibold text-center w-[90%]'>{item.content}</p>
          <button className='text-[#0A8FFF] text-xl'>Read More <span className='inline-block'><img src={item.readMoreIcon} alt="" /></span></button>
        </div>
      ))}
    </div>
    </div>
  );
}

export default News;
