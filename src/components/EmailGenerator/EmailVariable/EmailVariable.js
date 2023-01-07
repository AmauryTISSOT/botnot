import React, { useEffect, useState } from "react";
import CopyPasteElement from "../CopyPasteElement/CopyPasteElement";
import EmailData from "../EmailData";

const EmailVariable = (props) => {
  const [inputState, setInputState] = useState(null);
  const [contentState, setContentState] = useState(null);

  useEffect(() => {
    const dataValue = EmailData[props.emailValue].mailString;
    setContentState(stringTemplateParser(dataValue, inputState));
  }, [inputState]);

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
    if (valueObj != null) {
      const templateMatcher = /{{\s?([^{}\s]*)\s?}}/g;
      let text = expression.replace(
        templateMatcher,
        (substring, value, index) => {
          value = valueObj[value];
          return value;
        }
      );
      return text;
    }
  };

  // function who return textInput html
  const textInput = (id, label, placeholder) => {
    return (
      <div key={id}>
        <label htmlFor={id}>{label}</label>
        <input
          type="text"
          id={id}
          data-testid={`test-${id}`}
          placeholder={placeholder}
          onChange={onFillHandler}
        />
      </div>
    );
  };

  //function who return radioInput html
  const radioInput = (id, label, value) => {
    return (
      <div key={id}>
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
                onChange={onFillHandler}
              />
              <label htmlFor={id}>{element}</label>
            </div>
          ))}
        </label>
      </div>
    );
  };

  // function who return selectInput html
  const selectInput = (id, label, value) => {
    return (
      <div key={id}>
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
      </div>
    );
  };

  return (
    <>
      {EmailData[props.emailValue].input.map((e) => {
        switch (e.type) {
          case "text":
            return textInput(e.id, e.label, e.placeholder);
          case "radio":
            return radioInput(e.id, e.label, e.value);
          case "select":
            return selectInput(e.id, e.label, e.value);
          default:
            return <div>Error no data available</div>;
        }
      })}

      {<CopyPasteElement content={contentState} />}
    </>
  );
};

export default EmailVariable;
