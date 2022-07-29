import {
    ADD_SERVICE_FAIL, ADD_SERVICE_REQUEST, ADD_SERVICE_SUCCESS,
    SERVICE_GROUP_LIST_FAIL,
    SERVICE_GROUP_LIST_REQUEST,
    SERVICE_GROUP_LIST_SUCCESS,
    SERVICE_GROUP_FAIL, SERVICE_GROUP_REQUEST, SERVICE_GROUP_SUCCESS
   } from "../constants/serviceConstants";

   export const serviceGrouplistReducer = (state = { loading: true }, action) => {
    switch (action.type) {
      case SERVICE_GROUP_LIST_REQUEST:
        return { loading: true };
      case SERVICE_GROUP_LIST_SUCCESS:
        return { loading: false, listServices: action.payload };
      case SERVICE_GROUP_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

export const serviceGroupReducer = (state = {}, action) => {
    switch(action.type)
    {
        case SERVICE_GROUP_REQUEST:
            return { loading : true };
        case SERVICE_GROUP_SUCCESS:
            return { loading: false, serviceGroupInfo: action.payload };
        case SERVICE_GROUP_FAIL:
            return { loading: false, error: action.payload };
        default: 
             return state;
    }
}

export const addServiceReducer = (state = {}, action) => {
    switch(action.type)
    {
        case ADD_SERVICE_REQUEST:
            return { loading : true };
        case ADD_SERVICE_SUCCESS:
            return { loading: false, serviceAdd: action.payload };
        case ADD_SERVICE_FAIL:
            return { loading: false, error: action.payload };
        default: 
             return state;
    }
}

