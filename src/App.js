import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import SigninScreen from './screens/SigninScreen';
import RegisterScreen from './screens/RegisterScreen';
import { signout } from './actions/userActions';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
import AccountGroupScreen from './screens/Account_GroupScreen';
import AccountScreen from './screens/AccountScreen';
import ServiceScreen from './screens/ServiceScreen';
import ServiceGroupScren from './screens/service_GroupScren';
import ProductScreen from './screens/ProductScreen';
import ProductGroupScreen from './screens/ProductGroupScreen';

function App() {
 
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
 

  return (
    <BrowserRouter>    
   
            {
              userInfo ? (
                <>
                <Route path="/account_group" component={AccountGroupScreen}></Route>
                <Route path="/account" component={AccountScreen}></Route>
                <Route path="/services" component={ServiceScreen}></Route>
                <Route path="/serviceGroup" component={ServiceGroupScren}></Route>
                <Route path="/productGroup" component={ProductGroupScreen}></Route>
                <Route path="/product" component={ProductScreen}></Route>
                <ul>
                  <li>
                  <Link to="#signout" onClick={signoutHandler}>
                    Logout
                  </Link>
                  </li>
                </ul>
              </>
              ) :
              (
                <Link to="/signin">Login</Link>
              )} 
             
              {
                userInfo && userInfo.admin && (
                  <>
                    <Route path="/userlist" component={UserListScreen}></Route>
                    <Route path="/user/:id/edit" component={UserEditScreen}></Route>
                  </>
                )
              }      
 
      <Route path="/signin" component={SigninScreen}></Route>
      <Route path="/register" component={RegisterScreen}></Route>
      <Route path="/" component={HomeScreen} exact></Route>
  
</BrowserRouter>
  );
}

export default App;
