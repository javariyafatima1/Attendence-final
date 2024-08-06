import React, { useState,useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import Logout from './Logout';

const Dashboardadmin = () => {
  


  return (
    <div>
    <Container>
    <Typography variant="h4" gutterBottom> Admin Dashboard</Typography>
    <Typography>Welcome to the Admin Attendence portal!</Typography>
    
         
         
          
  </Container>
    </div>
  );
}

export default Dashboardadmin;
