import React, { useState } from 'react';
import './Login.css';
import { IoMail } from "react-icons/io5";
import { FaLock } from "react-icons/fa6";
import Swal from 'sweetalert2'
import {    Link, useNavigate,} from "react-router-dom";
import axios from 'axios'
const Login = () => {
  const navigate = useNavigate();
  const [sing, setsing] = useState({
    email: "",
    password:"",
    });
    const [error, setError] = useState("")
  
    const Login = async (e) => {
      e.preventDefault();
      if (sing.email === "" || sing.password === "") {
       
        Swal.fire({
          position: "top-center",
          icon: "error",
          title: "All field Empty",
          showConfirmButton: false,
          timer: 1500
        });
        return;
      }
      try {
        const res = await axios.post(`https://raam-six.vercel.app/api/login`, sing);
        setsing({ email: "", password: "" , });
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Login Sucefully",
          showConfirmButton: false,
          timer: 1500
        });
       
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
        Swal.fire({
          position: "top-center",
          icon: "error",
          title: error.response.data.message,
          showConfirmButton: false,
          timer: 1500
        });
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
        <form  className="login-form" onSubmit={Login}>
          <div className="input-wrapper">
            <IoMail className='icon' />
            <input
            placeholder='Email Address'
              className="input-field"
             
              type="name"
              name='email'
              value={sing.email}
              onChange={handleChange}
            />
          </div>

          <div className="input-wrapper">
            <FaLock className='icon' />
            <input
           placeholder='Password'
              className="input-field"
            
              type="password"
              name='password'
            value={sing.password}
             onChange={handleChange}
            />
          </div>
          <a href='#' className='forgot-password-link'>Forgot Password</a>

          <button className='login-button' type='submit'>Log In</button>
        </form>

        <br />

        <p className="signup-text">Don't have an account? <Link to="/signup">Signup now</Link></p>













     
     
        </div>
          </div>
  
          
    );
  }
  export default Login;
