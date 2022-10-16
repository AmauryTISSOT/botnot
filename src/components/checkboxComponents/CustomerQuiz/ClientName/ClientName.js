import React from "react";

const ClientName = ({ setState }) => {
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
          <label>Nom du client</label>
          <input
            type="text"
            id="clientNom"
            placeholder="Nom"
            data-testid="clientNom"
            onChange={(e) => onFillHandler(e)}
          />
        </div>
        <div>
          <label>Prénom(s) du client</label>
          <input
            type="text"
            id="clientPrenom"
            data-testid="clientPrenom"
            placeholder="Prénom(s)"
            onChange={(e) => onFillHandler(e)}
          />
        </div>
      </form>
    </>
  );
};

export default ClientName;
