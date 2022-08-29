import React from "react";

// Submit button component : first props = the state value name / second props = the setState hook
const Submit = ({ valueName, setState }) => {
  const handleClick = () => {
    setState(valueName);
  };

  return (
    <>
      <button onClick={handleClick}>Submit</button>
    </>
  );
};

export default Submit;
