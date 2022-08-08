import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import axios from 'axios';

export default function ProductScreen(props) {
  const [name, setName] = useState('');
  const [Product_Group, setProduct_Group] = useState('');
  const [productGroup, setProductGroup] = useState([]);

  useEffect(async () => {
    await axios.get('http://13.233.98.188:8080/api/productGroup/list').then((res) => {
        setProductGroup(res.data);
    })
}, [])



  const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';

 
  const addProd = useSelector((state) => state.addProd);
  const { productAdd, loading, error } = addProd;

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addProduct(name, Product_Group));
  };
  useEffect(() => {
    if (productAdd) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, productAdd]);
  
  return (
    <div>
    <form className="form" onSubmit={submitHandler}>
      <div>
        <h1>Add Product</h1>
      </div>
      {loading && <LoadingBox></LoadingBox>}
      {error && <MessageBox variant="danger">{error}</MessageBox>}
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="Name"
          placeholder="Enter name"
          required
          onChange={(e) => setName(e.target.value)}
        ></input>
      </div>
 
      <div>
      <label>Select Product Group</label>
      <select name="Product_Group" id="ProductGroup" onChange={(e) => setProduct_Group(e.target.value)}>
                                <option>---Select---</option>
                                    {productGroup && productGroup.map((obj) => {
                                        return <option value={obj._id}>{obj.product_group_title}</option>
                                    })
                                    }
                                </select>
      </div>
     
      <div>
        <label />
        <button className="primary" type="submit">
          Save
        </button>
      </div>
    </form>
  </div>
  );
}
