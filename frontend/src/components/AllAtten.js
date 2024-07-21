import React, { useState, useEffect } from 'react';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import './AllAtten.css';
const AllAtten  = () =>  {
    const [attendance, setAttendance] = useState([]);
    useEffect(() => {
        setAttendance([
          { date: '2023-07-01', status: 'Present' },
          { date: '2023-07-02', status: 'Absent' },
          { date: '2023-07-01', status: 'Present' },
          { date: '2023-07-02', status: 'Absent' },
        ]);
      }, []);
  return (
    <div>
        <Container>
      <Typography variant="h4" gutterBottom> 30 Day Attendance Show</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {attendance.map((item, index) => (
              <TableRow key={index}>
                <TableCell >{item.date}</TableCell>
                <TableCell className={item.status === 'Absent' ? 'absent' : ''}>
                  {item.status}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
      
    </div>
  );
}

export default AllAtten;
