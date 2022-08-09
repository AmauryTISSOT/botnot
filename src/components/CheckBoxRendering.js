import React, { useState } from "react";
import RenderRoot from "./checkboxComponents/RenderRoot";
import RenderTree from "./checkboxComponents/RenderTree";
import QuizTitle from "./QuizTitle";

const CheckBoxRendering = () => {
  const [dataState, setDataState] = useState([]);
  const [rootSubmit, setRootSubmit] = useState(false);
  const [treeSubmit, setTreeSubmit] = useState(false);

  return (
    <div>
      <QuizTitle />

      {rootSubmit ? (
        <div>rootSubmit true</div>
      ) : (
        <RenderRoot
          setDataState={setDataState}
          dataState={dataState}
          rootSubmit={rootSubmit}
          setRootSubmit={setRootSubmit}
        />
      )}

      {treeSubmit ? (
        <div>treeSubmit true</div>
      ) : (
        <RenderTree
          dataState={dataState}
          setDataState={setDataState}
          treeSubmit={treeSubmit}
          setTreeSubmit={setTreeSubmit}
        />
      )}
    </div>
  );
};

export default CheckBoxRendering;
