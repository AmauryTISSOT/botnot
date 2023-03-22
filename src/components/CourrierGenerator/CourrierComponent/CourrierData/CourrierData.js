const DLH = [
  {
    text: "Madame, Monsieur,",
    lineBreak: true,
    tab: true,
  },
  {
    text: "Je me permets de venir vers vous dans le cadre du dossier de vente cité en référence, portant sur un immeuble sis à PARIS (XX), XXXXXX.",
    lineBreak: true,
    tab: true,
  },
  {
    text: "Aussi, vous saurais-je gré de bien vouloir me confirmer par retour de courrier les dispositions relatives à l’immeuble concernant :",
    lineBreak: true,
    tab: true,
  },
  {
    text: "INSALUBRITE: ",
    bold: true,
    textRun:
      "Si l’immeuble fait l’objet de mesures d’insalubrité prises en application des articles 1331-22 et suivants du Code de la Santé Publique ;",
    bulletPoint: true,
    lineBreak: true,
  },
  {
    text: "PERIL & INSECURITE: ",
    bold: true,
    textRun:
      "Si l’immeuble fait l’objet d’arrêtés municipaux pris en application des articles L511-1 à L511-7, R511-1 à R511-12, L129-1 à L129-7, et R129-1 à 129-9 du Code de la Construction et de l’Habitation ;",
    bulletPoint: true,
    lineBreak: true,
  },
  {
    text: "EXPOSITION AU PLOMB & LUTTE CONTRE LE SATURNISME: ",
    bold: true,
    textRun:
      "Si l’immeuble fait l’objet de mesures de protection contre l’exposition au plomb ;",
    bulletPoint: true,
    lineBreak: true,
  },
  {
    text: "LUTTE CONTRE LES TERMITES: ",
    bold: true,
    textRun:
      "Si l’immeuble est situé dans une zone contaminée par les termites ou susceptible de l’être en application des dispositions du Code de la Construction et de l’Habitation ;",
    bulletPoint: true,
    lineBreak: true,
  },
  {
    text: "ASSAINISSEMENT: ",
    bold: true,
    textRun:
      "Si l’immeuble est raccordé au système d’assainissement de la ville de Paris ;",
    bulletPoint: true,
    lineBreak: true,
  },
  {
    text: "RAVALEMENT: ",
    bold: true,
    textRun:
      "Si l’immeuble fait l’objet d’arrêtés municipaux pris en mesure de ravalement en application des articles 132-1 et suivants du Code de la Construction et de l’Habitation.",
    bulletPoint: true,
    lineBreak: true,
  },
  {
    text: "Vous remerciant par avance de l’attention bienveillante que vous porterez à ma demande, je vous prie d'agréer, Madame, Monsieur, mes salutations distinguées.",
    tab: true,
    lineBreak: true,
  },
];

const demandeCU = [
  { text: "LR avec AR : ", underline: true, bold: true, lineBreak: true },
  {
    text: "Madame, Monsieur",
    tab: true,
    lineBreak: true,
  },
  {
    text: "Je vous adresse sous ce pli une demande de certificat d’urbanisme relative à un immeuble situé à l’adresse suivante : ",
    tab: true,
    lineBreak: true,
    textRun: "adresseBien",
  },
  { text: "tableauCadastre", tab: true, lineBreak: true },
  {
    text: "Vous voudrez bien m’accuser réception de ce document.",
    tab: true,
    lineBreak: true,
  },
  {
    text: "Veuillez croire, Madame, Monsieur, à l’assurance de ma sincère considération.",
    tab: true,
    lineBreak: true,
  },
];

const demandeDia = [
  { text: "LR avec AR : ", underline: true, bold: true, lineBreak: true },

  {
    text: "Madame, Monsieur,",
    tab: true,
    lineBreak: true,
  },
  {
    text: "Je vous adresse sous ce pli une déclaration d’intention d’aliéner concernant l'immeuble sis à l'adresse suivante : ",
    tab: true,
    lineBreak: true,
    textRun: "adresseBien",
  },
  {
    text: "Cadastré : ",
    tab: true,
    lineBreak: true,
  },
  {
    text: "tableauCadastre",
    tab: true,
    lineBreak: true,
  },
  {
    text: "Appartenant à :",
    tab: true,
    lineBreak: true,
    textRun: "nomVendeur",
  },
  {
    text: "Veuillez croire, Madame, Monsieur, à l’assurance de ma sincère considération.",
    tab: true,
    lineBreak: true,
  },
];

const arretePeril = [
  {
    text: "Madame, Monsieur,",
    tab: true,
    lineBreak: true,
  },
  {
    text: "Je vous remercie de m’informer si un arrêté de péril grève, ou est en passe de grever, l’immeuble appartenant à ",
    tab: true,
    lineBreak: true,
    textRun: "nomVendeur",
  },
  {
    text: "Situé à",
    tab: true,
    textRun: "adresseBien",
  },
  {
    text: "Cadastré",
    tab: true,
    lineBreak: true,
  },
  {
    text: "tableauCadastre",
    tab: true,
    lineBreak: true,
  },
  {
    text: "Dans l’affirmative et s’il est établi, un état des mesures ordonnées me sera nécessaire.",
    tab: true,
    lineBreak: true,
  },
  {
    text: "Vous trouverez ci-joint un extrait de plan cadastral.",
    tab: true,
    lineBreak: true,
  },
  {
    text: "Veuillez croire, Madame, Monsieur, à l’assurance de ma sincère considération.",
    tab: true,
    lineBreak: true,
  },
];

const arreteAlignement = [
  {
    text: "Madame, Monsieur,",
    tab: true,
    lineBreak: true,
  },
  {
    text: "Je vous remercie de m’adresser un arrêté d'alignement faisant connaître les servitudes pouvant grever l’immeuble : ",
    tab: true,
    lineBreak: true,
    textRun: "adresseBien",
  },
  {
    text: "Cadastré",
    tab: true,
    lineBreak: true,
  },
  {
    text: "tableauCadastre",
    tab: true,
    lineBreak: true,
  },
  {
    text: "Appartenant à ",
    tab: true,
    lineBreak: true,
    textRun: "nomVendeur",
  },
  {
    text: "Vous trouverez ci-joint un extrait de plan cadastral.",
    tab: true,
    lineBreak: true,
  },
  {
    text: "Veuillez croire, Madame, Monsieur, à l’assurance de ma sincère considération.",
    tab: true,
    lineBreak: true,
  },
];

const certificatNumerotage = [
  {
    text: "Madame, Monsieur,",
    tab: true,
    lineBreak: true,
  },
  {
    text: "Je vous remercie de m’adresser un certificat de numérotage, concernant l’immeuble situé à : ",
    tab: true,
    lineBreak: true,
    textRun: "adresseBien",
  },
  {
    text: "Cadastré",
    tab: true,
    lineBreak: true,
  },
  {
    text: "tableauCadastre",
    tab: true,
    lineBreak: true,
  },
  {
    text: "Appartenant à ",
    tab: true,
    lineBreak: true,
    textRun: "nomVendeur",
  },
  {
    text: "Vous trouverez ci-joint un extrait de plan cadastral.",
    tab: true,
    lineBreak: true,
  },
  {
    text: "Veuillez croire, Madame, Monsieur, à l’assurance de ma sincère considération.",
    tab: true,
    lineBreak: true,
  },
];

const certificatHygiene = [
  {
    text: "Madame, Monsieur,",
    tab: true,
    linebreak: true,
  },
  {
    text: "L'office notarial étant chargé du dossier en référence, je vous remercie de m’adresser un certificat d’HYGIENE et de SALUBRITE concernant l’immeuble situé à : ",
    tab: true,
    linebreak: true,
    textRun: "adresseBien",
  },
  {
    text: "Cadastré",
    tab: true,
    linebreak: true,
  },
  {
    text: "tableauCadastre",
    tab: true,
    linebreak: true,
  },
  {
    text: "Appartenant à ",
    tab: true,
    linebreak: true,
    textRun: "nomVendeur",
  },
  {
    text: "Vous trouverez ci-joint un extrait de plan cadastral.",
    tab: true,
    linebreak: true,
  },
  {
    text: "Veuillez croire, Madame, Monsieur, à l’assurance de ma sincère considération.",
    tab: true,
    linebreak: true,
  },
];


const courrierDataObject = {
  DLH,
  demandeCU,
  certificatHygiene,
  arreteAlignement,
  arretePeril,
  demandeDia,
}

export default courrierDataObject;