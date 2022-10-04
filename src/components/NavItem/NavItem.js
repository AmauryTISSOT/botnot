import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavItem.css";

const NavItem = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <Link className="icon-button" to={props.to} onClick={() => setOpen(!open)}>
        {props.name}
      </Link>
      {open && props.children}
    </li>
  );
};

export default NavItem;


//TODO: on click outside the menu => close the menu