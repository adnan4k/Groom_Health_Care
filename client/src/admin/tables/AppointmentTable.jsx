import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import Table from './Table';

const fetchData = async () => {
  // Example API call
  const response = await axios.get('https://backend.es4h.org/user/get-appointment');
  // console.log(response.data.appointment)
  return response.data.appointment;
};

function AppointmentTable() {
    const [data, setData] = useState([]);
   
    useEffect(() => {
      fetchData().then(setData);
    }, []);
  
    const columns = [
      { key: 'name', label: 'Name' },
      { key: 'email', label: 'Email' },
      { key: 'phone', label: 'Phone' },
      { key: 'date', label: 'Date' },
      { key: 'time', label: 'Time' },
      { key: 'city', label: 'City' },
      { key: 'reason', label: 'Reason' },

    ];
    const type = "appointment"
     console.log(data,'button')
    return <Table columns={columns} initialRows={data}  type={type} />;
  }

export default AppointmentTable