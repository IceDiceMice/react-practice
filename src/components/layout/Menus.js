import React from "react";
import Sidebar from "./Sidebar";
import Navbarmenu from "./Navbar";
import Navitem from "./Navitem";
import Dropdownmenu from "./Dropdownmenu";

export default function Menus({sidebar,setSidebar,open,setOpen}) {
  
  return (
    <div >
      <Navbarmenu>
        <Navitem sidebar={sidebar} setSidebar={setSidebar} open={open} setOpen={setOpen}>
          <Dropdownmenu setOpen={setOpen}/>
        </Navitem>
      </Navbarmenu>
      <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
    </div>
  );
}
