import { STATE_LIST_REQUEST, STATE_LIST_SUCCESS, STATE_LIST_FAIL,
    ADD_STATE_FAIL, ADD_STATE_REQUEST, ADD_STATE_SUCCESS,
    STATE_DETAILS_FAIL,STATE_DETAILS_REQUEST,STATE_DETAILS_SUCCESS } from "../constants/stateConstants";

export const statelistReducer = (state = { loading: true }, action) => {
    switch (action.type) {
      case STATE_LIST_REQUEST:
        return { loading: true };
      case STATE_LIST_SUCCESS:
        return { loading: false, listState: action.payload };
      case STATE_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

export const addStateReducer = (state = {}, action) => {
    switch(action.type)
    {
        case ADD_STATE_REQUEST:
            return { loading : true };
        case ADD_STATE_SUCCESS:
            return { loading: false, stateadd: action.payload };
        case ADD_STATE_FAIL:
            return { loading: false, error: action.payload };
        default: 
             return state;
    }
}

export const stateDetailsReducer = (state = { st:{}, loading: true}, action) =>{
    switch (action.type){
        case STATE_DETAILS_REQUEST:
            return { loading: true };
        case STATE_DETAILS_SUCCESS:
            return { loading: false, st: action.payload };
        case STATE_DETAILS_FAIL:
            return { loading: false, error: action.payload};
        default:
            return state;
    }
};

