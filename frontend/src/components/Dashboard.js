import React from 'react';
import { Container, Typography } from '@mui/material';
import AllAtten from './AllAtten';
import { useNavigate } from 'react-router-dom';
const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {

  },[])
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
