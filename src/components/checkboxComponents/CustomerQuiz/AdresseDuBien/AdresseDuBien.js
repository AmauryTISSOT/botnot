import React from "react";

const AdresseDuBien = ({ setState }) => {
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
          <label>Numéro et nom de rue</label>
          <input
            type="text"
            id="bienAdresse"
            data-testid="bienAdresse"
            placeholder="Adresse"
            onChange={(e) => onFillHandler(e)}
          />
        </div>
        <div>
          <label>Code postal</label>
          <input
            type="text"
            id="bienCodePostal"
            data-testid="bienCodePostal"
            placeholder="Code postal"
            onChange={(e) => onFillHandler(e)}
          />
        </div>
        <div>
          <label>Nom de la commune</label>
          <input
            type="text"
            id="bienCommune"
            data-testid="bienCommune"
            placeholder="Commune"
            onChange={(e) => onFillHandler(e)}
          />
        </div>
      </form>
    </>
  );
};

export default AdresseDuBien;
