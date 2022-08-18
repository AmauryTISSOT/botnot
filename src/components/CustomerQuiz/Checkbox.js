import React, { useState } from "react";

const Checkbox = ({ questionID, customerQuizState, setCustomerQuizState }) => {
  // Hook state for "oui" checkbox : generate an array base on quiz length
  const [ouiCheckedState, setOuiCheckedState] = useState(false);

  // Hook state for "non" checkbox : generate an array base on quiz length
  const [nonCheckedState, setNonCheckedState] = useState(false);

  // Handle "oui" checkbox : update the state based on the index of the current question
  const handleOuiCheck = (position) => {
    const updatedOuiCheckedState = ouiCheckedState.map((item, index) =>
      index === position ? !item : item
    );
    const updatedNonCheckedState = nonCheckedState.map((item, index) =>
      index === position ? (item = false) : item
    );

    setOuiCheckedState(updatedOuiCheckedState);
    setNonCheckedState(updatedNonCheckedState);
  };

  // Handle "non" checkbox : update the state based on the index of the current question
  const handleNonCheck = (position) => {
    const updatedNonCheckedState = nonCheckedState.map((item, index) =>
      index === position ? !item : item
    );

    const updatedOuiCheckedState = ouiCheckedState.map((item, index) =>
      index === position ? (item = false) : item
    );
    setNonCheckedState(updatedNonCheckedState);
    setOuiCheckedState(updatedOuiCheckedState);
  };

  // Function who send on dataState clicked ID : clicked value
  //   const sendDataOnClick = (event) => {
  //     setDataState((prev) => ({
  //       ...prev,
  //       [event.target.id]: event.target.value,
  //     }));
  //     displayArray[event.target.id] = true;

  return (
    <div>
      <label>
        <input
          onChange={(e) => {
          }}
          type="checkbox"
          data-testid="oui-checkbox"
          checked={ouiCheckedState}
          id={questionID}
          value={true}
        />
        oui
      </label>
      <label>
        <input
          onChange={(e) => {
          }}
          type="checkbox"
          data-testid="non-checkbox"
          checked={nonCheckedState}
          id={questionID}
          value={false}
        />
        non
      </label>
    </div>
  );
};

export default Checkbox;
