import { BsFillPersonFill } from "react-icons/bs";
import { BsGrid1X2 } from "react-icons/bs";
import { BsPeople } from "react-icons/bs";
import { BsClipboardData } from "react-icons/bs";
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
import React from "react";

export default function Sidebarmenu() {
  return (
    <div>
      <ul className="header-body">
        <li>
          <Link to="/contacts" className="links">
            <h1>Contacts</h1>
          </Link>
        </li>
        <li>
          <Link to="/study" className="links">
            <h1>Study</h1>
          </Link>
        </li>
        <li>
          <Link to="/profile" className="links">
            <h1>Profile</h1>
          </Link>
        </li>
        <li>
          <Link to="/my-sites" className="links">
            <h1>My sites</h1>
          </Link>
        </li>
        <li>
          <Link to="/payment" className="links">
            <h1>Payment</h1>
          </Link>
        </li>
      </ul>
    </div>
  );
}
