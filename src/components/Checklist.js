import React from "react";
import plusValues from "../data";


const clickLogic = (props) => {
    alert(`test ${props}`)
}




const Checklist = () => {
  return (
    <div className="App">
      {plusValues.map((e) => (
        <div>
          <h2>{e.question}</h2>
          <div>
            {e.answer.map((a) => (
              <form>
                <label>
                  <input type="checkbox" />
                  {a}
                </label>
              </form>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Checklist;
