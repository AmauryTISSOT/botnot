import React, { useState } from "react";
import Assainissement from "./Assainissement";
import AvantageFiscal from "./AvantageFiscal";
import Chauffage from "./Chauffage";
import ContratSurBien from "./ContratSurBien";
import EtatSolPollution from "./EtatSolPollution";
import PlusValues from "./PlusValues";
import Pret from "./Pret";
import Servitude from "./Servitude";
import SituationBatiment from "./SituationBatiment";
import SituationTerrain from "./SituationTerrain";
import Submit from "./Submit/Submit";
import CustomerQuizSummary from "./CustomerQuizSummary/CustomerQuizSummary";
import DossierName from "./DossierName/DossierName";
import ClientName from "./ClientName/ClientName";
import AdresseDuBien from "./AdresseDuBien/AdresseDuBien";

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
