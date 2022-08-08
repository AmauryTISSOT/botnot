import React, { useState } from "react";
import plusValues from "../data";

const mockData = [
  { id: 1, name: "Alice", pets: ["dog", "cat"] },
  { id: 2, name: "Bob", pets: ["turtle", "rabbit"] },
  { id: 3, name: "Carl", pets: ["hamster", "parrot"] },
];

const CheckBoxRendering = () => {
  const [checked, setChecked] = useState("");
  const [data, setData] = useState([]);

  const handleCheck = (event) => {
    setChecked(event.target.value);
    // setData([...data, { [event.target.id]: event.target.value }]);
  };

  const Title = () => {
    return (
      <div>
        {plusValues.map((item, index) => (
          <h1 key={index}>{item.title}</h1>
        ))}
      </div>
    );
  };

  const RenderRoot = () => {
    return (
      <div>
        {plusValues.map((item, index) => (
          <div key={index}>
            <h3>{item.root.question}</h3>
            <div>
              <label>
                <input
                  onChange={handleCheck}
                  type="checkbox"
                  value={true}
                  id={item.root.id}
                />
                oui
              </label>
              <label>
                <input
                  onChange={handleCheck}
                  type="checkbox"
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

  const RenderTree = () => {
    return (
      <div>
        {plusValues.map((item, index) => (
          <div key={index}>
            {item.tree.map((tree, index) => (
              <div key={index}>
                <h3>{tree.question}</h3>
                <div>
                  <label>
                    <input
                      onChange={handleCheck}
                      type="checkbox"
                      value={true}
                      id={tree.id}
                    />
                    oui
                  </label>
                  <label>
                    <input
                      onChange={handleCheck}
                      type="checkbox"
                      value={false}
                      id={tree.id}
                    />
                    non
                  </label>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <Title />
      <RenderRoot />
      <RenderTree />
    </div>
  );
};

export default CheckBoxRendering;
