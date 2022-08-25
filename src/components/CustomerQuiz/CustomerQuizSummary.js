import React from "react";

const CustomerQuizSummary = ({ dataState }) => {
  const data = [
    "situationTerrainLotissement",

    "situationTerrainAssociationSyndicale",

    "situationTerrainCoproHorizontale",

    "situationTerrainBornage",

    "EtatSolActivitePolluante",

    "EtatSolActivitePolluantePasse",

    "EtatSolActivitePolluanteVoisinage",

    "EtatSolCarriere",

    "EtatSolZoneInondable",

    "servitude",

    "assainissementSytemeIndividuel",

    "assainissementRaccordementEgout",

    "assainissementMiseDemeure",

    "situationBatimentConstructionInitiale",

    "situationBatimentConstructionInitiale10ans",

    "situationBatimentConstructionInitialeDommageOuvrage",

    "situationBatimentTravauxPost",

    "situationBatimentTravauxPostAutorisation",

    "contratBienLibre",

    "contratLocationRecente",

    "contratAffichage",

    "contratDetecteurFumee",

    "contratAutres",

    "contratEquipementGarantie",

    "contratProcedure",

    "avantageFiscal",

    "chauffageCuveMazout",

    "chauffageDeVille",

    "chauffageCiterne",

    "chauffageCiterneProprietaire",

    "chauffageCiterneLocataire",

    "pretHypotheque",

    "pretCreditRelais",

    "pretProcedure",

    "plusValuesResidencePrincipale",

    "plusValueRemploi",

    "plusValueRetraiteInvalide",

    "plusValueTravaux",
  ];

  const situationTerrainAnswer = {
    situationTerrainLotissement: "Le bien dépend d'un lotissement",
    situationTerrainAssociationSyndicale: "Il existe une association syndicale",
    situationTerrainCoordonneeAssociation: "textArea",
    situationTerrainCoproHorizontale:
      "Le bien dépend d'une copropriété horizontale",
    situationTerrainCoproHorizontaleNomSyndic: "textArea",
    situationTerrainBornage:
      "Le terrain a fait l'objet d'un procès-verbal de bornage",
  };

  const EtatSolPollutionAnswer = {
    EtatSolActivitePolluante : "Le vendeur a effectué des activités polluantes sur le bien",
    EtatSolActivitePolluantePasse: "Des activités polluantes ont été effectués sur le bien par le passé",
    EtatSolActivitePolluanteVoisinage: "Il existe des activités polluantes dans le voisinage",
    EtatSolCarriere: "Il existe une carrière souterraine sous le bien",
    EtatSolZoneInondable: "Le bien est situé en zone inondable",
  };

  const servitudeAnswer = {
    servitude : "Une servitude grève le bien",
    servitudeNom: "textArea"
  };

  const assainissementAnswer = {
    assainissementSytemeIndividuel: "L'assainissement du bien s'effectue par un système individuel (fosse septique)",
    assainissementDateVidange: "textArea",
    assainissementRaccordementEgout: "Le bien est raccordé au tout à l'égout",
    assainissementMiseDemeure: "Le vendeur a reçu une mise en demeure d'effectuer des travaux sur son installation",
  };

  const situationBatimentAnswer = {
    situationBatimentConstructionInitiale: "Le vendeur a fait construire le bâtiment vendu",
    situationBatimentConstructionInitiale10ans: "La construction initiale a moins de 10 ans",
    situationBatimentConstructionInitialeDommageOuvrage: "Le vendeur a souscrit une assurance dommage-ouvrage",
    situationBatimentTravauxPost: "Des travaux postérieurs à la construction initiale ont été effectués par le vendeur",
    situationBatimentTravauxPostAutorisation: "Ces travaux postérieurs à la construction ont fait l'objet d'autorisations d'urbanisme"
  };

  const contratSurBienAnswer = {
    contratBienLibre: "Le bien sera libre le jour de la vente",
    contratLocationRecente: "Le bien a été loué précédemment",
    contratAffichage: "Il existe un contrat d'affichage publicitaire sur le bien",
    contratDetecteurFumee: "Le bien est équipé d'un détecteur de fumée",
    contratAutres: "Il existe d'autres contrats sur le bien",
    contratAutresNom: "textArea",
    contratEquipementGarantie: "Certains équipements font encore l'object de garanties",
    contratEquipementNom: "textArea",
    contratProcedure: "Le vendeur est partie à une procédure judicaire sur le bien vendu",
  };

  const avantageFiscalAnswer = {
    avantageFiscal: "Le bien fait l'objet d'un avantage fiscal",
    avantageFiscalNom: "textArea"
  };

  const chauffageAnswer = {
    chauffageCuveMazout: "Le bien possède une cuve à mazout",
    chauffageDeVille: "Le bien est raccordé au gaz de ville",
    chauffageCiterne: "Le bien est raccordé à une citerne à gaz",
    chauffageCiterneProprietaire: "Le vendeur est propriétaire de la citerne à gaz",
    chauffageCiterneLocataire: "Le vendeur est locataire de la citerne à gaz",
    chauffageCiterneCoordonnee:"textArea",
  };

  const pretAnswer = {
    pretHypotheque: "Le vendeur a souscrit une hypothèque sur le bien",
    pretCreditRelais:"Le vendeur a souscrit un crédit-relais dans l'attente de la vente du bien",
    pretProcedure:"Une procédure de saisie immobilière est en cours sur le bien",
  }

  const plusValuesAnswer = {
    plusValuesResidencePrincipale: "Le bien constitue la résidence principale du vendeur",
    plusValueRemploi: "Le vendeur envisage de remployer le prix de vente dans l'achat de sa résidence principale",
    plusValueRetraiteInvalide: "Le vendeur est retraité ou invalide",
    plusValueTravaux: "Le vendeur a effectué des travaux sur le bien",
  }

  const sinistreAnswer = {
    sinistreCatastropheNaturelle: "Le vendeur a été indemnisé suite à un sinistre reconnu comme catastrophe naturelle"
  }

  const displayAnswer = (answerObject) => {
    let displayArray = [];
    for (const key in answerObject) {
      if (dataState[key] === "true" || dataState[key] === true) {
        displayArray.push(answerObject[key]);
      }
      if (
        dataState[key] !== "true" ||
        dataState[key] !== true ||
        dataState[key] !== "false" ||
        dataState[key] !== false
      ) {
        displayArray.push(dataState[key]);
      }
    }
    return displayArray.map((item, keys) => <div key={keys}>{item}</div>);
  };

  return (
    <>
      <h1>Situation du terrain</h1>
      <>{displayAnswer(situationTerrainAnswer)}</>
      <h1>Etat du sous-sol - pollutions</h1>
      <>{displayAnswer(EtatSolPollutionAnswer)}</>
      <h1>Servitudes</h1>
      <>{displayAnswer(servitudeAnswer)}</>
      <h1>Assainissement</h1>
      <>{displayAnswer(assainissementAnswer)}</>
      <h1>Situation du bâtiment</h1>
      <>{displayAnswer(situationBatimentAnswer)}</>
      <h1>Contrats existant sur le bien</h1>
      <>{displayAnswer(contratSurBienAnswer)}</>
      <h1>Avantage fiscal</h1>
      <>{displayAnswer(avantageFiscalAnswer)}</>
      <h1>Chauffage</h1>
      <>{displayAnswer(chauffageAnswer)}</>
      <h1>Prêts - hypothèques</h1>
      <>{displayAnswer(pretAnswer)}</>
      <h1>Plus-values</h1>
      <>{displayAnswer(plusValuesAnswer)}</>
      <h1>Sinistre</h1>
      <>{displayAnswer(sinistreAnswer)}</>
    </>
  );
};

export default CustomerQuizSummary;
