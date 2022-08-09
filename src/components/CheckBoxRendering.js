import React, { useState } from "react";
import plusValues from "../data";
import RenderRoot from "./checkboxComponents/RenderRoot";
import RenderTree from "./checkboxComponents/RenderTree";

const CheckBoxRendering = () => {
  const [data, setData] = useState([]);
  const [submit, setSubmit] = useState(false);

  const Title = () => {
    return (
      <div>
        {plusValues.map((item, index) => (
          <h1 key={index}>{item.title}</h1>
        ))}
      </div>
    );
  };

  return (
    <div>
      <Title />
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
