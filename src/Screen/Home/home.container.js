import setCategoryId from "../../Redux/CategoryReducer/cate-action";
import { compose } from "redux";
import { connect } from "react-redux";
import Home from "./home.screen";

const mapStateToProps = (state) => ({
  categoryId: state.cateId,
});

const mapDispatchToProps = (dispatch) => ({
  setCategoryId: (id) => dispatch(setCategoryId(id)),
});

const HomeContainer = compose(connect(mapStateToProps, mapDispatchToProps))(
  Home
);

export default HomeContainer;
