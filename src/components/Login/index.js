import React, { Component } from 'react'
import { withRouter } from "react-router";

import FirebaseApp from '../../firebaseConfig'


import LoginView from './LoginView';


class LoginContainer extends Component {

    handleLogin = async e => {
        e.preventDefault();
        const {email, password} = e.target.elements;
        
        try { 
            const user = await FirebaseApp
            .auth()
            .signInWithEmailAndPassword(email.value, password.value);
            this.props.history.push("/")
            
        } catch (error) {
            console.log(alert);
        }
    }

    render() {
        return (
            <LoginView onSubmit={this.handleLogin} />
        );
    }
}

export default withRouter(LoginContainer)
