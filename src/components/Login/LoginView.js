import React from "react";
import '../../static/App.css'

const LoginView = ({onSubmit}) => {
  return (
  <div className="App-header">
      <h1>Login</h1>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginView;