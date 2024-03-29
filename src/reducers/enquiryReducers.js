import { ENQUIRY_CREATE_REQUEST, ENQUIRY_CREATE_FAIL, ENQUIRY_CREATE_SUCCESS,
  ENQUIRY_LIST_REQUEST, ENQUIRY_LIST_SUCCESS, ENQUIRY_LIST_FAIL,
  ENQUIRY_DETAILS_FAIL, ENQUIRY_DETAILS_REQUEST, ENQUIRY_DETAILS_SUCCESS } from "../constants/enquiryConstants";

export const enquirylistReducer = (state = { loading: true }, action) => {
    switch (action.type) {
      case ENQUIRY_LIST_REQUEST:
        return { loading: true };
      case ENQUIRY_LIST_SUCCESS:
        return { loading: false, listenquiry: action.payload };
      case ENQUIRY_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

export const addEnquiryReducer = (state = {}, action) => {
    switch(action.type)
    {
        case ENQUIRY_CREATE_REQUEST:
            return { loading : true };
        case ENQUIRY_CREATE_SUCCESS:
            return { loading: false, enquiryAdd: action.payload };
        case ENQUIRY_CREATE_FAIL:
            return { loading: false, error: action.payload };
        default: 
             return state;
    }
}

export const enquiryDetailsReducer = (state = { enquiry:{}, loading: true}, action) =>{
  switch (action.type){
      case ENQUIRY_DETAILS_REQUEST:
          return { loading: true };
      case ENQUIRY_DETAILS_SUCCESS:
          return { loading: false, enquiry: action.payload };
      case ENQUIRY_DETAILS_FAIL:
          return { loading: false, error: action.payload};
      default:
          return state;
  }
};


