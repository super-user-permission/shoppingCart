import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import NavigationBar from "../../Component/Navigation/navigation.component";
import ProductCard from "../../Component/ProductCard/productcard.component";
import { addCart } from "../../Redux/CartReducer/cart-action";
import setCategoryId from "../../Redux/CategoryReducer/cate-action";
import listProduct from "../../server/products/index.get.json";
import "./product.styles.scss";

function Product(props) {
  const [product, setProduct] = useState([]);
  const [filterProduct, setFilteredProduct] = useState([]);

  const setCategory = (id) => {
    props.setCategoryId(id);
    let filteredList = product.filter((ele) => ele.category == id);
    setFilteredProduct(filteredList);
  };

  const addItemsToCart = (product) => {
    product.quantity = 1;
    props.addItemsToCart(product);
  };

  useEffect(() => {
    if (props.categoryId == null) {
      setProduct(listProduct);
      setFilteredProduct(listProduct);
    } else {
      let filteredList = listProduct.filter(
        (ele) => ele.category == props.categoryId
      );
      setProduct(listProduct);
      setFilteredProduct(filteredList);
    }
  }, []);

  return (
    <div className="product-container">
      <NavigationBar category={setCategory} />
      <div className="product-card">
        {filterProduct.map((pro) => (
          <ProductCard
            name={pro.name}
            imgURL={pro.imageURL}
            price={pro.price}
            desc={pro.description}
            additem={() => addItemsToCart(pro)}
          />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  categoryId: state.cateId.categoryId,
});

const mapDispatchToProps = (dispatch) => ({
  setCategoryId: (id) => dispatch(setCategoryId(id)),
  addItemsToCart: (item) => dispatch(addCart(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
