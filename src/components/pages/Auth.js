import React, { useState } from "react";
import Sex from "../layout/Sex";
import { BsFillCaretDownFill } from "react-icons/bs";
import { Link } from "react-router-dom";
export default function Login() {
  const [state, setState] = useState(false);
  const [sex, setSex] = useState("Male");
  const [active, setActive] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setState(!state);
  };

  if (state === false)
    return (
      <div className="login-container">
        <Link to="/main" className="title">
          <h1>Title</h1>
        </Link>
        <div className="login-body">
          <form onSubmit={handleSubmit} className="login-form profile-forms">
            <h1>Sign up</h1>
            <input type="text" placeholder="Nickname*" required minLength="4" maxLength="32"></input>
            <br />

            <input type="password" placeholder="Password*" required minLength="4" maxLength="32"></input>
            <br />

            <input type="email" placeholder="Email*" required minLength="4" maxLength="32"></input>
            <br />

            <input type="text" placeholder="Name*" required minLength="4" maxLength="32"></input>
            <br />

            <input type="text" placeholder="Second name*" required minLength="4" maxLength="32"></input>
            <br />
            <div
              className="sex-option"
              onClick={() => {
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
                classname="sex-block"
              />
            )}

            <br />

            <button type="submit">Enter</button>
            <span
        
              onClick={() => {
                setState(!state);
              }}
            >
              Already have an account? Log in
            </span>
          </form>
        </div>
      </div>
    );
  if (state === true)
    return (
      <div className="login-container">
      <Link to="/main" className="title">
        <h1>Title</h1>
      </Link>
      <div className="login-body">
        <form className="login-form profile-forms">
          <h1>Login</h1>
          <input type="password" placeholder="Password*" required minLength="4" maxLength="32"></input>
          <br />
          <input type="email" placeholder="Email*" required minLength="4" maxLength="32"></input>
          <br />
          <button type="submit">Enter</button>
          <span
            onClick={() => {
              setState(!state);
            }}>
            New? Sign Up
          </span>
        </form>
      </div>
      </div>
    );
}
