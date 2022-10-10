import React from "react";
import "./VenteAppartement.css"

const VenteAppartement = () => {
  return (
    <div>
      <h1>ELEMENTS A OBTENIR : VENTE APPARTEMENT</h1>
      <div>Titre de propriété<input type="checkbox"/></div>
      <div>Etat hypothécaire à jour<input type="checkbox"/></div>
      <div>
        Etat descriptif de division - Règlement de copropriété et tous les
        modificatifs<input type="checkbox"/>
      </div>
      <div>Plan cadastral<input type="checkbox"/></div>
      <div>
        Plan des lots / mails du confrère détenteur de l'EDD-RCP confirmant
        l'absence de plans<input type="checkbox"/>
      </div>
      <div>Modèle 1<input type="checkbox"/></div>
      <div>Titulaires des droits au cadastre<input type="checkbox"/></div>
      <div>Matrice cadastrale<input type="checkbox"/></div>
      <div>
        Dossier de location si le bien est toujours loué :
        <li>Contrat de bail<input type="checkbox"/></li>
        <li>Etat des lieux d'entrée des locataires<input type="checkbox"/></li>
        <li>Dernière quittance de loyer<input type="checkbox"/></li>
        <li>Montant du dépôt de garantie et qui en est le dépositaire<input type="checkbox"/></li>
      </div>
      <div>
        Si le bien est libre, dossier de l'ancienne location :
        <li>Contrat de bail<input type="checkbox"/></li>
        <li>Congés des locatiares ou du propriétaires<input type="checkbox"/></li>
        <li>Etat des lieux de sortie des locataires<input type="checkbox"/></li>
      </div>
      <div>
        En cas de travaux (uniquement si travaux de gros oeuvre et de second
        oeuvre) :
        <li>
          Si les travaux ont moins de 10 ans :
          <li>Autorisation d'urbanisme si nécessaire<input type="checkbox"/></li>
          <li>Autorisation de la copropréité si nécessaire (PV d'AG)<input type="checkbox"/></li>
          <li>Facture des travaux<input type="checkbox"/></li>
          <li>
            Attestation d'assurance responsabilité décennale des entreprises
            ayant réalisé les travaux<input type="checkbox"/>
          </li>
        </li>
        <li>
          Si les travaux ont plus de 10 ans :
          <li>Autorisation d'urbanisme si nécessaire<input type="checkbox"/></li>
          <li>Autorisation de la copropriété si nécessaire<input type="checkbox"/></li>
        </li>
      </div>
      <div>
        En cas d'immeuble construit récemment (moins de 10 ans ou{" "}
        <b>entre 10 et 15 ans</b>:
        <li>
          Copie de l'arrêté de permis de construire et éventuels modificatifs<input type="checkbox"/>
        </li>
        <li>Copie du contrat d'affichage pour chaque autorisation<input type="checkbox"/></li>
        <li>Copie de la DAACT<input type="checkbox"/></li>
        <li>Copie de la non-contestation de la mairie<input type="checkbox"/></li>
        <li>Copie du dossier d'intervention ultérieur sur l'ouvrage<input type="checkbox"/></li>
        <li>
          Attestation d'assurance dommage-ouvrage / ou attestations d'assurance
          responsabilité décennale des entreprises avec leurs factures<input type="checkbox"/>
        </li>
      </div>
      <div>
        Dossier de diagnostics parties privatives à jour :
        <li>Diagnostic électrique<input type="checkbox"/></li>
        <li>Diagnostic gaz<input type="checkbox"/></li>
        <li>Diagnostic plomb<input type="checkbox"/></li>
        <li>Diagnostic termites<input type="checkbox"/></li>
        <li>Diagnostic amiante<input type="checkbox"/></li>
        <li>
          Diagnostic de performances énergétiques (
          <i>
            Les diagnostics réalisés entre le 1er janvier 2013 et le 31 décembre
            2017 seront valables jusqu'au 31 décembre 2022 -- Les diagnostics
            réalisés entre le 1er janvier 2018 et le 30 juin 2021 seront
            valables jusqu'au 31 décembre 2024
          </i>
          )<input type="checkbox"/>
        </li>
        <li>Diagnostic assainissement<input type="checkbox"/></li>
        <li>Etat des risques et pollutions (ERP)<input type="checkbox"/></li>
      </div>
      <div>
        Diagnostics parties communes :<li>Diagnostic plomb<input type="checkbox"/></li>
        <li>Diagnostic termites<input type="checkbox"/></li>
        <li>Diagnostic amiante</li>
        <li>
          <b>OU </b>mail du syndic confirmant leur non réalisation<input type="checkbox"/>
        </li>
      </div>
      <div>Certifcat d'entretien de la chaudière / cheminée<input type="checkbox"/></div>
      <div>Diagnostic géorisques<input type="checkbox"/></div>
      <div>
        Installations classées en préfectures pour la ville ou l'arrondissement<input type="checkbox"/>
      </div>
      <div>
        <u>Si immeuble à PARIS :</u>
        <li>Note d'urbanisme délivrée par la commune<input type="checkbox"/></li>
        <li>Liste des immeubles sous arrêté de péril ou insécurité à jour<input type="checkbox"/></li>
        <li>Note de renseignements carrières<input type="checkbox"/></li>
        <li>
          Courrier des services de la direction de l'habitat de Paris (pour la
          vente)<input type="checkbox"/>
        </li>
      </div>
      <div>
        Procès-verbaux des assemblées générales des trois dernières années, ou
        mail du syndic indiquant leur absence<input type="checkbox"/>
      </div>
      <div>
        Si AG entre la promesse et la vente :<li>Copie du PV</li>
        <li>
          Justificatif de communication de la convocation du pouvoir à
          l'acquéreur par LRAR<input type="checkbox"/>
        </li>
      </div>
      <div>Dernier appel de charges de copropriété<input type="checkbox"/></div>
      <div>Pré-état daté / Etat daté<input type="checkbox"/></div>
      <div>
        Carnet d'entretien de l'immeuble ou mail du syndic confirmant son
        absence<input type="checkbox"/>
      </div>
      <div>Fiche synthétique de copropréité<input type="checkbox"/></div>
      <div>
        Attestation d'immatriculation de la copropriété + attestation de mise à
        jour annuelle<input type="checkbox"/>
      </div>
      <div>
        Diagnostic technique global ou mail du syndic confirmant son absence<input type="checkbox"/>
      </div>
      <div>
        Certificat art 20-II confirmant que l'acquéreur n'est pas déja
        copropriétaire au sein de l'immeuble ou débiteur de sommes envers la
        copropriété<input type="checkbox"/>
      </div>
      <div>
        Identité des parties :<li>Pièce d'identité de chaque comparant<input type="checkbox"/></li>
        <li>
          Si personne morale :<li>Kbis<input type="checkbox"/></li>
          <li>Statuts<input type="checkbox"/></li>
          <li>Décision collective signée<input type="checkbox"/></li>
        </li>
      </div>
      <div>
        BODACC de chaque comparant vendeur ou de la société et des associés<input type="checkbox"/>
      </div>
      <div>RIB des clients<input type="checkbox"/></div>
      <div>Note d'honoraires promesse validée par les BENEFICIAIRES<input type="checkbox"/></div>
      <div>
        Preuve de consultation de la lsite du gel des avoirs :{" "}
        <a href="https://gels-avoirs.dgtresor.gouv.fr/">
          https://gels-avoirs.dgtresor.gouv.fr/
        </a><input type="checkbox"/>
      </div>
      <div>Questionnaire TRACFIN<input type="checkbox"/></div>
      <div>
        Liste du mobilier détaillée article par article avec valorisation<input type="checkbox"/>
      </div>
      <div>Taxe foncière de l'année passée<input type="checkbox"/></div>
      <div>Plus-value<input type="checkbox"/></div>
      <div>Courrier + AR notification SRU (pour vente)<input type="checkbox"/></div>
    </div>
  );
};

export default VenteAppartement;
