import React from "react";
import keyExists from "../../../../utils/KeyExists/KeysExists";
import "./CustomerQuizSummary.css";

// This component render a summary of the CustomerQuiz state.
const CustomerQuizSummary = ({ dataState }) => {
  const situationTerrainAnswer = {
    situationTerrainLotissement: "Le bien dépend d'un lotissement",
    situationTerrainAssociationSyndicale: "Il existe une association syndicale",
    situationTerrainCoordonneeAssociation: "textArea",
    situationTerrainCoproHorizontale:
      "Le bien dépend d'une copropriété horizontale",
    situationTerrainCoproHorizontaleNomSyndic: "Nom et adresse du syndic :",
    situationTerrainBornage:
      "Le terrain a fait l'objet d'un procès-verbal de bornage",
  };

  const EtatSolPollutionAnswer = {
    EtatSolActivitePolluante:
      "Le vendeur a effectué des activités polluantes sur le bien",
    EtatSolActivitePolluantePasse:
      "Des activités polluantes ont été effectués sur le bien par le passé",
    EtatSolActivitePolluanteVoisinage:
      "Il existe des activités polluantes dans le voisinage",
    EtatSolCarriere: "Il existe une carrière souterraine sous le bien",
    EtatSolZoneInondable: "Le bien est situé en zone inondable",
  };

  const servitudeAnswer = {
    servitude: "Une servitude grève le bien",
    servitudeNom: "textArea",
  };

  const assainissementAnswer = {
    assainissementSytemeIndividuel:
      "L'assainissement du bien s'effectue par un système individuel (fosse septique)",
    assainissementDateVidange: "textArea",
    assainissementRaccordementEgout: "Le bien est raccordé au tout à l'égout",
    assainissementMiseDemeure:
      "Le vendeur a reçu une mise en demeure d'effectuer des travaux sur son installation",
  };

  const situationBatimentAnswer = {
    situationBatimentConstructionInitiale:
      "Le vendeur a fait construire le bâtiment vendu",
    situationBatimentConstructionInitiale10ans:
      "La construction initiale a moins de 10 ans",
    situationBatimentConstructionInitialeDommageOuvrage:
      "Le vendeur a souscrit une assurance dommage-ouvrage",
    situationBatimentTravauxPost:
      "Des travaux postérieurs à la construction initiale ont été effectués par le vendeur",
    situationBatimentTravauxPostAutorisation:
      "Ces travaux postérieurs à la construction ont fait l'objet d'autorisations d'urbanisme",
  };

  const contratSurBienAnswer = {
    contratBienLibre: "Le bien sera libre le jour de la vente",
    contratLocationRecente: "Le bien a été loué précédemment",
    contratAffichage:
      "Il existe un contrat d'affichage publicitaire sur le bien",
    contratDetecteurFumee: "Le bien est équipé d'un détecteur de fumée",
    contratAutres: "Il existe d'autres contrats sur le bien",
    contratAutresNom: "textArea",
    contratEquipementGarantie:
      "Certains équipements font encore l'object de garanties",
    contratEquipementNom: "textArea",
    contratProcedure:
      "Le vendeur est partie à une procédure judicaire sur le bien vendu",
  };

  const avantageFiscalAnswer = {
    avantageFiscal: "Le bien fait l'objet d'un avantage fiscal",
    avantageFiscalNom: "textArea",
  };

  const chauffageAnswer = {
    chauffageCuveMazout: "Le bien possède une cuve à mazout",
    chauffageDeVille: "Le bien est raccordé au gaz de ville",
    chauffageCiterne: "Le bien est raccordé à une citerne à gaz",
    chauffageCiterneProprietaire:
      "Le vendeur est propriétaire de la citerne à gaz",
    chauffageCiterneLocataire: "Le vendeur est locataire de la citerne à gaz",
    chauffageCiterneCoordonnee: "textArea",
  };

  const pretAnswer = {
    pretHypotheque: "Le vendeur a souscrit une hypothèque sur le bien",
    pretCreditRelais:
      "Le vendeur a souscrit un crédit-relais dans l'attente de la vente du bien",
    pretProcedure:
      "Une procédure de saisie immobilière est en cours sur le bien",
  };

  const plusValuesAnswer = {
    plusValuesResidencePrincipale:
      "Le bien constitue la résidence principale du vendeur",
    plusValueRemploi:
      "Le vendeur envisage de remployer le prix de vente dans l'achat de sa résidence principale",
    plusValueRetraiteInvalide: "Le vendeur est retraité ou invalide",
    plusValueTravaux: "Le vendeur a effectué des travaux sur le bien",
  };

  const sinistreAnswer = {
    sinistreCatastropheNaturelle:
      "Le vendeur a été indemnisé suite à un sinistre reconnu comme catastrophe naturelle",
  };

  const displayAnswer = (answerObject) => {
    // buffer array
    let displayArray = [];

    const dataStateKeysArray = Object.keys(dataState);

    // this part loop all the keys of dataState and see if they match the keys in answerObject
    dataStateKeysArray.forEach((dataKeys) => {
      if (keyExists(answerObject, dataKeys)) {
        // if true : push answerObject correpondent value to displayArray
        if (dataState[dataKeys] === "true" || dataState[dataKeys] === true) {
          displayArray.push(answerObject[dataKeys]);
        }

        // this piece of code handle the "textArea" state
        if (
          dataState[dataKeys] !== "true" &&
          dataState[dataKeys] !== true &&
          dataState[dataKeys] !== "false" &&
          dataState[dataKeys] !== false &&
          dataState[dataKeys] !== undefined
        ) {
          displayArray.push(`${answerObject[dataKeys]} ${dataState[dataKeys]}`);
        }
      }
    });
    return displayArray.map((item, keys) => <div key={keys}>{item}</div>);
  };


  //FIXME: CSS grid 
  return (
    <div className="customerquizsummary-container">
      <h1>Nom du dossier : {dataState.dossierNom}</h1>
      <div className="customerquizsummary-dossier">
        <div>Référence du dossier : {dataState.dossierReference}</div>
        <div>
          Nom du client : {dataState.clientPrenom} {dataState.clientNom}
        </div>

        <div>
          Adresse du bien : {dataState.bienAdresse}
          {dataState.bienCodePostal} - {dataState.bienCommune}
        </div>
      </div>
      <div className="customerquizsummary-info">
        <h2>Situation du terrain</h2>
        <>{displayAnswer(situationTerrainAnswer)}</>
        <h2>Etat du sous-sol - pollutions</h2>
        <>{displayAnswer(EtatSolPollutionAnswer)}</>
        <h2>Servitudes</h2>
        <>{displayAnswer(servitudeAnswer)}</>
        <h2>Assainissement</h2>
        <>{displayAnswer(assainissementAnswer)}</>
        <h2>Situation du bâtiment</h2>
        <>{displayAnswer(situationBatimentAnswer)}</>
        <h2>Contrats existant sur le bien</h2>
        <>{displayAnswer(contratSurBienAnswer)}</>
        <h2>Avantage fiscal</h2>
        <>{displayAnswer(avantageFiscalAnswer)}</>
        <h2>Chauffage</h2>
        <>{displayAnswer(chauffageAnswer)}</>
        <h2>Prêts - hypothèques</h2>
        <>{displayAnswer(pretAnswer)}</>
        <h2>Plus-values</h2>
        <>{displayAnswer(plusValuesAnswer)}</>
        <h2>Sinistre</h2>
        <>{displayAnswer(sinistreAnswer)}</>
      </div>
    </div>
  );
};

export default CustomerQuizSummary;
