import React, { useState } from "react";



// Mock data state for development
// const mockDataState = [
//   {
//     MockRootId1: true,
//     MockRootId2: true,
//     MockRootId3: true,
//   },
// ];

//Display array
const displayArray = {};

//Buffer array : this array handle all the questions data until the QCM is finish
// So even for the questions who are not rendered, the data is send to dataState with the value : questionID : false
const bufferArray = [];

const MockRender = ({ dataState, setDataState, QCMObject }) => {
  const DataObject = QCMObject;

  // Function who return true if all the element in a given array are true
  const allAreTrue = (arr) => arr.every((element) => element === true);

  // Hook state for "oui" checkbox : generate an array base on quiz length
  const [ouiCheckedState, setOuiCheckedState] = useState(
    new Array(DataObject[0].quiz.length).fill(false)
  );

  // Hook state who handle the next slide script
  const [togglePage, setTogglePage] = useState("root");

  // Hook state for "non" checkbox : generate an array base on quiz length
  const [nonCheckedState, setNonCheckedState] = useState(
    new Array(DataObject[0].quiz.length).fill(false)
  );

  // Handle "oui" checkbox : update the state based on the index of the current question
  const handleOuiCheck = (position) => {
    const updatedOuiCheckedState = ouiCheckedState.map((item, index) =>
      index === position ? !item : item
    );
    const updatedNonCheckedState = nonCheckedState.map((item, index) =>
      index === position ? (item = false) : item
    );

    setOuiCheckedState(updatedOuiCheckedState);
    setNonCheckedState(updatedNonCheckedState);
  };

  // Handle "non" checkbox : update the state based on the index of the current question
  const handleNonCheck = (position) => {
    const updatedNonCheckedState = nonCheckedState.map((item, index) =>
      index === position ? !item : item
    );

    const updatedOuiCheckedState = ouiCheckedState.map((item, index) =>
      index === position ? (item = false) : item
    );
    setNonCheckedState(updatedNonCheckedState);
    setOuiCheckedState(updatedOuiCheckedState);
  };

  // Function to find if all the value of a object are true. If yes : return true
  const allObjValueAreTrue = (object) =>
    Object.values(object).every((value) => value === true);

  // Function who send on dataState clicked ID : clicked value
  const sendDataOnClick = (event) => {
    setDataState((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
    displayArray[event.target.id] = true;

    allObjValueAreTrue(displayArray) &&
      togglePage === "root" &&
      setTogglePage("tree");
    allObjValueAreTrue(displayArray) &&
      togglePage === "tree" &&
      setTogglePage("next");
  };

  // Function who return true if the key exist in object
  const keyExists = (obj, key) => {
    if (!obj || (typeof obj !== "object" && !Array.isArray(obj))) {
      return false;
    } else if (obj.hasOwnProperty(key)) {
      return true;
    } else if (Array.isArray(obj)) {
      for (let i = 0; i < obj.length; i++) {
        const result = keyExists(obj[i], key);
        if (result) {
          return result;
        }
      }
    } else {
      for (const k in obj) {
        const result = keyExists(obj[k], key);
        if (result) {
          return result;
        }
      }
    }

    return false;
  };

  // Function who populate the array with question ID when the question is display
  const populateDisplayArray = (quizItem) => {
    if (keyExists(displayArray, quizItem.id) === false) {
      displayArray[quizItem.id] = false;
      // console.log(quizItem.id, "has been had to displayArray");
    }
    // else console.log(quizItem.id, "already exist in displayArray");
  };

  //Function who send all the object id into a buffer array with value : false
  const sendIdToBuffer = (object) => {
    object[0].quiz.forEach((item) => {
      bufferArray.push(item.id);
    });
  };

  //Function who verify if the value in bufferArray are in dataState, if no : send the missing data
  const verifyIfIdExistInState = (state) => {
    bufferArray.forEach((item) => {
      if (!keyExists(state, item)) {
        setDataState((current) => ({ ...current, [item]: "false" }));
      }
    });
  };

  // Checkbox who display function and send value to dataState

  const checkboxJSX = (index, quizItem) => {
    return (
      <div>
        <label>
          <input
            onChange={(e) => {
              handleOuiCheck(index);
              sendDataOnClick(e);
            }}
            type="checkbox"
            checked={ouiCheckedState[index]}
            id={quizItem.id}
            value={true}
          />
          oui
        </label>
        <label>
          <input
            onChange={(e) => {
              handleNonCheck(index);
              sendDataOnClick(e);
            }}
            type="checkbox"
            checked={nonCheckedState[index]}
            id={quizItem.id}
            value={false}
          />
          non
        </label>
      </div>
    );
  };

  // Function who handle access item array with state. Ex : access : [Root1] if Root1 = true exist in dataState
  // this function return true, work with access array.
  const qcmLogicHandler = (accessArray) => {
    const internalArray = [];
    accessArray.forEach((item) => {
      let boolOutput = dataState[item] === "true";
      internalArray.push(boolOutput);
    });
    return allAreTrue(internalArray);
  };

  // Main function return
  return (
    <div>
      {togglePage === "root" && (
        <div>
          {sendIdToBuffer(DataObject)}
          {DataObject.map((item, index) => (
            <div key={index}>
              {item.quiz.map((quizItem, index) => (
                <div key={index}>
                  {quizItem.access[0] === "keystone" && (
                    <div>
                      <h3>{quizItem.question}</h3>
                      <p>id keystone : {quizItem.id}</p>
                      {populateDisplayArray(quizItem)}
                      {checkboxJSX(index, quizItem)}
                    </div>
                  )}

                  {qcmLogicHandler(quizItem.access) &&
                    quizItem.logic === "tree" && (
                      <div>
                        <h3>{quizItem.question}</h3>
                        <p>id root : {quizItem.id}</p>
                        {populateDisplayArray(quizItem)}
                        {checkboxJSX(index, quizItem)}
                      </div>
                    )}
                </div>
              ))}
            </div>
          ))}
          {verifyIfIdExistInState(dataState)}
        </div>
      )}

      {togglePage === "tree" && (
        <div>
          {DataObject.map((item, index) => (
            <div key={index}>
              {item.quiz.map((quizItem, index) => (
                <div key={index}>
                  {qcmLogicHandler(quizItem.access) && 
                    quizItem.logic === "tree" && (
                      <div>
                        <h3>{quizItem.question}</h3>
                        <p>id tree : {quizItem.id}</p>
                        {populateDisplayArray(quizItem)}
                        {checkboxJSX(index, quizItem)}
                      </div>
                    )}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
      {console.log(togglePage)}
      {togglePage === "next" && <h1>NEXT PAGE</h1>}
    </div>
  );
};

export default MockRender;
