import React, { useState } from 'react';
import axios from 'axios';

const UserSignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/signup', { email, password });
      console.log(response.data);
      alert('Sign up successful!');
    } catch (error) {
      console.error('Sign up error:', error);
      alert('Sign up failed!');
    }
  };

  return (
    <form onSubmit={handleSignUp}>
      <h2>User Sign Up</h2>
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
        placeholder="Create a password"
        required
      />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default UserSignUp;
