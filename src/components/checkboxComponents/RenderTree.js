import React, { useState } from "react";
import plusValues from "../../data/data";

const RenderTree = ({
  dataState,
  setDataState,
  treeSubmit,
  setTreeSubmit,
}) => {
  const [ouiCheckedState, setOuiCheckedState] = useState(
    new Array(plusValues[0].tree.length).fill(false)
  );
  const [nonCheckedState, setNonCheckedState] = useState(
    new Array(plusValues[0].tree.length).fill(false)
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("data", dataState);
    setTreeSubmit(!treeSubmit);
  };

  const handleOuiCheck = (position) => {
    const updatedCheckedState = ouiCheckedState.map((item, index) =>
      index === position ? !item : item
    );

    setOuiCheckedState(updatedCheckedState);
  };

  const handleNonCheck = (position) => {
    const updatedCheckedState = nonCheckedState.map((item, index) =>
      index === position ? !item : item
    );

    setNonCheckedState(updatedCheckedState);
  };

  const sendData = (event) => {
    setDataState([...dataState, { [event.target.id]: event.target.value }]);
  };

  return (
    <div>
      {plusValues.map((item, index) => (
        <form key={index} onSubmit={handleSubmit}>
          {item.tree.map((tree, index) => (
            <div key={index}>
              <h3>{tree.question}</h3>
              <div>
                <label>
                  <input
                    onChange={(e) => {
                      handleOuiCheck(index);
                      sendData(e);
                    }}
                    type="checkbox"
                    checked={ouiCheckedState[index]}
                    id={tree.id}
                    value={true}
                  />
                  oui
                </label>
                <label>
                  <input
                    onChange={(e) => {
                      handleNonCheck(index);
                      sendData(e);
                    }}
                    type="checkbox"
                    checked={nonCheckedState[index]}
                    id={tree.id}
                    value={false}
                  />
                  non
                </label>
              </div>
            </div>
          ))}
          <br />
          <input type="submit" />
        </form>
      ))}
    </div>
  );
};

export default RenderTree;
