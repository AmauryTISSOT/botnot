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
        <div>
          <label>Nom du dossier</label>
          <input
            type="text"
            id="dossierNom"
            placeholder="Nom"
            data-testid="dossierNom"
            onChange={(e) => onFillHandler(e)}
          />
        </div>
        <div>
          <label>Référence du dossier</label>
          <input
            type="text"
            id="dossierReference"
            placeholder="Référence"
            data-testid="dossierReference"
            onChange={(e) => onFillHandler(e)}
          />
        </div>
      </form>
    </>
  );
};

export default DossierName;
