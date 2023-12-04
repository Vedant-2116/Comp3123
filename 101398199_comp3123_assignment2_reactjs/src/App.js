import './App.css';
import React from 'react';
import Login from './Login';
import Signup from './Signup';
import EmployeeList from './EmployeeList';
import AddEmployee from './AddEmployee';
import ViewEmployee from './ViewEmployee';
import UpdateEmployee from './UpdateEmployee';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/employees" component={EmployeeList} />
        <Route path="/add" component={AddEmployee} />
        <Route path="/employees/:id" component={ViewEmployee} />
        <Route path="/employees/:id/update" component={UpdateEmployee} />
      </Switch>
    </Router>
  );
}

export default App;
