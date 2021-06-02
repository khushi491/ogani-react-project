import {
  ADD_TO_CART,
  FETCH_ALL_PRODUCTS,
  GET_BY_PRODUCT_CAT,
  SHOW_PROD,
  GET_BY_PRODUCT_COLOR,
} from "../actionLabel/actionLabel";

export const fetchallProduct = () => ({
  type: FETCH_ALL_PRODUCTS,
});

export const ShowProduct = (id) => ({
  type: SHOW_PROD,
  payload: id,
});
export const addtocart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});
export const getproductbycategory = (category) => ({
  type: GET_BY_PRODUCT_CAT,
  category: category,
});

export const getProductByColor = (color) => ({
  type: GET_BY_PRODUCT_COLOR,
  color: color,
});
