import React, { useState, useEffect } from 'react';

import AllAtten from './AllAtten';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';
import axios from 'axios';
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
      try {
        const response = await axios.get(`https://raam-six.vercel.app/api/getUserData`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUserData(response.data.user);
      } catch (error) {
        console.error('Error fetching user data:', error);
        if (error.response?.status === 401) {
          navigate('/login');
        }
      }
    };
    fetchUserData();
  }, [navigate]);

  if (!userData) return <div>Loading...</div>;

  return (
    <div className="dashboard-container">
      <div className='dashboard'>
        <h1 className="dashboard-title">Dashboard</h1>
        <p className="dashboard-para">
          Welcome to the student Attendance portal!
        </p>
        <p className="main-user">Welcome, {userData.name}!</p>
        <p className="user">Email: {userData.email}</p>
        <p className="user">Student ID: {userData._id}</p>

            <AllAtten />
            <div className="btn-container">
              <Logout />

            </div>
          </div>
        </div>


    


  );
};

export default Dashboard;
