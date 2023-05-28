import React, { useState } from "react";
import EtatCivilParser from "/home/amaury/repos/botnot/src/utils/EtatCivilParser/EtatCivilParser.js";
import CadastreParser from "/home/amaury/repos/botnot/src/utils/CadastrePaser/CadastreParser.js";
import "./CourrierForm.css";
import CourrierSelect from "../CourrierSelect/CourrierSelect";

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
    console.log(inputs);
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
          <li>
            <b>Nom : </b>
            {etatCivil.birthName}
          </li>
          <li>
            <b>Prénom : </b> {etatCivil.name[0]}
          </li>
          <li>
            <b>Date de naissance : </b> {etatCivil.dateOfBirth}
          </li>
          <li>
            <b>Lieu de naissance : </b>
            {etatCivil.placeOfBirth} ({etatCivil.placeOfBirthPostalCode})
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
          <p>
            <b>Adresse : </b>
            {bienImmo.address.rawAddress}
          </p>
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
    <h1 className="w-full text-2xl animate-pulse flex flex-col items-center justify-center">
      {" "}
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
          />
        </svg>
      </span>
      WORK IN PROGRESS
    </h1>
    // <div className="courrier-form">
    //   <div className="main-form">
    //     <form onSubmit={handleSubmit} name="etatCivil" className="input-form">
    //       <label htmlFor="etatCivil">ETAT-CIVIL</label>
    //       <input
    //         type="text"
    //         id="etatCivil"
    //         name="etatCivil"
    //         placeholder="copier-coller le paragraphe état-civil du vendeur"
    //         value={inputs.etatCivil || ""}
    //         onChange={handleChange}
    //         className="input-field"
    //       />
    //       <button value="Submit" disabled={submitButtonDisable.etatCivil}>
    //         Submit
    //       </button>
    //     </form>
    //     <form onSubmit={handleSubmit} name="bienImmo" className="input-form">
    //       <label htmlFor="bienImmo">BIEN IMMOBILIER</label>
    //       <input
    //         type="text"
    //         name="bienImmo"
    //         id="bienImmo"
    //         placeholder="copier-coller le paragraphe désignation du bien"
    //         value={inputs.bienImmo || ""}
    //         onChange={handleChange}
    //         className="input-field"
    //       />
    //       <button value="Submit" disabled={submitButtonDisable.bienImmo}>
    //         Submit
    //       </button>
    //     </form>
    //   </div>
    //   <div className="main-form-render">
    //     {submited.etatCivil && renderEtatCivil()}
    //     {submited.bienImmo && renderBienImmo()}
    //   </div>
    //   {submited.etatCivil && submited.bienImmo && (
    //     <CourrierSelect etatCivil={etatCivil} bienImmo={bienImmo} />
    //   )}
    // </div>
  );
};

export default CourrierForm;
