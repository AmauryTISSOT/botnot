import React from "react";
import Checkbox from "../CheckBox/Checkbox";

const Pret = ({ customerState, setCustomerState }) => {
  return (
    <>
      <h1>PRETS-HYPOTHEQUES</h1>
      <div>
        Avez-vous soucrit un ou plusieurs prêts avec hypothèques sur le bien à
        vendre ?
      </div>
      <Checkbox
        questionID="pretHypotheque"
        customerQuizState={customerState}
        setCustomerQuizState={setCustomerState}
      />
      <div>
        Avez-vous un crédit-relais dans l'attente de la vente de ce bien ?
      </div>
      <Checkbox
        questionID="pretCreditRelais"
        customerQuizState={customerState}
        setCustomerQuizState={setCustomerState}
      />
      <div>
        Une procédure de saisie immobilière est-elle en cours sur le bien à
        vendre ?
      </div>
      <Checkbox
        questionID="pretProcedure"
        customerQuizState={customerState}
        setCustomerQuizState={setCustomerState}
      />
    </>
  );
};

export default Pret;
