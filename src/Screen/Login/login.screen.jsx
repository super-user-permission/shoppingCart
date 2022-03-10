import React from "react";
import Button from "../../Component/Button/button.component";
import Input from "../../Component/Input/input.component";
import "./login.styles.scss";

function Login(props) {
  const { checkUser, history } = props;

  const UserloggedIn = (e) => {
    e.preventDefault();
    checkUser(true);
    history.push("/");
  };

  return (
    <div className="login-container">
      <div className="login-text">
        <div>
          <h1>Login</h1>
          <span>Get access to your Orders, Wishlists and Recommendations</span>
        </div>
      </div>
      <div className="input-box">
        <form onSubmit={(e) => UserloggedIn(e)}>
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
            minlength={6}
          />
          <Button text="Login" type="submit" />
        </form>
      </div>
    </div>
  );
}

export default Login;
