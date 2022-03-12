import React, { useEffect, useState } from "react";
import "./navigation.styles.scss";
import { compose } from "redux";
import { connect } from "react-redux";
import { getCategories } from "../../Redux/CategoryReducer/cate-action";

function NavigationBar(props) {
  const { getCategory, categoryList, category } = props;
  const { categories } = categoryList;

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <div className="navbar-categories">
      {categories &&
        categories.map((cate) => (
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
        {categories &&
          categories.map((cate) => (
            <option value={cate.id}> {cate.name} </option>
          ))}
      </select>
    </div>
  );
}

const mapStateToProps = (state) => ({
  categoryList: state.cateId,
});

const mapDispatchToProps = (dispatch) => ({
  getCategory: () => dispatch(getCategories()),
});

export default compose(connect(mapStateToProps, mapDispatchToProps))(
  NavigationBar
);
