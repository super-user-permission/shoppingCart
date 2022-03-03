import React from "react";
import Button from "../../Component/Button/button.component";
import Input from "../../Component/Input/input.component";
import "./login.styles.scss";

function Login() {
  return (
    <div className="login-container">
      <div className="login-text">
        <div>
          <h1>Login</h1>
          <span>Get access to your Orders, Wishlists and Recommendations</span>
        </div>
      </div>
      <div className="input-box">
        <Input id="email" type="email" placeholder="Email" text="Email" />
        <Input
          id="password"
          type="password"
          placeholder="Password"
          text="Password"
        />
        <Button text="Login" />
      </div>
    </div>
  );
}

export default Login;
