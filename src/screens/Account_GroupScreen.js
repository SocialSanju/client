import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { group_details } from '../actions/accountActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function AccountScreen(props) {
  const [ac_group_title, setAc_group_title] = useState('');
  const [Sub_Group, setSub_Group] = useState('');

  const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';

  const account_group = useSelector((state) => state.account_group);
  const { account_groupInfo, loading, error } = account_group;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(group_details(ac_group_title, Sub_Group));
  };
  useEffect(() => {
    if (account_groupInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, account_groupInfo]);
  
  return (
    <div>
    <form className="form" onSubmit={submitHandler}>
      <div>
        <h1>Add Account Group</h1>
      </div>
      {loading && <LoadingBox></LoadingBox>}
      {error && <MessageBox variant="danger">{error}</MessageBox>}
      <div>
        <label htmlFor="ac_group_title">Account Group Title</label>
        <input
          type="text"
          id="ac_group_title"
          placeholder="Enter name"
          required
          onChange={(e) => setAc_group_title(e.target.value)}
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
