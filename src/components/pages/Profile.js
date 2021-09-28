import React, { useState, useContext } from "react";
import Menus from "../layout/Menus";
import { BsPeopleCircle } from "react-icons/bs";
import Sex from "../layout/Sex";
import { BsFillCaretDownFill } from "react-icons/bs";
import {MenusContext} from "../../Context"
export default function Profile() {

  const { active, setActive, sex, setSex } = useContext(MenusContext)
  return (
    <>
      <Menus/>
      <form className="info-block">
        <div className="main-info">
          <div className="profile-image">
            <div className="contacts-image">
              <BsPeopleCircle />
            </div>
            <button type="submit">Enter</button>
          </div>
          <div className=" profile-forms personal-info">
            <label htmlFor="name" className="labels">
              Name*
            </label>
            <input type="text" required id="name" minLength="4" maxLength="32"></input>
            <label htmlFor="second-name" className="labels">
              Second name*
            </label>
            <input type="text" required id="second-name" minLength="4" maxLength="32"></input>
            <label htmlFor="mail" className="labels">
              Mail*
            </label>
            <input type="email" required id="mail" minLength="4" maxLength="32"></input>
            <label htmlFor="sex" className="labels">
              Sex*
            </label>
            <div
              className="sex-option"
              onClick={(e) => {
                e.stopPropagation();
                setActive(!active);

              }}
            >
              {sex}
              <BsFillCaretDownFill style={{ marginLeft: "auto" }} />
            </div>
            {active && (
              <Sex
                active={active}
                setActive={setActive}
                sex={sex}
                setSex={setSex}
                classname="profile-sex"
              />
            )}
          </div>
        </div>

        <div className="additional-info profile-forms">
          <label htmlFor="add-info" className="labels">
            Additional info*
          </label>
          <input type="text" id="add-info" required minLength="4" maxLength="32"></input>
        </div>
        <div className="refs profile-forms">
          <label htmlFor="refs" className="labels">
            Reference*
          </label>
          <input type="text" id="refs" required minLength="4" maxLength="32"></input>
          <label htmlFor="vk" className="labels">
            VK*
          </label>
          <input type="text" id="vk" required minLength="4" maxLength="32"></input>
          <label htmlFor="facebook" className="labels">
            Facebook*
          </label>
          <input type="text" id="facebook" required minLength="4" maxLength="32"></input>
          <label htmlFor="instagram" className="labels">
            Instagram*
          </label>
          <input type="text" id="instagram" required minLength="4" maxLength="32"></input>
          <label htmlFor="" className="labels">
            Telegram*
          </label>
          <input type="text" id="whatsup" required minLength="4" maxLength="32"></input>
          <label htmlFor="" className="labels">
            WhatsApp*
          </label>
          <input type="text" id="whatsup" required minLength="4" maxLength="32"></input>
        </div>
      </form>
    </>
  );
}
