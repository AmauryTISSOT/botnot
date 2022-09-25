import React, { useState } from "react";
import "./NavItem.css"

const NavItem = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="123" className="icon-button" onClick={() => setOpen(!open)}>
        {props.name}
      </a>

      {open && props.children}
    </li>
  );
};

export default NavItem;
