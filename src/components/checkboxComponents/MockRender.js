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
        id: "MockRootId3",
        type: "binary",
        logic: "root",
        access: ["keystone"],
        pointer: "tree",
        question: "Root question 2 ?",
      },
      {
        id: "MockRootId2",
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

const MockRender = ({ dataState, setDataState }) => {
  // Mock data state for development
  const mockDataState = [
    {
      MockRootId1: false,
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
    trueArray.push(mockDataState[0][accessItem]);
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

  // Handle "oui" checkbox : update the state based on the index of the current question
  const handleNonCheck = (position) => {
    const updatedCheckedState = nonCheckedState.map((item, index) =>
      index === position ? !item : item
    );

    setNonCheckedState(updatedCheckedState);
  };

  const sendDataOnClick = (event) => {
    setDataState([...dataState, { [event.target.id]: event.target.value }]);
  };

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

  // Function who detect if the id exist in the dataState
  const verifyIfIdExist = (state) => {
    console.log(keyExists(state, "MockRootId1"));
  };

  //Buffer array
  const bufferArray = [];

  //Function who send all the object id into a buffer array
  const sendIdToBuffer = () => {
    mockData.
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
      {mockData.map((item, index) => (
        <div key={index}>
          {item.quiz.map((quizItem, index) => (
            <div key={index}>
              {quizItem.access.map((accessItem, accessIndex) => (
                <div key={accessIndex}>
                  {pushArray(accessItem)}
                  {/* {console.log("trueArray", index, trueArray)}
                  {console.log("Access array length", quizItem.access.length)} */}

                  {quizItem.access[0] === "keystone" && (
                    <div>
                      <h3>Keystone : {quizItem.question}</h3>
                      <p>id : {quizItem.id}</p>
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
      {console.log(dataState)}
      <button onClick={() => verifyIfIdExist(dataState)}>
        CHECK IF THE KEY EXIST
      </button>
    </div>
  );
};

export default MockRender;

/* {mockData.map((item,index) => (
    <div key={index}>
        {item.array.map((array,index) => (
            <div key={index}>
                {array.access.forEach((i) => console.log(i))}



                {
                    array.logic ==="root" && <div>{array.question}</div>
                    }
                {
                
                    // mockDataState[0][state] && <div>
                    //         {
                    //         item.logic ==="tree" && <div>{item.question}</div>
                    //         }
                    //         </div>
                
                }

            </div>
        ))}
    </div>
))} */
