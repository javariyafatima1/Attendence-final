import React from 'react';
import { Container, Typography } from '@mui/material';
const Dashboard = () => {
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
