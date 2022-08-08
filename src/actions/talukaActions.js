import Axios from 'axios';
import {
  TALUKA_LIST_REQUEST, TALUKA_LIST_SUCCESS, TALUKA_LIST_FAIL,
  ADD_TALUKA_FAIL, ADD_TALUKA_REQUEST, ADD_TALUKA_SUCCESS,
  TALUKA_DETAILS_FAIL,TALUKA_DETAILS_REQUEST,TALUKA_DETAILS_SUCCESS
 } from "../constants/talukaConstants";

 export const talukalist = ({}) => async (dispatch) => {
  dispatch({ type: TALUKA_LIST_REQUEST });
  try {
    const { data } = await Axios.get(
      `http://54.242.166.223:8080/api/taluka/all`
    );
    dispatch({ type: TALUKA_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: TALUKA_LIST_FAIL, payload: error.message });
  }
};

export const addTaluka = (Name, SID, DID) => async (dispatch) => {
  dispatch({ type: ADD_TALUKA_REQUEST, payload: { Name, SID, DID } });
  try {
    const { data } = await Axios.post('http://54.242.166.223:8080/api/taluka/add', { Name, SID, DID });
    dispatch({ type: ADD_TALUKA_SUCCESS, payload: data });
    localStorage.setItem('stateAdd', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: ADD_TALUKA_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


export const detailsTaluka = (talukaId) => async (dispatch) =>{
  dispatch({
      type: TALUKA_DETAILS_REQUEST, payload: talukaId });
  try {
      const { data } = await Axios.get(`http://54.242.166.223:8080/api/taluka/${talukaId}`);
      dispatch({ type: TALUKA_DETAILS_SUCCESS, payload: data });
  } catch (error) {
      dispatch({ 
          type: TALUKA_DETAILS_FAIL, 
          payload: 
          error.response && error.response.data.message 
          ? error.response.data.message 
          : error.message,
      });
  }
};
