import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function News() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Dummy data for articles and news
    const dummyData = [
      {
        id: 1,
        image: '/images/news1.png',
        title: 'Article Title 1',
        content: 'This is a short summary of the article content for article 1.'
      },
      {
        id: 2,
        image: '/images/news1.png',
        title: 'Article Title 2',
        content: 'This is a short summary of the article content for article 2.'
      },
      {
        id: 3,
        image: '/images/news1.png',
        title: 'Article Title 3',
        content: 'This is a short summary of the article content for article 3.'
      },     
    ];
    
    setData(dummyData);
  }, []);

  const truncateText = (text, maxLength = 300) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  return (
    <div className='justify-center items-center '>
      <h1 className='text-center text-3xl text-white font-bold my-[3%]'>Article and News</h1>
      <div className='grid sm:grid-cols-3 justify-center items-center ml-[2.5%] gap-10 w-[95%]'>
        {data.map((item) => (
          <div key={item.id} className='card1 flex flex-col justify-center items-center bg-[#007A7433]'>
            <img src={`${item.image}`} alt="news" className='w-full max-h-[250px]'/>
            <h2 className='title text-white mt-3 font-bold text-2xl'>{item.title}</h2>
            <p className='content my-5 text-center w-[90%]'>{truncateText(item.content)}</p>
            <Link to='/news-detail' state={{content: item.content, image: item.image, title: item.title}} className='text-[#0A8FFF] text-xl'>
              Read More <span className='inline-block'><img src='/images/up.png' alt="" /></span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
