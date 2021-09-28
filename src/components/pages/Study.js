import React from "react";
import Menus from "../layout/Menus";
import { BsPeopleCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Study() {
  const id = 5;
  return (
    <>
      <Menus/>
      <div className="study-body">
        <div className="study-card">
          <div className="contacts-image">
            <BsPeopleCircle />
          </div>
          <div className="card-content">
            <p className="card-date">June 22, 2021 7:30 PM</p>
            <h3 className="card-title">Introduction to the system</h3>
            <p className="card-description">
              Hello, this is the first educational post about system and what it
              does
            </p>
            <p className="key-words">Education</p>
            <Link to={`/post/${id}`}>
              <button type="submit">Details</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
