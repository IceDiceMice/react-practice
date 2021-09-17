import React,{useState} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contacts from './components/pages/Contacts';
import Main from './components/pages/Main';
import Auth from './components/pages/Auth';
import Study from './components/pages/Study';
import Profile from './components/pages/Profile';
import MySites from './components/pages/MySites';
import Payment from './components/pages/Payment';
import Post from './components/pages/Post'
function App() {
  const [sidebar, setSidebar]= useState(false)
  const [open, setOpen] = useState(false);
const handleClick = ()=>{
  setSidebar(false);
  setOpen(false)
}
  return (
    <div className="wrapper" onClick={handleClick}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Auth />
        </Route>

        <Route path="/main">
          <Main sidebar={sidebar} setSidebar={setSidebar} open={open} setOpen={setOpen}/>
        </Route>

        <Route path="/contacts">
          <Contacts sidebar={sidebar} setSidebar={setSidebar} open={open} setOpen={setOpen}/>
        </Route>

        <Route path="/study">
          <Study sidebar={sidebar} setSidebar={setSidebar} open={open} setOpen={setOpen}/>
        </Route>

        <Route path="/post/:id" >
          <Post sidebar={sidebar} setSidebar={setSidebar} open={open} setOpen={setOpen}/>
        </Route>

        <Route path="/profile">
          <Profile sidebar={sidebar} setSidebar={setSidebar} open={open} setOpen={setOpen}/>
        </Route>

        <Route path="/my-sites">
          <MySites sidebar={sidebar} setSidebar={setSidebar} open={open} setOpen={setOpen}/>
        </Route>

        <Route path="/payment">
          <Payment sidebar={sidebar} setSidebar={setSidebar} open={open} setOpen={setOpen}/>
        </Route>

        <Route path="*">
          <Auth />
        </Route>

      </Switch>
    

    </Router>
    </div>
  );
}

export default App;
