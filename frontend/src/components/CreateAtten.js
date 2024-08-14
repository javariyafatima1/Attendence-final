import axios from 'axios';
import React, { useState ,useEffect} from 'react';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import {  useToast } from '@chakra-ui/react';
import './CreateAtten.css';
import { TextField, Button, Container, Typography, MenuItem, Select, FormControl, InputLabel } from '@mui/material';


const CreateAtten = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const [studentId, setStudentId] = useState('');
    const [course, setCourse] = useState('');
    const [date, setDate] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
      const token = localStorage.getItem('token');
      if (token) {
        const decodedToken = jwtDecode(token);
        setStudentId(decodedToken.id)
      }else{
         setMessage("please login to mark attendence")
         toast({
          title: "Please login your MArk Attedence",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    },[])
  const MarkAttendance = async () => {
    const token = localStorage.getItem('token');
    if(!token){
      setMessage("please login to mark attendence")
      return;
    }
    try {
      const response = await axios.post(`https://raam-six.vercel.app/at/markAttendance`, {
        studentId,
        course,
        date,
    }, {
        headers: { Authorization: `Bearer ${token}` }
    });
    setMessage(response.data.message);
      
        toast({
          title: response.data.message,
          status: "success",
          duration: 5000,
          isClosable: true,
        });
  
        navigate('/allatten')
    }catch(error){
      setMessage("error mark attendence")
    }
  }
  return (
    <div className='atten-container'>
    <div className="atten-wrap">
      <h1 className='atten-title'>Mark Attendance</h1>
      <TextField
          className='atten-field'
          label="Student ID"
          value={studentId}
          style={{ width: "355px" }}
        readOnly
        />
        <br />
        <br />
      <TextField
        className='atten-field'
        type="date"
        label="Date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
          InputLabelProps={{ shrink: true }}
          style={{ width: "355px" }}
      />
      <br />
      <br />
      <div>
            <label>Course:</label>
                    <select
                        value={course}
                        onChange={(e) => setCourse(e.target.value)}
            required
                    >
                        <option value="">Select Course</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Graphic Design">Graphic Design</option>
                        <option value="AI">ARtificial Intelligence</option>
                    </select>
        </div>
        <br />
      <Button 
        variant="contained" 
        color="primary" 
        onClick={MarkAttendance}
      >
      Attendance Mark
      </Button>
      </div>
      </div>
  );
}

export default CreateAtten;
