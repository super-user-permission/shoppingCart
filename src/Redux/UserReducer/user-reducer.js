import UserActionTypes from "./user-actiontypes";

const INITIAL_STATE = {
  isUserLoggedIn: false,
};

const setUserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_USER:
      return { ...state, isUserLoggedIn: action.payload };

    default:
      return { ...state };
  }
};

export default setUserReducer;
