import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from './Table';

const fetchData = async () => {
  // Example API call
  const response = await axios.get('https://backend.es4h.org/sub/get-sub');
  console.log(response)
  return response.data;
};

function SubscriptionTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData().then(setData);
  }, []);

  const columns = [
    { key: 'email', label: 'Email' },
  ];
  const type = "sub"
  return <Table columns={columns} initialRows={data}   type={type} />;
}

export default SubscriptionTable;
