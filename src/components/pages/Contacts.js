import React, { useState } from "react";
import Menus from "../layout/Menus";
import { AiFillCaretDown } from "react-icons/ai";
import { BsPeopleCircle } from "react-icons/bs";

export default function Contacts() {
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(false);
  const [active, setActive] = useState(false);
  const HandleFirstClick = () => {
    setFirst(true);
    setSecond(false);
    setActive(false);
  };
  const HandleSecondClick = () => {
    setFirst(false);
    setSecond(true);
    setActive(false);
  };
  return (
    <>
      <Menus/>
      <div className="contacts-body">
        <div className="tabs-header">
          <div className="tabs-bar">
            <span
              className={first ? "refs-tab active" : "refs-tab"}
              onClick={HandleFirstClick}
            >
              Referrals
            </span>
            <span
              className={second ? "refs-tab active" : "refs-tab"}
              onClick={HandleSecondClick}
            >
              Landing contacts
            </span>
            <span className="refs-tab" style={{ color: "rgb(167, 161, 161)" }}>
              Side contacts
            </span>
          </div>
        </div>

        {first && (
          <div className="info-wrapper">
            <div className="contacts-header">
              Dima
              <AiFillCaretDown
                onClick={() => setActive(!active)}
                className={active ? "open-icon active" : "open-icon"}
              />
            </div>
            <div className={active ? "contacts-info active" : "contacts-info"}>
              <div className="contact-container">
                <div className="contacts-image">
                  <BsPeopleCircle />
                </div>
                <div className="contact-inputs">
                  <label htmlFor="nickname" className="labels">
                    Nickname*
                  </label>
                  <input id="nickname" type="text"></input>
                  <label htmlFor="full-name" className="labels">
                    Fullname*
                  </label>
                  <input id="full-name" type="text"></input>
                  <label htmlFor="mail" className="labels">
                    Mail*
                  </label>
                  <input id="mail" type="email"></input>
                </div>
              </div>
              <div className="notes-form">
             
                <label htmlFor="notes" className="labels">
                  Notes*
                </label>
                <div className="notes-form-input">
                <input id="notes" type="text"></input>
                <button type="submit">Enter</button>
              </div>
               
              </div>
            </div>
          </div>
        )}
        {second && (
          <div className="info-wrapper">
            <div className="contacts-header">
              Sasha
              <AiFillCaretDown
                onClick={() => setActive(!active)}
                className={active ? "open-icon active" : "open-icon"}
              />
            </div>
            <div className={active ? "contacts-info active" : "contacts-info"}>
              <div className="contact-container">
                <div className="contacts-image">
                  <BsPeopleCircle />
                </div>
                <div className="contact-inputs">
                  <label htmlFor="name" className="labels">
                    Name*
                  </label>
                  <input id="name" type="text"></input>
                  <label htmlFor="ref" className="labels">
                    Reference*
                  </label>
                  <input id="ref" type="text"></input>
                  <label htmlFor="number" className="labels">
                    Telnumber*
                  </label>
                  <input id="number" type="text"></input>
                  <label htmlFor="mail" className="labels">
                    Mail*
                  </label>
                  <input id="mail" type="email"></input>
                </div>
              </div>
              <div className="notes-form">
             
                <label htmlFor="notes" className="labels">
                  Notes*
                </label>
                <div className="notes-form-input">
                <input id="notes" type="text"></input>
                <button type="submit">Enter</button>
              </div>
               
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
