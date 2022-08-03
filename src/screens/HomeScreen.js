import React from 'react';
import { Link } from 'react-router-dom';

export default function HomeScreen() {
  return (
    <div className='container'>
      <Link to='/account'><h2 style={{ fontSize:'20px'}}>Account</h2></Link>
      <Link to='/account_group'><h2 style={{ fontSize:'20px'}}>Account_Group</h2></Link>
      <Link to='/product'><h2 style={{ fontSize:'20px'}}>Product</h2></Link>
      <Link to='/productGroup'><h2 style={{ fontSize:'20px'}}>Product_Group</h2></Link>
      <Link to='/services'><h2 style={{ fontSize:'20px'}}>Services</h2></Link>
      <Link to='/serviceGroup'><h2 style={{ fontSize:'20px'}}>Service_Group</h2></Link>
    </div>
  );
}
