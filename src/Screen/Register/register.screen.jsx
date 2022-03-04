import React from "react";
import Button from "../../Component/Button/button.component";
import Input from "../../Component/Input/input.component";
import "./register.styles.scss";

function Register(props) {
  const onUserCreate = (e) => {
    e.preventDefault();
    console.log(e.target[3].value, e.target[4].value);
    if (e.target[3].value !== e.target[4].value) {
      console.log("Called");
      return;
    } else {
      console.log(props);
      props.history.push("/login");
    }
  };
  return (
    <div className="register-container">
      <div className="register-text">
        <div>
          <h1>Sign Up</h1>
          <span>Get access to your Orders, Wishlists and Recommendations</span>
        </div>
      </div>
      <div className="registerBox-input">
        <form onSubmit={(e) => onUserCreate(e)}>
          <Input
            id="firstname"
            type="text"
            placeholder="First Name"
            text="First Name"
            required={true}
          />
          <Input
            id="lastname"
            type="text"
            placeholder="Last Name"
            text="Last Name"
            required={true}
          />
          <Input
            id="email"
            type="email"
            placeholder="Email"
            text="Email"
            required={true}
          />
          <Input
            id="password"
            type="password"
            placeholder="Password"
            text="Password"
            required={true}
          />
          <Input
            id="confirmpassword"
            type="password"
            placeholder="Confirm Password"
            text="Confirm Password"
            required={true}
          />
          <Button text="Sign Up" type="submit" />
        </form>
      </div>
    </div>
  );
}

export default Register;
