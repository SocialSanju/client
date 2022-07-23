import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import SigninScreen from './screens/SigninScreen';
import RegisterScreen from './screens/RegisterScreen';
import { signout } from './actions/userActions';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
import Account_GroupScreen from './screens/Account_GroupScreen';
import AccountScreen from './screens/AccountScreen';
import OrderScreen from './screens/OrderScreen';

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
                <Route path="/account_group" component={Account_GroupScreen}></Route>
                <Route path="/account" component={AccountScreen}></Route>
                <Route path="/order" component={OrderScreen}></Route>
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
