import React, { useEffect, useState } from 'react';
import Table from './Table';
import axios from 'axios';

const fetchData = async () => {
  // Example API call
  const response = await axios.get('https://backend.es4h.org/news/get-news');
  console.log(response)
  return response.data;
};

function NewsTables() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData().then(setData);
  }, []);

  const columns = [
    { key: 'title', label: 'Title' },
    { key: 'content', label: 'Content' },
    { 
      key: 'image', 
      label: 'Image', 
      render: (row) => <img  src={`https://backend.es4h.org/images/${row.image}`} alt={row.title} style={{ width: '50px' }} /> 
    },
  ];
  const type = "news"
  return <Table columns={columns} initialRows={data}   type={type} />;
}

export default NewsTables;
