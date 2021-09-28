import React from "react";
import Sidebar from "./Sidebar";
import Navbarmenu from "./Navbar";
import Navitem from "./Navitem";
import Dropdownmenu from "./Dropdownmenu";

export default function Menus() {
  
  return (
    <div >
      <Navbarmenu>
        <Navitem>
          <Dropdownmenu />
        </Navitem>
      </Navbarmenu>
      <Sidebar />
    </div>
  );
}
