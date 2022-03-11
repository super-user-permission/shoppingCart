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

  return (
    <div className="navbar-categories">
      {categories.map((cate) => (
        <>
          <div className="category-bar" onClick={() => category(cate.id)}>
            <a>{cate.name}</a>
          </div>
        </>
      ))}
      <select
        className="selector-categories"
        onChange={(event) => category(event.target.value)}
      >
        {categories.map((cate) => (
          <option value={cate.id}> {cate.name} </option>
        ))}
      </select>
    </div>
  );
}

export default NavigationBar;
