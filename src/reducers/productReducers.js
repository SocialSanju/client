import { PRODUCT_GROUP_FAIL, PRODUCT_GROUP_REQUEST, PRODUCT_GROUP_SUCCESS, 
    ADD_PRODUCT_FAIL, ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS,
    PRODUCT_GROUP_LIST_REQUEST, PRODUCT_GROUP_LIST_FAIL, PRODUCT_GROUP_LIST_SUCCESS } from "../constants/productConstants";

export const productGrouplistReducer = (state = { loading: true }, action) => {
    switch (action.type) {
      case PRODUCT_GROUP_LIST_REQUEST:
        return { loading: true };
      case PRODUCT_GROUP_LIST_SUCCESS:
        return { loading: false, listproducts: action.payload };
      case PRODUCT_GROUP_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

export const productGroupReducer = (state = {}, action) => {
    switch(action.type)
    {
        case PRODUCT_GROUP_REQUEST:
            return { loading : true };
        case PRODUCT_GROUP_SUCCESS:
            return { loading: false, productGroupInfo: action.payload };
        case PRODUCT_GROUP_FAIL:
            return { loading: false, error: action.payload };
        default: 
             return state;
    }
}

export const addProductReducer = (state = {}, action) => {
    switch(action.type)
    {
        case ADD_PRODUCT_REQUEST:
            return { loading : true };
        case ADD_PRODUCT_SUCCESS:
            return { loading: false, productAdd: action.payload };
        case ADD_PRODUCT_FAIL:
            return { loading: false, error: action.payload };
        default: 
             return state;
    }
}

