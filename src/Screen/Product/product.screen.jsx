import React, { useEffect, useState } from "react";
import NavigationBar from "../../Component/Navigation/navigation.component";
import ProductCard from "../../Component/ProductCard/productcard.component";
import listProduct from "../../server/products/index.get.json";
import "./product.styles.scss";

function Product(props) {
  const [product, setProduct] = useState([]);
  const [filterProduct, setFilteredProduct] = useState([]);

  const { setCategoryId, addItemsToCart, categoryId, match } = props;

  const setCategory = (id) => {
    setCategoryId(id);
    let filteredList = product.filter((ele) => ele.category === id);
    setFilteredProduct(filteredList);
  };

  const addItemToCart = (product) => {
    product.quantity = 1;
    addItemsToCart(product);
  };

  useEffect(() => {
    if (categoryId == null) {
      setProduct(listProduct);
      setFilteredProduct(listProduct);
    } else {
      let filteredList = listProduct.filter(
        (ele) => ele.category === categoryId
      );
      setProduct(listProduct);
      setFilteredProduct(filteredList);
    }
  }, []);

  return (
    <div className="product-container">
      <NavigationBar category={setCategory} match={match} />
      <div className="product-card">
        {filterProduct.map((pro) => (
          <ProductCard
            name={pro.name}
            imgURL={pro.imageURL}
            price={pro.price}
            desc={pro.description}
            additem={() => addItemToCart(pro)}
          />
        ))}
      </div>
    </div>
  );
}

export default Product;
