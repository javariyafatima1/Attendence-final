import React, { useState,useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import AllAtten from './AllAtten';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login'); 
        return;
    }
    try{
const response = await axios.get('http://localhost:1000/api/getUserData', {
      headers: { Authorization: `Bearer ${token}` }
  });
  setUserData(response.data.user);
}catch{
  console.error('Error user data:', error);
  if (error.response?.status === 401) {
      navigate('/login');          
     }
}
    }
    fetchUserData();
  },[navigate])
  if (!userData) return <div>Loading...</div>;
  return (
    <div>
      <Container>
    <Typography variant="h4" gutterBottom>Dashboard</Typography>
    <Typography>Welcome to the student Attendence portal!</Typography>
    <AllAtten/>
  </Container>
 
    </div>
  );
}

export default Dashboard;
