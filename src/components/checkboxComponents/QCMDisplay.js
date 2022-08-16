import React, { useEffect, useState } from "react";

// Mock data state for development
// const mockDataState = [
//   {
//     MockRootId1: true,
//     MockRootId2: true,
//     MockRootId3: true,
//   },
// ];

//Variable who switch to true if tree questions are not rendered
let renderTree = false;

//Display array
let displayArray = {};

//Buffer array : this array handle all the questions data until the QCM is finish
// So even for the questions who are not rendered, the data is send to dataState with the value : questionID : false
const bufferArray = [];

const QCMDisplay = ({ dataState, setDataState, QCMObject }) => {
  //Hook state for quiz name index
  const [quizIndex, setQuizIndex] = useState(0);

  // Function who return quiz name when given an index
  const returnQuizName = (index) => QCMObject[0].quizList[index];

  // Variable of the current quiz
  const DataObject = QCMObject[0][returnQuizName(quizIndex)];

  // Function who return true if all the element in a given array are true
  const allAreTrue = (arr) => arr.every((element) => element === "true");

  // Function who return true if all the element in a given array are false
  const allAreFalse = (arr) => arr.every((element) => element === "false");

  // Hook state for "oui" checkbox : generate an array base on quiz length
  const [ouiCheckedState, setOuiCheckedState] = useState(
    new Array(DataObject[0].quiz.length).fill(false)
  );

  // Hook state for "non" checkbox : generate an array base on quiz length
  const [nonCheckedState, setNonCheckedState] = useState(
    new Array(DataObject[0].quiz.length).fill(false)
  );

  // Hook state who handle the next slide script
  const [togglePage, setTogglePage] = useState("root");

  // Function who increment quizIndex by one, and reset other hook when togglePage = next
  //TODO: prévoir que les valeurs avec la value "pending" dans le dataState pass en "false" lors du changement de quizz
  const changeQuizIndexOnNext = () => {
    const quizListLength = QCMObject[0].quizList.length;

    if (togglePage === "next" && quizIndex < quizListLength - 1) {
      setQuizIndex((current) => current + 1);
      setOuiCheckedState(new Array(DataObject[0].quiz.length).fill(false));
      setNonCheckedState(new Array(DataObject[0].quiz.length).fill(false));
      setTogglePage("root");
      displayArray = {};
      renderTree = false;
      console.log("NEXT");
    }
  };

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
        setDataState((current) => ({...current, [item]: "pending" }));
      }
    });
  };

  //Use effect to fix update error component
  useEffect(() => {
    sendIdToBuffer(DataObject)
    verifyIfIdExistInState(dataState)
  },[quizIndex])

  //TODO: find a logic to fire a question when : accessTrue = ["keystoneId1"] AND accessFalse = ["keystoneId1"]
  // display a question when q1 = true AND q2 = false;
  //FIXME: bug : rootTrue / rootFalse question doesn't display when there is only one keystone, it switch to tree

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
            data-testid = {`oui-checkbox-${quizItem.id}`}
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
            data-testid = {`non-checkbox-${quizItem.id}`}
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
  const trueQcmLogicHandler = (accessArray) => {
    const internalArray = [];
    accessArray.forEach((item) => {
      if (item !== "keystone") {
        let itemValue = dataState[item];
        internalArray.push(itemValue);
      }
    });
    if (internalArray.length === 0) {
      return false;
    }
    return allAreTrue(internalArray);
  };

  // Function who handle access item array with state. Ex : access : [Root1] if Root1 = false exist in dataState
  // this function return true, work with access array.
  const falseQcmLogicHandler = (accessArray) => {
    const internalArray = [];
    accessArray.forEach((item) => {
      if (item !== "keystone") {
        let itemValue = dataState[item];
        internalArray.push(itemValue);
      }
    });
    if (internalArray.length === 0) {
      return false;
    }
    return allAreFalse(internalArray);
  };

  // Main function return
  return (
    <>
    <>
      {DataObject.map((item, index) => (
        <h1 key={index}>{item.title}</h1>
      ))}
    </>
      {togglePage === "root" && (
        <>
          {/* {sendIdToBuffer(DataObject)} */}
          {DataObject.map((item, index) => (
            < div key={index}>
              {item.quiz.map((quizItem, index) => (
                <div key={index}>
                  {quizItem.trueAccess[0] === "keystone" && (
                    <>
                      <h3>{quizItem.question}</h3>
                      <p>id keystone : {quizItem.id}</p>
                      {populateDisplayArray(quizItem)}
                      {checkboxJSX(index, quizItem)}
                    </>
                  )}

                  {trueQcmLogicHandler(quizItem.trueAccess) &&
                    quizItem.logic === "root" && (
                      <>
                        <h3>{quizItem.question}</h3>
                        <p>id root-true : {quizItem.id}</p>
                        {populateDisplayArray(quizItem)}
                        {checkboxJSX(index, quizItem)}
                      </>
                    )}

                  {falseQcmLogicHandler(quizItem.falseAccess) &&
                    quizItem.logic === "root" && (
                      <>
                        <h3>{quizItem.question}</h3>
                        <p>id root-false: {quizItem.id}</p>
                        {populateDisplayArray(quizItem)}
                        {checkboxJSX(index, quizItem)}
                      </>
                    )}
                </div>
              ))}
            </div>
          ))}
          {/* {verifyIfIdExistInState(dataState)} */}
        </>
      )}

      {togglePage === "tree" && (
        <>
          {DataObject.map((item, index) => (
            <div key={index}>
              {item.quiz.map((quizItem, index) => (
                <div key={index}>
                  {trueQcmLogicHandler(quizItem.trueAccess) &&
                    quizItem.logic === "tree" && (
                      <>
                        <h3>{quizItem.question}</h3>
                        <p>id tree true : {quizItem.id}</p>
                        {populateDisplayArray(quizItem)}
                        {checkboxJSX(index, quizItem)}
                        {(renderTree = true)}
                      </>
                    )}
                  {falseQcmLogicHandler(quizItem.falseAccess) &&
                    quizItem.logic === "tree" && (
                      <>
                        <h3>{quizItem.question}</h3>
                        <p>id tree false: {quizItem.id}</p>
                        {populateDisplayArray(quizItem)}
                        {checkboxJSX(index, quizItem)}
                        {(renderTree = true)}
                      </>
                    )}
                </div>
              ))}
            </div>
          ))}
          {renderTree === false && setTogglePage("next")}
        </>
      )}
      {/* {console.log("end",dataState)} */}
      {/* {console.log(togglePage)} */}
      {/* {console.log("displayArray",displayArray)} */}
      {changeQuizIndexOnNext()}
    </>
  );
};

export default QCMDisplay;
