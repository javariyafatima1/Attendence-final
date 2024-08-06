import React, { useState } from 'react';
import './Login.css';
import { IoMail } from "react-icons/io5";
import { FaLock } from "react-icons/fa6";
import {    useNavigate,} from "react-router-dom";
import { TextField, Button, Container, Typography } from '@mui/material';
import axios from 'axios'
const Login = () => {
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
        const res = await axios.post('http://localhost:1000/api/login', sing);
        setsing({ email: "", password: "" , });
        alert("login suceful")
     console.log(res)
      
       if (res.data.token) {
        localStorage.setItem('token', res.data.token);
       navigate('/dashbord');
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
       <div className="main-container">
      
      <div className= "login-container">
        <h1 className="form-title">Login</h1>
        <form action="#" className="login-form">
          <div className="input-wrapper">
            <IoMail className='icon' />
            <input
              type="email"
              placeholder='Email Address'
              className="input-field"
              required
            />
          </div>

          <div className="input-wrapper">
            <FaLock className='icon' />
            <input
              type="password"
              placeholder='Password'
              className="input-field"
              required
            />
          </div>
          <a href='#' className='forgot-password-link'>Forgot Password</a>

          <button className='login-button'>Log In</button>
        </form>

        <br />

        <p className="signup-text">Don't have an account? <a href="#">Signup now</a></p>
















           {/* <Container maxWidth="sm">
          <Typography variant="h4" gutterBottom>Login</Typography>
          
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
          </Container>  */}
        </div>
          </div>
    );
  }
  export default Login;
