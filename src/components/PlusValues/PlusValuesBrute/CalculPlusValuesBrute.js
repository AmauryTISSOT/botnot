import React, { useState } from "react";

const CalculPlusValuesBrute = ({ state, setState }) => {
  // Internal hook state
  const [internalState, setInternalState] = useState("");

  // Hook state for "forfait 7.5%" radio button
  const [forfaitRadio, setForfaitRadio] = useState(true);

  // Hook state for "acquisition titre gratuit" radio button
  const [titreGratuitRadio, setTitreGratuitRadio] = useState(false);

  const handleForfaitRadio = () => {
    setForfaitRadio(true);
    setTitreGratuitRadio(false);
  };

  const handleTitreGratuitRadio = () => {
    setForfaitRadio(false);
    setTitreGratuitRadio(true);
  };

  //TODO: add logic : if travaux reel exist don't apply 15%, same for frais and 7.5%
  const plusValueBrute = () => {
    const prixDeVenteCorrige = Number(
      internalState.prixVente - internalState.fraisVendeur
    );

    const forfaitFrais = Math.floor(
      internalState.prixAcquisition * (7.5 / 100)
    );
    const forfaitTravaux = Math.floor(
      internalState.prixAcquisition * (15 / 100)
    );
    const prixAcquisition = Number(internalState.prixAcquisition);

    const prixAcquisitionCorrige =
      prixAcquisition + forfaitFrais + forfaitTravaux;

    const PVIbrute = prixDeVenteCorrige - prixAcquisitionCorrige;

    if (!isNaN(PVIbrute)) {
      return PVIbrute;
    }
  };

  // Function who send target element value to internal state
  const sendValueToState = (event) => {
    setInternalState((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

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
      {/* {TODO: value of this input = state} */}
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
          name="forfait7.5"
          data-testid="forfait7.5"
          value={forfaitRadio}
          checked={forfaitRadio}
          onChange={(e) => {
            handleForfaitRadio();
            sendValueToState(e);
          }}
        />
        <label htmlFor="forfait7.5">
          acquisition à titre onereux (7.5 % ou au réel)
        </label>
        <input
          type="radio"
          id="acquisitionTitreGratuit"
          name="acquisitionTitreGratuit"
          data-testid="acquisitionTitreGratuit"
          value={titreGratuitRadio}
          checked={titreGratuitRadio}
          onChange={(e) => {
            handleTitreGratuitRadio();
            sendValueToState(e);
          }}
        />
        <label htmlFor="acquisitionTitreGratuit">
          acquisition à titre gratuit (succession, donation)
        </label>
        <input
          type="text"
          id="fraisReel"
          name="fraisReel"
          data-testid="fraisReel"
          onChange={(e) => sendValueToState(e)}
        />
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
      <div data-testid="plusValueBrute">{plusValueBrute()}</div>
    </>
  );
};

export default CalculPlusValuesBrute;
