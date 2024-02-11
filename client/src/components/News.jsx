import React from 'react';

// Example array of news items
const newsData = [
  {
    id: 1,
    title: 'Title 1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: '/images/news1.png',
    readMoreIcon: '/images/up.png'
  },
  {
    id: 2,
    title: 'Title 2',
    content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: '/images/news1.png',
    readMoreIcon: '/images/up.png'
  },
  {
    id: 3,
    title: 'Title 2',
    content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: '/images/news1.png',
    readMoreIcon: '/images/up.png'
  },
  // Add more news items as needed
];

function News() {
  return (
    <div className='justify-center items-center'>
      <h1 className='text-center text-3xl font-bold my-[3%] '>Article and News</h1>
    <div className='grid  sm:grid-cols-3 justify-center items-center ml-[2%] gap-10 w-[95%] '>
      {newsData.map((item) => (
        <div key={item.id} className='card1 flex flex-col justify-center items-center bg-[#007A7433]'>
          <img src={item.image} alt="news" className='w-full'/>
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
