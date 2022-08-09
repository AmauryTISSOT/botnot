import React from "react";

const mockData = [
  {
    title: "MockData",
    quiz: [
      {
        id: "MockRootId1",
        type: "binary",
        logic: "root",
        access: [],
        pointer: "tree",
        question: "Root question 1 ?",
      },
      {
        id: "MockRootId2",
        type: "binary",
        logic: "root",
        access: [],
        pointer: "tree",
        question: "Root question 2 ?",
      },
      {
        id: "MockRootId3",
        type: "binary",
        logic: "root",
        access: [],
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
        access: [],
        pointer: "tree",
        question: "Tree question 2 ?",
      },
    ],
  },
];



const MockRender = () => {

  const mockDataState = [{
    MockRootId1 : true,
    MockRootId2 : true,
    MockRootId3 : false,
  }];

  const trueArray = [];

  const allAreTrue = arr =>arr.every(element => element === true);


  return <div>
  {mockData.map((item,index) => (
    <div key={index}>
        {item.quiz.map((quizItem, index) => (
            <div key={index}>
                {quizItem.access.map((accessItem, index) => (
                    <div key={index}>{
                        trueArray.push(mockDataState[0][accessItem])}
                        {
                        allAreTrue(trueArray) && (quizItem.logic === "tree" && <div>{quizItem.question}</div>)
                    }</div>
                ))}
            </div>
        ))}
        {console.log(trueArray)}
    </div>
  ))
  }
  </div>;
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