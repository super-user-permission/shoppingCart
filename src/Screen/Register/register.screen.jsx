import React from "react";
import Button from "../../Component/Button/button.component";
import Input from "../../Component/Input/input.component";
import "./register.styles.scss";

function Register() {
  return (
    <div className="register-container">
      <div className="register-text">
        <div>
          <h1>Sign Up</h1>
          <span>Get access to your Orders, Wishlists and Recommendations</span>
        </div>
      </div>
      <div className="registerBox-input">
        <Input
          id="firstname"
          type="text"
          placeholder="First Name"
          text="First Name"
        />
        <Input
          id="lastname"
          type="text"
          placeholder="Last Name"
          text="Last Name"
        />
        <Input id="email" type="email" placeholder="Email" text="Email" />
        <Input
          id="password"
          type="password"
          placeholder="Password"
          text="Password"
        />
        <Input
          id="confirmpassword"
          type="password"
          placeholder="Confirm Password"
          text="Confirm Password"
        />
        <Button text="Sign Up" />
      </div>
    </div>
  );
}

export default Register;
