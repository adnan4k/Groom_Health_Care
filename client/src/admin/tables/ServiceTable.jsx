import React, { useEffect, useState } from 'react';
import Table from './Table';
import axios from 'axios';

const fetchData = async () => {
  // Example API call
  const response = await axios.get('http://localhost:4000/service/get-service');
  console.log(response.data)
  return response.data;
};

function ServiceTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData().then(setData);
  }, []);

  const columns = [
    { key: 'title', label: 'Title' },
    { key: 'description', label: 'Description' },
    { 
      key: 'image', 
      label: 'Image', 
      render: (row) => <img  src={`http://localhost:4000/images/${row.image}`} alt={row.title} style={{ width: '50px' }} /> 
    },
  ];
  const type = "service"

  return <Table columns={columns} initialRows={data} type={type} />;
}

export default ServiceTable;
