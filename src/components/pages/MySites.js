import React, { useState } from "react";
import Menus from "../layout/Menus";
import { AiFillCaretDown } from "react-icons/ai";
import { BsClipboard } from "react-icons/bs";
import { BsBoxArrowUpRight } from "react-icons/bs";
import Clipboard from "../layout/Clipboard";

export default function MySites() {
  const [active, setActive] = useState(false);
  const [close, setClose] = useState(false);
  const [move, setMove] = useState(false);
  const moveHandler = () => {
    setMove(true);
    setTimeout(() => setMove(false), 2000);
  };
  return (
    <>
      <Menus/>
      <div className="mysites-block">
        <div className="mysites-form">
          <div className="mysites-header">
            Call
            <AiFillCaretDown
              onClick={() => setActive(!active)}
              className={active ? "open-icon active" : "open-icon"}
            />
          </div>
          <div className={active ? "mysites-body active" : "mysites-body"}>
            <div className="body-items">
              <span>WebSite</span>
              <span>Reference</span>
              <div className="body-icons"> </div>
            </div>
            <div className="body-items">
              <span>Name</span>
              <span>Ref</span>
              <div className="body-icons">
                <span className="icons-body">
                  <BsClipboard onClick={moveHandler} />
                </span>
                <span className="icons-body">
                  <BsBoxArrowUpRight />
                </span>
              </div>
            </div>
          </div>
          <div className="mysites-header">
            Call
            <AiFillCaretDown
              onClick={() => setClose(!close)}
              className={close ? "open-icon active" : "open-icon"}
            />
          </div>
          <div className={close ? "mysites-body active" : "mysites-body"}>
            <div className="body-items">
              <span>WebSite</span>
              <span>Reference</span>
              <div className="body-icons"> </div>
            </div>
            <div className="body-items">
              <span>Name</span>
              <span>Ref</span>
              <div className="body-icons">
                <span className="icons-body">
                  <BsClipboard onClick={moveHandler} />
                </span>
                <span className="icons-body">
                  <BsBoxArrowUpRight />
                </span>
              </div>
            </div>
          </div>
        </div>
        <Clipboard move={move} setMove={setMove} />
      </div>
    </>
  );
}
