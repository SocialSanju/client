import Axios from 'axios';
import { ADD_ORDER_FAIL, ADD_ORDER_REQUEST, ADD_ORDER_SUCCESS} from "../constants/orderConstants";

export const addOrder = (Name, A, B, C, Product, BillingAmt, PaidAmt, Remark) => async (dispatch) => {
  dispatch({ type: ADD_ORDER_REQUEST, payload: { Name,A, B, C, Product, BillingAmt, PaidAmt, Remark } });
  try {
    const { data } = await Axios.post('/api/order/add', { Name, A, B, C, Product, BillingAmt, PaidAmt, Remark });
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

