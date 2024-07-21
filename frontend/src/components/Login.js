import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setname] = useState('');
    const Singup = () => {
      console.log( email, password,name);
      };