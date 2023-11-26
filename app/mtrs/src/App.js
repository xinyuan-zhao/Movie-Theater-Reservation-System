import React, { useState } from 'react';
import UserLogin from './UserLogin';
import UserSignUp from './UserSignUp';
import AdminLogin from './AdminLogin';

const App = () => {
  const [active, setActive] = useState('userLogin');

  return (
    <div>
      <header>
        <button onClick={() => setActive('userLogin')}>User Login</button>
        <button onClick={() => setActive('userSignUp')}>User Sign Up</button>
        <button onClick={() => setActive('adminLogin')}>Admin Login</button>
      </header>
      
      {active === 'userLogin' && <UserLogin />}
      {active === 'userSignUp' && <UserSignUp />}
      {active === 'adminLogin' && <AdminLogin />}
    </div>
  );
};

export default App;
