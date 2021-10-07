import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import FriendList from './components/AppBody/FriendList/FriendList';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app__body">
            <Sidebar />
            <Switch>
              <Route path="/friends" exact component={FriendList} />
            </Switch>
            { /* Widget */ }
        </div>
      </div>
    </Router>
  );
}

export default App;
