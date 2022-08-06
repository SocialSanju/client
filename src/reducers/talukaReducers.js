import { TALUKA_LIST_REQUEST, TALUKA_LIST_SUCCESS, TALUKA_LIST_FAIL,
    ADD_TALUKA_FAIL, ADD_TALUKA_REQUEST, ADD_TALUKA_SUCCESS,
    TALUKA_DETAILS_FAIL,TALUKA_DETAILS_REQUEST,TALUKA_DETAILS_SUCCESS } from "../constants/talukaConstants";

export const talukalistReducer = (state = { loading: true }, action) => {
    switch (action.type) {
      case TALUKA_LIST_REQUEST:
        return { loading: true };
      case TALUKA_LIST_SUCCESS:
        return { loading: false, listTaluka: action.payload };
      case TALUKA_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

export const addTalukaReducer = (state = {}, action) => {
    switch(action.type)
    {
        case ADD_TALUKA_REQUEST:
            return { loading : true };
        case ADD_TALUKA_SUCCESS:
            return { loading: false, talukaadd: action.payload };
        case ADD_TALUKA_FAIL:
            return { loading: false, error: action.payload };
        default: 
             return state;
    }
}

export const talukaDetailsReducer = (state = { t:{}, loading: true}, action) =>{
    switch (action.type){
        case TALUKA_DETAILS_REQUEST:
            return { loading: true };
        case TALUKA_DETAILS_SUCCESS:
            return { loading: false, t: action.payload };
        case TALUKA_DETAILS_FAIL:
            return { loading: false, error: action.payload};
        default:
            return state;
    }
};

