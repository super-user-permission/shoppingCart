import React from "react";
import { connect } from "react-redux";
import { showCart } from "../../Redux/CartReducer/cart-action";
import "./cart.styles.scss";

function Cart(props) {
  console.log(props.cartStatus.cart_items);
  const closeCart = () => {
    props.setCartStatus();
  };

  return (
    props.cartStatus.show_cart && (
      <div className="productCart-container">
        <header className="header-container">
          <h2>My cart {`(${props.cartStatus.cart_items.length} items)`}</h2>
          <div className="close-btn" onClick={() => closeCart()} > X </div>
        </header>
        {props.cartStatus.cart_items.map((product) => (
          <div className="product-tile">
            <img
              className="item-img"
              src={`${process.env.PUBLIC_URL}${product.imageURL}`}
            />
            <div>
              <h3>{product.name}</h3>
              <div>{product.quantity}</div>
            </div>
          </div>
        ))}
      </div>
    )
  );
}

const mapStateToProps = (state) => ({
  cartStatus: state.cart,
});

const mapDispatchToProps = (dispatch) => ({
  setCartStatus: (val) => dispatch(showCart(val)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
