import React, { useState, useEffect } from 'react';
import axios from "axios";

function News({ news, onFormSubmit }) {
  const [formData, setFormData] = useState({
    title: news ? news.title : '',
    content: news ? news.content : '',
    image: null, // Initialize image as null since it's going to be a File object
  });

  useEffect(() => {
    // Update form data when `news` prop changes
    if (news) {
      setFormData({
        title: news.title,
        content: news.content,
        image: null, // Keep image as null when news prop updates
      });
    }
  }, [news]);

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
  
    // Use FormData to handle file upload
    const data = new FormData();
    data.append('title', formData.title);
    data.append('content', formData.content);
    if (formData.image) {
      data.append('image', formData.image);
    }
  
    try {
      const response = await axios.post('http://localhost:4000/news/create-news', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log("Form submission response:", response.data);
  
      // Clear the form here by resetting formData state
      setFormData({
        title: '',
        content: '',
        image: null,
      });
  
      if (onFormSubmit) {
        onFormSubmit(response.data);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
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
  {news ? 'Update News' : 'Create News'}
</button>

    </form>
  );
}

export default News;
