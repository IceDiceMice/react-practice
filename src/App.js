import './App.scss';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contacts from './components/Contacts';
import Main from './components/Main';
import Auth from './components/Auth';
import Study from './components/Study';
import Profile from './components/Profile';
import MySites from './components/MySites';
import Payment from './components/Payment';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Auth />
        </Route>

        <Route path="/main">
          <Main />
        </Route>

        <Route path="/contacts">
          <Contacts />
        </Route>

        <Route path="/study">
          <Study />
        </Route>

        <Route path="/profile">
          <Profile />
        </Route>

        <Route path="/my-sites">
          <MySites />
        </Route>

        <Route path="/payment">
          <Payment />
        </Route>

        <Route path="*">
          <Auth />
        </Route>

      </Switch>
    

    </Router>
  );
}

export default App;
