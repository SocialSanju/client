import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addDistrict } from '../actions/districtActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import axios from 'axios';

export default function DistrictScreen(props) {
  const [name, setName] = useState('');
  const [sid, setSID] = useState('');
 
  const [state, setState] = useState([]);

  useEffect(async () => {
    await axios.get('http://13.233.98.188:8080/api/state/all').then((res) => {
        setState(res.data);
    })
}, [])



  const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';

 
    const districtA = useSelector((state) => state.districtA);
    const { districtadd, loading, error } = districtA;

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addDistrict(name, sid));
  };
  useEffect(() => {
    if (districtadd) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, districtadd]);
  
  return (
    <div>
    <form className="form" onSubmit={submitHandler}>
      <div>
        <h1>Add Account</h1>
      </div>
      {loading && <LoadingBox></LoadingBox>}
      {error && <MessageBox variant="danger">{error}</MessageBox>}
      
 
      <div>
      <label>Select State</label>
      <select name="SID" id="SID" onChange={(e) => setSID(e.target.value)}>
                                <option>---Select---</option>
                                    {state && state.map((obj) => {
                                        return <option value={obj.SID}>{obj.Name}</option>
                                    })
                                    }
                                </select>
      </div>

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
        <label />
        <button className="primary" type="submit">
          Save
        </button>
      </div>
    </form>
  </div>
  );
}
