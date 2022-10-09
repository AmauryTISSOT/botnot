import React from "react";
import "./VenteAppartement.css"

const VenteAppartement = () => {
  return (
    <div>
      <h1>ELEMENTS A OBTENIR : VENTE APPARTEMENT</h1>
      <div>Titre de propriété</div>
      <div>Etat hypothécaire à jour</div>
      <div>
        Etat descriptif de division - Règlement de copropriété et tous les
        modificatifs
      </div>
      <div>Plan cadastral</div>
      <div>
        Plan des lots / mails du confrère détenteur de l'EDD-RCP confirmant
        l'absence de plans
      </div>
      <div>Modèle 1</div>
      <div>Titulaires des droits au cadastre</div>
      <div>Matrice cadastrale</div>
      <div className="container">
        Dossier de location si le bien est toujours loué :
        <li>Contrat de bail</li>
        <li>Etat des lieux d'entrée des locataires</li>
        <li>Dernière quittance de loyer</li>
        <li>Montant du dépôt de garantie et qui en est le dépositaire</li>
      </div>
      <div>
        Si le bien est libre, dossier de l'ancienne location :
        <li>Contrat de bail</li>
        <li>Congés des locatiares ou du propriétaires</li>
        <li>Etat des lieux de sortie des locataires</li>
      </div>
      <div>
        En cas de travaux (uniquement si travaux de gros oeuvre et de second
        oeuvre) :
        <li>
          Si les travaux ont moins de 10 ans :
          <li>Autorisation d'urbanisme si nécessaire</li>
          <li>Autorisation de la copropréité si nécessaire (PV d'AG)</li>
          <li>Facture des travaux</li>
          <li>
            Attestation d'assurance responsabilité décennale des entreprises
            ayant réalisé les travaux
          </li>
        </li>
        <li>
          Si les travaux ont plus de 10 ans :
          <li>Autorisation d'urbanisme si nécessaire</li>
          <li>Autorisation de la copropriété si nécessaire</li>
        </li>
      </div>
      <div>
        En cas d'immeuble construit récemment (moins de 10 ans ou{" "}
        <b>entre 10 et 15 ans</b>:
        <li>
          Copie de l'arrêté de permis de construire et éventuels modificatifs
        </li>
        <li>Copie du contrat d'affichage pour chaque autorisation</li>
        <li>Copie de la DAACT</li>
        <li>Copie de la non-contestation de la mairie</li>
        <li>Copie du dossier d'intervention ultérieur sur l'ouvrage</li>
        <li>
          Attestation d'assurance dommage-ouvrage / ou attestations d'assurance
          responsabilité décennale des entreprises avec leurs factures
        </li>
      </div>
      <div>
        Dossier de diagnostics parties privatives à jour :
        <li>Diagnostic électrique</li>
        <li>Diagnostic gaz</li>
        <li>Diagnostic plomb</li>
        <li>Diagnostic termites</li>
        <li>Diagnostic amiante</li>
        <li>
          Diagnostic de performances énergétiques (
          <i>
            Les diagnostics réalisés entre le 1er janvier 2013 et le 31 décembre
            2017 seront valables jusqu'au 31 décembre 2022 -- Les diagnostics
            réalisés entre le 1er janvier 2018 et le 30 juin 2021 seront
            valables jusqu'au 31 décembre 2024
          </i>
          )
        </li>
        <li>Diagnostic assainissement</li>
        <li>Etat des risques et pollutions (ERP)</li>
      </div>
      <div>
        Diagnostics parties communes :<li>Diagnostic plomb</li>
        <li>Diagnostic termites</li>
        <li>Diagnostic amiante</li>
        <li>
          <b>OU </b>mail du syndic confirmant leur non réalisation
        </li>
      </div>
      <div>Certifcat d'entretien de la chaudière / cheminée</div>
      <div>Diagnostic géorisques</div>
      <div>
        Installations classées en préfectures pour la ville ou l'arrondissement
      </div>
      <div>
        <u>Si immeuble à PARIS :</u>
        <li>Note d'urbanisme délivrée par la commune</li>
        <li>Liste des immeubles sous arrêté de péril ou insécurité à jour</li>
        <li>Note de renseignements carrières</li>
        <li>
          Courrier des services de la direction de l'habitat de Paris (pour la
          vente)
        </li>
      </div>
      <div>
        Procès-verbaux des assemblées générales des trois dernières années, ou
        mail du syndic indiquant leur absence
      </div>
      <div>
        Si AG entre la promesse et la vente :<li>Copie du PV</li>
        <li>
          Justificatif de communication de la convocation du pouvoir à
          l'acquéreur par LRAR
        </li>
      </div>
      <div>Dernier appel de charges de copropriété</div>
      <div>Pré-état daté / Etat daté</div>
      <div>
        Carnet d'entretien de l'immeuble ou mail du syndic confirmant son
        absence
      </div>
      <div>Fiche synthétique de copropréité</div>
      <div>
        Attestation d'immatriculation de la copropriété + attestation de mise à
        jour annuelle
      </div>
      <div>
        Diagnostic technique global ou mail du syndic confirmant son absence
      </div>
      <div>
        Certificat art 20-II confirmant que l'acquéreur n'est pas déja
        copropriétaire au sein de l'immeuble ou débiteur de sommes envers la
        copropriété
      </div>
      <div>
        Identité des parties :<li>Pièce d'identité de chaque comparant</li>
        <li>
          Si personne morale :<li>Kbis</li>
          <li>Statuts</li>
          <li>Décision collective signée</li>
        </li>
      </div>
      <div>
        BODACC de chaque comparant vendeur ou de la société et des associés
      </div>
      <div>RIB des clients</div>
      <div>Note d'honoraires promesse validée par les BENEFICIAIRES</div>
      <div>
        Preuve de consultation de la lsite du gel des avoirs :{" "}
        <a href="https://gels-avoirs.dgtresor.gouv.fr/">
          https://gels-avoirs.dgtresor.gouv.fr/
        </a>
      </div>
      <div>Questionnaire TRACFIN</div>
      <div>
        Liste du mobilier détaillée article par article avec valorisation
      </div>
      <div>Taxe foncière de l'année passée</div>
      <div>Plus-value</div>
      <div>Courrier + AR notification SRU (pour vente)</div>
    </div>
  );
};

export default VenteAppartement;
