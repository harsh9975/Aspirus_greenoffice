import React from 'react';
import './App.css';
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import UserDashboard from './components/UserDashboard'
import Login from './components/Login'
import Signup from './components/Signup';
import Status from './components/Status'
import NewApplicationlist from './components/NewApplicationlist'
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <Router>
    <AuthProvider>
    <Switch>
      <PrivateRoute exact path="/" component={UserDashboard}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/login" component={Login}/>
      <Route path="/status" component={Status}/>
      <Route path="/newapplication" component={NewApplicationlist}/>
    </Switch>
    </AuthProvider>
    </Router>
    
  )
}

export default App;
