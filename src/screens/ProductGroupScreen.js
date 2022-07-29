import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productDetails } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function ProductGroupScreen(props) {
  const [product_group_title, setProduct_group_title] = useState('');
  const [Sub_Group, setSub_Group] = useState('');

  const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';

  const productGroup = useSelector((state) => state.productGroup);
  const { productGroupInfo, loading, error } = productGroup;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(productDetails(product_group_title, Sub_Group));
  };
  useEffect(() => {
    if (productGroupInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, productGroupInfo]);
  
  return (
    <div>
    <form className="form" onSubmit={submitHandler}>
      <div>
        <h1>Add Product Group</h1>
      </div>
      {loading && <LoadingBox></LoadingBox>}
      {error && <MessageBox variant="danger">{error}</MessageBox>}
      <div>
        <label htmlFor="product_group_title">Product Group Title</label>
        <input
          type="text"
          id="product_group_title"
          placeholder="Enter name"
          required
          onChange={(e) => setProduct_group_title(e.target.value)}
        ></input>
      </div>
      
      <div>
        <label htmlFor="Group">Select Sub-Group</label>
        <select id='Sub_Group' onChange={(e) => setSub_Group(e.target.value)}>
          <option>A</option>
          <option>B</option>
          <option>C</option>
          <option>D</option>
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
