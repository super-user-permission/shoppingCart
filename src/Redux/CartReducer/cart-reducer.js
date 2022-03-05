import cartActionTypes from "./cart-actiontypes";

const INITIAL_STATE = {
  show_cart: false,
  cart_items: [],
};

const setCartStatus = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.SHOW_CART:
      return { ...state, show_cart: !state.show_cart };

    case cartActionTypes.ADD_CART:
      let idExists = state.cart_items.find((p) => p.id == action.payload.id);
      console.log(!!idExists);
      if (!!idExists) {
        return state;
      } else {
        return {
          ...state,
          cart_items: [...state.cart_items, action.payload],
        };
      }

    default:
      return state;
  }
};

export default setCartStatus;
