import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import {  useToast } from '@chakra-ui/react';
import axios from "axios";
import "./Adminlogin.css";
const AdminLogin = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const [sing, setsing] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const Login = async () => {
    if (sing.email === "" || sing.password === "") {
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
      const res = await axios.post(
        `https://raam-six.vercel.app/api/adminlogin`,
        sing
      );
      setsing({ email: "", password: "" });
      toast({
        title: " Admin Login Sucessfully",
         status: "success",
        duration: 5000,
        isClosable: true,
      });
      console.log(res);

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        navigate("/admindashbord");
      } else {
        console.error("Token not received");
      }
    } catch (error) {
      console.error(error);
      if (error.response && error.response.data) {
        setError(error.response.data.message);
        
        toast({
          title: error.response.data.message,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      } else {
        setError("Please try again");
      }
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setsing({ ...sing, [name]: value });
  };

  return (
    <div>
      <div className="main-container">
        <div className="wrapper">
          <h1 className="main-title">Admin Login</h1>
          <div>
            <TextField
              className="input"
              label="Email"
              type="email"
              name="email"
              value={sing.email}
              onChange={handleChange}
              
            />
            <br />
            <br />
            <TextField
              className="input"
              label="Password"
              type="password"
              name="password"
              value={sing.password}
              onChange={handleChange}
              
            />
          </div>
          <br />
          <Button
            className="btn"
            onClick={Login}
            style={{ backgroundColor: "#0056b3", color: "#fff" }}
          >
            Login
          </Button>
        
        </div>
      </div>
    </div>
  );
};
export default AdminLogin;
