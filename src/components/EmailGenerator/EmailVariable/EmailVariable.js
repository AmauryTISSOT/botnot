import React, { useState } from "react";
import CopyPasteElement from "../CopyPasteElement/CopyPasteElement"

const EmailVariable = () => {
  const [inputState, setInputState] = useState("");

  const onFillHandler = (event) => {
    setInputState((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  const depotGarantie = `Bonjour, le montant du dépot de garantie
    est de : ${inputState.garantie} et le montant de la provision
    sur frais est de : ${inputState.provision}`;

  return (
    <>
      <label>Dépôt de garantie</label>
      <input
        type="text"
        data-testid="depot"
        placeholder="0,00 €"
        onChange={onFillHandler}
        id="garantie"
      />
      <label>Provision sur frais</label>
      <input
        type="text"
        data-testid="provision"
        placeholder="500,00 €"
        onChange={onFillHandler}
        id="provision"
      />
      <CopyPasteElement content={depotGarantie}/>
    </>
  );
};

export default EmailVariable;
