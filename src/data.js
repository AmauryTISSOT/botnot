export const plusValues = [
  {
    title: "Plus-values immobilières",
    quiz: [
      {
        id: "plusValuesResidencePrincipale",
        type: "binary",
        logic: "root",
        access: ["keystone"],
        question: "Le bien vendu constitue-t-il votre résidence principale ?",
      },
      {
        id: "plusValuesRemploiPrix",
        type: "binary",
        logic: "tree",
        access: ["plusValuesResidencePrincipale"],
        question:
          "Le vendez-vous pour remployer le prix dans l'achat de votre résidence principale ?",
      },

      {
        id: "plusValuesInvalide",
        type: "binary",
        logic: "tree",
        access: ["plusValuesResidencePrincipale"],
        question: "Etes-vous retraité ou invalide ?",
      },

      {
        id: "plusValuesAmelioration",
        type: "binary",
        logic: "tree",
        access: ["plusValuesResidencePrincipale"],
        question:
          "Avez-vous effectué des travaux de surélévation, construction ou d'amélioration ?",
      },
    ],
  },
];

// Mock data for development
export const MockData = [
  {
    title: "MockData",
    quiz: [
      {
        id: "MockRootId1",
        type: "binary",
        logic: "root",
        access: ["keystone"],
        pointer: "tree",
        question: "Root question 1 ?",
      },
      {
        id: "MockRootId2",
        type: "binary",
        logic: "root",
        access: ["keystone"],
        question: "Root question 2 ?",
      },
      {
        id: "MockRootId3",
        type: "binary",
        logic: "root",
        access: ["MockRootId1"],
        question: "Root question 3 ?",
      },
      {
        id: "MockTreeId1",
        type: "binary",
        logic: "tree",
        access: ["MockRootId1", "MockRootId3"],
        question: "Tree question 1 ?",
      },
      {
        id: "MockTreeId2",
        type: "binary",
        logic: "tree",
        access: ["MockRootId2"],
        question: "Tree question 2 ?",
      },
      {
        id: "MockTreeId3",
        type: "binary",
        logic: "tree",
        access: ["MockRootId1"],
        question: "Tree question 3 ?",
      },
    ],
  },
];

export const etatSousSolPollution = [
  {
    title: "Etat du sous-sol - pollution",
    quiz: [
      {
        id: "activitesPolluantes",
        type: "binary",
        logic: "root",
        access: ["keystone"],
        question:
          "Avez-vous exploité des activités polluantes sur le terrain ?",
      },
      {
        id: "activitesPolluantesPasse",
        type: "binary",
        logic: "root",
        access: ["keystone"],
        question:
          "A votre connaissance, des activités polluantes ont-elles été effectuées sur le terrain dans le passé ou des déchets ont-ils pu être entreposés ?",
      },
      {
        id: "activitesPolluantesVoisin",
        type: "binary",
        logic: "root",
        access: ["keystone"],
        question:
          "Avez-vous connaissance d'activités polluantes dans le voisinage ?",
      },
      {
        id: "carrieres",
        type: "binary",
        logic: "root",
        access: ["keystone"],
        question:
          "Avez-vous connaissance de carrières souterraines dans le voisinage ?",
      },
      {
        id: "zoneInondable",
        type: "binary",
        logic: "root",
        access: ["keystone"],
        question: "Le bien est-il situé en zone inondable ?",
      },
    ],
  },
];

export const servitude = [
  {
    title: "Servitudes",
    quiz: [
      {
        id: "servitude",
        type: "binary",
        logic: "root",
        access: ["keystone"],
        question:
          "Avez-vous connaissance de servitudes particulières sur votre propriété ? (servitude de passage, d'alignement, etc.)",
      },
      {
        id: "murSeparatif",
        type: "binary",
        logic: "root",
        access: ["keystone"],
        question: "Avez-vous un mur séparatif avec vos voisins ?",
      },
      {
        id: "terrainEnPente",
        type: "binary",
        logic: "root",
        access: ["keystone"],
        question: "Votre terrain est-il en pente ?",
      },
    ],
  },
];

export const assainissement = [
  {
    title: "Assainissement",
    quiz: [
      {
        id: "assainissementIndividuel",
        type: "binary",
        logic: "root",
        access: ["keystone"],
        question:
          "L'assainissement de votre bien s'effectue-t-il par un système individuel ( ex: fosse septique ) ?",
      },
      //TODO: prévoir un switch si la keystone est = false
      {
        id: "assainissementToutAEgout",
        type: "binary",
        logic: "root",
        access: ["keystone"],
        question: "Votre bien est-il raccordé au tout à l'égout ?",
      },
      {
        id: "assainissementMiseEnDemeure",
        type: "binary",
        logic: "root",
        access: ["keystone"],
        question:
          "Avez-vous reçu une mise en demeure de faire des travaux sur votre installation ?",
      },
      {
        id: "assainissementVidange",
        type: "binary",
        logic: "tree",
        access: ["assainissementIndividuel"],
        question:
          "La dernière vidange de votre fosse septique a-t-elle était effectuée recemment ?",
      },
      {
        id: "assainissementInstallation",
        type: "binary",
        logic: "tree",
        access: ["assainissementToutAEgout"],
        question: "Votre installation est-elle en bon état ?",
      },
    ],
  },
];
