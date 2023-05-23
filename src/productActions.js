import axios from 'axios';

// import {productReducer} from './productReducer';

// Action types
export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
// export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';
const FETCH_PRODUCT_DETAILS_REQUEST = 'FETCH_PRODUCT_DETAILS_REQUEST';
const FETCH_PRODUCT_DETAILS_SUCCESS = 'FETCH_PRODUCT_DETAILS_SUCCESS';
// const FETCH_PRODUCT_DETAILS_FAILURE = 'FETCH_PRODUCT_DETAILS_FAILURE';

// Action creators
const fetchProductsRequest = () => ({
  type: FETCH_PRODUCTS_REQUEST,
});

const fetchProductsSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

// const fetchProductsFailure = (error) => ({
//   type: FETCH_PRODUCTS_FAILURE,
//   payload: error,
// });

const fetchProductDetailsRequest = () => ({
  type: FETCH_PRODUCT_DETAILS_REQUEST,
});

const fetchProductDetailsSuccess = (product) => ({
  type: FETCH_PRODUCT_DETAILS_SUCCESS,
  payload: product,
});

// const fetchProductDetailsFailure = (error) => ({
//   type: FETCH_PRODUCT_DETAILS_FAILURE,
//   payload: error,
// });

// Async actions
export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch(fetchProductsRequest());
    try {
      const response = await axios.post("http://cbe.themaestro.in/ksnm/webservice/productcategory");
      const products = response.data; // Assuming the API response is an array of products
      dispatch(fetchProductsSuccess(products));
    } catch (error) {
      // dispatch(fetchProductsFailure(error.message));
    }
  };
};

export const fetchProductDetails = (productId) => {
  return async (dispatch) => {
    dispatch(fetchProductDetailsRequest());
    try {
      const response = await axios.post(`http://cbe.themaestro.in/ksnm/webservice/productcategory/${productId}`);
      const product = response.data; // Assuming the API response is a single product object
      dispatch(fetchProductDetailsSuccess(product));
    } catch (error) {
      // dispatch(fetchProductDetailsFailure(error.message));
    }
  };
};
