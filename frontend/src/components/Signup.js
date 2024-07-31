import React, { useState } from 'react';
import {    useNavigate,} from "react-router-dom";
import { TextField, Button, Container, Typography } from '@mui/material';
import CardText from 'react-bootstrap/esm/CardText';
import axios from "axios";
const Signup = () => {
  
  const navigate = useNavigate();
  const [sing, setsing] = useState({
    email: "",
    password:"",
    name:""
    
});
  const Singup = async () => {
       try{
        const response = await axios.post('http://localhost:1000/api/signup', sing);
        alert("user create")
        setsing({ email: "", password: "" , name: "" });
        console.log(response)
       }catch(error){
        console.error(error);
       }
       navigate("/login")
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
        value={sing.password}
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
