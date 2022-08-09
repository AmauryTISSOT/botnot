import React, { useState } from "react";
import RenderRoot from "./checkboxComponents/RenderRoot";
import RenderTree from "./checkboxComponents/RenderTree";
import QuizTitle from "./QuizTitle";

const CheckBoxRendering = () => {
  const [data, setData] = useState([]);
  const [submit, setSubmit] = useState(false);

  return (
    <div>
      <QuizTitle />
      <RenderRoot setDataState={setData} dataState={data} />
      {submit ? (
        <div>submit = true</div>
      ) : (
        <RenderTree
          dataState={data}
          setDataState={setData}
          submitState={submit}
          setSubmitState={setSubmit}
        />
      )}
    </div>
  );
};

export default CheckBoxRendering;
