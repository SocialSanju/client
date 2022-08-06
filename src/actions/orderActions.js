import Axios from 'axios';
import { ADD_ORDER_FAIL, ADD_ORDER_REQUEST, ADD_ORDER_SUCCESS} from "../constants/orderConstants";

export const addOrder = (Name, Product, BillingAmt, PaidAmt, Remark, State, District, Taluka) => async (dispatch) => {
  dispatch({ type: ADD_ORDER_REQUEST, payload: { Name,Product, BillingAmt, PaidAmt, Remark, State, District, Taluka } });
  try {
    const { data } = await Axios.post('/api/order/add', { Name, Product, BillingAmt, PaidAmt, Remark, State, District, Taluka });
    dispatch({ type: ADD_ORDER_SUCCESS, payload: data });
    localStorage.setItem('Add', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: ADD_ORDER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

