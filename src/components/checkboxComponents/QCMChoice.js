import React, { useState } from "react";

const QCMChoice = ({ setChoiceState }) => {
  const [autreClicked, setAutreClicked] = useState(false);
  
  const onButtonClick = (event) => {
    const value = event.target.value
    setChoiceState(value);

    value === "autres" && setAutreClicked(!autreClicked)
  };

  return (
    <>
      {autreClicked === false ? (
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
          <button value={"autres"} onClick={onButtonClick}>
            Autres
          </button>
        </>
      ) : (
        <>
          <h1>Type de biens vendus</h1>
          <button value={"cave"} onClick={onButtonClick}>
            Cave
          </button>
          <button value={"garage"} onClick={onButtonClick}>
            Garage
          </button>
        </>
      )}
    </>
  );
};

export default QCMChoice;
