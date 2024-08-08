import React, { useState, useEffect } from 'react';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import axios from 'axios';

const UserAttendance = ({userId}) => {
  const [attendance, setAttendance] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const response = await axios.get(`http://localhost:1000/at/attendance/${userId}`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}` 
          }
        });
        setAttendance(response.data.attendanceRecords);
       
      } catch (err) {
        setError(err.response ? err.response.data.message : 'Server error');
      }
    };

    fetchAttendance();
  }, [userId]);

  return (
    <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Date</TableCell>
          <TableCell>course</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
      {attendance.map(record => (
            <TableRow key={record._id}>
              <TableCell>{new Date(record.date).toLocaleDateString()}</TableCell>
              <TableCell>{record.course}</TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  </TableContainer>
  );
};

export default UserAttendance;