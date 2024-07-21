import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   
    const Login = () => {
      console.log( email, password);
      };

    return (
        <div>
           <Container maxWidth="sm">
          <Typography variant="h4" gutterBottom>Login</Typography>
          
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
        onClick={ Login}
      >
     Login
      </Button>
          </Container>
          </div>
    );
  }
  export default Login;
