import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import FriendList from '../FriendList/FriendList';
import FriendRequest from '../FriendRequest/FriendRequest';
import InviteFriend from '../InviteFriend/InviteFriend';
import Login from '../Login/Login';
import Logout from '../Login/Logout';
import useToken from './useToken';

function App() {
  const { token, setToken } = useToken();
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
