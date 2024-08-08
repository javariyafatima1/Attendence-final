import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UsersByCategory = ({ category }) => {
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
    <div>
      {error && <p>Error: {error}</p>}
      <ul>
        {users.map(user => (
          <li key={user._id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UsersByCategory;