import React, { useState } from 'react';
import {    useNavigate,} from "react-router-dom";
import { TextField, Button, Container, Typography } from '@mui/material';
import axios from 'axios'
const AdminLogin = () => {
  const navigate = useNavigate();
  const [sing, setsing] = useState({
    email: "",
    password:"",
    });
    
  
    const Login = async () => {
     
      
      
       
    
     
    
      };
      const handleChange = (e) => {
        const { name, value } = e.target;
        setsing({ ...sing, [name]: value });
    }

    return (
        <div>
           <Container maxWidth="sm">
          <Typography variant="h4" gutterBottom>Admin Login</Typography>
          
          <TextField
           fullWidth
           margin="normal"
           label="Email"
           type="email"
           name='email'
           value={sing.email}
           onChange={handleChange}
          />
         <TextField
        fullWidth
        margin="normal"
        label="Password"
        type="password"
        name='password'
        value={sing.password}
        onChange={handleChange}
      />
          <Button 
        variant="contained" 
        color="primary" 
        onClick={Login}
      >
     Login
      </Button>
          </Container>
          </div>
    );
  }
  export default AdminLogin;
