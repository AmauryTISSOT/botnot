import React, { useState } from "react";
import plusValues from "../data";

const CheckBoxRendering = () => {
  const [checked, setChecked] = useState("");
  const [data, setData] = useState([]);

  const handleCheck = (event) => {
    setChecked(event.target.value);
    setData([...data, plusValues[0].data[event.target.value]])
  };

  return (
    <div>
      {plusValues.map((item, index) => (
        <div key={index}>
          <h1>{item.title}</h1>
          <h2>{item.question}</h2>
          {item.binaryAnswer.map((NestItem, index) => (
            <label key={index}>
              {NestItem}
              <input type="checkbox" value={NestItem} onChange={handleCheck}/>
            </label>
          ))}
        </div>
      ))}
      <p>Debug checked hook : {checked}</p>
    </div>
  );
};

export default CheckBoxRendering;
