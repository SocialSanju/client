import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function HomeScreen(props) {
  const [name, setName] = useState([]);

  useEffect(async () => {
    await axios.get('http://54.242.166.223:8080/api/enquiry/all').then((res) => {
        setName(res.data);
    })
}, [])

  return (
    <>
    <div className='container'>
       <Link to='/enquiry'><h2 style={{ fontSize:'20px'}}>Enquiry</h2></Link>
      <Link to='/account'><h2 style={{ fontSize:'20px'}}>Account</h2></Link>
      <Link to='/account_group'><h2 style={{ fontSize:'20px'}}>Account Group</h2></Link>
      <Link to='/product'><h2 style={{ fontSize:'20px'}}>Product</h2></Link>
      <Link to='/productGroup'><h2 style={{ fontSize:'20px'}}>Product Group</h2></Link>
      <Link to='/services'><h2 style={{ fontSize:'20px'}}>Services</h2></Link>
      <Link to='/serviceGroup'><h2 style={{ fontSize:'20px'}}>Service Group</h2></Link>
      <Link to='/state'><h2 style={{ fontSize:'20px'}}>State</h2></Link>
      <Link to='/district'><h2 style={{ fontSize:'20px'}}>District</h2></Link>
      <Link to='/taluka'><h2 style={{ fontSize:'20px'}}>Taluka</h2></Link>
   
    <div className='table'>
      <table responsive>
      <thead>
                    <tr>
                        <th>ID</th> 
                        <th>Date</th>    
                        <th>EnqID</th>             
                        <th>Name</th>    
                                 
                    </tr>
      </thead>
      <tbody>
          {                    
                    name.map((obj) =>
                     (
                            <tr key={obj._id}>
                            <td>{obj._id}</td>
                            <td>{obj.createdAt}</td>
                            <td>{obj.Name}</td>   
                            <td></td>                     
                            <td>
                            <button
                                type="button"
                                className="small"
                                onClick={() =>props.history.push(`/order/${obj._id}/edit`)}
                            >
                              Edit
                            </button>
                            <button
                               type="button"
                               className="small"
                               
                            >
                              Delete
                            </button>
                            </td>
                        </tr>                                  
                    ))
                }
        </tbody>
      </table>
    </div>
    </div>
    </>
  );
}
