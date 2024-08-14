import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./AdminSignup.css";
import { TextField, Button, Container, Typography } from "@mui/material";
import CardText from "react-bootstrap/esm/CardText";
import {  useToast } from '@chakra-ui/react';
import axios from "axios";
const AdminSignup = () => {
  const navigate = useNavigate();
  const [sing, setsing] = useState({
    email: "",
    password: "",
    name: "",
  });
  const Singup = async () => {
    if (sing.email === "" || sing.password === "" || sing.name === "") {
      toast({
        title: "Error",
        description: "All fields are required",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    try {
      const response = await axios.post(
        `https://raam-six.vercel.app/api/adminsignup`,
        sing
      );
      alert("admin create");
      setsing({ email: "", password: "", name: "" });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
    navigate("/adminlogin");
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setsing({ ...sing, [name]: value });
  };
  return (
    <div>
      <div className="container1">
        <div className="wrapper1">
          <h1 className="main-title"> Admin Singup</h1>
          <TextField
            className="login-input"
            label="Username"
            name="name"
            type="text"
            value={sing.name}
            onChange={handleChange}
           
          />
          <br />
          <br />
          <TextField
            className="login-input"
            label="Email"
            name="email"
            type="email"
            value={sing.email}
            onChange={handleChange}
           
          />
          <br />
          <br />
          <TextField
            className="login-input"
            label="Password"
            type="password"
            name="password"
            value={sing.password}
            onChange={handleChange}
         
          />
          <br />
          <br />
          <Button
            className="signup-btn"
            style={{ backgroundColor: "#0056b3", color: "#fff" }}
            onClick={Singup}
          >
            Singup
          </Button>
          <p className="para1">
            Already Signup  <Link to="/adminlogin">Login</Link>
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default AdminSignup;
