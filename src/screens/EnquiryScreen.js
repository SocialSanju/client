import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addEnquiry } from '../actions/enquiryActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function OrderScreen(props) {
  const [name, setName] = useState('');
  const [acName, setAcName] = useState([]);
  const [enqId, setEnqID] = useState([]);
  const [selectedName, setSelectedName] = useState([]);
  const [getID, setID] = useState([]);

  useEffect(async () => {
    await axios.get('http://13.233.98.188:8080/api/account/all').then((res) => {
        setEnqID(res.data);
    })
}, [])



const na = [...new Set(enqId.map(item => item.AccountID))];
na.sort();


const handleID = (e) => {
  const getName = enqId.filter(Name => Name.AccountID === e.target.value);
  getName.sort();
  console.log(getName);
  setAcName(getName);

}





  const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';

 
  const addDetails = useSelector((state) => state.addDetails);
  const { enquiryAdd, loading, error } = addDetails;

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addEnquiry(enqId, name));
  };
  useEffect(() => {
    if (enquiryAdd) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, enquiryAdd]);
  
  return (
    <div>
    <form className="form" onSubmit={submitHandler}>
      <div>
        <h1>New Enquiry</h1>
      </div>
      {loading && <LoadingBox></LoadingBox>}
      {error && <MessageBox variant="danger">{error}</MessageBox>}
      <div>
        <label htmlFor="enqid">Enquiry ID</label>
        <select name="EnqID" id="EnqID" onChange={(e) => handleID(e)}>
             {na.map((obj) => <option key={obj} value={getID}>{obj}</option>)}
         </select>
      </div>
      <div>
        <label htmlFor="name">Name</label>
        <select name="Name" id="Name" onChange={(e) => setName(e.target.value)}>
                                    {acName.map((obj) => {
                                        return <option value={selectedName}>{obj}</option>
                                    })
                                    }
                                </select>
      </div>
  
    <Link to='account'> <h1 style={{textAlign : 'right'}}> Add New</h1> </Link>
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
