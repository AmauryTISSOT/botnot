const EmailData = {
  test: {
    input: [
      {
        type: "text",
        id: "test1",
        label: "testing label-1",
        placeholder: "0,00 €",
      },
      {
        type: "radio",
        id: "test2",
        label: "testing label-2",
        valueObj: [
          {
            subLabel: "oui",
            value: "yes",
          },
          {
            subLabel: "non",
            value: "no",
          },
        ],
      },
      {
        type: "select",
        id: "test3",
        label: "testing label-3",
        value: ["option one", "option two"],
      },
    ],
    mailString:
      "This is a test. The variable 1 is {{test1}}. The variable 2 is {{test2}}. The variable 3 is {{test3}} ",
  },
  deblocagePret: {
    input: [
      {
        type: "text",
        id: "refPret",
        label: "Référence du pret",
        placeholder: "prêt n°AB132",
      },
    ],
    mailString:
      "Vos réf. : {{refPret}} \n\n Bonjour,\n\n Je vous prie de trouver ci-joint une demande de déblocage concernant le prêt cité en référence.\n Je vous remercie de m’indiquer les dates suivantes : \n-	Date de première échéance, \n-	Date de dernière échéance, \n-	Date de péremption de l’inscription. \n\nDans l’attente de vous lire, \nSincères salutations",
  },
  demandePretEtatDate: {
    input: [
      {
        type: "text",
        id: "adresse",
        label: "Adresse de la copropriété",
        placeholder: "35 rue de l'Eglise - 75007 PARIS",
      },
      {
        type: "text",
        id: "vendeurName",
        label: "Nom du vendeur",
        placeholder: "M. Patrick DUPONT",
      },
      {
        type: "text",
        id: "acquereurName",
        label: "Nom de l'acquéreur",
        placeholder: "Mme Marie JEAN",
      },
      {
        type: "text",
        id: "numeroLot",
        label: "Numéro des lots",
        placeholder: "243, 512",
      },
      {
        type: "text",
        id: "date",
        label: "Date de signature du compromis", //TODO: html date input
        placeholder: "12 janvier 2023",
      },
    ],
    mailString:
      "- Nom du vendeur : {{vendeurName}}\n - Immeuble : {{adresse}}\n - N° de(s) lot(s) : {{numeroLot}}\n - Nom de l’acquéreur : {{acquereurName}}\n - Date du compromis : {{date}}\n\n Bonjour,\n\n Je me permets de venir vers vous concernant une vente dans la copropriété située {{adresse}}.\n\n En l’espèce, {{vendeurName}} vend(ent) à {{acquereurName}}, le(s) lot(s) : {{numeroLot}}.\n\n Un rendez-vous de signature de l’avant contrat est fixé pour le {{date}}.\n\n Vous voudrez bien me faire parvenir les documents suivants pour cette date :\n •	les procès-verbaux des assemblées générales des trois dernières années,\n •	le montant des charges du budget prévisionnel et des charges hors budget prévisionnel dues par le vendeur sur les deux exercices précédant la vente,\n •	les sommes pouvant rester dues par le vendeur au syndicat des copropriétaires et les sommes qui seront dues au syndicat par l'acquéreur,\n •	l'état global des impayés des charges au sein du syndicat,\n •	la quote-part du fonds de travaux attachée au lot principal vendu,\n •	le carnet d'entretien de l'immeuble,\n •	le diagnostic technique global,\n •	la fiche synthétique technique copropriété,\n •	la copie du règlement de copropriété et l'état descriptif de division ainsi que tous leurs modificatifs éventuels publiés.\n\n Vous remerciant par avance,\n\n Dans l’attente,\n\n Sincères salutations",
  },
  envoiDecompteAcquereur: {
    input: [
      {
        type: "text",
        id: "date",
        label: "Date du rendez-vous de signature",
        placeholder: "18 août 2023",
      },
      {
        type: "text",
        id: "hour",
        label: "Heure du rendez-vous",
        placeholder: "16h30",
      },
      {
        type: "text",
        id: "price",
        label: "Montant du virement à effectuer",
        placeholder: "315.000,00", //TODO: html input for price (with 0,00 € format)
      },
    ],
    mailString:
      "Bonjour,\n\n Je vous confirme le rendez-vous pour la signature de la vente citée en référence au {{date}} à {{hour}} en l'office notarial.\n\n Je vous prie de bien vouloir trouver ci-joint le bilan financier de votre acquisition.\n\n Aussi je vous remercie en conséquence de bien vouloir faire établir par votre banque un virement d'un montant de {{price}} euros à porter au crédit de mon compte au minimum deux jours avant la date de signature.\n J'attire votre attention sur le fait que l’envoi d’un virement, lorsqu’il ne résulte pas d'un prêt bancaire, doit être accompagné d’une attestation de provenance de fonds établie par la banque émettrice du virement.\n Je vous invite à vous rapprocher rapidement de votre établissement bancaire car il lui est nécessaire d'avoir un certain délai pour procéder à ce mode de paiement.\n Le mode de règlement par virement nous est imposé par l'article 37 de la loi numéro 2011-331 du 28 Mars 2011, à l'exclusion de tout autre mode de paiement.\n\n Enfin, je vous remercie de bien vouloir, pour le rendez-vous envisagé de signature, vous munir des documents suivants :\n - une pièce d’identité en cours de validité,\n - un relevé d’identité bancaire (RIB),\n - un carnet de chèque / carte bancaire pour régler les éventuels proratas.\n\n En vous remerciant,\n\n Sincères salutations",
  },
  suiteSignaturePuv: {
    input: [
      {
        type: "text",
        id: "dateMaxDG",
        label: "Indiquer la date maximale du virement du dépôt de garantie",
        placeholder: "ex : 18 août 2023",
      },
      {
        type: "text",
        id: "montantDG",
        label: "Montant du dépôt de garantie",
        placeholder: "ex : 10.000,00 €",
      },
      {
        type: "radio",
        id: "codeAR24",
        label: "Des codes AR24 sont-ils à joindre au mail ?",
        valueObj: [
          {
            subLabel: "oui",
            value:
              "Pour vous permettre d'accéder à cette lettre recommandée électronique, vous trouverez ci-joint des codes d'accès (code AR 24).",
          },
          {
            subLabel: "non",
            value: "",
          },
        ],
      },
      {
        type: "radio",
        id: "notaire2parties",
        label: "Sommes nous notaire instrumentaire (qui demande les pièces) ?",
        valueObj: [
          {
            subLabel: "oui",
            value:
              "De mon côté, j'ai interrogé le service de la publicité foncière, le cadastre, la mairie concernée, etc., pour constituer un dossier complet. Attention, pour certaines de ces pièces, l'administration dispose de 2 mois pour nous répondre. Je reviendrai vers vous dès que j'aurais reçu l'ensemble des réponses attendues, et dans tous les cas, si l'une des informations pouvaient avoir une importance pour votre projet, je ne manquerai pas de vous la communiquer. Je vous rappelle que la date limite stipulée dans l'avant-contrat ne correspond pas forcément au rendez-vous de signature, que nous fixerons ensemble dès que possible.",
          },
          {
            subLabel: "non",
            value:
              "De mon côté, j'ai déjà demandé au notaire de votre vendeur d'obtenir les pièces administratives obligatoires, et de me l'adresser dès que possible afin que je puisse faire les vérifications nécessaires et établir l'acte. Attention, pour certaines de ces pièces, l'administration dispose de 2 mois pour nous répondre. Je reviendrai vers vous dès que j'aurais reçu l'ensemble des éléments, et dans tous les cas, si l'une des informations pouvaient avoir une importance pour votre projet, je ne manquerai pas de vous la communiquer. Je vous rappelle que la date limite stipulée dans l'avant-contrat ne correspond pas forcément au rendez-vous de signature, que nous fixerons ensemble dès que possible, c'est-à-dire lorsque les fonds seront disponibles.",
          },
        ],
      },
    ],
    mailString:
      "Bonjour,\n\n Je reviens vers vous suite à la signature de l'avant-contrat intervenue ce jour. Afin de pouvoir entamer vos démarches sans attendre, vous trouverez en pièce jointe la copie de l’acte et de ses annexes.\n Cet envoi sera complété d’une notification par voie de recommandé électronique ou postal, qui fera commercer votre délai de délai de rétractation de 10 jours. Vous voudrez bien me tenir informé de la non-réception de cette notification sous huitaine. \n{{codeAR24}}\n\n Pour me permettre de préparer au mieux votre dossier, j'attire votre attention sur les quelques points suivants, si toutefois ils vous concernent :\n\n •	Comme convenue à l'avant-contrat, je vous remercie de verser à l’aide du R.I.B. ci-joint, avant le {{dateMaxDG}}, les sommes suivantes : \n\t•	Votre dépôt de garantie (indemnité d'immobilisation) d’un montant de {{montantDG}} euros. Cette somme viendra en déduction du prix et des frais de l’acte de vente, \n\t•	La provision sur frais d’un montant de 500,00 euros. Cette somme viendra en déduction des frais attachés à la réalisation de l’acte de vente.\n\n •	Si vous empruntez, n'oubliez pas : \n1. De faire une demande de prêt à votre banque dans le délai prévu dans l'avant-contrat, et de vous faire établir une attestation en ce sens par la banque ; \n2. De m'adresser par mail une copie de l'offre de prêt que vous fera la banque, dès que vous l'aurez reçue, afin que je puisse faire le nécessaire sans attendre ; \n3. De m'indiquer dans le même temps, les coordonnées de votre conseiller financier, pour me permettre d'être plus efficace lorsque je devrai procéder à l'appel de fonds pour le jour de l'acte ; Il est important de rappeler à votre banquier que vous vous êtes engagés à ce que les fonds soient virés sur le compte du notaire au plus tard le jour de la signature de l'acte authentique, et qu'un dépassement de cette date, quelle qu'en soit la raison, pourrait nuire à vos intérêts, voire vous faire perdre le droit d'acquérir... \n\n•	Si vous souhaitez exercer la faculté de substitution/cession de contrat (si prévue à l'avant-contrat) : Je vous vous remercie de bien vouloir me l'indiquer dès que possible et de veiller au respect du délai éventuellement imparti à cet effet dans l'avant-contrat.\n\n Pour le jour de l'acte authentique, il faudra : \n1. Avoir effectué un virement du prix et de l'ensemble des frais à la comptabilité de l'office, pour que les sommes apparaissent sur le compte de l'étude au moins 24 heures avant le jour de la signature. A cet effet, je vous adresserai environ une semaine avant le jour « J » un décompte indiquant la somme que vous devrez nous adresser par virement, correspondant à votre apport personnel. J'attire votre attention sur le fait que l'étude n'est pas autorisée à recevoir de chèque. \nJe vous invite à suivre attentivement cette opération, pour éviter qu'au jour du rendez-vous de signature, votre ordre de virement soit toujours en cours de traitement par le système bancaire, ce qui empêcherait la régularisation de l'acte. \n2. Venir avec votre chéquier personnel pour effectuer uniquement les règlements complémentaires (remboursement de la taxe foncière au vendeur et divers proratas, etc.) ; \n3. Demander au vendeur une dernière visite des lieux, qui sera l'occasion de vous assurer avant la signature, du bon fonctionnement des équipements, de l'absence de dégradation, et aussi de procéder aux relevés d'usage (eau, gaz, électricité) ; \n4. Assurer l'immeuble et me remettre l'attestation d'assurance, \n5. Me faire parvenir, dans la mesure du possible par mail, avant le rendez-vous de signature, votre pièce d'identité et votre relevé d'identité bancaire afin je puisse vous adresser ultérieurement votre solde de compte. Sinon, vous en munir pour le jour du rendez-vous.\n\n {{notaire2parties}}\n\nSi vous souhaitez calculer ou recalculer vous-même ces frais d'acquisition (communément appelés «Frais de Notaire»), vous pouvez cliquer sur le lien suivant : https://www.immobilier.notaires.fr/fr/frais-de-notaire \n\nPar ailleurs, afin que nous puissions au mieux prendre en compte vos observations ou répondre à vos interrogations, et compte tenu d'un afflux d'appels téléphoniques très important, je vous remercie  par avance de privilégier l'usage des courriels.\n\n Restant à votre disposition pour toute information complémentaire,\n\n Sincères salutations",
  },
};

export default EmailData;
