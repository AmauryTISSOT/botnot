import React from "react";

const DateInput = ({ setState }) => {
  const sendDateValueToState = (event) => {
    setState((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  //TODO: change the input display to dd/mm/yyyy ?

  return (
    <>
      <form>
        <label htmlFor="dateAcquisition">Entrez la date d'acquisition</label>
        <input
          type="date"
          id="dateAcquisition"
          name="dateAcquisition"
          data-testid="dateAcquisition"
          onChange={(e) => sendDateValueToState(e)}
        />
        <label htmlFor="dateVente">Entrez la date de vente prévue</label>
        <input
          type="date"
          id="dateVente"
          name="dateVente"
          data-testid="dateVente"
          onChange={(e) => sendDateValueToState(e)}
        />
      </form>
    </>
  );
};

export default DateInput;
