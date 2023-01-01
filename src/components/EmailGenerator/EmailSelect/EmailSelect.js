import React from "react";

const EmailSelect = ({emailList}) => {

  return (
    <>
      <li>
        {emailList.map(email => (
          <a href="test" key={email.toString()}>
            {email}
          </a>
        ))}
      </li>
    </>
  );
};

export default EmailSelect;
