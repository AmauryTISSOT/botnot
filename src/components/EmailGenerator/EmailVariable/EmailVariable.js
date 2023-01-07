import React, { useState } from "react";
import CopyPasteElement from "../CopyPasteElement/CopyPasteElement";
import EmailData from "../EmailData";

const EmailVariable = (props) => {
  const [inputState, setInputState] = useState("");

  // function who send input data to state
  const onFillHandler = (event) => {
    setInputState((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  // function to parse template literal
  // args : expression : string / valueObj : object with key - value for each literal template in expression
  const stringTemplateParser = (expression, valueObj) => {
    const templateMatcher = /{{\s?([^{}\s]*)\s?}}/g;
    let text = expression.replace(
      templateMatcher,
      (substring, value, index) => {
        value = valueObj[value];
        return value;
      }
    );
    return text;
  };

  const getEmailData = (emailDataObject, emailSelected) => {
    emailDataObject[emailSelected].input.forEach((element) => {
      //TODO: add switch
    });
  };

  //TODO: create all html input

  // function who return textInput html
  const textInput = (id, label, placeholder) => {
    return (
      <>
        <label htmlFor={id}>{label}</label>
        <input
          type="text"
          id={id}
          data-testid={`test-${id}`}
          placeholder={placeholder}
          onChange={onFillHandler}
        />
      </>
    );
  };

  //function who return radioInput html
  const radioInput = (id, label, value) => {
    return (
      <>
        <label>
          {label}
          {value.map((element, key) => (
            <div key={key}>
              <input
                type="radio"
                id={id}
                data-testid={`test-${id}-${element}`}
                name={id}
                value={element}
              />
              <label htmlFor={id}>{element}</label>
            </div>
          ))}
        </label>
      </>
    );
  };

  // function who return selectInput html
  const selectInput = (id, label, value) => {
    return (
      <>
        <label htmlFor={id}>{label}</label>
        <select id={id} data-testid={`test-${id}`} onChange={onFillHandler}>
          <option value="">--Sélectionner une option--</option>
          {value.map((element, key) => (
            <option
              data-testid={`test-${id}-${element}`}
              value={element}
              key={key}
            >
              {element}
            </option>
          ))}
        </select>
      </>
    );
  };

  // function who return html if boolean = true
  // return email string if boolean = false
  const depotGarantieMail = (boolean) => {
    if (boolean) {
      return (
        <>
          />
          <label htmlFor="pret">Condition suspensive de prêt ?</label>
          <select id="pret" data-testid="pret" onChange={onFillHandler}>
            <option value="">--Sélectionner une option--</option>
            <option value="oui" data-testid="pretOui">
              Oui
            </option>
            <option value="non" data-testid="pretNon">
              Non
            </option>
          </select>
          <label htmlFor="sru">Délai de rétractation à purger ?</label>
          <select id="sru" data-testid="sru" onChange={onFillHandler}>
            <option value="">--Sélectionner une option--</option>
            <option value="oui" data-testid="sruOui">
              Oui
            </option>
            <option value="non" data-testid="sruNon">
              Non
            </option>
          </select>
          <label htmlFor="instrumentaire">
            Sommes nous notaire instrumentaire ?
          </label>
        </>
      );
    } else
      return `Bonjour, le montant du dépot de garantie
    est de : ${inputState.garantie} et le montant de la provision
    sur frais est de : ${inputState.provision}`;
  };

  //TODO: add comment + default value + error handling

  const switchLogic = (key) => {
    switch (key) {
      case "garantie":
        return (
          <>
            {depotGarantieMail(true)}
            <CopyPasteElement content={depotGarantieMail(false)} />
          </>
        );

      default:
        return null;
    }
  };

  return <>{switchLogic(props.emailValue)}</>;
};

export default EmailVariable;
