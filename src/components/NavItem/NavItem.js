import React, { useState } from "react";
import "./NavItem.css";

const NavItem = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <div href="123" className="icon-button" onClick={() => setOpen(!open)}>
        {props.name}
      </div>
      {open && props.children}
    </li>
  );
};

export default NavItem;


//TODO: on click outside the menu => close the menu