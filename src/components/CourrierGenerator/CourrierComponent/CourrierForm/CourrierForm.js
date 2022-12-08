import React, { useState } from "react";

const CourrierForm = () => {
  const [courrierInput, setCourrierInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setCourrierInput(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Etat-civil du vendeur : <i>(copier-coller le paragraphe)</i>
        <input type="text" name="name" />
      </label>
      <button value="Submit">Submit</button>
    </form>
  );
};

export default CourrierForm;
