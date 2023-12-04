import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Login from './Login';
import Dashboard from './Dashboard';

// PrivateRoute component to handle protected routes
const PrivateRoute = ({ element: Element, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    element={isAuthenticated ? <Element /> : <Navigate to="/login" />}
  />
);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <PrivateRoute path="/dashboard" element={<Dashboard />} />
            {/* Add other routes as needed */}
            <Route path="/*" element={<Navigate to="/login" />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
