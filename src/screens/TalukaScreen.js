import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTaluka } from '../actions/talukaActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import axios from 'axios';

export default function TalukaScreen(props) {
  const [name, setName] = useState('');
  const [sid, setSID] = useState('');
  const [did, setDID] = useState('');
 
  const [state, setState] = useState([]);
  const [district, setDistrict] = useState([]);

  useEffect(async () => {
    await axios.get('http://127.0.0.1:8080/api/state/all').then((res) => {
        setState(res.data);
    })
}, [])

useEffect(async () => {
  await axios.get('http://127.0.0.1:8080/api/district/all').then((res) => {
      setDistrict(res.data);
  })
}, [])



  const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';

 
    const talukaA = useSelector((state) => state.talukaA);
    const { talukaadd, loading, error } = talukaA;

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addTaluka(name, sid, did));
  };
  useEffect(() => {
    if (talukaadd) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, talukaadd]);
  
  return (
    <div>
    <form className="form" onSubmit={submitHandler}>
      <div>
        <h1>Add Taluka</h1>
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
      <label>Select District</label>
      <select name="DID" id="DID" onChange={(e) => setDID(e.target.value)}>
                                <option>---Select---</option>
                                    {district && district.map((obj) => {
                                        return <option value={obj.DID}>{obj.Name}</option>
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
