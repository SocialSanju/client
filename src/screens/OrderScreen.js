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
  const [state, setState] = useState('');
  const [district, setDistrict] = useState('');
  const [taluka, setTaluka] = useState(''); 
  const [pname, setPName] = useState([]);
  const [sname, setSName] = useState([]);

  useEffect(async () => {
    await axios.get('http://54.242.166.223:8080/api/product/all').then((res) => {
        setPName(res.data);
    })
}, [])

useEffect(async () => {
  await axios.get('http://54.242.166.223:8080/api/state/all').then((res) => {
      setSName(res.data);
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
    dispatch(addOrder(enquiry.Name,product, billing, paid, remark, state, district, taluka));
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
      <label>State</label>
      <select name="State" id="State" onChange={(e) => setState(e.target.value)}>
                                <option>---Select---</option>
                                    {sname && sname.map((obj) => {
                                        return <option value={obj.Name}>{obj.Name}</option>
                                    })
                                    }
                                </select>
      </div>

      <div>
      <label>District</label>
      <input
          type="text"
          id="District"
          placeholder="Enter district"
          required
          onChange={(e) => setDistrict(e.target.value)}
        ></input>
      
      </div>

      <div>
      <label>Taluka</label>
      <input
          type="text"
          id="Taluka"
          placeholder="Enter taluka"
          required
          onChange={(e) => setTaluka(e.target.value)}
        ></input>
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
