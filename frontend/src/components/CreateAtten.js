
import React, { useState } from 'react';
import { TextField, Button, Container, Typography, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
const CreateAtten = () => {
  const [studentId, setStudentId] = useState('');
  const [date, setDate] = useState('');
  const [classname, setclassname] = useState('');
  const [teacher, setteacher] = useState('');
  const [status, setStatus] = useState('Present');
  return (
    <div>
      create
    </div>
  );
}

export default CreateAtten;
