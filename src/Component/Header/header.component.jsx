import React from "react";
import { Link } from "react-router-dom";
import cartImg from "../../static/images/cart.svg";
import "./header.styles.scss";

function Header() {
  return (
    <nav>
      <div className="navbar-container">
        <div className="logo-container">
          <img src={require("../../static/images/logo.png")} alt="Logo" />
        </div>
        <div className="nav-panel">
          <Link to="/">Home</Link>
          <Link to="/product">Product</Link>
        </div>
        <div className="cart-container">
          <div className="user-nav">
            <Link to="/login">Sign In</Link>
            <Link to="/register">Register</Link>
          </div>
          <div className="cart-nav">
            <div className="cart-icon">
              <img src={cartImg} alt="Cart Image" />
              <span> 0 items</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
