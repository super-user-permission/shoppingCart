import React, { useEffect, useState } from "react";
import "./navigation.styles.scss";
import Categories from "../../server/categories/index.get.json";

function NavigationBar({ category }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    Categories.sort((a, b) => a.order - b.order);
    let orderCate = Categories.filter((val) => val.order > 0);
    setCategories(orderCate);
  }, []);

  console.log(categories);

  return (
    <div className="navbar-categories">
      {categories.map((cate) => (
        <div className="category-bar">
          <a onClick={() => category(cate.id)}>{cate.name}</a>
        </div>
      ))}
    </div>
  );
}

export default NavigationBar;
