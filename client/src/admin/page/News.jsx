import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useLocation,useNavigate } from 'react-router-dom';

function News() {
  //accessing passed data
  const navigate = useNavigate()
  const location = useLocation();
  const {row} = location.state || ''
  
  const [formData, setFormData] = useState({
    title: row ? row[0].title : '',
    content: row ? row[0].content : '',
    image: null, 
  });
  useEffect(() => {
    // Update form data when `row` prop changes
    if (row) {
      setFormData({
        title: row[0].title,
        content: row[0].content,
        image: null, 
      });
    }
  }, [row]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    // Set file to formData state
    if (e.target.files[0]) {
      setFormData(prevFormData => ({
        ...prevFormData,
        image: e.target.files[0],
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //create
    if(!row){
    try {
      const response = await axios.post('http://localhost:4000/news/create-news', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log("Form submission response:", response.data);
      navigate('/admin/news/display');

    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }
    //edit
    if (row) {
      try {
        const response = await axios.post(`http://localhost:4000/news/edit-news/${row[0]._d}`, formData, {
      headers:{
        'Content-Type': 'multipart/form-data',
      }

    });
    console.log("Form submission response:", response.data);
      // Clear the form here by resetting formData state
      setFormData({
        title: '',
        content: '',
        image: '',
      });
    navigate('/admin/news/display');

      } catch (error) {
        console.log(error)
      }      }

    
  };
  
  return (
    <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
      <div className="mb-5">
      <h1 className="text-xl mt-10 text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          News
        </h1>        <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </div>

      <div className="mb-5">
        <label htmlFor="content" className="block mb-2 text-sm font-medium text-gray-900">Content</label>
        <textarea
          id="content"
          name="content"
          value={formData.content}
          onChange={handleChange}
          rows="4"
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </div>

      <div className="mb-5">
        <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900">Image</label>
        <input
          type="file"
          id="image"
          name="image"
          onChange={handleFileChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </div>

      <button
  type="submit"
  className="py-2 px-4 bg-blue-500 text-black hover:text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 w-full transition-colors duration-200"
>
  {row ? 'Update row' : 'Create row'}
</button>

    </form>
  );
}

export default News;
