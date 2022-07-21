import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAccount } from '../actions/accountActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function AccountScreen(props) {
  const [Name, setName] = useState('');
  const [Mobile_No, setMobile_No] = useState('');
  const [Account_Group, setAccount_Group] = useState('');

  const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';

  const addAct = useSelector((state) => state.addAct);
  const { accountAdd, loading, error } = addAct;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addAccount(Name, Mobile_No, Account_Group));
  };
  useEffect(() => {
    if (accountAdd) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, accountAdd]);
  
  return (
    <div>
    <form className="form" onSubmit={submitHandler}>
      <div>
        <h1>Add Account </h1>
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
        <label htmlFor="mobileno">Mobile No</label>
        <input
          type="text"
          id="Mobile_No"
          placeholder="Enter mobile no"
          required
          onChange={(e) => setMobile_No(e.target.value)}
        ></input>
      </div>
      
      <div>
        <label htmlFor="Group">Select Account-Group</label>
        <select id='Sub_Group' onChange={(e) => setAccount_Group(e.target.value)}>
          <option>Debitor</option>
          <option>Creditor</option>
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
