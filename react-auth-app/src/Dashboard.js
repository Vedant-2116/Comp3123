import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from './authSlice';

const Dashboard = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleLogout = () => {
    // Simulate a logout action
    dispatch(logout());
  };

  return (
    <div>
      <h1>Dashboard</h1>
      {isAuthenticated && <p>Welcome to the Dashboard!</p>}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
