export const maison = [
  {
    quizList: [
      "situation",
      "batiment",
      "contrat",
      "chauffage",
      "servitude",
      "assainissement",
      "etatSousSolPollution",
      "plusValues",
    ],

    situation: [
      {
        title: "Situation du bien",
        quiz: [
          {
            id: "lotissement",
            type: "binary",
            logic: "root",
            trueAccess: ["keystone"],
            falseAccess: [],
            question: "Votre maison dépend-elle d'un lotissement ?", 
          },
          {
            id: "coproHorizontale",
            type: "binary",
            logic: "root",
            trueAccess: ["keystone"],
            falseAccess: [],
            question: "Votre maison dépend-elle d'une copropriété horizontale ?",
          },
          {
            id: "bornage",
            type: "binary",
            logic: "root",
            trueAccess: ["keystone"],
            falseAccess: [],
            question: "Votre terrain a-t-il fait l'objet d'un procès-verbal de bornage ?",
          },
          {
            id: "associationSyndicale",
            type: "binary",
            logic: "root",
            trueAccess: ["lotissement"],
            falseAccess: [],
            question: "Existe-t-il une association syndicale ?",
          }
        ]
      },
    ],

    batiment: [
      {
        title: "Situation du bâtiment",
        quiz: [
          {
            id: "travauxConstruction",
            type: "binary",
            logic: "root",
            trueAccess: ["keystone"],
            falseAccess: [],
            question: "Avez-vous fait construire le bâtiment vendu ?"
          },
          {
            id: "travauxConstruction10ans",
            type: "binary",
            logic: "root",
            trueAccess: ["travauxConstruction"],
            falseAccess: [],
            question: "Ces travaux sont-ils achevés depuis moins de 10 ans ?"
          },
          {
            id: "travauxConstructionAssurance",
            type: "binary",
            logic: "root",
            trueAccess: ["travauxConstruction10ans"],
            falseAccess: [],
            question: "Avez-vous souscrit une assurance dommage-ouvrage couvrant la garantie décennale ?"
          },
          {
            id: "travauxPosterieur",
            type: "binary",
            logic: "root",
            trueAccess: ["travauxConstruction10ans"],
            falseAccess: [],
            question: "Avez-vous effectué des travaux postérieurs à la construction ?"
          },
          {
            id: "travauxPosterieurAutorisation",
            type: "binary",
            logic: "root",
            trueAccess: ["travauxPosterieur"],
            falseAccess: [],
            question: "Ces travaux ont-ils fait l'objet d'un permis de construire ou d'une déclaration de travaux ?"
          },
        ]
      },
    ],

    contrat: [
      {
        title: "Contrats existant sur le bien",
        quiz: [
          {
            id: "libreOccupation",
            type: "binary",
            logic: "root",
            trueAccess: ["keystone"],
            falseAccess: [],
            question: "La maison sera-t-elle libre le jour de la vente ?",
          },
          {
            id: "location",
            type: "binary",
            logic: "root",
            trueAccess: ["keystone"],
            falseAccess: [],
            question: "A-t-elle été louée précédemment ?",
          },
          {
            id: "affichage",
            type: "binary",
            logic: "root",
            trueAccess: ["keystone"],
            falseAccess: [],
            question: "La maison supporte-t-elle un contrat d'affichage ?",
          },
          {
            id: "detecteurFumee",
            type: "binary",
            logic: "root",
            trueAccess: ["keystone"],
            falseAccess: [],
            question: "Le bien est-il équipé d'un détecteur de fumée ?",
          },
          {
            id: "autresContrat",
            type: "binary",
            logic: "root",
            trueAccess: ["keystone"],
            falseAccess: [],
            question: "La maison fait-elle l'objet de contrat d'entretien (chaudière, ramonage,etc.) ?",
          },
          {
            id: "garantieEquipement",
            type: "binary",
            logic: "root",
            trueAccess: ["keystone"],
            falseAccess: [],
            question: "Certains équipement font-ils encore l'objet de garanties ?",
          },
          {
            id: "procedure",
            type: "binary",
            logic: "root",
            trueAccess: ["keystone"],
            falseAccess: [],
            question: "Le bien fait-il l'objet d'une procédure judiciaire ?",
          },
          {
            id: "avantageFiscal",
            type: "binary",
            logic: "tree",
            trueAccess: ["location"],
            falseAccess: [],
            question: "Le bien a-t-il fait l'objet d'un engagement de location lié à un avantage fiscal (lois Besson, Malraux, Robien, Duflot, Pinel, etc.) ?",
          },
        ]
      },
    ],

    chauffage: [
      {
        title: "Chauffage",
        quiz: [
          {
            id: "cuveMazout",
            type: "binary",
            logic: "root",
            trueAccess: ["keystone"],
            falseAccess: [],
            question: "Le bien possède-t-il une cuve à mazout ?",
          },
          {
            id: "gazDeVille",
            type: "binary",
            logic: "root",
            trueAccess: [],
            falseAccess: ["cuveMazout"],
            question: "Le bien est-il raccordé au gaz de ville ?",
          },
          {
            id: "gazCiterne",
            type: "binary",
            logic: "root",
            trueAccess: [],
            falseAccess: ["gazDeVille"],
            question: "Le bien est-il raccordé à une citerne à gaz ?",
          },
          {
            id: "gazCiternePropriétaire",
            type: "binary",
            logic: "root",
            trueAccess: ["gazCiterne"],
            falseAccess: [],
            question: "Etes-vous propriétaire de cette citerne ?",
          },
        ]
      }
    ],

    servitude: [
      {
        title: "Servitudes",
        quiz: [
          {
            id: "servitude",
            type: "binary",
            logic: "root",
            trueAccess: ["keystone"],
            falseAccess: [],
            question:
              "Avez-vous connaissance de servitudes particulières sur votre propriété ? (servitude de passage, d'alignement, etc.)",
          },
          {
            id: "murSeparatif",
            type: "binary",
            logic: "root",
            trueAccess: ["keystone"],
            falseAccess: [],
            question: "Avez-vous un mur séparatif avec vos voisins ?",
          },
          {
            id: "terrainEnPente",
            type: "binary",
            logic: "root",
            trueAccess: ["keystone"],
            falseAccess: [],
            question: "Votre terrain est-il en pente ?",
          },
        ],
      },
    ],
    assainissement: [
      {
        title: "Assainissement",
        quiz: [
          {
            id: "assainissementIndividuel",
            type: "binary",
            logic: "root",
            trueAccess: ["keystone"],
            falseAccess: [],
            question:
              "L'assainissement de votre bien s'effectue-t-il par un système individuel ( ex: fosse septique ) ?",
          },
          {
            id: "assainissementToutAEgout",
            type: "binary",
            logic: "root",
            trueAccess: [],
            falseAccess: ["assainissementIndividuel"],
            question: "Votre bien est-il raccordé au tout à l'égout ?",
          },
          {
            id: "assainissementMiseEnDemeure",
            type: "binary",
            logic: "root",
            trueAccess: ["keystone"],
            falseAccess: [],
            question:
              "Avez-vous reçu une mise en demeure de faire des travaux sur votre installation ?",
          },
          {
            id: "assainissementVidange",
            type: "binary",
            logic: "tree",
            trueAccess: ["assainissementIndividuel"],
            falseAccess: [],
            question:
              "La dernière vidange de votre fosse septique a-t-elle était effectuée recemment ?",
          },
          {
            id: "assainissementInstallation",
            type: "binary",
            logic: "tree",
            trueAccess: ["assainissementToutAEgout"],
            falseAccess: [],
            question: "Votre installation est-elle en bon état ?",
          },
        ],
      },
    ],
    etatSousSolPollution: [
      {
        title: "Etat du sous-sol - pollution",
        quiz: [
          {
            id: "activitesPolluantes",
            type: "binary",
            logic: "root",
            trueAccess: ["keystone"],
            falseAccess: [],
            question:
              "Avez-vous exploité des activités polluantes sur le terrain ?",
          },
          {
            id: "activitesPolluantesPasse",
            type: "binary",
            logic: "root",
            trueAccess: ["keystone"],
            falseAccess: [],
            question:
              "A votre connaissance, des activités polluantes ont-elles été effectuées sur le terrain dans le passé ou des déchets ont-ils pu être entreposés ?",
          },
          {
            id: "activitesPolluantesVoisin",
            type: "binary",
            logic: "root",
            trueAccess: ["keystone"],
            falseAccess: [],
            question:
              "Avez-vous connaissance d'activités polluantes dans le voisinage ?",
          },
          {
            id: "carrieres",
            type: "binary",
            logic: "root",
            trueAccess: ["keystone"],
            falseAccess: [],
            question:
              "Avez-vous connaissance de carrières souterraines dans le voisinage ?",
          },
          {
            id: "zoneInondable",
            type: "binary",
            logic: "root",
            trueAccess: ["keystone"],
            falseAccess: [],
            question: "Le bien est-il situé en zone inondable ?",
          },
        ],
      },
    ],
    plusValues: [
      {
        title: "Plus-values immobilières",
        quiz: [
          {
            id: "plusValuesResidencePrincipale",
            type: "binary",
            logic: "root",
            trueAccess: ["keystone"],
            falseAccess: [],
            question:
              "Le bien vendu constitue-t-il votre résidence principale ?",
          },
          {
            id: "plusValuesRemploiPrix",
            type: "binary",
            logic: "tree",
            trueAccess: [],
            falseAccess: ["plusValuesResidencePrincipale"],
            question:
              "Le vendez-vous pour remployer le prix dans l'achat de votre résidence principale ?",
          },

          {
            id: "plusValuesInvalide",
            type: "binary",
            logic: "tree",
            trueAccess: [],
            falseAccess: ["plusValuesResidencePrincipale"],
            question: "Etes-vous retraité ou invalide ?",
          },

          {
            id: "plusValuesAmelioration",
            type: "binary",
            logic: "tree",
            trueAccess: [],
            falseAccess: ["plusValuesResidencePrincipale"],
            question:
              "Avez-vous effectué des travaux de surélévation, construction ou d'amélioration ?",
          },
        ],
      },
    ],
  },
];

// Mock data for development
export const MockData = [
  {
    quizList: ["mockquiz1", "mockquiz2"],

    mockquiz1: [
      {
        title: "mockquiz1",
        quiz: [
          {
            id: "keystoneId",
            type: "binary",
            logic: "root",
            trueAccess: ["keystone"],
            falseAccess: [],
            question: "Question : keystone",
          },
          {
            id: "keystoneId2",
            type: "binary",
            logic: "root",
            trueAccess: ["keystone"],
            falseAccess: [],
            question: "Question : keystone2",
          },
          {
            id: "rootTrueId",
            type: "binary",
            logic: "root",
            trueAccess: ["keystoneId"],
            falseAccess: [],
            question: "Question : rootTrueID",
          },
          {
            id: "rootFalseId",
            type: "binary",
            logic: "root",
            trueAccess: [],
            falseAccess: ["keystoneId"],
            question: "Question : rootFalseID",
          },
          {
            id: "treeTrueId",
            type: "binary",
            logic: "tree",
            trueAccess: ["keystoneId"],
            falseAccess: [],
            question: "Question : treeTrueID",
          },
          {
            id: "treeFalseId",
            type: "binary",
            logic: "tree",
            trueAccess: [],
            falseAccess: ["keystoneId"],
            question: "Question : treeFalseID",
          },
        ],
      },
    ],
  },
];

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
