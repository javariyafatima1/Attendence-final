import React, { useState } from 'react';
import {    useNavigate,} from "react-router-dom";
import { TextField, Button, Container, Typography } from '@mui/material';

const Signup = () => {
  
  const navigate = useNavigate();
  const [sing, setsing] = useState({
    email: "",
    password:"",
    name:""
    
});
  const Singup = () => {
    console.log( email, password,name);
    navigate('/login');
    };
    const handleChange = (e) => {
      const { name, value } = e.target;
      setsing({ ...sing, [name]: value });
  }
  return (
    <div>
       <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>Singup</Typography>
      <TextField
        fullWidth
        margin="normal"
        label="Name"
        name='name'
        type="text"
        value={sing.name}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        margin="normal"
        label="Email"
        name="email"
        type="email"
        value={sing.email}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        margin="normal"
        label="Password"
        type="password"
        name='password'
        value={password}
        onChange={handleChange}
      />
       <Button 
        variant="contained" 
        color="primary" 
        onClick={ Singup}
      >
     Singup 
     
    </Button>

   
     </Container>
    </div>
  );
}

export default Signup;
