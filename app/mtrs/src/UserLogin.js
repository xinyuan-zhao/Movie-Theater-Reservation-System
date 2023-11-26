import React, { useState } from 'react';
import axios from 'axios';

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', { email, password });
      console.log(response.data);
      alert('Login successful!');
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed!');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>User Login</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
        required
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default UserLogin;
