import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CopyPasteElement from "../CopyPasteElement/CopyPasteElement";
import { EmailData as data } from "../EmailData";
import NoMatch from "../../../pages/NoMatch/NoMatch";

const EmailDisplay = () => {
  const [inputState, setInputState] = useState(null);
  const [contentState, setContentState] = useState(null);

  const { emailId } = useParams();

  useEffect(() => {
    try {
      const dataValue = data[emailId].mailString;
      setContentState(stringTemplateParser(dataValue, inputState));
    } catch (error) {
      console.warn(error.message);
    }
  }, [inputState, emailId]);

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
      <div key={id} className="w-full flex gap-2 items-center justify-between">
        <label htmlFor={id}>{label}</label>
        <input
          type="text"
          id={id}
          className="border-solid border rounded border-blue-300 my-2 px-3 py-2"
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
      <label key={id} className="w-full flex items-center justify-between gap-2 py-3">
        {label}
        <div className="flex gap-2 items-center justify-center">
          {valueObj.map((element, key) => (
            <div key={key} 
            className="flex gap-1 items-center justify-between"
            >
              <input
              id={id}
              data-testid={`test-${id}-${element.subLabel}`}
              name={id}
              value={element.value}
              onChange={onFillHandler}
                type="radio"
                className="w-3.5 h-3.5"
              />
              <label htmlFor={id}>{element.subLabel}</label>
            </div>
          ))}
        </div>
      </label>
    );
  };

  // function who return selectInput html
  const selectInput = (id, label, value) => {
    return (
      <div key={id} className="w-full flex gap-2 items-center justify-between">
        <label htmlFor={id}>{label}</label>
        <select id={id} data-testid={`test-${id}`} onChange={onFillHandler} className="px-3 py-2 border rounded border-solid border-blue-300 my-2 hover:bg-slate-300">
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

  try {
    return (
      <div className="w-full h-full overflow-auto">
        <div className="flex flex-col items-center p-3">
          {data[emailId].input.length !== 0 && (
            <div className="flex flex-col items-start border-solid border rounded border-blue-300 p-3 text-sm">
              {data[emailId].input.map((e) => {
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
            </div>
          )}
          <CopyPasteElement content={contentState} />
        </div>
      </div>
    );
  } catch (error) {
    return (
        <NoMatch />
    );
  }
};

export default EmailDisplay;
