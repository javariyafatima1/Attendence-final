import React, { useState, useEffect } from 'react';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import './UserCategory.css';
import axios from 'axios';

const UsersByCategory = ({ category,onUserClick }) => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  

useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`http://localhost:1000/api/users/${category}`);
        setUsers(response.data);
      } catch (err) {
        setError(err.response ? err.response.data.message : 'Server error');
      }
    };

    fetchUsers();
  }, [category]);

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
      {users.map(user => (
        <li key={user._id} onClick={() => onUserClick(user._id)} className="clickable">
          {user.name}
        </li>
      ))}
      </TableBody>
    </Table>
  </TableContainer>
  );
};

export default UsersByCategory;