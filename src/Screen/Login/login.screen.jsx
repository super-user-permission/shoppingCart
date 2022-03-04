import React from "react";
import { connect } from "react-redux";
import Button from "../../Component/Button/button.component";
import Input from "../../Component/Input/input.component";
import setUser from "../../Redux/UserReducer/user-action";
import "./login.styles.scss";

function Login(props) {
  const { setUser } = props;

  const UserloggedIn = () => {
    setUser(true);
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
        <Input id="email" type="email" placeholder="Email" text="Email" />
        <Input
          id="password"
          type="password"
          placeholder="Password"
          text="Password"
        />
        <Button text="Login" onClick={UserloggedIn} />
      </div>
    </div>
  );
}

// const mapStateToProps = (state) => ({
//   isUserLoggedIn: state.user.isUserLoggedIn,
// });

const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(setUser(user)),
});

export default connect(null, mapDispatchToProps)(Login);
