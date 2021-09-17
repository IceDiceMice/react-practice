import React, { useState } from "react";
import Menus from "../layout/Menus";
import Modal from "../layout/Modal";

export default function Payment({ sidebar, setSidebar, open, setOpen }) {
  const [activeModal, setActiveModal] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setActiveModal(true);
    setTimeout(() => setActiveModal(false), 2000);
  };
  const arr = [
    {
      title: "Basic",
      price: "~ 275₴",
      period: 1,
      addText: "9,90$ / 1 month",
      description: ["Full access for 1 month"],
    },
    {
      title: "Maximum",
      subheader: "Most popular",
      price: "~ 2 199₴",
      period: 12,
      addText: "79,90$ / 12 month",
      description: ["Full access for 12 month"],
    },
    {
      title: "Standard",
      price: "~ 1 249₴",
      period: 6,
      addText: "44,90$ / 6 month",
      description: ["Full access for 6 month"],
    },
  ];

  return (
    <>
      <Menus
        sidebar={sidebar}
        setSidebar={setSidebar}
        open={open}
        setOpen={setOpen}
      />
      <div className="payment-container">
        <h1>Tariffs</h1>
        <p className="payment-text">
          Quickly build an effective pricing table for your potential customers
          with this layout. It's built with default Material-UI components with
          little customization.
        </p>
        <div className="payment-body">
          {arr.map((i) => (
            <div className="payment-form" key={i.period.toString()}>
              <div className="payment-header">
                <span>{i.title}</span>
                <span style={{ fontSize: "17px", color: "rgb(167, 161, 161)" }}>
                  {i.subheader}
                </span>
              </div>
              <div className="payment-info">
                <div>
                  <h2>{i.price}</h2>
                </div>
                <hr />
                <div>
                  <p>{i.addText}</p>
                </div>
                <hr />
                <div>
                  <p>{i.description}</p>
                </div>
              </div>
              <div className="payment-footer">
                <button type="submit" onClick={handleSubmit}>
                  Enter
                </button>
              </div>
            </div>
          ))}
        </div>
        <Modal active={activeModal} />
      </div>
    </>
  );
}
