import Axios from 'axios';
import {
  ACCOUNT_GROUP_REQUEST, ACCOUNT_GROUP_SUCCESS, ACCOUNT_GROUP_FAIL,
  ADD_ACCOUNT_FAIL, ADD_ACCOUNT_REQUEST, ADD_ACCOUNT_SUCCESS
 } from "../constants/accountConstants";

export const group_details = (Name, Sub_Group) => async (dispatch) => {
  dispatch({ type: ACCOUNT_GROUP_REQUEST, payload: { Name, Sub_Group } });
  try {
    const { data } = await Axios.post('/api/accountGroup/', { Name, Sub_Group });
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

export const addAccount = (Name, Mobile_No, Account_Group) => async (dispatch) => {
  dispatch({ type: ADD_ACCOUNT_REQUEST, payload: { Name, Mobile_No, Account_Group } });
  try {
    const { data } = await Axios.post('/api/account/', { Name, Mobile_No, Account_Group });
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

