import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import FirebaseApp from './firebaseConfig'

import Home from './components/Home'
import SignUp from './components/Signup/index'
import Login from './components/Login/index'
import PrivateRoute from './PrivateRoute';


class App extends Component {
  state = { 
    loading: true, 
    authenticated: false, 
    user: null 
  };

  componentWillMount() {
    FirebaseApp.auth().onAuthStateChanged(user => {
        if (user) {
          this.setState({
            authenticated: true,
            currentUser : user,
            loading : false
          });
        } else {
          this.setState({
            authenticated: false,
            currentUser : null,
            loading : false
          });
        }
      });
  }
  render(){
    const { authenticated, loading} = this.state;

    if (loading) {
      return <div className="App-header">loading.....</div>
    }

    return (
      <Router>
        <div>
          <PrivateRoute 
            exact path="/" 
            component={Home} 
            authenticated={authenticated} 
          />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </div>
      </Router>
      
    );
  }
}

export default App;
