import React from "react";
import CourrierSelect from "./CourrierComponent/CourrierSelect/CourrierSelect";

const data = [
  {
    type: "Title1",
    query: [
      {
        value: "value1",
        question: "courrier1",
      },
      {
        value: "value2",
        question: "courrier2",
      },
    ],
  },
];

const CourrierGenerator = () => {
  return (
    <>
      <CourrierSelect data={data}/>
    </>
  );
};

export default CourrierGenerator;
