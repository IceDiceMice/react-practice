import React, { useContext } from "react";
import Dropdownitem from "./Dropdownitem";
import { Link } from "react-router-dom";
import { MenusContext } from "../../Context";

export default function Dropdownmenu() {
  const { setOpen } = useContext(MenusContext); /*  */
  const handleClick = () => {
    setOpen(false);
  };
  return (
    <div
      className="dropdown"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <ul>
        <Dropdownitem>
          <Link to="/profile" className="links" onClick={handleClick}>
            <h1>Profile</h1>
          </Link>
        </Dropdownitem>
        <Dropdownitem>
          <Link to="/my-sites" className="links" onClick={handleClick}>
            <h1>My sites</h1>
          </Link>
        </Dropdownitem>
        <Dropdownitem>
          <Link to="/contacts" className="links" onClick={handleClick}>
            <h1>Contacts</h1>
          </Link>
        </Dropdownitem>
        <Dropdownitem>
          <Link to="/study" className="links" onClick={handleClick}>
            <h1>Study</h1>
          </Link>
        </Dropdownitem>
        <Dropdownitem>
          <Link to="/payment" className="links" onClick={handleClick}>
            <h1>Payment</h1>
          </Link>
        </Dropdownitem>
        <Dropdownitem>
          <Link to="/" className="logout" onClick={handleClick}>
            <h1>Log Out</h1>
          </Link>
        </Dropdownitem>
      </ul>
    </div>
  );
}
