import React, { useEffect, useState } from "react";
import CopyPasteElement from "../CopyPasteElement/CopyPasteElement";

const EmailVariable = (props) => {
  const [inputState, setInputState] = useState(null);
  const [contentState, setContentState] = useState(null);

  useEffect(() => {
    const dataValue = props.data[props.emailValue].mailString;
    setContentState(stringTemplateParser(dataValue, inputState));
  }, [inputState, props.emailValue, props.data]);

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
    if (valueObj == null) {
      return expression.replace(/{{\s?([^{}\s]*)\s?}}/g, "");
    }
    return expression.replace(
      /{{\s?([^{}\s]*)\s?}}/g,
      (substring, value) => valueObj[value] || ""
    );
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
  const radioInput = (id, label, valueObj) => {
    return (
      <div key={id}>
        <label>
          {label}
          {valueObj.map((element, key) => (
            <div key={key}>
              <input
                type="radio"
                id={id}
                data-testid={`test-${id}-${element.subLabel}`}
                name={id}
                value={element.value}
                onChange={onFillHandler}
              />
              <label htmlFor={id}>{element.subLabel}</label>
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
      {props.data[props.emailValue].input.map((e) => {
        switch (e.type) {
          case "text":
            return textInput(e.id, e.label, e.placeholder);
          case "radio":
            return radioInput(e.id, e.label, e.valueObj);
          case "select":
            return selectInput(e.id, e.label, e.value);
          default:
            return <div>Error no data available</div>;
        }
      })}

      <CopyPasteElement content={contentState} />
    </>
  );
};

export default EmailVariable;
