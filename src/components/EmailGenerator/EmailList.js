const emailListData = [
  {
    type: "Banque",
    query: [
      {
        value: "deblocagePret",
        question: "Demande de déblocage de prêt",
      },
    ],
  },
  {
    type: "Syndic",
    query: [
      {
        value: "demandePretEtatDate",
        question: "Demande de prêt état daté",
      },
    ],
  },
  {
    type: "Divers",
    query: [
      {
        value: "digicode",
        question: "Envoi information digicode",
      },
    ],
  },
  {
    type: "Vente",
    query: [
      {
        value: "envoiDecompteAcquereur",
        question: "Envoi décompte acquéreur - déblocage des fonds",
      },
      {
        value: "suiteSignaturePuv",
        question: "Suite signature PUV - information",
      },
      {
        value: "notificationSRU",
        question: "Notification SRU",
      },
      {
        value: "attestationTravaux",
        question: "Travaux : demande d'attestation d'assurance décennale",
      },
    ],
  },
];

export default emailListData;
