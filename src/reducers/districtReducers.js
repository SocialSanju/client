import { DISTRICT_LIST_REQUEST, DISTRICT_LIST_SUCCESS, DISTRICT_LIST_FAIL,
    ADD_DISTRICT_FAIL, ADD_DISTRICT_REQUEST, ADD_DISTRICT_SUCCESS,
    DISTRICT_DETAILS_FAIL,DISTRICT_DETAILS_REQUEST,DISTRICT_DETAILS_SUCCESS } from "../constants/districtConstants";

export const districtlistReducer = (state = { loading: true }, action) => {
    switch (action.type) {
      case DISTRICT_LIST_REQUEST:
        return { loading: true };
      case DISTRICT_LIST_SUCCESS:
        return { loading: false, listDistrict: action.payload };
      case DISTRICT_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

export const addDistrictReducer = (state = {}, action) => {
    switch(action.type)
    {
        case ADD_DISTRICT_REQUEST:
            return { loading : true };
        case ADD_DISTRICT_SUCCESS:
            return { loading: false, districtadd: action.payload };
        case ADD_DISTRICT_FAIL:
            return { loading: false, error: action.payload };
        default: 
             return state;
    }
}

export const districtDetailsReducer = (state = { t:{}, loading: true}, action) =>{
    switch (action.type){
        case DISTRICT_DETAILS_REQUEST:
            return { loading: true };
        case DISTRICT_DETAILS_SUCCESS:
            return { loading: false, t: action.payload };
        case DISTRICT_DETAILS_FAIL:
            return { loading: false, error: action.payload};
        default:
            return state;
    }
};

