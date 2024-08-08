import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserAttendance = ({  studentId }) => {
  const [attendance, setAttendance] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const response = await axios.get(`http://localhost:1000/at/attendance/${ studentId}`);
        setAttendance(response.data);
      } catch (err) {
        setError(err.response ? err.response.data.message : 'Server error');
      }
    };

    fetchAttendance();
  }, [userId]);

  return (
    <div>
      {error && <p>Error: {error}</p>}
      <h2>Attendance Records</h2>
      <ul>
        {attendance.map(record => (
          <li key={record._id}>{record.date}: {record.status}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserAttendance;