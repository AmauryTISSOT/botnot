import React from "react";
import Checkbox from "./Checkbox";

const Sinistre = ({ customerState, setCustomerState }) => {
  return (
    <>
      <h1>SINISTRE INDEMNISE</h1>
      <div>
        Y'a t-il eu une indemnisation d'assurance d'un sinistre survenue suite à
        un evenement reconnu comme catastrophe naturelle ?
      </div>
      <Checkbox
        questionID="sinistreCatastropheNaturelle"
        customerQuizState={customerState}
        setCustomerQuizState={setCustomerState}
      />
    </>
  );
};

export default Sinistre;
