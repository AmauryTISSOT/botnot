import React from "react";

const DossierName = ({ setState }) => {
  const onFillHandler = (event) => {
    setState((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };
  return (
    <>
      <form>
        <label>Nom du dossier</label>
        <input
          type="text"
          id="dossierNom"
          placeholder="Nom"
          onChange={(e) => onFillHandler(e)}
        />
        <label>Référence du dossier</label>
        <input
          type="text"
          id="dossierReference"
          placeholder="Référence"
          onChange={(e) => onFillHandler(e)}
        />
      </form>
    </>
  );
};

export default DossierName;
