import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import MovieDashboard from './pages/MovieDashboard';
import OrderDashboard from './pages/OrderDashboard';
import CustomerDashboard from './pages/CustomerDashboard';
import ReportDashboard from './pages/ReportDashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard/movie" element={<MovieDashboard />} />
        <Route path="/dashboard/order" element={<OrderDashboard />} />
        <Route path="/dashboard/customer" element={<CustomerDashboard />} />
        <Route path="/dashboard/report" element={<ReportDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
