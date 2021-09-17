import React from "react";
import Menus from "../layout/Menus";

export default function Main({ sidebar, setSidebar, open, setOpen }) {
  return (
    <div>
      <Menus
        sidebar={sidebar}
        setSidebar={setSidebar}
        open={open}
        setOpen={setOpen}
      />
    </div>
  );
}
