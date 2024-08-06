import React, { useState,useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import Logout from './Logout';
import UsersByCategory from './UserbyCategory';

const Dashboardadmin = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const CategoryClick = (category) => {
    setSelectedCategory(category);
  };


  return (
    <div>
    <Container>
    <Typography variant="h4" gutterBottom> Admin Dashboard</Typography>
    <Typography>Welcome to the Admin Attendence portal!</Typography>
    
         
<div>
  <h1>User Data</h1>
<button onClick={() => CategoryClick('GraphicDesign')}>Graphic Design</button>
      <button onClick={() => CategoryClick('Ai')}>Ai</button>
      <button onClick={() => CategoryClick('WebDevelopment')}>Web Development</button>
{selectedCategory && <UsersByCategory category={selectedCategory} />}
</div>
          
  </Container>
    </div>
  );
}

export default Dashboardadmin;
