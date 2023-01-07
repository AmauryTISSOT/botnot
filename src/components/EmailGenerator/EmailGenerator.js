import React from "react";
import emailListData from "./EmailList";
import EmailSelect from "./EmailSelect/EmailSelect";

const EmailGenerator = () => {
  return (
    <>
      <EmailSelect emailList={emailListData} />
    </>
  );
};

export default EmailGenerator;
