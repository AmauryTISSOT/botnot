import React, { useState } from "react";
import CopyPasteElement from "../CopyPasteElement/CopyPasteElement";

const EmailVariable = (props) => {
  const [inputState, setInputState] = useState("");

  // function who send input data to state
  const onFillHandler = (event) => {
    setInputState((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  // function who return html if boolean = true
  //return email string if boolean = false
  const depotGarantieMail = (boolean) => {
    if (boolean) {
      return (
        <>
          <label htmlFor="garantie">Dépôt de garantie</label>
          <input
            type="text"
            data-testid="depot"
            placeholder="0,00 €"
            onChange={onFillHandler}
            id="garantie"
          />
          <label htmlFor="provision">Provision sur frais</label>
          <input
            type="text"
            data-testid="provision"
            placeholder="500,00 €"
            onChange={onFillHandler}
            id="provision"
          />
          <label htmlFor="pret">Condition suspensive de prêt ?</label>
          <select id="pret" data-testid="pret" onChange={onFillHandler}>
            <option value="">--Sélectionner une option--</option>
            <option value="oui" data-testid="pretOui">
              Oui
            </option>
            <option value="non" data-testid="pretNon">
              Non
            </option>
          </select>
          <label htmlFor="sru">Délai de rétractation à purger ?</label>
          <select id="sru" data-testid="sru" onChange={onFillHandler}>
            <option value="">--Sélectionner une option--</option>
            <option value="oui" data-testid="sruOui">
              Oui
            </option>
            <option value="non" data-testid="sruNon">
              Non
            </option>
          </select>
          <label htmlFor="instrumentaire">
            Sommes nous notaire instrumentaire ?
          </label>
          <select
            id="instrumentaire"
            data-testid="instrumentaire"
            onChange={onFillHandler}
          >
            <option value="">--Sélectionner une option--</option>
            <option value="oui" data-testid="instrumentaireOui">
              Oui
            </option>
            <option value="non" data-testid="instrumentaireNon">
              Non
            </option>
          </select>
        </>
      );
    } else
      return `Bonjour, le montant du dépot de garantie
    est de : ${inputState.garantie} et le montant de la provision
    sur frais est de : ${inputState.provision}`;
  };

  //TODO: add comment + default value + error handling

  const switchLogic = (key) => {
    switch (key) {
      case "garantie":
        return (
          <>
            {depotGarantieMail(true)}
            <CopyPasteElement content={depotGarantieMail(false)} />
          </>
        );

      default:
        return null;
    }
  };

  return <>{switchLogic(props.emailValue)}</>;
};

export default EmailVariable;
