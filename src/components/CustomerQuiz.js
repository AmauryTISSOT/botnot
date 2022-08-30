import React, { useState } from "react";
import Assainissement from "./CustomerQuiz/Assainissement";
import AvantageFiscal from "./CustomerQuiz/AvantageFiscal";
import Chauffage from "./CustomerQuiz/Chauffage";
import ContratSurBien from "./CustomerQuiz/ContratSurBien";
import EtatSolPollution from "./CustomerQuiz/EtatSolPollution";
import PlusValues from "./CustomerQuiz/PlusValues";
import Pret from "./CustomerQuiz/Pret";
import Servitude from "./CustomerQuiz/Servitude";
import SituationBatiment from "./CustomerQuiz/SituationBatiment";
import SituationTerrain from "./CustomerQuiz/SituationTerrain";
import Submit from "./CustomerQuiz/Submit";
import CustomerQuizSummary from "./CustomerQuiz/CustomerQuizSummary";
import DossierName from "./CustomerQuiz/DossierName";
import ClientName from "./CustomerQuiz/ClientName";
import AdresseDuBien from "./CustomerQuiz/AdresseDuBien";

const CustomerQuiz = () => {
  // Customer quiz state hook
  const [customerQuizState, setCustomerQuizState] = useState("");

  // Hook who handle the summary rendering
  const [showSummary, setShowSummary] = useState(false);

  return (
    <>
      {!showSummary ? (
        <div className="App">
          <DossierName setState={setCustomerQuizState} />
          <ClientName setState={setCustomerQuizState} />
          <AdresseDuBien setState={setCustomerQuizState} />

          <SituationTerrain
            customerState={customerQuizState}
            setCustomerState={setCustomerQuizState}
          />
          <EtatSolPollution
            customerState={customerQuizState}
            setCustomerState={setCustomerQuizState}
          />
          <Servitude
            customerState={customerQuizState}
            setCustomerState={setCustomerQuizState}
          />
          <Assainissement
            customerState={customerQuizState}
            setCustomerState={setCustomerQuizState}
          />
          <SituationBatiment
            customerState={customerQuizState}
            setCustomerState={setCustomerQuizState}
          />
          <ContratSurBien
            customerState={customerQuizState}
            setCustomerState={setCustomerQuizState}
          />
          <AvantageFiscal
            customerState={customerQuizState}
            setCustomerState={setCustomerQuizState}
          />
          <Chauffage
            customerState={customerQuizState}
            setCustomerState={setCustomerQuizState}
          />
          <Pret
            customerState={customerQuizState}
            setCustomerState={setCustomerQuizState}
          />
          <PlusValues
            customerState={customerQuizState}
            setCustomerState={setCustomerQuizState}
          />
          <Submit valueName={true} setState={setShowSummary} />
        </div>
      ) : (
        <div className="App">
          <CustomerQuizSummary dataState={customerQuizState} />
        </div>
      )}
    </>
  );
};

export default CustomerQuiz;
