import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import setUser from "../../Redux/UserReducer/user-action";
// import cartImg from "../../static/images/cart.svg";
import "./header.styles.scss";

function Header(props) {
  const { isUserLoggedIn, setUserStatus } = props;

  const userLogOut = (event) => {
    console.log(event);
    if (isUserLoggedIn) {
      event.preventDefault();
      setUserStatus(false);
    }
  };

  return (
    <nav>
      <div className="navbar-container">
        <div className="logo-container">
          <img
            src={`${process.env.PUBLIC_URL}/static/images/logo.png`}
            alt="Logo"
          />
        </div>
        <div className="nav-panel">
          <Link to="/">Home</Link>
          <Link to="/product">Product</Link>
        </div>
        <div className="cart-container">
          <div className="user-nav">
            <Link to="/login" onClick={(e) => userLogOut(e)}>
              {isUserLoggedIn ? "Sign Out" : "Sign In"}
            </Link>
            <Link to="/register">Register</Link>
          </div>
          <div className="cart-nav">
            <div className="cart-icon">
              <img
                className="cart-img"
                src={`${process.env.PUBLIC_URL}/static/images/cart.svg`}
                alt="Cart Image"
              />
              <span> 0 items</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => ({
  isUserLoggedIn: state.user.isUserLoggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  setUserStatus: (user) => dispatch(setUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
