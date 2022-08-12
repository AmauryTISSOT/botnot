import React, { useState } from "react";
// import RenderRoot from "./RenderRoot";
// import RenderTree from "./RenderTree";
// import QuizTitle from "./QuizTitle";
import MockRender from "./MockRender";
import {plusValues} from "../../data";
import { MockData } from "../../data";

const CheckBoxRendering = () => {
  const [dataState, setDataState] = useState({});
  // const [rootSubmit, setRootSubmit] = useState(false);
  // const [treeSubmit, setTreeSubmit] = useState(false);

  return (
    <div>
      <MockRender
        setDataState={setDataState}
        dataState={dataState}
        QCMObject={plusValues}
      />
    </div>
  );
};

export default CheckBoxRendering;
