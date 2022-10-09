import { maison, MockData } from "../data/data";

// Select the object you want to test
const dataObject = maison;

describe("Data object testing", () => {
  test("Object to be an object", () => {
    const objectType = typeof dataObject;
    expect(objectType).toBe("object");
  });

  test("Object length to be 1", () => {
    const objectLength = dataObject.length;
    expect(objectLength).toBe(1);
  });

  test("Object[0] first key should be quizList", () => {
    const objectFirstKey = Object.keys(dataObject[0])[0];
    expect(objectFirstKey).toBe("quizList");
  });

  test("Object[0] first keys should be an object", () => {
    const objectFirstKeyType = typeof dataObject[0].quizList;
    expect(objectFirstKeyType).toBe("object");
  });

  test("Object[0] quizList length should match with the number of the keys minus 1", () => {
    const objectQuizListArrayLength = dataObject[0].quizList.length;
    const numberOfKeys = Object.keys(dataObject[0]).length;
    expect(objectQuizListArrayLength).toBe(numberOfKeys - 1);
  });

  test("Object[0] quizList should match with the quiz keys", () => {
    const objectQuizListArray = dataObject[0].quizList;
    const otherKeysArray = Object.keys(dataObject[0]);
    otherKeysArray.shift();
    expect(objectQuizListArray).toStrictEqual(otherKeysArray);
  });

  test("Object[0].quizItem length should be 2", () => {
    const listOfKeys = Object.keys(dataObject[0]);
    listOfKeys.shift();

    listOfKeys.forEach((keys) => {
      const objectLength = Object.keys(dataObject[0][keys][0]).length;
      expect(objectLength).toBe(2);
    });
  });

  test("Object[0].quiItem keys name should be title & quiz", () => {
    const listOfKeys = Object.keys(dataObject[0]);
    listOfKeys.shift();

    listOfKeys.forEach((keys) => {
      const objectKeys = Object.keys(dataObject[0][keys][0]);
      expect(objectKeys).toStrictEqual(["title", "quiz"]);
    });
  });

  test("Object[0].quiItem.quiz.object should have 6 keys", () => {
    const listOfKeys = Object.keys(dataObject[0]);
    listOfKeys.shift();

    listOfKeys.forEach((keys) => {
      const objectLength = Object.keys(dataObject[0][keys][0]).length;
      expect(objectLength).toBe(2);
      dataObject[0][keys][0].quiz.forEach((item) => {
        const itemKeysLength = Object.keys(item).length;
        expect(itemKeysLength).toBe(6);
      });
    });
  });

  test("Object[0].quiItem.quiz.object should have the right keys", () => {
    const listOfKeys = Object.keys(dataObject[0]);
    listOfKeys.shift();

    listOfKeys.forEach((keys) => {
      const objectLength = Object.keys(dataObject[0][keys][0]).length;
      expect(objectLength).toBe(2);
      dataObject[0][keys][0].quiz.forEach((item) => {
        const itemKeys = Object.keys(item);
        expect(itemKeys).toStrictEqual([
          "id",
          "type",
          "logic",
          "trueAccess",
          "falseAccess",
          "question",
        ]);
      });
    });
  });
});
