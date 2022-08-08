const plusValues = [
  {
    title: "Plus-values immobilières",
    root: {
      id: "plusValuesResidencePrincipale",
      type: "binary",
      logic: "root",
      pointer: "tree",
      question: "Le bien vendu constitue-t-il votre résidence principale ?",
    },
    tree: [
      {
        id: "plusValuesRemploiPrix",
        type: "binary",
        logic: "tree",
        pointer: [NaN],
        question:
          "Le vendez-vous pour remployer le prix dans l'achat de votre résidence principale ?",
      },

      {
        id: "plusValuesInvalide",
        type: "binary",
        logic: "tree",
        pointer: [NaN],
        question: "Etes-vous retraité ou invalide ?",
      },

      {
        id: "plusValuesAmelioration",
        type: "binary",
        logic: "tree",
        pointer: [NaN],
        question:
          "Avez-vous effectué des travaux de surélévation, construction ou d'amélioration ?",
      },
    ],
  },
];

export default plusValues;

// title = titre du questionnaire à afficher en h1 {type = string}
// id = id permettant d'identifier la question {type = string}
// question = une question à laquelle on ne peut répondre que par oui ou non {type = string}
// binaryAnswer = la réponse : oui / non {type = array}
// binaryLogic = un object qui a pour key oui / non  {type = object}
// multipleQuestions = plusieurs questions qui non pas de choix binaire : qcm à cocher {type : array}
// data = les données du QCM qui seront stockés {type : object}
