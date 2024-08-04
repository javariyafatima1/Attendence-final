import React, { useState,useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import Logout from './Logout';

const Dashboardadmin = () => {
  const [adminData, setadminData] = useState(null);
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

//   useEffect(() => {
//     const fetchadminData = async () => {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         navigate('/adminlogin'); 
//         return;
//     }
//     try{
// const response = await axios.get('http://localhost:1000/api/getadmindata', {
//       headers: { Authorization: `Bearer ${token}` }
//   });
//   setadminData(response.data.admin);
// }catch(error){
//   console.error('Error admin data:', error);
//   if (error.response?.status === 401) {
//       navigate('/adminlogin');          
//      }
// }
//     }
//     fetchadminData();
//   },[navigate])
 
  useEffect(() => {
    const fetchUsers = async () => {
     
      try {
        const response = await axios.get('http://localhost:1000/api/users',)
        setUsers(response.data.user);
      } catch (error) {
        console.error('Error fetching users:', error);
        setMessage('Error fetching users.');
      }
    };

    fetchUsers();
  }, []);
  //  if (!adminData) return <div>Loading...</div>
   if (!users) return <div>Loading...</div>;
  return (
    <div>
    <Container>
    <Typography variant="h4" gutterBottom> Admin Dashboard</Typography>
    <Typography>Welcome to the Admin Attendence portal!</Typography>
    
            {/* <p>Welcome, {adminData.name}!</p>
            <p>Email: {adminData.email}</p>
            <Logout/> */}
            <p>user:{users.name}</p>
          
  </Container>
    </div>
  );
}

export default Dashboardadmin;
