import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addState } from '../actions/stateActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function AccountScreen(props) {
  const [name, setName] = useState('');


  const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';

 
  const stateA = useSelector((state) => state.stateA);
  const { stateadd, loading, error } = stateA;

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addState(name));
  };
  useEffect(() => {
    if (stateadd) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, stateadd]);
  
  return (
    <div>
    <form className="form" onSubmit={submitHandler}>
      <div>
        <h1>Add State</h1>
      </div>
      {loading && <LoadingBox></LoadingBox>}
      {error && <MessageBox variant="danger">{error}</MessageBox>}
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="State"
          placeholder="Enter state"
          required
          onChange={(e) => setName(e.target.value)}
        ></input>
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
