const checkListData = {
  test: [
    { id: 0, text: "Item 1", checked: false },
    { id: 1, text: "Item 2", checked: false },
    { id: 2, text: "Item 3", checked: false },
  ],
  dia: [
    { id: 0, text: "Générer le courrier d'accompagnement", checked: false },
    { id: 1, text: "Générer la DIA", checked: false },
    {
      id: 2,
      text: "Sur le courrier d'accompagnement : indiquer le numéro du recommandé",
      checked: false,
    },
    { id: 3, text: "Compléter la DIA", checked: false },
    { id: 4, text: "Vérifier les points complétés", checked: false },
    {
      id: 5,
      text: "Imprimer les pages 1 à 3 en 4 exemplaires",
      checked: false,
    },
    {
      id: 6,
      text: "Imprimer le courrier d'accompagnement en 1 seul exemplaire",
      checked: false,
    },
    {
      id: 7,
      text: "Signer + tampon sur le courrier d'accompagnement",
      checked: false,
    },
    { id: 8, text: "Signer + tampon sur les DIA", checked: false },
    {
      id: 9,
      text: "Scanner le courrier d'accompagner + 1 exemplaire de DIA",
      checked: false,
    },
    {
      id: 10,
      text: "Rattacher le scan au dossier informatique",
      checked: false,
    },
    {
      id: 11,
      text: "Vérifier que les 4 exemplaires sont complets et ont été signés",
      checked: false,
    },
    { id: 12, text: "Envoyer le courrier", checked: false },
  ],
  cu: [
    { id: 0, text: "Générer le courrier d’accompagnement", checked: false },
    { id: 1, text: "Générer la demande de CU", checked: false },
    {
      id: 2,
      text: "Sur le courrier d’accompagnement : indiquer le numéro de recommandé",
      checked: false,
    },
    { id: 3, text: "Compléter le certificat d’urbanisme", checked: false },
    { id: 4, text: "Vérifier les points complétés", checked: false },
    { id: 5, text: "Obtenir une copie du plan cadastral", checked: false },
    {
      id: 6,
      text: "Imprimer le plan cadastral en 2 exemplaires",
      checked: false,
    },
    {
      id: 7,
      text: "Imprimer la demande de CU en 2 exemplaires",
      checked: false,
    },
    {
      id: 8,
      text: "Imprimer le courrier d’accompagnement en 1 exemplaire",
      checked: false,
    },
    {
      id: 9,
      text: "Signer + tampon le courrier d’accompagnement",
      checked: false,
    },
    {
      id: 10,
      text: "Signer + tampon le courrier d’accompagnement",
      checked: false,
    },
    { id: 11, text: "Signer + tampon de la demande de CU", checked: false },
    {
      id: 12,
      text: "Scanner le courrier d’accompagnement + la demande de CU ",
      checked: false,
    },
    {
      id: 13,
      text: "Rattacher le scan au dossier informatique",
      checked: false,
    },
    {
      id: 14,
      text: "Vérifier que les 2 exemplaires sont complets et ont été signés",
      checked: false,
    },
    { id: 15, text: "Envoyer le courrier", checked: false },
  ],
  docusign: [
    {
      id: 1,
      text: "Pointer l'état-civil des parties : attention aux accents et aux tirets",
      checked: false,
    },
    {
      id: 2,
      text: "Si plusieurs signataires, dans la procuration : indiquer un ordre de signature",
      checked: false,
    },
  ],
  ehf: [
    {
      id: 1,
      text: "Noter les références cadastrales figurant dans le titre de propriété",
      checked: false,
    },
    {
      id: 2,
      text: "Noter les références cadastrales figurant dans le modèle 1",
      checked: false,
    },
    {
      id: 3,
      text: "Effectuer une demande d'hypothécaire sur l'ensemble des parcelles notées",
      checked: false,
    },
    {
      id: 4,
      text: "Si le bien est situé en copropriété, effectuer une demande sur l’assise sans les lots, + une demande sur l’assise aves les lots, idem si lot volume",
      checked: false,
    },
  ],
  decompte: [
    { id: 1, text: "Vérifier la date du rendez-vous", checked: false },
    { id: 2, text: "Vérifier l'heure du rendez-vous", checked: false },
    { id: 3, text: "Vérifier manuelement les calculs", checked: false },
    { id: 4, text: "Vérifier l'adresse du décompte", checked: false },
  ],
  formapuv: [
    {
      id: 1,
      text: "Vérifier si les codes AR24 ont été donnés à l'acquéreur",
      checked: false,
    },
    {
      id: 2,
      text: "Indiquer sur le dossier papier : la date de réitération (ctrl + F : seize)",
      checked: false,
    },
    {
      id: 3,
      text: "Indiquer sur le dossier papier : la date de l'obtention du prêt (ctrl + F : taux)",
      checked: false,
    },
    {
      id: 4,
      text: "Indiquer sur le dossier papier : le montant du dépôt de garantie",
      checked: false,
    },
    {
      id: 5,
      text: "Envoyer la copie de la promesse au vendeur",
      checked: false,
    },
    {
      id: 6,
      text: "Envoyer la copie de la promesse à l'agence",
      checked: false,
    },
    {
      id: 7,
      text: "Envoyer la copie de la promesse à l'acquéreur avec le mail d'usage",
      checked: false,
    },
    { id: 8, text: "Créer la notifcation SRU AR 24", checked: false },
    {
      id: 9,
      text: "Notification SRU : vérifier l'objet du mail : Mise en oeuvre faculté de rétractation",
      checked: false,
    },
    {
      id: 10,
      text: "Notification SRU : vérifier que la promesse de vente AVEC ANNEXES et jointe au mail",
      checked: false,
    },
    {
      id: 11,
      text: "Notification SRU : vérifier que l'ensemble des modificatifs / EDD-RCP sont joints au mail",
      checked: false,
    },
    { id: 12, text: "Envoyer la notification SRU", checked: false },
    {
      id: 13,
      text: "Créer une alerte Outlook pour la date d'obtention du prêt (J-20)",
      checked: false,
    },
    {
      id: 14,
      text: "Créer une alerte Outlook pour la date de réitération (J-20)",
      checked: false,
    },
    { id: 15, text: "Signer informatiquement l'acte", checked: false },
    {
      id: 16,
      text: "Créer le répertoire : indiquer la date de réitération",
      checked: false,
    },
    { id: 17, text: "Créer la fiche PERVAL", checked: false },
    {
      id: 18,
      text: 'Ranger le dossier dans la pile "En attente "',
      checked: false,
    },
  ],
  analyseCompromisAgence: [
    { id: 1, text: "Vérifier le prix de vente", checked: false },
    { id: 2, text: "Vérifier l'existence ou nom de mobilier", checked: false },
    {
      id: 3,
      text: "Vérifier la commission d'agence, qui la paye",
      checked: false,
    },
    {
      id: 4,
      text: "Vérifier le montant du dépôt de garantie, qui est le dépositaire",
      checked: false,
    },
    {
      id: 5,
      text: "Vérifier si remboursement du prorata de taxe foncière",
      checked: false,
    },
    {
      id: 6,
      text: "Vérifier si remboursement du prorata des charges de copropriété",
      checked: false,
    },
    {
      id: 7,
      text: "Vérifier la date de prise en charge des travaux de copropriété",
      checked: false,
    },
    {
      id: 8,
      text: "Vérifier si remboursement du fonds travaux",
      checked: false,
    },
    { id: 9, text: "Vérifier la date de réitération", checked: false },
    { id: 10, text: "Vérifier la date d'obtention du prêt", checked: false },
    { id: 11, text: "Vérifier la date de signature", checked: false },
    { id: 12, text: "Vérifier si notaire en concours", checked: false },
  ],
  formaVente: [
    { id: 1, text: "Signer l'acte informatiquement", checked: false },
    { id: 2, text: "Générer répertoire informatique", checked: false },
    { id: 3, text: "Générer la fiche perval (envoyer)", checked: false },
    { id: 4, text: "Transmettre les virements internes", checked: false },
    { id: 5, text: "Transmettre les virements externes", checked: false },
    {
      id: 6,
      text: "Envoyer une copie AAE de l'acte aux parties par mail",
      checked: false,
    },
    { id: 7, text: "Vérifier que la pré-taxe a été établie", checked: false },
    {
      id: 8,
      text: "Si vente en copropriété : notification art 20 + art 6",
      checked: false,
    },
    { id: 9, text: "Pochette minute papier", checked: false },
    { id: 10, text: "Scanner le RIB des clients signés", checked: false },
  ],
  formaPret: [
    { id: 1, text: "Signer l'acte informatiquement", checked: false },
    { id: 2, text: "Générer répertoire informatique", checked: false },
    {
      id: 3,
      text: "Envoyer une copie AAE de l'acte aux parties par mail",
      checked: false,
    },
    { id: 4, text: "Notification de signature à la banque", checked: false },
    { id: 5, text: "Bordereau d'inscription hypothécaire", checked: false },
    {
      id: 6,
      text: "Vérifier que l'attestation d'assurance d'habitation figure au dossier",
      checked: false,
    },
    {
      id: 7,
      text: "Vérifier info assurance copropriété au dossier",
      checked: false,
    },
  ],
  // { id: 1, text: "", checked: false },
};

export default checkListData;
