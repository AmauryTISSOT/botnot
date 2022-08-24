import React from "react";

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
