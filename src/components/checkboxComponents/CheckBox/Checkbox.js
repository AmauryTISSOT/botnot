import React, { useState } from "react";

const Checkbox = ({ questionID, customerQuizState, setCustomerQuizState }) => {
  // Hook state for "oui" checkbox
  const [ouiCheckedState, setOuiCheckedState] = useState(false);

  // Hook state for "non" checkbox
  const [nonCheckedState, setNonCheckedState] = useState(false);

  // Handle "oui" checkbox logic
  const handleOuiCheck = (position) => {
    setOuiCheckedState(!ouiCheckedState);
    setNonCheckedState(false);
  };

  // Handle "non" checkbox logic
  const handleNonCheck = (position) => {
    setNonCheckedState(!nonCheckedState);
    setOuiCheckedState(false);
  };

  // Function who return true if the key exist in object
  const keyExists = (obj, key) => {
    if (!obj || (typeof obj !== "object" && !Array.isArray(obj))) {
      return false;
    } else if (obj.hasOwnProperty(key)) {
      return true;
    } else if (Array.isArray(obj)) {
      for (let i = 0; i < obj.length; i++) {
        const result = keyExists(obj[i], key);
        if (result) {
          return result;
        }
      }
    } else {
      for (const k in obj) {
        const result = keyExists(obj[k], key);
        if (result) {
          return result;
        }
      }
    }

    return false;
  };

  //Function who send on dataState clicked ID : clicked value
  const sendDataOnClick = (event) => {
    if (!keyExists(customerQuizState, event.target.id)) {
      setCustomerQuizState((prev) => ({
        ...prev,
        [event.target.id]: event.target.value,
      }));
    }
  };

  return (
    <div>
      <label>
        <input
          onChange={(e) => {
            handleOuiCheck();
            sendDataOnClick(e);
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
            handleNonCheck();
            sendDataOnClick(e);
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
