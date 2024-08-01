import axios from 'axios';
import React, { useState ,useEffect} from 'react';
import { jwtDecode } from 'jwt-decode';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import './AllAtten.css';
const AllAtten  = () =>  {
  const [attendanceRecords, setAttendanceRecords] = useState([]);
  const [message, setMessage] = useState('');
  useEffect(() => {
    const token = localStorage.getItem('token');
    if(!token){
      const decodedToken = jwtDecode(token);
     const studentId = (decodedToken.id)
     fetchAttendance(studentId);
    }else{
  setMessage("please login view all attendence")
    }

  },[])

  const fetchAttendance = async (studentId) => {
    try{
      const response = await axios.get(`http://localhost:1000/at/attendance/${studentId}`,{
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }

      })
      setAttendanceRecords(response.data.attendanceRecords);
    }catch(e){
      console.error(e.response.data); 
      setMessage("error view all attendence ")
    }
  }
  return (
    <div>
        <Container>
        <h1>Attendance Records</h1>
        {message && <p>{message}</p>}
      <Typography variant="h4" gutterBottom> 30 Day Attendance Show</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>course</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {attendanceRecords.map(record => (
                        <tr key={record._id}>
                            <td>{new Date(record.date).toLocaleDateString()}</td>
                            <td>{record.course}</td>
                        </tr>
                    ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
      
    </div>
  );
}

export default AllAtten;
