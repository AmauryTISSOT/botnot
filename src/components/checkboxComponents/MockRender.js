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

const MockRender = ({ dataState, setDataState }) => {
  // Mock data state for development
  const mockDataState = [
    {
      MockRootId1: true,
      MockRootId2: true,
      MockRootId3: true,
    },
  ];

  // Array use to store the value of the state by using the key stored in "access"
  const trueArray = [];

  // Function who return true if all the element in a given array are true
  const allAreTrue = (arr) => arr.every((element) => element === true);

  // Push the value of the state into the "trueArray" array by using the key stored inside "access"
  const pushArray = (accessItem) => {
    let boolOutput = (dataState[accessItem] ==="true")
    trueArray.push(boolOutput);
    // trueArray.push(dataState[accessItem]);
  };

  // Hook state for "oui" checkbox : generate an array base on quiz length
  const [ouiCheckedState, setOuiCheckedState] = useState(
    new Array(mockData[0].quiz.length).fill(false)
  );

  // Hook state for "non" checkbox : generate an array base on quiz length
  const [nonCheckedState, setNonCheckedState] = useState(
    new Array(mockData[0].quiz.length).fill(false)
  );

  // Handle "oui" checkbox : update the state based on the index of the current question
  const handleOuiCheck = (position) => {
    const updatedCheckedState = ouiCheckedState.map((item, index) =>
      index === position ? !item : item
    );
    setOuiCheckedState(updatedCheckedState);
  };


  // Function to find if all the value of a object are true. If yes : return true
  const allObjValueAreTrue = (object) => Object.values(object).every(value => value === true);


  // Function who remove specific element from an array
  const removeElemFromArray = (array, element) => {
    const index = array.indexOf(element);
    if (index > -1) {
      array.splice(index, 1);
    }
  };

  // Handle "oui" checkbox : update the state based on the index of the current question
  const handleNonCheck = (position) => {
    const updatedCheckedState = nonCheckedState.map((item, index) =>
      index === position ? !item : item
    );
    setNonCheckedState(updatedCheckedState);
  };

  // Function who send on dataState clicked ID : clicked value
  const sendDataOnClick = (event) => {
    setDataState( (prev) => ({...prev, [event.target.id]: event.target.value} ))
    displayArray[event.target.id] = true;
    console.log(event.target.id, "has been switch to true");
    console.log("Check if all the value of display array are true : ", allObjValueAreTrue(displayArray))
    console.log("dataSate : ", dataState)
    allObjValueAreTrue(displayArray) && alert("CHANGEMENT DE PAGE")

    // TODO CODER LE CHANGEMENT DE PAGE : prévoir un hook ? ou une constance pour procéder au changement de page
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

  //Buffer array
  const bufferArray = [];

  // Function who populate the array with question ID when the question is display
  const populateDisplayArray = (quizItem) => {
    if (keyExists(displayArray, quizItem.id) === false) {
      displayArray[quizItem.id] = false;
      console.log(quizItem.id, "has been had to displayArray");
    } else console.log(quizItem.id, "already exist in displayArray");
  };

  //Function who send all the object id into a buffer array with value : false
  const sendIdToBuffer = (object) => {
    object[0].quiz.map((item) => bufferArray.push({ [item.id]: "false" }));
  };

  //Function who verify if the value in bufferArray are in dataState, if no : send the missing data
  const verifyIfIdExistInState = (state) => {
    bufferArray.forEach((item) => {
      const keyObject = Object.keys(item).toString();
      console.log(
        `The ${keyObject} exist in dataState :`,
        keyExists(state, keyObject)
      );
      if (!keyExists(state, keyObject)) {
        console.log(item, "has been send to state");
        setDataState((current) => ({ ...current, [keyObject] : false}));
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

  // Display the tree element when the state is true
  const treeAlgo = () => {
    return (
      <div>
        {mockData.map((item, index) => (
          <div key={index}>
            {item.quiz.map((quizItem, index) => (
              <div key={index}>
                {quizItem.access.map((accessItem, index) => (
                  <div key={index}>
                    {pushArray(accessItem)}
                    {console.log("trueArray", index, trueArray)}
                    {console.log("Access array length", quizItem.access.length)}

                    {trueArray.length === quizItem.access.length &&
                      (allAreTrue(trueArray) ? (
                        quizItem.logic === "tree" && (
                          <div>
                            {quizItem.question}
                            {trueArray.splice(0, trueArray.length)}
                            {console.log("TRUE trueArray has been clean")}
                          </div>
                        )
                      ) : (
                        <div>
                          {trueArray.splice(0, trueArray.length)}
                          {console.log("FALSE trueArray has been clean")}
                        </div>
                      ))}
                  </div>
                ))}
              </div>
            ))}
            {console.log(trueArray)}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      {sendIdToBuffer(mockData)}
      {mockData.map((item, index) => (
        <div key={index}>
          {item.quiz.map((quizItem, index) => (
            <div key={index}>
              {quizItem.access.map((accessItem, accessIndex) => (
                <div key={accessIndex}>
                  {pushArray(accessItem)}
                  {console.log("access item", accessItem)}
                  {/* {console.log("trueArray", index, trueArray)}
                  {console.log("Access array length", quizItem.access.length)} */}

                  {quizItem.access[0] === "keystone" && (
                    <div>
                      <h3>Keystone : {quizItem.question}</h3>
                      <p>id : {quizItem.id}</p>
                      {populateDisplayArray(quizItem)}
                      {/* {console.log("ouiCheckedState", ouiCheckedState)}
                      {console.log("nonCheckedState", nonCheckedState)} */}
                      {checkboxJSX(index, quizItem)}
                    </div>
                  )}

                  {trueArray.length === quizItem.access.length &&
                    (allAreTrue(trueArray) ? (
                      quizItem.logic === "root" && (
                        <div>
                          <h3>Root : {quizItem.question}</h3>
                          <p>id : {quizItem.id}</p>
                          {populateDisplayArray(quizItem)}
                          {checkboxJSX(index, quizItem)}
                          {trueArray.splice(0, trueArray.length)}
                          {/* {console.log("TRUE trueArray has been clean")} */}
                        </div>
                      )
                    ) : (
                      <div>
                        {trueArray.splice(0, trueArray.length)}
                        {quizItem.access[0] !== "keystone" &&
                          quizItem.logic === "root" &&
                          console.log("")}
                        {/* TODO = send value to state */}
                        {/* {console.log("FALSE trueArray has been clean")} */}
                      </div>
                    ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
      {/* {console.log("Buffer array : ", bufferArray)} */}
      <button onClick={() => verifyIfIdExistInState(dataState)}>
        CHECK IF THE KEY EXIST
      </button>
      {console.log("dataSate :", dataState)}
      {console.log("displayArray :", displayArray)}
      {console.log("true array:", trueArray)}
    </div>
  );
};

export default MockRender;

