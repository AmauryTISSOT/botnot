import React, { useState } from "react";
// import RenderRoot from "./RenderRoot";
// import RenderTree from "./RenderTree";
// import QuizTitle from "./QuizTitle";
import QCMDisplay from "./QCMDisplay";
import { maison } from "../../data";

const CheckBoxRendering = () => {
  const [dataState, setDataState] = useState({});
  // const [rootSubmit, setRootSubmit] = useState(false);
  // const [treeSubmit, setTreeSubmit] = useState(false);

  return (
    <div>
      <QCMDisplay
        setDataState={setDataState}
        dataState={dataState}
        QCMObject={maison}
      />
    </div>
  );
};

export default CheckBoxRendering;
