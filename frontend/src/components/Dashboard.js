import React, { useState,useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import AllAtten from './AllAtten';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';
import axios from 'axios'
import Logout from './Logout';

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
}catch(error){
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
    <div className="container">
    <Container>
      <Typography className="dashboard-title">
        Dashboard
      </Typography>
      <Typography className="welcome-message">
        Welcome to the student Attendance portal!
      </Typography>
      <p className="user-info">Welcome, {userData.name}!</p>
      <p className="user-info">Email: {userData.email}</p>
      <p className="user-info">Student ID: {userData._id}</p>
      <div className="logout-button">
        <Logout />
      </div>
      <AllAtten />
    </Container>
  </div>
  );
}

export default Dashboard;
