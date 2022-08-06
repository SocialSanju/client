import Axios from 'axios';
import {
  STATE_LIST_REQUEST, STATE_LIST_SUCCESS, STATE_LIST_FAIL,
  ADD_STATE_FAIL, ADD_STATE_REQUEST, ADD_STATE_SUCCESS,
  STATE_DETAILS_FAIL,STATE_DETAILS_REQUEST,STATE_DETAILS_SUCCESS
 } from "../constants/stateConstants";

 export const statelist = ({}) => async (dispatch) => {
  dispatch({ type: STATE_LIST_REQUEST });
  try {
    const { data } = await Axios.get(
      `/api/state/all`
    );
    dispatch({ type: STATE_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: STATE_LIST_FAIL, payload: error.message });
  }
};

export const addState = (Name) => async (dispatch) => {
  dispatch({ type: ADD_STATE_REQUEST, payload: { Name } });
  try {
    const { data } = await Axios.post('/api/state/add', { Name });
    dispatch({ type: ADD_STATE_SUCCESS, payload: data });
    localStorage.setItem('stateAdd', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: ADD_STATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


export const detailsState = (stateId) => async (dispatch) =>{
  dispatch({
      type: STATE_DETAILS_REQUEST, payload: stateId });
  try {
      const { data } = await Axios.get(`/api/state/${stateId}`);
      dispatch({ type: STATE_DETAILS_SUCCESS, payload: data });
  } catch (error) {
      dispatch({ 
          type: STATE_DETAILS_FAIL, 
          payload: 
          error.response && error.response.data.message 
          ? error.response.data.message 
          : error.message,
      });
  }
};
