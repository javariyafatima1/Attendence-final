
import React, { useState } from 'react';
import { TextField, Button, Container, Typography, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
const CreateAtten = () => {
  const [studentId, setStudentId] = useState('');
  const [date, setDate] = useState('');
  const [classname, setclassname] = useState('');
  const [teacher, setteacher] = useState('');
  const [status, setStatus] = useState('Present');
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>Mark Attendance</Typography>
      <TextField
        fullWidth
        margin="normal"
        label="Student ID"
        value={studentId}
        onChange={(e) => setStudentId(e.target.value)}
      />
      <TextField
        fullWidth
        margin="normal"
        type="date"
        label="Date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        InputLabelProps={{ shrink: true }}
      />
       <TextField
        fullWidth
        margin="normal"
        label="Class name"
        value={classname}
        onChange={(e) => setclassname (e.target.value)}
      />
        <TextField
        fullWidth
        margin="normal"
        label="Teacher Name"
        value={teacher}
        onChange={(e) => setteacher (e.target.value)}
      />
      <FormControl fullWidth margin="normal">
        
        <Select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <MenuItem value="Present">Present</MenuItem>
          <MenuItem value="Absent">Absent</MenuItem>
        </Select>
      </FormControl>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={MarkAttendance}
      >
      Attendance Mark
      </Button>
    </Container>
  );
}

export default CreateAtten;
