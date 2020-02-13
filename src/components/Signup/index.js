import React, { Component } from "react";
import { withRouter } from "react-router";

import FirebaseApp from '../../firebaseConfig'

import SignUpView from './SignUpView'

class SignUpContainer extends Component {
    handleSignup = async e => {
        e.preventDefault();
        const { email, password } = e.target.elements;
        try {
            const user = await FirebaseApp
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);
            this.props.history.push("/");
        } catch (error) {
            console.log(error);
        }
    }
    render() {
        return (
            <SignUpView onSubmit={this.handleSignup} />
        );
    }
}

export default withRouter(SignUpContainer);
