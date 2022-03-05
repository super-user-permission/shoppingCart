import categoryTypes from "./cate-actiontypes";

const INITIAL_STATE = {
  categoryId: null,
};

const setCategoryId = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case categoryTypes.CATEGORY_ID:
      return { ...state, categoryId: action.payload };

    default:
      return { ...state };
  }
};

export default setCategoryId;
