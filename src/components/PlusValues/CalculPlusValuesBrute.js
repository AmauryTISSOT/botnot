import React, { useState } from "react";

const CalculPlusValuesBrute = ({ state, setState }) => {
  const [internalState, setInternalState] = useState("");

  const sendValueToState = (event) => {
    setInternalState((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  //TODO: add onChange for radio buttons
  //TODO: add checked logic (see checkbox component)
  return (
    <>
      <label htmlFor="prixVente">
        Prix de vente ou Indemnité d'expropriation
      </label>
      <input
        type="text"
        id="prixVente"
        name="prixVente"
        data-testid="prixVente"
        onChange={(e) => sendValueToState(e)}
      />
      <label htmlFor="fraisVendeur">
        <strong>A déduire :</strong> Frais et taxes supportés lors de la cession
        (commission d'agence...)
      </label>
      <input
        type="text"
        id="fraisVendeur"
        name="fraisVendeur"
        data-testid="fraisVendeur"
        onChange={(e) => sendValueToState(e)}
      />
      <label htmlFor="prixAcquisition">
        <strong>A déduire :</strong> Prix d'acquisition ou valeur vénale
      </label>
      <input
        type="text"
        id="prixAcquisition"
        name="prixAcquisition"
        data-testid="prixAcquisition"
        onChange={(e) => sendValueToState(e)}
      />
      <label htmlFor="fraisAcquisition">
        <strong>A déduire :</strong> Frais d'acquisition :
      </label>
      <input
        type="text"
        id="fraisAcquisition"
        name="fraisAcquisition"
        data-testid="fraisAcquisition"
        onChange={(e) => sendValueToState(e)}
      />

      <fieldset>
        <input
          type="radio"
          id="forfait7.5"
          name="forfait7"
          value="forfait7"
          data-testid="forfait7"
          checked
        />
        <label htmlFor="forfait7.5">
          acquisition à titre onereux (7.5 % ou au réel)
        </label>
        <input
          type="radio"
          id="acquisitionTitreGratuit"
          name="acquisitionTitreGratuit"
          value="acquisitionTitreGratuit"
          data-testid="acquisitionTitreGratuit"
        />
        <label htmlFor="acquisitionTitreGratuit">
          acquisition à titre onereux (7.5 % ou au réel)
        </label>
      </fieldset>

      <label htmlFor="travaux">
        <strong>A déduire :</strong>Travaux
        <br />
        (par défaut 15% du prix d'acquisition ou au réel)
        <br />
        <strong>
          Attention : le forfait de 15% ne s'applique qu'aux immeubles bâties,
          après 5 ans de détention.
        </strong>
      </label>
      <input
        type="text"
        id="travaux"
        name="travaux"
        data-testid="travaux"
        onChange={(e) => sendValueToState(e)}
      />

      <label htmlFor="voirie">
        <strong>A déduire :</strong> Cotisations de voirie, réseaux et
        distribution
      </label>
      <input
        type="text"
        id="voirie"
        name="voirie"
        data-testid="voirie"
        onChange={(e) => sendValueToState(e)}
      />
      <div data-test-id="plusValueBrute">{}</div>
    </>
  );
};

export default CalculPlusValuesBrute;
