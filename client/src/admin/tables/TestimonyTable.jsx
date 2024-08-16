import React, { useEffect, useState } from 'react';
import Table from './Table';
import axios from 'axios';

const fetchData = async () => {
  // Example API call
  const response = await axios.get('https://backend.es4h.org/testimony/get-testimony');
  console.log(response.data)
  return response.data;
};

function TestimonyTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData().then(setData);
  }, []);

  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'description', label: 'Description' },
    { 
      key: 'image', 
      label: 'Image', 
      render: (row) => <img  src={`https://backend.es4h.org/images/${row.image}`} alt={row.name} style={{ width: '50px' }} /> 
    },
  ];
  const type = "testimony"


  return <Table columns={columns} initialRows={data} type={type} />;
}

export default TestimonyTable;
