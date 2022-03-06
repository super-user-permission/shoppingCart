import React from "react";
import { connect } from "react-redux";
import {
  addCart,
  removeCart,
  showCart,
} from "../../Redux/CartReducer/cart-action";
import "./cart.styles.scss";
import Button from "../../Component/Button/button.component";

function Cart(props) {
  const closeCart = () => {
    props.setCartStatus();
  };

  const addItems = (item) => {
    props.addItemsToCart(item);
  };

  const reduceItems = (item) => {
    props.reduceItemsToCart(item);
  };

  console.log(props.cartStatus.cart_items.length);
  let total = 0;
  props.cartStatus.cart_items.length &&
    props.cartStatus.cart_items.map((item) => {
      total = total + item.quantity * item.price;
    });

  console.log(total);

  return (
    props.cartStatus.show_cart && (
      <div className="productCart-container">
        <header className="header-container">
          <h2>My cart {`(${props.cartStatus.cart_items.length} items)`}</h2>
          <div className="close-btn" onClick={() => closeCart()}>
            &#10005;
          </div>
        </header>
        {props.cartStatus.cart_items.length > 0 ? (
          props.cartStatus.cart_items.map((product) => (
            <div className="product-tile">
              <img
                className="item-img"
                src={`${process.env.PUBLIC_URL}${product.imageURL}`}
              />
              <div>
                <h3>{product.name}</h3>
                <div className="item-container">
                  <div className="itemQuantity-container">
                    <div
                      className="addItem-icon"
                      onClick={() => reduceItems(product)}
                    >
                      &#10134;
                    </div>
                    <div>{product.quantity}</div>
                    <div
                      className="addItem-icon"
                      onClick={() => addItems(product)}
                    >
                      &#10133;
                    </div>
                  </div>
                  <div className="itemPrice-container">
                    <div>&#10005;</div>
                    <div> {product.price} </div>
                  </div>
                  <div className="price-container">
                    <div> {product.price * product.quantity} </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="cartEmpty-container">
            <div className="cartText">
              <h2>No Items in your cart</h2>
              <p>Your favourite items are just a click away</p>
            </div>
          </div>
        )}

        {props.cartStatus.cart_items.length > 0 ? (
          <div className="footer-img">
            <img
              src={`${process.env.PUBLIC_URL}/static/images/lowest-price.png`}
            />
            <span>You won't find it cheaper anywhere</span>
          </div>
        ) : null}

        <div className="totalAmount">
          <div>
            <div>Promo code can be applied on payment page</div>
            <div className="button-checkout">
              <div>Proceed to Checkout</div>
              <div>Rs. {total} &nbsp; &nbsp; &#10095;</div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

const mapStateToProps = (state) => ({
  cartStatus: state.cart,
});

const mapDispatchToProps = (dispatch) => ({
  setCartStatus: (val) => dispatch(showCart(val)),
  addItemsToCart: (items) => dispatch(addCart(items)),
  reduceItemsToCart: (items) => dispatch(removeCart(items)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
