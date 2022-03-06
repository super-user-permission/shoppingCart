import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import CategoryBar from "../../Component/CategoryBar/categorybar-component";
import Carousal from "../../Component/OfferCarousal/offercarousal.component";
import setCategoryId from "../../Redux/CategoryReducer/cate-action";
import Offers from "../../server/banners/index.get.json";
import Categories from "../../server/categories/index.get.json";
import "./home.styles.scss";

function Home(props) {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    setData(Offers);
    Categories.sort((a, b) => a.order - b.order);
    let orderCate = Categories.filter((val) => val.order > 0);
    setCategory(orderCate);
  }, []);

  const onClickCategory = (e) => {
    props.setCategoryId(e);
    props.history.push("/product");
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

const mapStateToProps = (state) => ({
  categoryId: state.cateId,
});

const mapDispatchToProps = (dispatch) => ({
  setCategoryId: (id) => dispatch(setCategoryId(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
