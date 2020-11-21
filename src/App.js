import React from 'react';
import './App.css';
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import UserDashboard from './components/UserDashboard/UserDashboard'
import Login from './components/UserLogin/Login'
import Signup from './components/UserSignUp/Signup';
import Status from './components/Status'
import Navbar from './components/Navbar/Navbar'
import Adminlogin from './components/Adminlogin/Adminlogin'
import AdminDashboard from './components/AdminDashboard/AdminDasboard'
import NewApplicationlist from './components/NewApplicationlist'
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <>
    
    <Router>
    <Navbar/>
    <AuthProvider>
    <Switch>
    
      
      <PrivateRoute exact path="/" component={UserDashboard}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/adminlogin" component={Adminlogin}/>
      <Route path="/admindashboard" component={AdminDashboard}/>
      <Route path="/login" component={Login}/>
      <Route path="/status" component={Status}/>
      <Route path="/newapplication" component={NewApplicationlist}/>
    </Switch>
    </AuthProvider>
    </Router>
    </>
  )
}

export default App;
