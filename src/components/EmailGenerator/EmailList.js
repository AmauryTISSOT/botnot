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
    ],
  },
];

export default emailListData;
