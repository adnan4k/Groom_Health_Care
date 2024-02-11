import React, { useState, useEffect } from 'react';

function News({ news, onFormSubmit }) {
  const [formData, setFormData] = useState({
    title: news ? news.title : '',
    content: news ? news.content : '',
    // Assuming image handling will be implemented separately
    image: '',
  });

  useEffect(() => {
    if (news) {
      setFormData({
        title: news.title,
        content: news.content,
      });
    }
  }, [news]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
   
    console.log("File input changed", e.target.files);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
   
  };

  return (
    <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
      <div className="mb-5">
        <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          news
        </h1>
      </div>

      <div className="mb-5">
        <label htmlFor="title" className="block mb-2 text-[18px] font-medium text-gray-900 dark:text-white">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-[18px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <div className="mb-5">
        <label htmlFor="content" className="block mb-2 text-[18px] font-medium text-gray-900 dark:text-white">content</label>
        <textarea
          id="content"
          name="content"
          value={formData.content}
          onChange={handleChange}
          className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          rows="4" // You can adjust the number of rows as needed
        />
      </div>

      <div className="mb-5">
        <label htmlFor="image" className="block mb-2 text-[18px] font-medium text-gray-900 dark:text-white">Image</label>
        <input
          type="file"
          id="image"
          name="image"
          onChange={handleFileChange}
          className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <button type="submit" className="w-full ring-primary-800 border-primary text-xl text-black bg-slate-500 mt-5 text-[19px] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
        {news ? 'Update' : 'Create'}
      </button>
    </form>
  );
}

export default News;
