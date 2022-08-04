import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addOrder } from '../actions/orderActions';
import { EnquiryDetails } from '../actions/enquiryActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import axios from 'axios';
import { ENQUIRY_DETAILS_RESET } from '../constants/enquiryConstants';

export default function OrderScreen(props) {
  const enqId = props.match.params.id;
  const [billing, setBillingAmt] = useState('');
  const [paid, setPaid] = useState('');
  const [product, setProduct] = useState('');
  const [remark, setRemark] = useState('');
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');


  const [pname, setPName] = useState([]);

  useEffect(async () => {
    await axios.get('http://127.0.0.1:8080/api/product/all').then((res) => {
        setPName(res.data);
    })
}, [])

  const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';

    const postEnq = useSelector((state) => state.postEnq);
    const { loading, error, enquiry } = postEnq;


    const postOrder = useSelector((state) => state.postOrder);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    order: orderAdd,
  } = postOrder;


    const dispatch = useDispatch();
  useEffect(() => {
    if (!enquiry || enquiry._id !== enqId || orderAdd) {
      dispatch({ type: ENQUIRY_DETAILS_RESET });
      dispatch(EnquiryDetails(enqId));
    } else {
  
    }
  }, [dispatch, orderAdd, enquiry, enqId,]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addOrder(enquiry.Name, a, b, c, product, billing, paid, remark));
    props.history.push('/');
  };

  useEffect(() => {
    if (orderAdd) {
      props.history.push('/');
    }
  }, [props.history, orderAdd]);
  
  return loading ? (
    <LoadingBox></LoadingBox>
  ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
  ) : (
    <div>
    <form className="form" onSubmit={submitHandler}>
      <div>
        <h1>Add Order</h1>
     
      </div>
    
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="Name"
          placeholder="Enter name"
          required
          value={enquiry.Name}
        ></input>
      </div>

      <div>
      <label>A</label>
      <select name="A" id="A" onChange={(e) => setA(e.target.value)}>
                                <option>---Select---</option>
                                <option>A</option>
                                <option>B</option>
                                <option>C</option>
                                <option>D</option>
                                </select>
      </div>

      <div>
      <label>B</label>
      <select name="B" id="B" onChange={(e) => setB(e.target.value)}>
                                <option>---Select---</option>
                                <option>A</option>
                                <option>B</option>
                                <option>C</option>
                                <option>D</option>
                                </select>
      </div>

      <div>
      <label>C</label>
      <select name="C" id="C" onChange={(e) => setC(e.target.value)}>
                                <option>---Select---</option>
                                <option>A</option>
                                <option>B</option>
                                <option>C</option>
                                <option>D</option>
                                </select>
      </div>

 
      <div>
      <label>Product</label>
      <select name="Name" id="Name" onChange={(e) => setProduct(e.target.value)}>
                                <option>---Select---</option>
                                    {pname && pname.map((obj) => {
                                        return <option value={obj.Name}>{obj.Name}</option>
                                    })
                                    }
                                </select>
      </div>

      <div>
      <label>Billing Amount</label>
      <input
          type="text"
          id="BillingAmt"
          placeholder="Enter amount"
          required
          onChange={(e) => setBillingAmt(e.target.value)}
        ></input>
      </div>


      <div>
      <label>Paid Amount</label>
      <input
          type="text"
          id="PaidAmt"
          placeholder="Enter amount"
          required
          onChange={(e) => setPaid(e.target.value)}
        ></input>
      </div>

      <div>
      <label>Remark</label>
      <input
          type="text"
          id="Remark"
          placeholder="Enter remark"
          required
          onChange={(e) => setRemark(e.target.value)}
        ></input>
      </div>
     
      <div>
        <label />
        {loadingUpdate && <LoadingBox></LoadingBox>}
                  {errorUpdate && (
                    <MessageBox variant="danger">{errorUpdate}</MessageBox>
                  )}
        <button className="primary" type="submit">
          Save
        </button>
      </div>
    </form>
  </div>
  );
}
