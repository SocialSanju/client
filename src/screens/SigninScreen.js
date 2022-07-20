import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signin } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function SigninScreen(props) {
  const [user_id, setUser_id] = useState('');

  const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(user_id));
  };
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Sign In</h1>
        </div>
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        <div>
          <label htmlFor="mobileno">Mobile No</label>
          <input
            type="text"
            id="user_id"
            placeholder="Enter mobile no"
            required
            onChange={(e) => setUser_id(e.target.value)}
          ></input>
        </div>
       
        <div>
          <label />
          <button className="primary" type="submit">
            Log In
          </button>
        </div>
        <div>
          <label />
          <div>
            New user? <Link to={`/register?redirect=${redirect}`}>Create your account</Link>
          </div>
        </div>
      </form>
    </div>
  );
}
