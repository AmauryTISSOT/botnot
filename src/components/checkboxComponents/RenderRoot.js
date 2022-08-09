import React, { useState } from "react";
import plusValues from "../../data";

const RenderRoot = ({ dataState, setDataState, rootSubmit, setRootSubmit }) => {
  const [ouiChecked, setOuiChecked] = useState(false);
  const [nonChecked, setNonChecked] = useState(false);

  const handleCheck = (event) => {
    event.target.name === "oui"
      ? setOuiChecked(!ouiChecked)
      : setNonChecked(!nonChecked);

    setDataState([...dataState, { [event.target.id]: event.target.value }]);
    setRootSubmit(!rootSubmit);
  };

  return (
    <div>
      {plusValues.map((item, index) => (
        <div key={index}>
          <h3>{item.root.question}</h3>
          <div>
            <label>
              <input
                onChange={(e) => {
                  handleCheck(e);
                }}
                type="checkbox"
                checked={ouiChecked}
                value={true}
                name="oui"
                id={item.root.id}
              />
              oui
            </label>
            <label>
              <input
                onChange={(e) => {
                  handleCheck(e);
                }}
                type="checkbox"
                name="non"
                checked={nonChecked}
                value={false}
                id={item.root.id}
              />
              non
            </label>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RenderRoot;
