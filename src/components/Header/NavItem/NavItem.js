import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./NavItem.css";

const NavItem = (props) => {
  const [open, setOpen] = useState(false);

  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (open && ref.current && !ref.current.contains(e.target)) {
        setOpen(!open);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [open]);

  return (
    <li className="nav-item" ref={ref}>
      <Link
        className="icon-button"
        to={props.to}
        onClick={() => setOpen(!open)}
      >
        {props.name}
      </Link>
      {open && props.children}
    </li>
  );
};

export default NavItem;

//TODO: on click outside the menu => close the menu
