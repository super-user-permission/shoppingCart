import React from "react";
import { connect } from "react-redux";
import Button from "../../Component/Button/button.component";
import Input from "../../Component/Input/input.component";
import setUser from "../../Redux/UserReducer/user-action";
import "./login.styles.scss";

function Login(props) {
  const { setUser } = props;

  const UserloggedIn = (e) => {
    e.preventDefault();
    console.log("Called", e);
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

// const mapStateToProps = (state) => ({
//   isUserLoggedIn: state.user.isUserLoggedIn,
// });

const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(setUser(user)),
});

export default connect(null, mapDispatchToProps)(Login);