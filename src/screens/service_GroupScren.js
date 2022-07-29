import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { servieGroupAdd } from '../actions/serviceActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function ServiceGroupScreen(props) {
  const [service_group_title, setService_group_title] = useState('');
  const [Sub_Group, setSub_Group] = useState('');

  const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';

  const serviceGroup = useSelector((state) => state.serviceGroup);
  const { serviceGroupInfo, loading, error } = serviceGroup;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(servieGroupAdd(service_group_title, Sub_Group));
  };
  useEffect(() => {
    if (serviceGroupInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, serviceGroupInfo]);
  
  return (
    <div>
    <form className="form" onSubmit={submitHandler}>
      <div>
        <h1>Add Service Group</h1>
      </div>
      {loading && <LoadingBox></LoadingBox>}
      {error && <MessageBox variant="danger">{error}</MessageBox>}
      <div>
        <label htmlFor="service_group_title">Service Group Title</label>
        <input
          type="text"
          id="service_group_title"
          placeholder="Enter name"
          required
          onChange={(e) => setService_group_title(e.target.value)}
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
