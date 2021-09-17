import { BsFillPersonFill } from "react-icons/bs";
import { BsGrid1X2 } from "react-icons/bs";
import { BsPeople } from "react-icons/bs";
import { BsClipboardData } from "react-icons/bs";
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
import React from "react";

import { BsX } from "react-icons/bs";

export default function Sidebar({ sidebar, setSidebar }) {
  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      <nav
        className={sidebar ? "side-menu active" : "side-menu"}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <ul className="side-menu-items">
          <li className="sidebar-toggle">
            <BsX className="icon-button" onClick={showSidebar} />
          </li>
          <li>
            <Link
              to="/profile"
              className="links"
              onClick={() => setSidebar(false)}
            >
              <BsFillPersonFill /> <h1>Profile</h1>
            </Link>
          </li>
          <li>
            <Link
              to="/my-sites"
              className="links"
              onClick={() => setSidebar(false)}
            >
              <BsGrid1X2 /> <h1>My sites</h1>
            </Link>
          </li>
          <li>
            <Link
              to="/contacts"
              className="links"
              onClick={() => setSidebar(false)}
            >
              <BsPeople /> <h1>Contacts</h1>
            </Link>
          </li>
          <li>
            <Link
              to="/study"
              className="links"
              onClick={() => setSidebar(false)}
            >
              <BsClipboardData /> <h1>Study</h1>
            </Link>
          </li>
          <li>
            <Link
              to="/payment"
              className="links"
              onClick={() => setSidebar(false)}
            >
              <BsBag /> <h1>Payment</h1>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
