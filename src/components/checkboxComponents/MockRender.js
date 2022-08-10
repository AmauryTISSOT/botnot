import React from "react";

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
    trueArray.push(mockDataState[0][accessItem]);
  };

  const [ouiCheckedState, setOuiCheckedState] = useState(
    new Array(plusValues[0].tree.length).fill(false)
  );
  const [nonCheckedState, setNonCheckedState] = useState(
    new Array(plusValues[0].tree.length).fill(false)
  );


  const handleOuiCheck = (position) => {
    const updatedCheckedState = ouiCheckedState.map((item, index) =>
      index === position ? !item : item
    );

    setOuiCheckedState(updatedCheckedState);
  };

  const handleNonCheck = (position) => {
    const updatedCheckedState = nonCheckedState.map((item, index) =>
      index === position ? !item : item
    );

    setNonCheckedState(updatedCheckedState);
  };

  const sendData = (event) => {
    setDataState([...dataState, { [event.target.id]: event.target.value }]);
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
              {quizItem.access.map((accessItem, index) => (
                <div key={index}>
                  {pushArray(accessItem)}
                  {console.log("trueArray", index, trueArray)}
                  {console.log("Access array length", quizItem.access.length)}

                  {quizItem.access[0] === "keystone" && (
                    <div>
                      {<h3>quizItem.question</h3>}
                      <div>
                        <label>
                          <input
                            onChange={(e) => {
                              handleOuiCheck(index);
                              sendData(e);
                            }}
                            type="checkbox"
                            checked={ouiCheckedState[index]}
                            id={tree.id}
                            value={true}
                          />
                          oui
                        </label>
                        <label>
                          <input
                            onChange={(e) => {
                              handleNonCheck(index);
                              sendData(e);
                            }}
                            type="checkbox"
                            checked={nonCheckedState[index]}
                            id={tree.id}
                            value={false}
                          />
                          non
                        </label>
                      </div>
                    </div>
                  )}

                  {trueArray.length === quizItem.access.length &&
                    (allAreTrue(trueArray) ? (
                      quizItem.logic === "root" && (
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
