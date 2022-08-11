import React, { useState } from "react";
import RenderRoot from "./RenderRoot";
import RenderTree from "./RenderTree";
import QuizTitle from "./QuizTitle";
import MockRender from "./MockRender";

const CheckBoxRendering = () => {
  const [dataState, setDataState] = useState({});
  const [rootSubmit, setRootSubmit] = useState(false);
  const [treeSubmit, setTreeSubmit] = useState(false);

  return (
    <div>
      {/* <QuizTitle />

      {rootSubmit ? (
        treeSubmit ? (
          <div>treeSubmit true</div>
        ) : (
          <RenderTree
            dataState={dataState}
            setDataState={setDataState}
            treeSubmit={treeSubmit}
            setTreeSubmit={setTreeSubmit}
          />
        )
      ) : (
        <RenderRoot
          setDataState={setDataState}
          dataState={dataState}
          rootSubmit={rootSubmit}
          setRootSubmit={setRootSubmit}
        />
      )} */}


      <MockRender setDataState={setDataState}
          dataState={dataState}/>
      
    </div>
  );
};

export default CheckBoxRendering;
