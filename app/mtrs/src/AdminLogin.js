import React, { useState } from 'react';
import axios from 'axios';

const AdminLogin = () => {
  const [adminName, setAdminName] = useState('');
  const [password, setPassword] = useState('');

  const handleAdminLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/admin/login', { adminName, password });
      console.log(response.data);
      alert('Admin login successful!');
    } catch (error) {
      console.error('Admin login error:', error);
      alert('Admin login failed!');
    }
  };

  return (
    <form onSubmit={handleAdminLogin}>
      <h2>Admin Login</h2>
      <input
        type="text"
        value={adminName}
        onChange={(e) => setAdminName(e.target.value)}
        placeholder="Admin name"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default AdminLogin;
