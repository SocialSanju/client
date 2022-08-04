import Axios from 'axios';
import {
  ACCOUNT_GROUP_REQUEST, ACCOUNT_GROUP_SUCCESS, ACCOUNT_GROUP_FAIL,
  ADD_ACCOUNT_FAIL, ADD_ACCOUNT_REQUEST, ADD_ACCOUNT_SUCCESS,
  ACCOUNT_GROUP_LIST_FAIL, ACCOUNT_GROUP_LIST_REQUEST, ACCOUNT_GROUP_LIST_SUCCESS,
  ACCOUNT_DETAILS_FAIL,ACCOUNT_DETAILS_REQUEST,ACCOUNT_DETAILS_SUCCESS
 } from "../constants/accountConstants";

 export const grouplist = ({}) => async (dispatch) => {
  dispatch({ type: ACCOUNT_GROUP_LIST_REQUEST });
  try {
    const { data } = await Axios.get(
      `/api/accountGroup/list`
    );
    dispatch({ type: ACCOUNT_GROUP_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ACCOUNT_GROUP_LIST_FAIL, payload: error.message });
  }
};


export const group_details = (ac_group_title, Sub_Group) => async (dispatch) => {
  dispatch({ type: ACCOUNT_GROUP_REQUEST, payload: { ac_group_title, Sub_Group } });
  try {
    const { data } = await Axios.post('/api/accountGroup/', { ac_group_title, Sub_Group });
    dispatch({ type: ACCOUNT_GROUP_SUCCESS, payload: data });
    localStorage.setItem('account_groupInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: ACCOUNT_GROUP_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const addAccount = (Name, Mobile_No, Ac_Group) => async (dispatch) => {
  dispatch({ type: ADD_ACCOUNT_REQUEST, payload: { Name, Mobile_No, Ac_Group } });
  try {
    const { data } = await Axios.post('/api/account/add', { Name, Mobile_No, Ac_Group });
    dispatch({ type: ADD_ACCOUNT_SUCCESS, payload: data });
    localStorage.setItem('accountAdd', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: ADD_ACCOUNT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


export const detailsAccount = (accountId) => async (dispatch) =>{
  dispatch({
      type: ACCOUNT_DETAILS_REQUEST, payload: accountId });
  try {
      const { data } = await Axios.get(`/api/account/${accountId}`);
      dispatch({ type: ACCOUNT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
      dispatch({ 
          type: ACCOUNT_DETAILS_FAIL, 
          payload: 
          error.response && error.response.data.message 
          ? error.response.data.message 
          : error.message,
      });
  }
};
