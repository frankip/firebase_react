import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home'
import SignUp from './components/Signup/SignUpView'
import Login from './components/Login/LoginView'


const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
      </div>
    </Router>
    
  );
}

export default App;
