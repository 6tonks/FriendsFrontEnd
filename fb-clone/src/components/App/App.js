import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import FriendList from '../FriendList/FriendList';
import FriendRequest from '../FriendRequest/FriendRequest';
import InviteFriend from '../InviteFriend/InviteFriend';
import Login from '../Login/Login';
import useToken from './useToken';
import useUser from './useUser';
import MoneyAccount from '../MoneyManagement/MoneyAccount';
import SidebarMoney from '../SidebarMoney/SidebarMoney';

function App() {
  const { token, setToken } = useToken();
  const { user, getUserID, setUser } = useUser();
  if(!token) {
    return <Login setToken={setToken} setUser={setUser}/>
  }

  return (
    <Router>
      <div className="app">
      <Header />
          <Switch>
              <Route path="/login" exact component={Login} />
              <Route path="/friends" exact >
                <div className="app__body">
                  <Sidebar />
                  <FriendList/>
                </div>
              </Route>
              <Route path="/friends/requests" exact >
                <div className="app__body">
                  <Sidebar />
                  <FriendRequest/>
                </div>
              </Route>
              <Route path="/friends/invite" exact >
                <div className="app__body">
                  <Sidebar />
                  <InviteFriend/>
                </div>
              </Route>
              <Route path="/money" exact>
                <div className="app__body">
                  <SidebarMoney/>
                  <MoneyAccount/>
                </div>
              </Route>
          </Switch>
            
      </div>
    </Router>
  );
}

export default App;
