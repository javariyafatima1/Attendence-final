import React, { useState,useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import Logout from './Logout';
import UsersByCategory from './UserbyCategory';
import UserAttendance from './UserAttenAdmin';

const Dashboardadmin = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedUserId, setSelectedUserId] = useState(null);

  const CategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedUserId(null); 
  };
  const handleUserClick = (userId) => {
    setSelectedUserId(userId);
  };


  return (
    <div>
    <Container>
    <Typography variant="h4" gutterBottom> Admin Dashboard</Typography>
    <Typography>Welcome to the Admin Attendence portal!</Typography>
    
         
<div>
  <h1>User Data</h1>
  <button onClick={() => CategoryClick('GraphicDesign')}>Graphic Design</button>
      <button onClick={() => CategoryClick('WebDevelopment')}>Web Development</button>
      <button onClick={() => CategoryClick('Ai')}>Ai</button>
      {selectedCategory && !selectedUserId && <UsersByCategory category={selectedCategory} onUserClick={handleUserClick} />}
      {selectedUserId && <UserAttendance userId={selectedUserId} />}
</div>
          
  </Container>
    </div>
  );
}

export default Dashboardadmin;
