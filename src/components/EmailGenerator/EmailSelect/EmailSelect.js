import React, { useState } from "react";
import EmailVariable from "../EmailVariable/EmailVariable";
import EmailData from "../EmailData";
import "./EmailSelect.css";

const EmailSelect = ({ emailList }) => {
  const [emailSelected, setEmailSelected] = useState("");
  const [questionClicked, setQuestionClicked] = useState(false);

  const clickHandler = (event) => {
    setEmailSelected(event.target.id);
    setQuestionClicked(true);
  };

  const questionSelector = () => {
    return (
      <>
        <h1>Sélectionner un modèle de mail</h1>
        <div className="question-container">
          {Object.values(emailList).map((email, number) => (
            <div className="question-list" key={email.type.toString()}>
              <h2>{email.type}</h2>
              <ul className="question-link-list">
                {email.query.map((email1, number1) => (
                  <li
                    key={number1}
                    id={email1.value}
                    data-testid="question-element"
                    onClick={clickHandler}
                    className="email-link"
                  >
                    {email1.question}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <>
      {questionClicked ? (
        <EmailVariable emailValue={emailSelected} data={EmailData} />
      ) : (
        questionSelector()
      )}
    </>
  );
};

export default EmailSelect;
