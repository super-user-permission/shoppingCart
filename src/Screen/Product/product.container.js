import { compose } from "redux";
import { connect } from "react-redux";
import { addCart } from "../../Redux/CartReducer/cart-action";
import setCategoryId from "../../Redux/CategoryReducer/cate-action";
import Product from "./product.screen";

const mapStateToProps = (state) => ({
  categoryId: state.cateId.categoryId,
});

const mapDispatchToProps = (dispatch) => ({
  setCategoryId: (id) => dispatch(setCategoryId(id)),
  addItemsToCart: (item) => dispatch(addCart(item)),
});

const ProductContainer = compose(connect(mapStateToProps, mapDispatchToProps))(
  Product
);

export default ProductContainer;
