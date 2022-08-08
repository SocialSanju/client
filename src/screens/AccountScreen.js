import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAccount } from '../actions/accountActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import axios from 'axios';

export default function AccountScreen(props) {
  const [name, setName] = useState('');
  const [mobileno, setMobile_No] = useState('');
  const [Ac_Group, setAC_Group] = useState('');
  const [acGroup, setAcGroup] = useState([]);

  useEffect(async () => {
    await axios.get('http://13.233.98.188:8080/api/accountGroup/list').then((res) => {
        setAcGroup(res.data);
    })
}, [])



  const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';

 
  const addAct = useSelector((state) => state.addAct);
  const { accountAdd, loading, error } = addAct;

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addAccount(name, mobileno, Ac_Group));
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
        <h1>Add Account</h1>
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
        <input type="text" id='Mobile_No' placeholder="Enter mobile no" required onChange={(e) => setMobile_No(e.target.value)} />      
      </div>

 
      <div>
      <label>Select Account Group</label>
      <select name="Ac_Group" id="Ac_Group" onChange={(e) => setAC_Group(e.target.value)}>
                                <option>---Select---</option>
                                    {acGroup && acGroup.map((obj) => {
                                        return <option value={obj._id}>{obj.ac_group_title}</option>
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
