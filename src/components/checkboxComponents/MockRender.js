import React, { useState } from "react";

// Mock data for development
const mockData = [
  {
    title: "MockData",
    quiz: [
      {
        id: "MockRootId1",
        type: "binary",
        logic: "root",
        access: ["keystone"],
        pointer: "tree",
        question: "Root question 1 ?",
      },
      {
        id: "MockRootId2",
        type: "binary",
        logic: "root",
        access: ["keystone"],
        pointer: "tree",
        question: "Root question 2 ?",
      },
      {
        id: "MockRootId3",
        type: "binary",
        logic: "root",
        access: ["MockRootId1"],
        pointer: "tree",
        question: "Root question 3 ?",
      },
      {
        id: "MockTreeId1",
        type: "binary",
        logic: "tree",
        access: ["MockRootId1", "MockRootId3"],
        pointer: "tree",
        question: "Tree question 1 ?",
      },
      {
        id: "MockTreeId2",
        type: "binary",
        logic: "tree",
        access: ["MockRootId2"],
        pointer: "tree",
        question: "Tree question 2 ?",
      },
      {
        id: "MockTreeId3",
        type: "binary",
        logic: "tree",
        access: ["MockRootId1"],
        pointer: "tree",
        question: "Tree question 3 ?",
      },
    ],
  },
];

//Display array
const displayArray = {};

//Buffer array : this array handle all the questions data until the QCM is finish
// So even for the questions who are not rendered, the data is send to dataState with the value : questionID : false
const bufferArray = [];

const MockRender = ({ dataState, setDataState }) => {
  // Mock data state for development
  // const mockDataState = [
  //   {
  //     MockRootId1: true,
  //     MockRootId2: true,
  //     MockRootId3: true,
  //   },
  // ];

  // Function who return true if all the element in a given array are true
  const allAreTrue = (arr) => arr.every((element) => element === true);

  // Hook state for "oui" checkbox : generate an array base on quiz length
  const [ouiCheckedState, setOuiCheckedState] = useState(
    new Array(mockData[0].quiz.length).fill(false)
  );

  // Hook state who handle the next slide script
  const [togglePage, setTogglePage] = useState(false);

  // Hook state for "non" checkbox : generate an array base on quiz length
  const [nonCheckedState, setNonCheckedState] = useState(
    new Array(mockData[0].quiz.length).fill(false)
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

    allObjValueAreTrue(displayArray) && setTogglePage(!togglePage);
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

  return (
    <div>
      {togglePage === false && (
        <div>
          {sendIdToBuffer(mockData)}
          {mockData.map((item, index) => (
            <div key={index}>
              {item.quiz.map((quizItem, index) => (
                <div key={index}>
                  {quizItem.access[0] === "keystone" && (
                    <div>
                      <h3>Keystone : {quizItem.question}</h3>
                      <p>id : {quizItem.id}</p>
                      {populateDisplayArray(quizItem)}
                      {checkboxJSX(index, quizItem)}
                    </div>
                  )}

                  {qcmLogicHandler(quizItem.access) &&
                    quizItem.logic === "root" && (
                      <div>
                        <h3>Root : {quizItem.question}</h3>
                        <p>id : {quizItem.id}</p>
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

      {togglePage && (
        <div>
          {mockData.map((item, index) => (
            <div key={index}>
              {item.quiz.map((quizItem, index) => (
                <div key={index}>
                  {qcmLogicHandler(quizItem.access) &&
                    quizItem.logic === "tree" && (
                      <div>
                        <h3>Tree : {quizItem.question}</h3>
                        <p>id : {quizItem.id}</p>
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
      {console.log(dataState)}
    </div>
  );
};

export default MockRender;
