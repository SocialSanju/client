import Axios from 'axios';
import {
  ENQUIRY_CREATE_REQUEST, ENQUIRY_CREATE_FAIL, ENQUIRY_CREATE_SUCCESS,
  ENQUIRY_LIST_REQUEST, ENQUIRY_LIST_SUCCESS, ENQUIRY_LIST_FAIL,
 } from "../constants/enquiryConstants";

 export const enquirylist = ({}) => async (dispatch) => {
  dispatch({ type: ENQUIRY_LIST_REQUEST });
  try {
    const { data } = await Axios.get(
      `/api/enquiry/all`
    );
    dispatch({ type: ENQUIRY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ENQUIRY_LIST_FAIL, payload: error.message });
  }
};


export const addEnquiry = (Name) => async (dispatch) => {
  dispatch({ type: ENQUIRY_CREATE_REQUEST, payload: { Name } });
  try {
    const { data } = await Axios.post('/api/enquiry/add', { Name });
    dispatch({ type: ENQUIRY_CREATE_SUCCESS, payload: data });
    localStorage.setItem('enquiryAdd', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: ENQUIRY_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

