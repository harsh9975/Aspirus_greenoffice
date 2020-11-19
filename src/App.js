import React from 'react';
import './App.css';
import Signup from './components/Signup';
import { AuthProvider } from './contexts/AuthContext';
import { BrowseRouter as Router, Switch, Route} from 'react-router-dom';
import Dashboard from './components/Dashboard'
function App() {
  return (
    <Router>
    <AuthProvider>
    <Switch>
      <Route exact path="/" component={Dashboard}/>
      <Route path="/signup" component={Signup}/>
    </Switch>
    </AuthProvider>
    </Router>
    
  )
}

export default App;
