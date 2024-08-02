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
    const [error, setError] = useState("")
    
  
  
      const Login = async () => {

      if (sing.email === "" || sing.password === "") {
        alert("All fields are required");
        return;
      }
      try {
        const res = await axios.post('http://localhost:1000/api/adminlogin', sing);
        setsing({ email: "", password: "" , });
        alert(" Admin login suceful")
     console.log(res)
      
       if (res.data.token) {
        localStorage.setItem('token', res.data.token);
        navigate('/admindashbord');
       } else {
         console.error('Token not received');
       }
      }catch(error){
       console.error(error)
       if (error.response && error.response.data) {
        setError(error.response.data.message);
        alert(error.response.data.message)
      } else {
        setError("Please try again");
      }
    }
      
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
