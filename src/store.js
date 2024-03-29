import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { addAccountReducer, account_groupReducer, acgrouplistReducer, accountDetailsReducer } from './reducers/accountReducers';
import { userDeleteReducer, userDetailsReducer, userListReducer, userSigninReducer, userUpdateProfileReducer, userUpdateReducer } from './reducers/userReducers';
import { userRegisterReducer } from './reducers/userReducers';
import { addServiceReducer, serviceGrouplistReducer, serviceGroupReducer } from './reducers/serviceReducers';
import { addProductReducer, productGrouplistReducer, productGroupReducer } from './reducers/productReducers';
import { addEnquiryReducer, enquiryDetailsReducer, enquirylistReducer } from './reducers/enquiryReducers';
import { addOrderReducer } from './reducers/orderReducers';
import { stateDetailsReducer, statelistReducer, addStateReducer } from './reducers/stateReducers';
import { districtDetailsReducer, districtlistReducer, addDistrictReducer } from './reducers/districtReducers';
import { talukaDetailsReducer, talukalistReducer, addTalukaReducer } from './reducers/talukaReducers';


const initialState = {
    userSignin: {
        userInfo: localStorage.getItem('userInfo')
        ? JSON.parse(localStorage.getItem('userInfo'))
        : null,
    },
};
const reducer = combineReducers({
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,
    account_group: account_groupReducer,
    addAct: addAccountReducer,
    acgrouplist : acgrouplistReducer,
    addS: addServiceReducer,
    serviceGroup: serviceGroupReducer,
    serviceGrouplist: serviceGrouplistReducer,
    productGroup: productGroupReducer,
    addProd: addProductReducer,
    productGrouplist: productGrouplistReducer,
    enqlist: enquirylistReducer,
    addDetails: addEnquiryReducer,
    postEnq: enquiryDetailsReducer,
    accountDetails: accountDetailsReducer,
    postOrder: addOrderReducer,
    stateA: addStateReducer,
    addS: statelistReducer,
    stateDetails: stateDetailsReducer,
    districtA: addDistrictReducer,
    addD: districtlistReducer,
    districtDetails: districtDetailsReducer,
    talukaA: addTalukaReducer,
    addT: talukalistReducer,
    talukaDetails: talukaDetailsReducer

});
const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
const store = createStore(
    reducer, 
    initialState,
    composeEnhancer(applyMiddleware(thunk))
 );

export default store;
