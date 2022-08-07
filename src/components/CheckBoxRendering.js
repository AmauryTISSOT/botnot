import React, { useState } from "react";
import plusValues from "../data";

const Title = () => {
  return (
    <div>
      {plusValues.map((item, index) => (
        <h1 key={index}>{item.title}</h1>
      ))}
    </div>
  );
};

const RenderTree = () => {
  return (
    <div>
      {plusValues[0][0].map((item, index) => (
        <h3 key={index}>{item.question}</h3>
      ))}
    </div>
  );
};

const BinaryCheckbox = () => {
  return (
    <div>
      <label>
        <input type="checkbox" value={true} />
        oui
      </label>
      <label>
        <input type="checkbox" value={false} />
        non
      </label>
    </div>
  );
};

const CheckBoxRendering = () => {
  const [checked, setChecked] = useState("");
  const [data, setData] = useState([]);

  const handleCheck = (event) => {
    setChecked(event.target.value);
    setData([...data, plusValues[0].data[event.target.value]]);
  };

  return (
    <div>
      <Title />
      <RenderTree />
      <BinaryCheckbox />
    </div>
  );
};

export default CheckBoxRendering;

{
  /* {plusValues.map((item, index) => (
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
<p>Debug checked hook : {checked}</p> */
}
