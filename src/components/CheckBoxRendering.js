import React, { useState } from "react";
import plusValues from "../data";

const CheckBoxRendering = () => {
  const [data, setData] = useState([]);
  const [ouiCheckedState, setOuiCheckedState] = useState(
    new Array(plusValues[0].tree.length).fill(false)
  );
  const [nonCheckedState, setNonCheckedState] = useState(
    new Array(plusValues[0].tree.length).fill(false)
  );

  const [submit, setSubmit] = useState(false);

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
                  // onChange={handleCheck}
                  type="checkbox"
                  value={true}
                  id={item.root.id}
                />
                oui
              </label>
              <label>
                <input
                  // onChange={handleCheck}
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
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log("data", data);
      console.log(submit);
      setSubmit(!submit);
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
      setData([...data, { [event.target.id]: event.target.value }]);
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

  return (
    <div>
      <Title />
      {/* <RenderRoot /> */}
      {submit ? <div>submit = true</div> : <RenderTree />}
    </div>
  );
};

export default CheckBoxRendering;
