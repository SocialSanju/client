import { ACCOUNT_GROUP_FAIL, ACCOUNT_GROUP_REQUEST, ACCOUNT_GROUP_SUCCESS, 
    ADD_ACCOUNT_FAIL, ADD_ACCOUNT_REQUEST, ADD_ACCOUNT_SUCCESS,
    ACCOUNT_GROUP_LIST_REQUEST, ACCOUNT_GROUP_LIST_FAIL, ACCOUNT_GROUP_LIST_SUCCESS,
    ACCOUNT_DETAILS_FAIL, ACCOUNT_DETAILS_REQUEST, ACCOUNT_DETAILS_SUCCESS } from "../constants/accountConstants";

export const acgrouplistReducer = (state = { loading: true }, action) => {
    switch (action.type) {
      case ACCOUNT_GROUP_LIST_REQUEST:
        return { loading: true };
      case ACCOUNT_GROUP_LIST_SUCCESS:
        return { loading: false, listgroups: action.payload };
      case ACCOUNT_GROUP_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

export const account_groupReducer = (state = {}, action) => {
    switch(action.type)
    {
        case ACCOUNT_GROUP_REQUEST:
            return { loading : true };
        case ACCOUNT_GROUP_SUCCESS:
            return { loading: false, account_groupInfo: action.payload };
        case ACCOUNT_GROUP_FAIL:
            return { loading: false, error: action.payload };
        default: 
             return state;
    }
}

export const addAccountReducer = (state = {}, action) => {
    switch(action.type)
    {
        case ADD_ACCOUNT_REQUEST:
            return { loading : true };
        case ADD_ACCOUNT_SUCCESS:
            return { loading: false, accountAdd: action.payload };
        case ADD_ACCOUNT_FAIL:
            return { loading: false, error: action.payload };
        default: 
             return state;
    }
}

export const accountDetailsReducer = (state = { account:{}, loading: true}, action) =>{
    switch (action.type){
        case ACCOUNT_DETAILS_REQUEST:
            return { loading: true };
        case ACCOUNT_DETAILS_SUCCESS:
            return { loading: false, account: action.payload };
        case ACCOUNT_DETAILS_FAIL:
            return { loading: false, error: action.payload};
        default:
            return state;
    }
};

