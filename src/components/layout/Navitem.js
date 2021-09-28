import React,{useContext} from "react";
import { BsPeopleCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { BsList } from "react-icons/bs";
import {MenusContext} from "../../Context"

export default function Navitem({children}) {
  const { sidebar, setSidebar, open, setOpen } = useContext(MenusContext)

  const showSidebar = (e) => {
    e.stopPropagation()
    setSidebar(!sidebar)
    setOpen(false)
  }
  const handleClick=(e)=>{
    e.stopPropagation()
    setOpen(!open)
    setSidebar(false)

  }
  return (
    <>
   
      <div className="navbar-content">
        <BsList className="icon-button sidebar-icon" onClick={showSidebar} />
     
        <Link to="/main" className="title">
     <h1 >Title</h1>   
     </Link>
        <BsPeopleCircle
          className="icon-button"
          onClick={handleClick}
        />
      </div>
      {open && children}
    </>
  );
}
