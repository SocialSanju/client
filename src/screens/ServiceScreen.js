import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addService } from '../actions/serviceActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import axios from 'axios';

export default function ServiceScreen(props) {
  const [title, setTitle] = useState('');
  const [service_Group, setService_Group] = useState('');
  const [serviceGroup, setServiceGroup] = useState([]);

  useEffect(async () => {
    await axios.get('http://127.0.0.1:8080/api/serviceGroup/list').then((res) => {
        setServiceGroup(res.data);
    })
}, [])

  const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';

  const addS = useSelector((state) => state.addS);
  const { serviceAdd, loading, error } = addS;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addService(title, service_Group));
  };
  useEffect(() => {
    if (serviceAdd) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, serviceAdd]);
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Add Service</h1>
        </div>
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            placeholder="Enter Title"
            required
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </div>

        <div>
      <label>Select Service Group</label>
      <select name="Service_Group" id="Service_Group" onChange={(e) => setService_Group(e.target.value)}>
                                <option>---Select---</option>
                                    {serviceGroup && serviceGroup.map((obj) => {
                                        return <option value={obj._id}>{obj.service_group_title}</option>
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
