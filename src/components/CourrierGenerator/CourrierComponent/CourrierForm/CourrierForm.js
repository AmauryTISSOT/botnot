import React, { useState } from "react";
import EtatCivilParser from "/home/amaury/repos/botnot/src/utils/EtatCivilParser/EtatCivilParser.js";
import CadastreParser from "/home/amaury/repos/botnot/src/utils/CadastrePaser/CadastreParser.js";
import "./CourrierForm.css";

const CourrierForm = () => {
  const [inputs, setInputs] = useState("");
  const [submited, setSubmited] = useState({
    etatCivil: false,
    bienImmo: false,
  });
  const [submitButtonDisable, setSubmitButtonDisable] = useState({
    etatCivil: true,
    bienImmo: true,
  });
  const [etatCivil, setEtatCivil] = useState("");
  const [bienImmo, setBienImmo] = useState("");

  // Function to update state when input fields change
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
    setSubmitButtonDisable((values) => ({
      ...values,
      [name]: value.trim() === "",
    })); //disable submit button if the input field is empty
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
      try {
        setBienImmo(CadastreParser(inputs.bienImmo)); // Parsing the input value using CadastreParser and updating the state
      } catch (error) {
        if (error instanceof SyntaxError || TypeError) {
          setBienImmo("error");
        }
      }
    }
  };

  // Function to render the etatCivil object
  const renderEtatCivil = () => {
    if (etatCivil === "error") {
      return <div>Erreur d'input</div>;
    } else {
      return (
        <div className="etatCivil-render">
          <li><b>Nom : </b>{etatCivil.birthName}</li>
          <li><b>Prénom : </b> {etatCivil.name[1]}</li>
          <li><b>Date de naissance : </b> {etatCivil.dateOfBirth}</li>
          <li>
            <b>Lieu de naissance : </b>{etatCivil.placeOfBirth} (
            {etatCivil.placeOfBirthPostalCode})
          </li>
        </div>
      );
    }
  };

  // Function to render the bienImmo array
  const renderBienImmo = () => {
    if (bienImmo === "error") {
      return <div>Erreur d'input</div>;
    } else {
      return (
        <div className="bienImmo-render">
         <p><b>Adresse : </b>{bienImmo.address.rawAddress}</p>
          <table>
            <thead>
              <tr>
                <th>Section</th>
                <th>Numéro</th>
                <th>Lieudit</th>
                <th>Surface</th>
              </tr>
            </thead>
            <tbody>
              {bienImmo.cadastre.map((item, index) => (
                <tr key={index}>
                  <td>{item.section}</td>
                  <td>{item.numero}</td>
                  <td>{item.lieudit}</td>
                  <td>{item.surface}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  };

  return (
    <div className="courrier-form">
      <div className="main-form">
        <form onSubmit={handleSubmit} name="etatCivil" className="input-form">
          <label htmlFor="etatCivil">ETAT-CIVIL</label>
          <input
            type="text"
            id="etatCivil"
            name="etatCivil"
            placeholder="copier-coller le paragraphe état-civil du vendeur"
            value={inputs.etatCivil || ""}
            onChange={handleChange}
            className="input-field"
          />
          <button value="Submit" disabled={submitButtonDisable.etatCivil}>
            Submit
          </button>
        </form>
        <form onSubmit={handleSubmit} name="bienImmo" className="input-form">
          <label htmlFor="bienImmo">BIEN IMMOBILIER</label>
          <input
            type="text"
            name="bienImmo"
            id="bienImmo"
            placeholder="copier-coller le paragraphe désignation du bien"
            value={inputs.bienImmo || ""}
            onChange={handleChange}
            className="input-field"
          />
          <button value="Submit" disabled={submitButtonDisable.bienImmo}>
            Submit
          </button>
        </form>
      </div>
      <div className="main-form-render">
        {submited.etatCivil && renderEtatCivil()}
        {submited.bienImmo && renderBienImmo()}
      </div>
    </div>
  );
};

export default CourrierForm;
