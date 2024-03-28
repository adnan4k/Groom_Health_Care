import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function News() {
  const [data,setData] = useState([]);
  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await axios.get('https://groom-health-care.onrender.com/news/get-news');
        console.log(response.data[0].image);
        setData(response.data); // Assuming the response data is the array of testimonies
      } catch (error) {
        console.error("Error fetching testimonies:", error);
      }
    };

    fetchData();
  }, [])
  const truncateText = (text, maxLength = 300) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };
  console.log(data,'data in the news')
  return (
    <div className='justify-center items-center'>
      <h1 className='text-center text-3xl font-bold my-[3%] '>Article and News</h1>
    <div className='grid  sm:grid-cols-3 justify-center items-center ml-[2.5%] gap-10 w-[95%] '>
      {data.map((item) => (
        <div key={item.id} className='card1 flex flex-col justify-center items-center bg-[#007A7433]'>
          <img  src={`https://groom-health-care.onrender.com/images/${item.image}`}  alt="news" className='w-full max-h-[250px]'/>
          <h2 className='title text-black mt-3 font-bold text-2xl'>{item.title}</h2>
          <p className='content my-5 text-center w-[90%]'>{truncateText(item.content)}</p>
          <Link to='/news-detail' state={{content:item.content,image:item.image, title:item.title}} className='text-[#0A8FFF] text-xl'>Read More <span className='inline-block'><img src='/images/up.png' alt="" /></span></Link>
        </div>
      ))}
    </div>
    </div>
  );
}

export default News;
