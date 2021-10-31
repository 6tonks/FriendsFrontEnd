import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import FriendList from './components/AppBody/FriendList/FriendList';
import FriendRequest from './components/AppBody/FriendRequest/FriendRequest';
import InviteFriend from './components/AppBody/InviteFriend/InviteFriend';
import Login from './components/Login/Login';
import Logout from './components/Login/Logout';

function App() {
  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <Router>
      <div className="app">
      <Header />
            <div className="app__body">
                <Sidebar />
                <Switch>
                  <Route path="/login" exact component={Login} />
                  <Route path="/friends" exact component={FriendList} />
                  <Route path="/friends/requests" exact component={FriendRequest} />
                  <Route path="/friends/invite" exact component={InviteFriend} />
                  <Route path="/logout" exact component={Logout} />
                </Switch>
                { /* Widget */ }
            </div>
      </div>
    </Router>
  );
}

export default App;
