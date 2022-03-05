import { combineReducers } from "redux";
import setCartStatus from "./CartReducer/cart-reducer";
import setCategoryId from "./CategoryReducer/cate-reducer";
import setUserReducer from "./UserReducer/user-reducer";

const rootReducer = combineReducers({
  user: setUserReducer,
  cateId: setCategoryId,
  cart: setCartStatus,
});

export default rootReducer;
