import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setname] = useState('');
    const Singup = () => {
      console.log( email, password,name);
      };

    return (
        <div>
           <Container maxWidth="sm">
          <Typography variant="h4" gutterBottom>Singup</Typography>
          <TextField
            fullWidth
            margin="normal"
            label="Name"
            type="text"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />