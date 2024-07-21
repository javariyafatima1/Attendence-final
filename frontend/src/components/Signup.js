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
      <TextField
        fullWidth
        margin="normal"
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        fullWidth
        margin="normal"
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
       <Button 
        variant="contained" 
        color="primary" 
        onClick={ Singup}
      >
     Singup
      </Button>
     </Container>
    </div>
  );
}

export default Signup;
