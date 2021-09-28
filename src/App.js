import React,{useState} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contacts from './components/pages/Contacts';
import Main from './components/pages/Main';
import Auth from './components/pages/Auth';
import Study from './components/pages/Study';
import Profile from './components/pages/Profile';
import MySites from './components/pages/MySites';
import Payment from './components/pages/Payment';
import Post from './components/pages/Post';
import {MenusContext} from "./Context"
function App() {
  const [sidebar, setSidebar]= useState(false)
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);
  const [sex, setSex] = useState("Male");
const handleClick = ()=>{
  setSidebar(false);
  setOpen(false);
  setActive(false);
}

  return (
    <MenusContext.Provider value={{sidebar, setSidebar, open, setOpen, active, setActive,sex, setSex}}>
    <div className="wrapper" onClick={handleClick}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Auth />
        </Route>

        <Route path="/main">
          <Main/>
        </Route>

        <Route path="/contacts">
          <Contacts/>
        </Route>

        <Route path="/study">
          <Study/>
        </Route>

        <Route path="/post/:id" >
          <Post />
        </Route>

        <Route path="/profile">
          <Profile/>
        </Route>

        <Route path="/my-sites">
          <MySites/>
        </Route>

        <Route path="/payment">
          <Payment/>
        </Route>

        <Route path="*">
          <Auth />
        </Route>

      </Switch>
    

    </Router>
    </div>
    </MenusContext.Provider>
  );
}

export default App;
