import React, { useState, useEffect } from 'react';
import { ClipLoader } from 'react-spinners'; // Import the ClipLoader from react-spinners
import NavBar from './NavBar';
import Footer from '../sections/Footer';
import { useLocation, Link } from 'react-router-dom';



function NewsAndArticles() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();

  const isNewsPage = location.pathname === '/news';

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch('https://backend.es4h.org/news/get-news');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result); // Assuming the API returns an array of news articles
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const truncateText = (text, maxLength = 300) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ClipLoader color={"#ffffff"} loading={loading} size={50} />
      </div>
    );
  } // Show a spinner while loading

  if (error) return <p>Error: {error}</p>; // Show an error message

  return (
    <>
      {isNewsPage && <NavBar />}
      <div className='justify-center items-center '>
        <h1 className='text-center text-3xl text-indigo-600 font-bold my-[3%]'> Latest Article and News</h1>
        <div className='grid sm:grid-cols-3 justify-center items-center ml-[2.5%] gap-10 w-[95%]'>
          {data.map((item) => (
            <div key={item.id} className='card1 flex flex-col justify-center items-center bg-[#007A7433]'>
              <img src={`https://backend.es4h.org/images/${item.image}`} alt="news" className='w-full max-h-[250px]' />
              <h2 className='title text-white mt-3 font-bold text-2xl'>{item.title}</h2>
              <p className='content my-5 text-center w-[90%]'>{truncateText(item.content)}</p>
              <Link to='/news-detail' state={{ content: item.content, image: item.image, title: item.title }} className='text-[#0A8FFF] text-xl'>
                Read More <span className='inline-block'><img src='/images/up.png' alt="" /></span>
              </Link>
            </div>
          ))}
        </div>
      </div>
      {isNewsPage && <Footer />}
    </>
  );
}

export default NewsAndArticles;
