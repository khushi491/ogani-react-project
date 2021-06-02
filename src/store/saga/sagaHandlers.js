import { fetchProduct } from "../../http/axios/axios";
import { takeLatest, call, put } from "redux-saga/effects";
import {
  ADD_TO_CART,
  CHANGE_CART,
  FETCH_CART,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_SUCCESS,
  GET_BY_PRODUCT_CAT,
  GET_BY_PRODUCT_COLOR,
  REMOVE_ITEM,
  SET_PRICE,
  SHOW_PROD,
} from "../actionLabel/actionLabel";
import {
  addtocart,
  getproductbycategory,
  getProductByColor,
  getProductByTag,
  ShowProduct,
} from "../action/actions";

// worker saga: makes the api call when watcher saga sees the action
export function* fetchProdSaga() {
  try {
    const response = yield call(fetchProduct);
    const product = response.data;

    // dispatch a success action to the store with the new dog
    yield put({ type: FETCH_PRODUCTS_SUCCESS, product });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: FETCH_PRODUCTS_FAILURE, error });
  }
}
export function* showProdSaga(action) {
  try {
    yield put(ShowProduct(action.payload));
  } catch (error) {
    console.log(error);
  }
}
export function* getByCat(action) {
  try {
    yield put(getproductbycategory(action.category));
  } catch (error) {
    console.log(error);
  }
}
export function* getByColor(action) {
  try {
    yield put(getProductByColor(action.color));
  } catch (error) {
    console.log(error);
  }
}
export function* setPrice(payload) {
  try {
    yield put({ type: SET_PRICE, payload });
  } catch (error) {
    console.log(error);
  }
}
export function* addTocart(action) {
  try {
    // console.log(action.payload);

    yield put(addtocart(action.payload));
  } catch (error) {
    console.log(error);
  }
}
export function* changecart() {
  try {
    // console.log(payload);
    yield put({ type: CHANGE_CART });
  } catch (error) {
    console.log(error);
  }
}
