import React, { useState } from "react";
import EtatCivilParser from "/home/amaury/repos/botnot/src/utils/EtatCivilParser/EtatCivilParser.js";
import CadastreParser from "/home/amaury/repos/botnot/src/utils/CadastrePaser/CadastreParser.js";

const CourrierForm = () => {
  const [inputs, setInputs] = useState("");
  const [submited, setSubmited] = useState({
    etatCivil: false,
    bienImmo: false,
  });
  const [etatCivil, setEtatCivil] = useState("");
  const [bienImmo, setBienImmo] = useState("");

  // Function to update state when input fields change
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  // Function to handle form submissions
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name;
    setSubmited((values) => ({ ...values, [name]: true }));
    if (name === "etatCivil") {
      try {
        setEtatCivil(EtatCivilParser(inputs.etatCivil)); // Parsing the input value using EtatCivilParser and updating the state
      } catch (error) {
        if (error instanceof SyntaxError || TypeError) {
          setEtatCivil("error");
        } else {
          throw error;
        }
      }
    }
    if (name === "bienImmo") {
      setBienImmo(CadastreParser(inputs.bienImmo)); // Parsing the input value using CadastreParser and updating the state
    }
  };
  
  // Function to render the etatCivil object
  const renderEtatCivil = () => {
    if (etatCivil === "error") {
      return <div>Erreur d'input</div>;
    } else {
      return (
        <div>
          <li>Nom : {etatCivil.birthName}</li>
          <li>Prénom : {etatCivil.name[1]}</li>
          <li>Date de naissance: {etatCivil.dateOfBirth}</li>
          <li>Lieu de naissance: {etatCivil.placeOfBirth}</li>
        </div>
      );
    }
  };

  // Function to render the bienImmo array
  const renderBienImmo = () => (
    <div>
      {bienImmo.map(({ section, numero, lieudit, surface }, index) => (
        <li key={index}>
          Section : {section} Numéro : {numero} Lieudit : {lieudit} Surface :{" "}
          {surface}
        </li>
      ))}
    </div>
  );

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit} name="etatCivil">
          <label>
            ETAT-CIVIL
            <input
              type="text"
              name="etatCivil"
              placeholder="copier-coller le paragraphe état-civil du vendeur"
              value={inputs.etatCivil || ""}
              onChange={handleChange}
            />
          </label>
          <button value="Submit">Submit</button>
        </form>
        <form onSubmit={handleSubmit} name="bienImmo">
          <label>
            BIEN IMMOBILIER
            <input
              type="text"
              name="bienImmo"
              placeholder="copier-coller le paragraphe désignation du bien"
              value={inputs.bienImmo || ""}
              onChange={handleChange}
            />
          </label>
          <button value="Submit">Submit</button>
        </form>
      </div>
      {submited.etatCivil && renderEtatCivil()}
      {submited.bienImmo && renderBienImmo()}
    </div>
  );
};

export default CourrierForm;
