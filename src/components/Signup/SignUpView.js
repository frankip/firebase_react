import React from "react";
import '../../static/App.css'

const SignUpView = ({ onSubmit }) => {
  return (
    <div className="App-header">
      <h1>Sign up</h1>
      <form className="form" onSubmit={onSubmit}>
        <label>
          Email
          <input
            name="email"
            type="email"
            placeholder="Email"
          />
        </label>
        <label>
          Password
          <input
            name="password"
            type="password"
            placeholder="Password"
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpView;