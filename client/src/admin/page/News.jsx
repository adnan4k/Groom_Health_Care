import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';

function News() {
  const location = useLocation();
  const navigate = useNavigate();
  const {row,index} = location.state || ''
  const [formData, setFormData] = useState({
    content: row ? row[index].content : '',
    title:row ? row[index].title : '',
    // Assuming image handling will be implemented separately
    image: '',
  });
  useEffect(() => {
    if (row) {
      setFormData({
        title: row[index].title,
        content: row[index].content,
      });
    }
  }, [row,index]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

  };

  
  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Get the first file
    if (file) {
      setFormData(prevFormData => ({
        ...prevFormData,
        image: file,
      }));
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create an instance of FormData
    const formDataToSend = new FormData();
    formDataToSend.append('title', formData.title);
    formDataToSend.append('content', formData.content);

    // Append file if it exists
    if (formData.image) {
        formDataToSend.append('image', formData.image);
    }

    try {
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        };

        if (!row) {
            // For creating a new service
            const response = await axios.post('http://localhost:4000/news/create-news', formDataToSend, config);
            console.log("Form submission response:", response.data);
        } else {
            
            const response = await axios.post(`http://localhost:4000/news/edit-news/${row[index].id}`, formDataToSend, config);
            console.log("Form submission response:", response.data);
        }

        // Redirect after the operation
        navigate('/admin/news/display');
    } catch (error) {
        console.error("Error submitting form:", error);
    }
};

  return (
    <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
      <div className="mb-5">
        <h2 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-9index md:text-2xl dark:text-white">
          news
        </h2>
      </div>

      <div className="mb-5">
        <label htmlFor="title" className="block mb-2 text-[18px] font-medium text-gray-9index dark:text-white">title</label>
        <input
          type="text"
          id="title"
          title="title"
          value={formData.title}
          onChange={handleChange}
          className="bg-gray-5index border border-gray-3index text-gray-9index text-[18px] rounded-lg focus:ring-blue-5index focus:border-blue-5index block w-full p-2.5 dark:bg-gray-7index dark:border-gray-6index dark:placeholder-gray-4index dark:text-white dark:focus:ring-blue-5index dark:focus:border-blue-5index"
        />
      </div>

      <div className="mb-5">
        <label htmlFor="content" className="block mb-2 text-[18px] font-medium text-gray-9index dark:text-white">content</label>
        <textarea
          id="content"
          title="content"
          value={formData.content}
          onChange={handleChange}
          className="block w-full p-4 text-gray-9index border border-gray-3index rounded-lg bg-gray-5index sm:text-md focus:ring-blue-5index focus:border-blue-5index dark:bg-gray-7index dark:border-gray-6index dark:placeholder-gray-4index dark:text-white dark:focus:ring-blue-5index dark:focus:border-blue-5index"
          rows="4" // You can adjust the number of rows as needed
        />
      </div>

      <div className="mb-5">
        <label htmlFor="image" className="block mb-2 text-[18px] font-medium text-gray-9index dark:text-white">Image</label>
        <input
        // required
          type="file"
          id="image"
          title="image"
          onChange={handleFileChange}
          className="block w-full p-2 text-gray-9index border border-gray-3index rounded-lg bg-gray-5index sm:text-xs focus:ring-blue-5index focus:border-blue-5index dark:bg-gray-7index dark:border-gray-6index dark:placeholder-gray-4index dark:text-white dark:focus:ring-blue-5index dark:focus:border-blue-5index"
        />
      </div>

      <button type="submit"  style={{backgroundColor:'#6A64F1'}}
      className="w-full ring-primary-8index border-primary text-xl text-white bg-slate-5index mt-5 text-[19px] hover:bg-primary-7index focus:ring-4 focus:outline-none focus:ring-primary-3index font-medium rounded-lg px-5 py-2.5 text-center dark:bg-primary-6index dark:hover:bg-primary-7index dark:focus:ring-primary-8index">
        {row ? 'Update' : 'Create'}
      </button>
    </form>
  );
}
export default News;