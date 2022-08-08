import Axios from 'axios';
import {
  ENQUIRY_CREATE_REQUEST, ENQUIRY_CREATE_FAIL, ENQUIRY_CREATE_SUCCESS,
  ENQUIRY_LIST_REQUEST, ENQUIRY_LIST_SUCCESS, ENQUIRY_LIST_FAIL,
  ENQUIRY_DETAILS_FAIL, ENQUIRY_DETAILS_REQUEST, ENQUIRY_DETAILS_SUCCESS
 } from "../constants/enquiryConstants";

 export const enquirylist = ({}) => async (dispatch) => {
  dispatch({ type: ENQUIRY_LIST_REQUEST });
  try {
    const { data } = await Axios.get(
      `http://54.242.166.223:8080/api/enquiry/all`
    );
    dispatch({ type: ENQUIRY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ENQUIRY_LIST_FAIL, payload: error.message });
  }
};


export const addEnquiry = (EnqID, Name) => async (dispatch) => {
  dispatch({ type: ENQUIRY_CREATE_REQUEST, payload: { EnqID, Name } });
  try {
    const { data } = await Axios.post('http://54.242.166.223:8080/api/enquiry/add', { EnqID, Name });
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

export const EnquiryDetails = (enqId) => async (dispatch) =>{
  dispatch({
      type: ENQUIRY_DETAILS_REQUEST, payload: enqId });
  try {
      const { data } = await Axios.get(`http://54.242.166.223:8080/api/enquiry/${enqId}`);
      dispatch({ type: ENQUIRY_DETAILS_SUCCESS, payload: data });
  } catch (error) {
      dispatch({ 
          type: ENQUIRY_DETAILS_FAIL, 
          payload: 
          error.response && error.response.data.message 
          ? error.response.data.message 
          : error.message,
      });
  }
};
