import React from 'react'
import { useLocation } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Footer from '../sections/Footer'

function NewsDetail() {
    const location = useLocation()
    const {content,title,image} = location.state || ''
  return (
    <div>
        <NavBar />
        <div className='flex flex-col font-medium justify-center items-center'>
            <h1 className='text-2xl my-10 font-bold' >{title}</h1>
              <img src={`http://localhost:4000/images/${image}`} alt="newsImage" className='mb-5' />
            <p className='text-lg  w-1/2'>{content}</p>
        </div>
        <Footer />
    </div>
  )
}

export default NewsDetail