import Axios from 'axios';
import {
  ADD_SERVICE_FAIL, ADD_SERVICE_REQUEST, ADD_SERVICE_SUCCESS,
  SERVICE_GROUP_LIST_FAIL, SERVICE_GROUP_LIST_REQUEST, SERVICE_GROUP_LIST_SUCCESS,
  SERVICE_GROUP_REQUEST,SERVICE_GROUP_FAIL,SERVICE_GROUP_SUCCESS
 } from "../constants/serviceConstants";

 export const serviceGrouplist = ({}) => async (dispatch) => {
  dispatch({ type: SERVICE_GROUP_LIST_REQUEST });
  try {
    const { data } = await Axios.get(
      `http://54.242.166.223:8080/api/serviceGroup/list`
    );
    dispatch({ type: SERVICE_GROUP_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: SERVICE_GROUP_LIST_FAIL, payload: error.message });
  }
};


export const servieGroupAdd = (service_group_title, Sub_Group) => async (dispatch) => {
  dispatch({ type: SERVICE_GROUP_REQUEST, payload: { service_group_title, Sub_Group } });
  try {
    const { data } = await Axios.post('http://54.242.166.223:8080/api/serviceGroup/', { service_group_title, Sub_Group });
    dispatch({ type: SERVICE_GROUP_SUCCESS, payload: data });
    localStorage.setItem('service_groupInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: SERVICE_GROUP_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


export const addService = (Title, Service_Group) => async (dispatch) => {
  dispatch({ type: ADD_SERVICE_REQUEST, payload: { Title, Service_Group } });
  try {
    const { data } = await Axios.post('http://54.242.166.223:8080/api/services/add', { Title, Service_Group });
    dispatch({ type: ADD_SERVICE_SUCCESS, payload: data });
    localStorage.setItem('serviceAdd', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: ADD_SERVICE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

