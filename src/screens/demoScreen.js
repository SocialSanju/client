import React, { useEffect } from 'react';
import Product from '../components/acgroup';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { grouplist } from '../actions/accountActions';

export default function HomeScreen(props) {
  const dispatch = useDispatch();
  const acgrouplist = useSelector((state) => state.acgrouplist);
  const { loading, error, details } = acgrouplist;

  

  useEffect(() => {
    dispatch(grouplist({}));
 
  }, [dispatch]);


  return (
    <div>
      
      <h2>Featured Products</h2>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          {details.length === 0 && <MessageBox>No Product Found</MessageBox>}
          <div className="row center">
            {details.map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
          </div>
       
        </>
      )}
     
    </div>
  );
}
