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
      {
        value: "relanceSyndic",
        question: "Relance syndic",
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
      {
        value: "visio",
        question: "Visioconférence",
      },
      {
        value: "copieActeSuiteSignature",
        question: "Envoi copie d'acte suite à signature",
      },
      {
        value: "copieActe",
        question: "Demande copie d'acte",
      },
      {
        value: "copiePlan",
        question: "Demande copie plans",
      },
      {
        value: "procuration",
        question: "Envoi procuration",
      },
      {
        value: "secret",
        question: "Réponse secret professionnel",
      },
      {
        value: "matriceCadastrale",
        question: "Demande de matrice cadastrale",
      },
      {
        value: "projet",
        question: "Envoi projet d'acte",
      },
    ],
  },
  {
    type: "Comptabilité",
    query: [
      {
        value: "soldeCompte",
        question: "Demande de RIB pour solde de compte",
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
        value: "relanceDeblocageFonds",
        question: "Relance déblocage des fonds",
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
  {
    type: "Succession",
    query: [
      {
        value: "demandeTestament",
        question: "Demande testament / DEE",
      },
    ],
  },
  {
    type: "Urbanisme",
    query: [
      {
        value: "DHL",
        question: "DLH PARIS : demande d'information",
      },      
      {
        value: "infoDPU",
        question: "Demande d'information DPU",
      },
    ],
  },
  {
  type: "Modifcatif EDD",
  query: [
    {
      value: "modifEDDPieceSyndic",
      question: "Demande des pièces au syndic"
    },
    {
      value: "modifEDDDemandeGeometre",
      question: "Demande du modificatif WORD au géomètre"
    }
  ]
  }
];

export default emailListData;
