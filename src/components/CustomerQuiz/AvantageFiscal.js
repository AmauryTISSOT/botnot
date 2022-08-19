import React from "react";
import Checkbox from "./Checkbox";
import TextArea from "./TextArea";

const AvantageFiscal = ({ customerState, setCustomerState }) => {
  return (
    <>
      <h1>AVANTAGE FISCAL</h1>
      <div>
        Le bien a-t-il fait l'objet d'un engagement de location lié à un
        aventage fiscal ? (lois Besson, Malraux, Robien, Duflot, Pinel...
        subventions ANAH)
      </div>
      <Checkbox
        questionID="avantageFiscal"
        customerQuizState={customerState}
        setCustomerQuizState={setCustomerState}
      />
      <p><i>Si oui, lequel :</i></p>
      <TextArea
        questionID="avantageFiscalNom"
        customerQuiz={customerState}
        setCustomerQuiz={setCustomerState}
      />
    </>
  );
};

export default AvantageFiscal;
