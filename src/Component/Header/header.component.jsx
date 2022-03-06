import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { showCart } from "../../Redux/CartReducer/cart-action";
import setUser from "../../Redux/UserReducer/user-action";
import "./header.styles.scss";

function Header(props) {
  const { isUserLoggedIn, setUserStatus, setCartStatus, cartItem } = props;
  // const [totalItems, setTotalItems] = useState(0);

  const userLogOut = (event) => {
    if (isUserLoggedIn) {
      event.preventDefault();
      setUserStatus(false);
    }
  };

  const showCartProducts = () => {
    setCartStatus();
  };

  let totalItems = cartItem.cart_items.reduce(
    (acc, items) => (acc = acc + items.quantity),
    0
  );

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
            <div className="cart-icon" onClick={showCartProducts}>
              <img
                className="cart-img"
                src={`${process.env.PUBLIC_URL}/static/images/cart.svg`}
                alt="Cart Image"
              />
              <span> {totalItems} items</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => ({
  isUserLoggedIn: state.user.isUserLoggedIn,
  cartItem: state.cart,
});

const mapDispatchToProps = (dispatch) => ({
  setUserStatus: (user) => dispatch(setUser(user)),
  setCartStatus: (status) => dispatch(showCart(status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
