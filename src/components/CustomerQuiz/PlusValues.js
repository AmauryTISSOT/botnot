import React from "react";
import Checkbox from "./Checkbox";

const PlusValues = ({ customerState, setCustomerState }) => {
  return (
    <>
      <h1>PLUS-VALUES</h1>
      <div>Le bien vendu constitue-t-il votre résidence principale ?</div>
      <Checkbox
        questionID="plusValuesResidencePrincipale"
        customerQuizState={customerState}
        setCustomerQuizState={setCustomerState}
      />
      <div>
        Le vendez-vous pour remployer le prix dans l'achat de votre résidence
        principale ?
      </div>
      <Checkbox
        questionID="plusValueRemploi"
        customerQuizState={customerState}
        setCustomerQuizState={setCustomerState}
      />
      <div>Etes-vous retraité ou invalide de condition modeste ?</div>
      <Checkbox
        questionID="plusValueRetraiteInvalide"
        customerQuizState={customerState}
        setCustomerQuizState={setCustomerState}
      />
      <div>
        Si le bien n'est pas actuellement votre résidence principale, avez-vous
        effectué des travaux de surélévation, de construction ou d'amélioration
        ?
      </div>
      <Checkbox
        questionID="plusValueTravaux"
        customerQuizState={customerState}
        setCustomerQuizState={setCustomerState}
      />
    </>
  );
};

export default PlusValues;
