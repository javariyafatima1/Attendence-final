import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import './Signup.css';
import { IoMail } from "react-icons/io5";
import { FaLock } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import {    useNavigate,Link} from "react-router-dom";
import { TextField, Button, Container, Typography } from '@mui/material';
import CardText from 'react-bootstrap/esm/CardText';
import axios from "axios";


const Signup = () => {
  
  const navigate = useNavigate();
  const [sing, setsing] = useState({
    email: "",
    password:"",
    name:"",
    category :""
    
    
});
  const Singup = async () => {
    if (sing.email === "" || sing.password === "" || sing.name === ""||  sing.category === "") {
      alert("All fields are required");
      return;
    }
       try{
        const response = await axios.post('http://localhost:1000/api/signup', sing);
        alert("user create")
        setsing({ email: "", password: "" , name: "",  category :""});
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
      <div className="main-container">
      
      <div className= "login-container">
        <h1 className="form-title">Sign up</h1>
        <form action="#" className="login-form">
          <div className="input-wrapper">
            <FaUserAlt className='icon' />
            <input
              type="text"
              placeholder='Username'
              className="input-field"
              required
            />
            </div>
            
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
          <button className='login-button'>Sign up</button>
        </form>

        <br />

        <p className="signup-text">Already have an account login <a href="#">Login</a></p>





        {/* <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom> Student Singup</Typography>
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
      
      
      
       <TextField
        fullWidth
        margin="normal"
        label="category"
        type="password"
        name='category'
        value={sing.category} // comment part 
          onChange={handleChange}
          
        />
        
        <Form.Select size="lg" mt="2">
        <option>Category</option>
        <option>Graphics Designing</option>
        <option>Web Developnment</option>
        <option>Video Editing</option>
        <option>3D Animation</option>
        <option>Data Science</option>
        </Form.Select>
        
        <br />
        
       <Button 
        variant="contained" 
        color="primary" 
        onClick={ Singup}
      >
     Singup 
     
    </Button>
    <Button>
    <Link to="/login" className="nav-link">already singup to please login</Link>
    </Button>

   
     </Container>   */}
      

      </div>
      </div>

    </div>
  );
}
export default Signup;
