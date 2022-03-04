import UserActionTypes from "./user-actiontypes";

const setUser = (value) => ({
  type: UserActionTypes.SET_USER,
  payload: value,
});

export default setUser;
