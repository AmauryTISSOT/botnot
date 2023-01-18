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
      "This is a test. The variable 1 is {{test1}}. The variable 2 is {{test2}}. The variable 3 is {{test3}}",
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
      "- Nom du vendeur : {{vendeurName}}\n- Immeuble : {{adresse}}\n- N° de(s) lot(s) : {{numeroLot}}\n- Nom de l’acquéreur : {{acquereurName}}\n- Date du compromis : {{date}}\n\nBonjour,\n\nJe me permets de venir vers vous concernant une vente dans la copropriété située {{adresse}}.\n\nEn l’espèce, {{vendeurName}} vend(ent) à {{acquereurName}}, le(s) lot(s) : {{numeroLot}}.\n\nUn rendez-vous de signature de l’avant contrat est fixé pour le {{date}}.\n\nVous voudrez bien me faire parvenir les documents suivants pour cette date :\n•	les procès-verbaux des assemblées générales des trois dernières années,\n•	le montant des charges du budget prévisionnel et des charges hors budget prévisionnel dues par le vendeur sur les deux exercices précédant la vente,\n•	les sommes pouvant rester dues par le vendeur au syndicat des copropriétaires et les sommes qui seront dues au syndicat par l'acquéreur,\n•	l'état global des impayés des charges au sein du syndicat,\n•	la quote-part du fonds de travaux attachée au lot principal vendu,\n•	le carnet d'entretien de l'immeuble,\n•	le diagnostic technique global,\n•	la fiche synthétique technique copropriété,\n•	la copie du règlement de copropriété et l'état descriptif de division ainsi que tous leurs modificatifs éventuels publiés.\n\nPour le cas où l’un des éléments ci-dessus n’aurait pas été établi, vous voudrez bien m’en faire la confirmation par retour de mail.\n\nEnfin, pour le cas où des procédures seraient en cours sur la copropriété, je vous remercie par avance de bien vouloir m’en indiquer la teneur et le stade d’avancement.\n\nVous remerciant par avance,\n\nDans l’attente,\n\nSincères salutations",
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
      "Bonjour,\n\nJe vous confirme le rendez-vous pour la signature de la vente citée en référence au {{date}} à {{hour}} en l'office notarial.\n\nJe vous prie de bien vouloir trouver ci-joint le bilan financier de votre acquisition.\n\nAussi je vous remercie en conséquence de bien vouloir faire établir par votre banque un virement d'un montant de {{price}} euros à porter au crédit de mon compte au minimum deux jours avant la date de signature.\nJ'attire votre attention sur le fait que l’envoi d’un virement, lorsqu’il ne résulte pas d'un prêt bancaire, doit être accompagné d’une attestation de provenance de fonds établie par la banque émettrice du virement.\nJe vous invite à vous rapprocher rapidement de votre établissement bancaire car il lui est nécessaire d'avoir un certain délai pour procéder à ce mode de paiement.\nLe mode de règlement par virement nous est imposé par l'article 37 de la loi numéro 2011-331 du 28 Mars 2011, à l'exclusion de tout autre mode de paiement.\n\nEnfin, je vous remercie de bien vouloir, pour le rendez-vous envisagé de signature, vous munir des documents suivants :\n- une pièce d’identité en cours de validité,\n- un relevé d’identité bancaire (RIB),\n- un carnet de chèque / carte bancaire pour régler les éventuels proratas.\n\nEn vous remerciant,\n\nSincères salutations",
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
      "Bonjour,\n\nJe reviens vers vous suite à la signature de l'avant-contrat intervenue ce jour. Afin de pouvoir entamer vos démarches sans attendre, vous trouverez en pièce jointe la copie de l’acte et de ses annexes.\nCet envoi sera complété d’une notification par voie de recommandé électronique ou postal, qui fera commercer votre délai de délai de rétractation de 10 jours. Vous voudrez bien me tenir informé de la non-réception de cette notification sous huitaine. \n{{codeAR24}}\n\nPour me permettre de préparer au mieux votre dossier, j'attire votre attention sur les quelques points suivants, si toutefois ils vous concernent :\n\n•	Comme convenue à l'avant-contrat, je vous remercie de verser à l’aide du R.I.B. ci-joint, avant le {{dateMaxDG}}, les sommes suivantes : \n\t•	Votre dépôt de garantie (indemnité d'immobilisation) d’un montant de {{montantDG}} euros. Cette somme viendra en déduction du prix et des frais de l’acte de vente, \n\t•	La provision sur frais d’un montant de 500,00 euros. Cette somme viendra en déduction des frais attachés à la réalisation de l’acte de vente.\n\n•	Si vous empruntez, n'oubliez pas : \n1. De faire une demande de prêt à votre banque dans le délai prévu dans l'avant-contrat, et de vous faire établir une attestation en ce sens par la banque ; \n2. De m'adresser par mail une copie de l'offre de prêt que vous fera la banque, dès que vous l'aurez reçue, afin que je puisse faire le nécessaire sans attendre ; \n3. De m'indiquer dans le même temps, les coordonnées de votre conseiller financier, pour me permettre d'être plus efficace lorsque je devrai procéder à l'appel de fonds pour le jour de l'acte ; Il est important de rappeler à votre banquier que vous vous êtes engagés à ce que les fonds soient virés sur le compte du notaire au plus tard le jour de la signature de l'acte authentique, et qu'un dépassement de cette date, quelle qu'en soit la raison, pourrait nuire à vos intérêts, voire vous faire perdre le droit d'acquérir... \n\n•	Si vous souhaitez exercer la faculté de substitution/cession de contrat (si prévue à l'avant-contrat) : Je vous vous remercie de bien vouloir me l'indiquer dès que possible et de veiller au respect du délai éventuellement imparti à cet effet dans l'avant-contrat.\n\nPour le jour de l'acte authentique, il faudra : \n1. Avoir effectué un virement du prix et de l'ensemble des frais à la comptabilité de l'office, pour que les sommes apparaissent sur le compte de l'étude au moins 24 heures avant le jour de la signature. A cet effet, je vous adresserai environ une semaine avant le jour « J » un décompte indiquant la somme que vous devrez nous adresser par virement, correspondant à votre apport personnel. J'attire votre attention sur le fait que l'étude n'est pas autorisée à recevoir de chèque. \nJe vous invite à suivre attentivement cette opération, pour éviter qu'au jour du rendez-vous de signature, votre ordre de virement soit toujours en cours de traitement par le système bancaire, ce qui empêcherait la régularisation de l'acte. \n2. Venir avec votre chéquier personnel pour effectuer uniquement les règlements complémentaires (remboursement de la taxe foncière au vendeur et divers proratas, etc.) ; \n3. Demander au vendeur une dernière visite des lieux, qui sera l'occasion de vous assurer avant la signature, du bon fonctionnement des équipements, de l'absence de dégradation, et aussi de procéder aux relevés d'usage (eau, gaz, électricité) ; \n4. Assurer l'immeuble et me remettre l'attestation d'assurance, \n5. Me faire parvenir, dans la mesure du possible par mail, avant le rendez-vous de signature, votre pièce d'identité et votre relevé d'identité bancaire afin je puisse vous adresser ultérieurement votre solde de compte. Sinon, vous en munir pour le jour du rendez-vous.\n\n{{notaire2parties}}\n\nSi vous souhaitez calculer ou recalculer vous-même ces frais d'acquisition (communément appelés «Frais de Notaire»), vous pouvez cliquer sur le lien suivant : https://www.immobilier.notaires.fr/fr/frais-de-notaire \n\nPar ailleurs, afin que nous puissions au mieux prendre en compte vos observations ou répondre à vos interrogations, et compte tenu d'un afflux d'appels téléphoniques très important, je vous remercie  par avance de privilégier l'usage des courriels.\n\nRestant à votre disposition pour toute information complémentaire,\n\nSincères salutations",
  },
  notificationSRU: {
    input: [
      {
        type: "text",
        id: "dateSignature",
        label: "Date du rendez-vous de signature",
        placeholder: "ex : 18 août 2023",
      },
    ],
    mailString:
      "Bonjour,\n\nSuite à la signature de la promesse de vente à votre profit intervenue le {{dateSignature}}, vous bénéficiez des dispositions de l’article L 271-1 du Code de la construction et de l’habitation qui vous accordent un délai de rétractation.\n\nA cet effet et conformément à votre accord, je vous notifie par lettre recommandée électronique avec accusé de réception la copie de la promesse de vente et de ses annexes.\n\nPour répondre aux exigences des dispositions de l'article L 721-2 du Code de la construction et de l'habitation, je vous prie de bien vouloir trouver ci-joint : \n·	Le règlement de copropriété et l'état descriptif de division ainsi que tous leurs modificatifs éventuels publiés. \n·	Les procès-verbaux des assemblées générales des trois dernières années. \n·	Les informations financières suivantes : \n\t-	Le montant des charges courantes du budget prévisionnel et des charges hors budget prévisionnel payées par le vendeur sur les deux exercices précédant la vente. \n\t-	Les sommes susceptibles d'être dues au syndicat des copropriétaires par l'acquéreur. \n\t-	L'état global des impayés de charges au sein du syndicat et de la dette envers les fournisseurs. \n\t-	La quote-part du fonds de travaux attachée au lot principal vendu et le montant de la dernière cotisation au fonds versée par le vendeur au titre de son lot. \n·	Le carnet d'entretien de l'ENSEMBLE IMMOBILIER, \n·	La fiche synthétique de la copropriété, \n·	L’attestation d’immatriculation de la copropriété. \n\nDans un délai de dix jours à compter du lendemain de la première présentation de la présente lettre, vous pourrez exercer la faculté de rétractation, et ce par lettre recommandée avec accusé de réception envoyée à mon étude. \nA cet égard, il est rappelé qu’en vertu de l’article 642 du Code de procédure civile, le délai expirant un samedi, un dimanche, un jour férié ou chômé est prorogé jusqu’au premier jour ouvrable suivant. \nLes conséquences pourront être, selon votre choix, les suivantes : \n•	si vous entendez exercer cette faculté de rétractation dans le délai et la forme sus-indiqués, le compromis sera nul et non avenu et toute somme versée le cas échéant dans le cadre du compromis à un professionnel dépositaire des fonds devra vous être restituée dans un délai de vingt et un jours à compter du lendemain de la réception de cette rétractation ; \n•	si vous n’entendez pas exercer cette faculté de rétractation dans le délai sus-indiqué, le compromis produira son plein et entier effet. \n\nEtant rappelé que : \n•	en cas de pluralité d’acquéreurs, la rétractation d’un seul emportera automatiquement rétractation de tous à la convention ; \n•	toute rétractation devra être pure et simple sans condition ni réserve. \n\nVous en souhaitant bonne réception, \nEt restant à votre disposition pour tous renseignements complémentaires, \n\nSincères salutations",
  },
  digicode: {
    input: [
      {
        type: "text",
        id: "dateSignature",
        label: "Date du rendez-vous de signature",
        placeholder: "ex : 18 août 2023",
      },
    ],
    mailString:
      "Bonjour,\n\nJe reviens vers vous dans le cadre du dossier cité en objet pour vous confirmer le rendez-vous de signature le {{dateSignature}}.\nNos locaux sont situés 32 rue Etienne Marcel à PARIS 2ème arrondissement.\n\nPour information, le digicode pour l’ouverture de la 1ère porte est : 1960 et pour la seconde porte : 1984.\n\nL’étude est située au 3ème étage par l’ascenseur et 4ème par les escaliers.\n\nRestant à votre écoute,\n\nSincères salutations",
  },
  attestationTravaux: {
    input: [
      {
        type: "text",
        id: "reference",
        label: "Référence de la facture des travaux",
        placeholder: "ex : facture n°9128",
      },
      {
        type: "text",
        id: "annee",
        label: "Année de réalisation des travaux",
        placeholder: "ex : 2023",
      },
    ],
    mailString:
      "Vos refs: {{reference}}\n\nBonjour,\n\nJe suis en charge de la vente d’un bien sur lequel des travaux ont été réalisés par votre entreprise au cours de l’année {{annee}}, et dont vous trouverez la facture ci-jointe.\n\nAfin de me permettre de compléter mon dossier, je vous remercie de bien vouloir me faire passer l’attestation d’assurance responsabilité décennale couvrant la période de réalisation desdits travaux.\n\nVous remerciant par avance de votre diligence,\nEt restant à votre disposition,\n\nSincères salutations",
  },
  soldeCompte: {
    input: [],
    mailString:
      "Bonjour, \n\nJe reviens vers vous dans le cadre du dossier que nous avions traité ensemble à l’étude.\n\nA l’occasion de ma clôture comptable, nous nous sommes aperçu que votre compte présentait un solde créditeur.\n\nAfin de vous restituer ce solde, j'ai besoin d'obtenir vos coordonnées bancaires.\n\nCompte tenu du nombre important de fraudes recensées depuis ces derniers mois, vous allez recevoir un mail de notre plateforme sécurisée d'échange de relevé d'identité bancaire (RIB).\n\nVous remerciant par avance de votre diligence, et de votre compréhension.\nEt restant à votre disposition,\n\nSincères salutations",
  },
  copieActeSuiteSignature: {
    input: [
      {
        type: "radio",
        id: "attestation",
        label: "Des attestations de vente sont-elles à joindre au mail ?",
        valueObj: [
          {
            subLabel: "oui",
            value: "*  vos attestations de vente,\n",
          },
          {
            subLabel: "non",
            value: "",
          },
        ],
      },
      {
        type: "radio",
        id: "decompte",
        label: "Un décompte vendeur est-il à joindre au mail ?",
        valueObj: [
          {
            subLabel: "oui",
            value: "*  votre décompte vendeur,\n",
          },
          {
            subLabel: "non",
            value: "",
          },
        ],
      },
      {
        type: "radio",
        id: "prorata",
        label: "Un décompte des proratas est-il à joindre au mail ?",
        valueObj: [
          {
            subLabel: "oui",
            value: "*  le décompte des proratas,\n",
          },
          {
            subLabel: "non",
            value: "",
          },
        ],
      },
      {
        type: "radio",
        id: "google",
        label: "Avis google ?",
        valueObj: [
          {
            subLabel: "oui",
            value:
              "*  un lien qui vous permettra de donner votre avis sur nos prestations : https://www.google.fr/search?q=thomas+mesa+sparbe&oq=thomas&aqs=chrome.0.69i59j69i57j69i59l2j0l2.1777j0j7&sourceid=chrome&ie=UTF-8\n",
          },
          {
            subLabel: "non",
            value: "",
          },
        ],
      },
      {
        type: "radio",
        id: "RIB",
        label: "Demander un RIB ?",
        valueObj: [
          {
            subLabel: "oui",
            value:
              "Enfin, je vous rappelle qu'il convient de nous faire parvenir votre relevé d'identité bancaire, si cela n'a pas déjà été fait, afin de nous permettre de vous adresser votre solde de compte dans les meilleurs délais.\nCompte tenu du nombre important de fraudes recensées depuis ces derniers mois, vous allez recevoir un mail de notre plateforme sécurisée d'échange de relevé d'identité bancaire (RIB).\n\n",
          },
          {
            subLabel: "non",
            value: "",
          },
        ],
      },
    ],
    mailString:
      "Bonjour,\n\nTout d'abord, je tiens à vous remercier pour votre confiance et j’espère que nos services vous ont apporté une totale satisfaction.\n\nComme convenu, vous trouverez ci-joint :\n*  l'acte qui vient d'être signé, \n{{attestation}}{{decompte}}{{prorata}}{{google}}\n\n{{RIB}}Me tenant à votre entière disposition pour tout renseignement,\n\nSincères salutations",
  },
  copieActe: {
    input: [
      {
        type: "text",
        id: "lots",
        label: "Indiquer les numéros des lots vendus",
        placeholder: "ex : 15, 18 et 35",
      },
      {
        type: "text",
        id: "adresse",
        label: "Indiquer l'adresse du bien",
        placeholder: "ex : 35 rue de la Liberté - 75000 PARIS",
      },
      {
        type: "text",
        id: "notaire",
        label: "Indiquer le nom du notaire ayant reçu l'acte",
        placeholder: "ex : Laurent DUPONT",
      },
      {
        type: "radio",
        id: "successeur",
        label: "L'acte demandé a-t-il été reçu par le prédécesseur ?",
        valueObj: [
          {
            subLabel: "oui",
            value: "votre prédécesseur,",
          },
          {
            subLabel: "non",
            value: "",
          },
        ],
      },
      {
        type: "text",
        id: "type",
        label: "Indiquer le type d'acte",
        placeholder: "ex : vente",
      },
      {
        type: "text",
        id: "dateActe",
        label: "Indiquer la date de l'acte",
        placeholder: "ex : 30 août 1974",
      },
      {
        type: "text",
        id: "publicite",
        label: "Indiquer les références de publication",
        placeholder: "ex : VANVES 1, le 30 août...",
      },
    ],
    mailString:
      "Mon Cher Maître,\n\nJe viens vers vous dans le cadre de la vente des lots {{lots}}, sur un immeuble sis à {{adresse}}, dont j’ai la charge.\n\nMaître {{notaire}}, {{successeur}} avait reçu un acte contenant {{type}} en date du {{dateActe}}, publié au Service de la Publicité Foncière de {{publicite}}.\n\nJe vous remercie de bien vouloir me faire passer, par retour de courriel, la copie dudit acte.\n\nVous remerciant par avance de votre diligence,\n\nBien sûr, je reste à votre disposition pour le règlement de tous frais de copie,\n\nJe vous prie de me croire,\n\nVotre bien dévoué",
  },
  copiePlan: {
    input: [
      {
        type: "text",
        id: "lots",
        label: "Indiquer les numéros des lots vendus",
        placeholder: "ex : 15, 18 et 35",
      },
      {
        type: "text",
        id: "adresse",
        label: "Indiquer l'adresse du bien",
        placeholder: "ex : 35 rue de la Liberté - 75000 PARIS",
      },
      {
        type: "text",
        id: "notaire",
        label: "Indiquer le nom du notaire ayant reçu l'acte",
        placeholder: "ex : Laurent DUPONT",
      },
      {
        type: "radio",
        id: "successeur",
        label: "L'acte demandé a-t-il été reçu par le prédécesseur ?",
        valueObj: [
          {
            subLabel: "oui",
            value: "votre prédécesseur,",
          },
          {
            subLabel: "non",
            value: "",
          },
        ],
      },
      {
        type: "text",
        id: "dateActe",
        label: "Indiquer la date de l'acte",
        placeholder: "ex : 30 août 1974",
      },
      {
        type: "text",
        id: "publicite",
        label: "Indiquer les références de publication",
        placeholder: "ex : VANVES 1, le 30 août...",
      },
    ],
    mailString:
      "Mon Cher Maître,\n\nJe viens vers vous dans le cadre de la vente des lots {{lots}}, sur un immeuble sis à {{adresse}}, dont j’ai la charge.\n\nMaître {{notaire}},{{successeur}}avait reçu l’Etat descriptif de division – Règlement de copropriété concernant cet immeuble, suivant acte en date du {{dateActe}}, publié au Service de la Publicité Foncière de {{publicite}}. Aussi, je vous remercie de bien vouloir me faire passer par retour de courriel les plans des lots annexés audit règlement\n\nVous remerciant par avance de votre diligence,\n\nBien sûr, je reste à votre disposition pour le règlement de tous frais de copie,\n\nJe vous prie de me croire,\n\nVotre bien dévoué",
  },
  demandeTestament: {
    input: [
      {
        type: "text",
        id: "nomDefunt",
        label: "Indiquer le nom du défunt",
        placeholder: "ex : Mme Marie DUPONT",
      },
      {
        type: "text",
        id: "dateFCDDV",
        label: "Indiquer le nom du défunt",
        placeholder: "ex : 13 janvier 1999",
      },
    ],
    mailString:
      "Mon Cher Maître,\n\nJe viens vers vous dans le cadre de la succession de {{nomDefunt}}, dont j’ai la charge.\n\nA la consultation du FCDDV, dont vous trouverez copie ci-jointe, il apparait une inscription concernant un acte reçu par votre office en date du {{dateFCDDV}}.\nJe vous remercie de bien vouloir m’indiquer de quel acte il s’agit, et le cas échéant, de bien vouloir procéder à son dépôt ou enregistrement, après m’en avoir préalablement fait passer copie.\n\nBien sûr, je reste à votre disposition pour tout règlement des frais subséquents.\n\nVous remerciant par avance de votre diligence,\nEt restant à votre disposition,\n\nBien cordialement,\nVotre bien dévoué",
  },
  procuration: {
    input: [],
    mailString:
      "Bonjour,\n\nJe reviens vers vous dans le cadre de l'affaire citée en objet.\nComme convenu, vous trouverez en pièce jointe une procuration à me retourner après avoir apposé vos initiales en bas de la chaque page, complété le lieu et la date et signé en dernière page.\n\nJ’attire votre attention sur le fait que vous devrez faire certifier votre signature soit par un Notaire, soit par le Maire ou l'Officier d'Etat Civil de votre commune, cette formalité étant obligatoire.\nPour cela, vous compléterez la procuration comme indiqué ci-dessus, devant cette personne.\n\nDans un premier temps, je vous remercie de bien vouloir me faire parvenir la procuration directement par courriel, puis de me faire parvenir l'original par voie postale ?\n\nVous remerciant par avance de votre diligence,\nEt restant à votre disposition pour toute information complémentaire,\n\nSincères salutations",
  },
  DHL: {
    input: [
      {
        type: "select",
        id: "arrondissement",
        label: "Selectioner l'arrondissement",
        value: [
          "75001",
          "75002",
          "75003",
          "75004",
          "75005",
          "75006",
          "75007",
          "75008",
          "75009",
          "75010",
          "75011",
          "75012",
          "75013",
          "75014",
          "75015",
          "75016",
          "75017",
          "75018",
          "75019",
          "75020",
        ],
      },
      {
        type: "text",
        id: "rue",
        label: "Indiquer le nom de la rue",
        placeholder: "ex : 30 rue de la Mairie",
      },
      {
        type: "text",
        id: "cadastre",
        label: "Indiquer les références cadastrales",
        placeholder: "ex : CZ 50",
      },
    ],
    mailString:
      "Madame, Monsieur,\n\nJe me permets de venir vers vous dans le cadre du dossier de vente cité en objet, portant sur un immeuble sis à PARIS ({{arrondissement}}), {{rue}}, et figurant au cadastre sous le numéro {{cadastre}}.\n\nAussi, vous saurais-je gré de bien vouloir me confirmer par retour de courrier les dispositions relatives à l’immeuble concernant :\n• INSALUBRITE: Si l’immeuble fait l’objet de mesures d’insalubrité prises en application des articles 1331-22 et suivants du Code de la Santé Publique ;\n•	PERIL & INSECURITE: Si l’immeuble fait l’objet d’arrêtés municipaux pris en application des articles L511-1 à L511-7, R511-1 à R511-12, L129-1 à L129-7, et R129-1 à 129-9 du Code de la Construction et de l’Habitation ;\n•	EXPOSITION AU PLOMB & LUTTE CONTRE LE SATURNISME: Si l’immeuble fait l’objet de mesures de protection contre l’exposition au plomb ;\n•	LUTTE CONTRE LES TERMITES: Si l’immeuble est situé dans une zone contaminée par les termites ou susceptible de l’être en application des dispositions du Code de la Construction et de l’Habitation ;\n•	ASSAINISSEMENT: Si l’immeuble est raccordé au système d’assainissement de la ville de Paris ;\n•	RAVALEMENT: Si l’immeuble fait l’objet d’arrêtés municipaux pris en mesure de ravalement en application des articles 132-1 et suivants du Code de la Construction et de l’Habitation.\n\nVous remerciant par avance de votre diligence,\nEt restant à votre disposition, Bien cordialement,\n\nSincères salutations,",
  },
  secret: {
    input: [],
    mailString:
      "Bonjour,\n\nJe reviens vers vous suite à votre mail dans le cadre du dossier ci-dessus cité en objet. Malheureusement, le secret professionnel couvrant notre profession ne nous permet pas de communiquer ce type de document et d’information, sauf demande expresse et écrite émanant du client lui-même.\n\nAussi, je vous encourage à vous rapprocher de ce-dernier / cette-dernière, de manière à ce qu’il / qu’elle nous renouvelle cette demande directement.\n\nVous remerciant par avance de votre compréhension,\nEt restant à votre disposition,\n\nSincères salutations",
  },
  relanceSyndic: {
    input: [
      {
        type: "text",
        id: "date",
        label: "Indiquer la date du précédent mail",
        placeholder: "ex : 12 avril 2011",
      },
      {
        type: "select",
        id: "type",
        label: "Selectioner le type d'acte :",
        value: [
          "promesse",
          "vente",
        ],
      },
      {
        type: "text",
        id: "dateVente",
        label: "Indiquer la date de signature",
        placeholder: "ex : 30 avril 2011",
      },
    ],
    mailString:
      "Bonjour,\n\nJe viens vers vous suite à mon mail en date du {{date}}, resté sans réponse à ce jour.\n\nLa {{type}} devant intervenir le {{dateVente}}, je vous remercie de bien vouloir y apporter une réponse rapide.\n\nEn vous remerciant pour votre aide,\n\nSincères salutations",
  },
  relanceDeblocageFonds: {
    input: [
      {
        type: "text",
        id: "date",
        label: "Indiquer le jour du rendez-vous",
        placeholder: "ex : 12 avril 2011",
      },
      {
        type: "text",
        id: "heure",
        label: "Indiquer l'heure du rendez-vous",
        placeholder: "ex : 11h30",
      },
    ],
    mailString:
    "Bonjour,\n\nJe reviens vers vous dans le cadre du dossier visé en objet, dont le rendez-vous est prévu le {{date}} à {{heure}}.\n\nJe reste dans l'attente de réception des fonds et vous remercie de bien vouloir me confirmer que le nécessaire a bien été fait auprès de votre banque.\n\nJe me permets de vous rappeler que la réception de l'intégralité de ces fonds est indispensable au maintien du rendez-vous de signature, qui, à défaut, devra être reporté\n\nN'oubliez pas de venir munis de :\n-	votre carte d'identité,\n-	votre RIB signé,\n-	votre carnet de chèque de manière à régler les différents proratas,\n-	votre attestation d'assurance incendie.\n\nJe reste à votre disposition pour toute information complémentaire\n\nSincères salutations",
  },
};

export default EmailData;
