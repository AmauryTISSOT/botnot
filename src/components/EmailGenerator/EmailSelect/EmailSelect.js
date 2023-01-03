import React, { useState } from "react";
import EmailVariable from "../EmailVariable/EmailVariable";

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

        {Object.values(emailList).map((email, number) => (
          <React.Fragment key={email.type.toString()}>
            <h2>{email.type}</h2>
            <li>
              {email.query.map((email1, number1) => (
                <div
                  key={number1}
                  id={email1.value}
                  data-testid="question-element"
                  onClick={clickHandler}
                >
                  {email1.question}
                </div>
              ))}
            </li>
          </React.Fragment>
        ))}
      </>
    );
  };

  return (
    <>
      {questionClicked ? (
        <EmailVariable emailValue={emailSelected} />
      ) : (
        questionSelector()
      )}
    </>
  );
};

export default EmailSelect;
