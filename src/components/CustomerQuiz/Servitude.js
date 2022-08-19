import React from "react";
import Checkbox from "./Checkbox";
import TextArea from "./TextArea";

const Servitude = ({ customerState, setCustomerState }) => {
  return (
    <>
      <h1>SERVITUDES</h1>
      <div>
        Avez-vous connaissance de servitudes particulières sur votre propriété ?
      </div>
      <Checkbox
        questionID="servitude"
        customerQuizState={customerState}
        setCustomerQuizState={setCustomerState}
      />
      <p><i>Si oui, savez-vous qui a la charge de son entretien ?</i></p>
      <TextArea
        questionID="servitudeNom"
        customerQuiz={customerState}
        setCustomerQuiz={setCustomerState}
      />
    </>
  );
};

export default Servitude;
