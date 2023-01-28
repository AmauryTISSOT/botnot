import "./EmailSelect.css";
import emailListData from "../EmailList";
import { Link } from "react-router-dom";

const EmailSelect = () => {
  return (
    <>
      <h1>Sélectionner un modèle de mail</h1>
      <div className="question-container">
        {Object.values(emailListData).map((email, number) => (
          <div className="question-list" key={email.type.toString()}>
            <h2>{email.type}</h2>
            <ul className="question-link-list">
              {email.query.map((email1, number1) => (
                <Link
                  key={number1}
                  id={email1.value}
                  data-testid="question-element"
                  className="email-link"
                  to={`/outils/emailGenerator/${email1.value}`}
                >
                  {email1.question}
                </Link>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default EmailSelect;
