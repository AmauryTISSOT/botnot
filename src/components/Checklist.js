import plusValues from "../data";
import React, { useState } from "react";
import CheckBoxRendering from "./CheckBoxRendering";

const Checklist = () => {
//   const [checked, setChecked] = useState([]);

//   // Add/Remove checked item from list
//   const handleCheck = (event) => {
//     let updatedList = [...checked];
//     if (event.target.checked) {
//       updatedList = [...checked, event.target.value];
//     } else {
//       updatedList.splice(checked.indexOf(event.target.value), 1);
//     }
//     setChecked(updatedList);
//   };

  return (
    <div className="App">
        <CheckBoxRendering/>
    </div>
  );
};

export default Checklist;
