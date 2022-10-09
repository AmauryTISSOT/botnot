import React, { useState } from "react";
// import RenderRoot from "./RenderRoot";
// import RenderTree from "./RenderTree";
// import QuizTitle from "./QuizTitle";
import QCMDisplay from "../QCMDisplay/QCMDisplay";
import { maison, MockData } from "../../../data/data";
import QCMChoice from "./QCMChoice";

const CheckBoxRendering = () => {
  const [dataState, setDataState] = useState({});
  const [choiceState, setChoiceState] = useState("");

  // const [rootSubmit, setRootSubmit] = useState(false);
  // const [treeSubmit, setTreeSubmit] = useState(false);

 //TODO: change QCMDisplay props to QCMObject={choiceState} when all the objects will be create

  return (
    <>
      {choiceState === "" && 
      <QCMChoice setChoiceState={setChoiceState} />
      }
      {choiceState !== "" && (
        <>
          <h1>Questionnaire vente {choiceState}</h1>
          <QCMDisplay
            setDataState={setDataState}
            dataState={dataState}
            QCMObject={maison}
          />
        </>
      )}
    </>
  );
};

export default CheckBoxRendering;
