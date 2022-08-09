import React from "react";
import plusValues from "../data";

const QuizTitle = () => {
  return (
    <div>
      {plusValues.map((item, index) => (
        <h1 key={index}>{item.title}</h1>
      ))}
    </div>
  );
};

export default QuizTitle;
