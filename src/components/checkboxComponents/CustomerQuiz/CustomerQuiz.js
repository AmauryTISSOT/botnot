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
import "./CustomerQuiz.css";

const CustomerQuiz = () => {
  // Customer quiz state hook
  const [customerQuizState, setCustomerQuizState] = useState("");

  // Hook who handle the summary rendering
  const [showSummary, setShowSummary] = useState(false);

  return (
    <>
      {!showSummary ? (
        <div className="customerquiz-container">
          <div className="customerquiz-form">
            <div className="customerquiz-form-left">
              <DossierName setState={setCustomerQuizState} />
              <div>
                <br></br>
              </div>
              <ClientName setState={setCustomerQuizState} />
            </div>
            <div className="customerquiz-form-right">
              <AdresseDuBien setState={setCustomerQuizState} />
            </div>
          </div>
          <div className="customerquiz-grid">
            <div>
              <SituationTerrain
                customerState={customerQuizState}
                setCustomerState={setCustomerQuizState}
              />
            </div>
            <div>
              <EtatSolPollution
                customerState={customerQuizState}
                setCustomerState={setCustomerQuizState}
              />
            </div>
            <div>
              <Servitude
                customerState={customerQuizState}
                setCustomerState={setCustomerQuizState}
              />
            </div>
            <div>
              <Assainissement
                customerState={customerQuizState}
                setCustomerState={setCustomerQuizState}
              />
            </div>
            <div>
              <SituationBatiment
                customerState={customerQuizState}
                setCustomerState={setCustomerQuizState}
              />
            </div>
            <div>
              <ContratSurBien
                customerState={customerQuizState}
                setCustomerState={setCustomerQuizState}
              />
            </div>
            <div>
              <AvantageFiscal
                customerState={customerQuizState}
                setCustomerState={setCustomerQuizState}
              />
            </div>
            <div>
              <Chauffage
                customerState={customerQuizState}
                setCustomerState={setCustomerQuizState}
              />
            </div>
            <div>
              <Pret
                customerState={customerQuizState}
                setCustomerState={setCustomerQuizState}
              />
            </div>
            <div>
              <PlusValues
                customerState={customerQuizState}
                setCustomerState={setCustomerQuizState}
              />
            </div>
          </div>
          <div className="customerquiz-submit-wrap">
            <Submit valueName={true} setState={setShowSummary} />
          </div>
        </div>
      ) : (
        <div>
          <CustomerQuizSummary dataState={customerQuizState} />
        </div>
      )}
    </>
  );
};

export default CustomerQuiz;
