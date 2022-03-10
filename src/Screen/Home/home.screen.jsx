import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import CategoryBar from "../../Component/CategoryBar/categorybar-component";
import Carousal from "../../Component/OfferCarousal/offercarousal.component";
import Offers from "../../server/banners/index.get.json";
import Categories from "../../server/categories/index.get.json";
import "./home.styles.scss";
import axios from "axios";

function Home(props) {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);

  const { setCategoryId, history } = props;

  useEffect(() => {
    // axios({
    //   method: "post",
    //   url: "/login",
    //   data: {
    //     user: "Finn",
    //     password: "Williams",
    //   },
    // })
    //   .then((res) => console.log(res))
      // .catch((err) => console.log(err));
    setData(Offers);
    Categories.sort((a, b) => a.order - b.order);
    let orderCate = Categories.filter((val) => val.order > 0);
    setCategory(orderCate);
  }, []);

  const onClickCategory = (e) => {
    setCategoryId(e);
    history.push("/product");
  };

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
          onClick={() => onClickCategory(cate.id)}
        />
      ))}
    </div>
  );
}

export default Home;
