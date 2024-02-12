import React, { useEffect, useState } from 'react';
import Table from './Table';
import axios from 'axios';

const fetchData = async () => {
  // Example API call
  const response = await axios.get('http://localhost:4000/staff/get-staff')
  console.log(response.data)
  return response.data;
};

function StaffTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData().then(setData);
  }, []);

  const columns = [
    { key: 'title', label: 'Title' },
    { key: 'name', label: 'Name' },
    { key: 'description', label: 'Description' },
    { key: 'experience', label: 'Experience' },
    { 
      key: 'image', 
      label: 'Image', 
      render: (row) => <img src={row.image} alt={row.title} style={{ width: '50px' }} /> 
    },
  ];

  return <Table columns={columns} rows={data} />;
}

export default StaffTable;