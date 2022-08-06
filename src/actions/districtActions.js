import Axios from 'axios';
import {
  DISTRICT_LIST_REQUEST, DISTRICT_LIST_SUCCESS, DISTRICT_LIST_FAIL,
  ADD_DISTRICT_FAIL, ADD_DISTRICT_REQUEST, ADD_DISTRICT_SUCCESS,
  DISTRICT_DETAILS_FAIL,DISTRICT_DETAILS_REQUEST,DISTRICT_DETAILS_SUCCESS
 } from "../constants/districtConstants";

 export const districtlist = ({}) => async (dispatch) => {
  dispatch({ type: DISTRICT_LIST_REQUEST });
  try {
    const { data } = await Axios.get(
      `/api/district/all`
    );
    dispatch({ type: DISTRICT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: DISTRICT_LIST_FAIL, payload: error.message });
  }
};

export const addDistrict = (Name,  SID) => async (dispatch) => {
  dispatch({ type: ADD_DISTRICT_REQUEST, payload: { Name, SID } });
  try {
    const { data } = await Axios.post('/api/district/add', { Name, SID });
    dispatch({ type: ADD_DISTRICT_SUCCESS, payload: data });
    localStorage.setItem('districtAdd', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: ADD_DISTRICT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


export const detailsDistrict = (districtId) => async (dispatch) =>{
  dispatch({
      type: DISTRICT_DETAILS_REQUEST, payload: districtId });
  try {
      const { data } = await Axios.get(`/api/district/${districtId}`);
      dispatch({ type: DISTRICT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
      dispatch({ 
          type: DISTRICT_DETAILS_FAIL, 
          payload: 
          error.response && error.response.data.message 
          ? error.response.data.message 
          : error.message,
      });
  }
};
