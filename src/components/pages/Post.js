import React from "react";
import Menus from "../layout/Menus";
import { BsPeopleCircle } from "react-icons/bs";

export default function Post({ sidebar, setSidebar, open, setOpen }) {
  return (
    <div>
      <Menus
        sidebar={sidebar}
        setSidebar={setSidebar}
        open={open}
        setOpen={setOpen}
      />
      <div className="post-container">
        <div className="post-header">
          <div className="post-info">
            <div className="contacts-image">
              <BsPeopleCircle />
            </div>
            <div className="card-content post-card">
              <h3 className="card-title">Introduction to the system</h3>
              <p className="card-description">
                Hello, this is the first educational post about system and what
                it does
              </p>
              <p className="key-words">Education</p>
            </div>
          </div>
        </div>
        <div className="post-content">
          <p>June 22, 2021 7:30 PM</p>
          <hr />
          <div
            className="content-body"
            dangerouslySetInnerHTML={{ __html: "Some content" }}
          ></div>
        </div>
      </div>
    </div>
  );
}
