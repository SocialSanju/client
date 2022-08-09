import Axios from 'axios';
import {
  PRODUCT_GROUP_REQUEST, PRODUCT_GROUP_SUCCESS, PRODUCT_GROUP_FAIL,
  ADD_PRODUCT_FAIL, ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS,
  PRODUCT_GROUP_LIST_FAIL, PRODUCT_GROUP_LIST_REQUEST, PRODUCT_GROUP_LIST_SUCCESS
 } from "../constants/productConstants";

 export const productgrouplist = ({}) => async (dispatch) => {
  dispatch({ type: PRODUCT_GROUP_LIST_REQUEST });
  try {
    const { data } = await Axios.get(
      `http://54.242.166.223:8080/api/productGroup/list`
    );
    dispatch({ type: PRODUCT_GROUP_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_GROUP_LIST_FAIL, payload: error.message });
  }
};


export const productDetails = (product_group_title, Sub_Group) => async (dispatch) => {
  dispatch({ type: PRODUCT_GROUP_REQUEST, payload: { product_group_title, Sub_Group } });
  try {
    const { data } = await Axios.post('http://54.242.166.223:8080/api/productGroup/', { product_group_title, Sub_Group });
    dispatch({ type: PRODUCT_GROUP_SUCCESS, payload: data });
    localStorage.setItem('productGroupInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: PRODUCT_GROUP_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const addProduct = (Name, ProductGroup) => async (dispatch) => {
  dispatch({ type: ADD_PRODUCT_REQUEST, payload: { Name, ProductGroup } });
  try {
    const { data } = await Axios.post('http://54.242.166.223:8080/api/product/add', { Name, ProductGroup });
    dispatch({ type: ADD_PRODUCT_SUCCESS, payload: data });
    localStorage.setItem('productAdd', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: ADD_PRODUCT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

