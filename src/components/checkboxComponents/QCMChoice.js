import React from "react";

const QCMChoice = ({ setChoiceState }) => {
  const onButtonClick = (event) => {
    setChoiceState(event.target.value);
  };

  return (
    <>
      <h1>Type de biens vendus</h1>
      <button value={"maison"} onClick={onButtonClick}>
        Maison
      </button>
      <button value={"appartement"} onClick={onButtonClick}>
        Appartement / cave / garage
      </button>
      <button value={"terrain"} onClick={onButtonClick}>
        Terrain
      </button>
    </>
  );
};

export default QCMChoice;
