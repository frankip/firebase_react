import React from "react";
import '../../static/App.css'

const LoginView = ({onSubmit}) => {
  return (
    <div className="container">

    <form id="signup" onSubmit={onSubmit}>

        <div className="header">
        
            <h3>LogiN </h3>
            
            <p>Fill In your details</p>
            
        </div>
        
        <div className="sep"></div>

        <div className="inputs">
        
            <input  name="email" type="email" placeholder="e-mail" autoFocus />
        
            <input name="password" type="password" placeholder="Password" />
            <div className="social">
              <button className="tw btn">Twitter</button>
              <button className="fb btn">Facebook</button>
              <button className="google fb btn">Google+</button>
            </div>
            
            <div className="checkboxy">
                <input name="cecky" id="checky" value="1" type="checkbox" /><label className="terms">I accept the terms of use</label>
            </div>
            <button id="submit" type="submit">Login</button>
        
        </div>

    </form>

</div>
);
};


export default LoginView;