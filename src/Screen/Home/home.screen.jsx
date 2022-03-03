import React, { useEffect, useState } from "react";
import CategoryBar from "../../Component/CategoryBar/categorybar-component";
import Carousal from "../../Component/OfferCarousal/offercarousal.component";
import Offers from "../../server/banners/index.get.json";
import Categories from "../../server/categories/index.get.json";
import "./home.styles.scss";

function Home() {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    setData(Offers);
    Categories.sort((a, b) => a.order > b.order);
    let orderCate = Categories.filter((val) => val.order > 0);
    setCategory(orderCate);
  }, []);

  return (
    <div className="home-container">
      <Carousal offers={data} />
      {category.map((cate) => (
        <CategoryBar
          className="category-container"
          imageURL={cate.imageUrl}
          name={cate.name}
          id={cate.id}
          desc={cate.description}
        />
      ))}
    </div>
  );
}

export default Home;
