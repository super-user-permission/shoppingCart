import setUser from "../../Redux/UserReducer/user-action";
import { compose } from "redux";
import { connect } from "react-redux";
import Login from "./login.screen";

const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(setUser(user)),
});

const LoginContainer = compose(connect(null, mapDispatchToProps))(Login);

export default LoginContainer;
