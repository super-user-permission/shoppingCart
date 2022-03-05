import categoryTypes from "./cate-actiontypes";

const setCategoryId = (id) => ({
  type: categoryTypes.CATEGORY_ID,
  payload: id,
});

export default setCategoryId;
