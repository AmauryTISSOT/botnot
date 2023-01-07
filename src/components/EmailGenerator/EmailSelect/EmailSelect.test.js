import React from "react";
import {
  fireEvent,
  render,
  screen,
  cleanup,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import EmailSelect from "./EmailSelect";

beforeAll(cleanup);

describe("EmailSelect unit testing", () => {
  test("should render correctly", () => {
    const testData = [
      {
        type: "Title1",
        query: [
          {
            value: "value1",
            question: "question1",
          },
          {
            value: "value2",
            question: "question2",
          },
        ],
      },
      {
        type: "Title2",
        query: [
          {
            value: "value3",
            question: "question3",
          },
          {
            value: "value4",
            question: "question4",
          },
        ],
      },
    ];

    render(<EmailSelect emailList={testData} />);

    const h1Element = screen.getByRole("heading", { level: 1 });
    expect(h1Element).toBeInTheDocument();
    expect(h1Element).toHaveTextContent("Sélectionner un modèle de mail");

    const titleElement = screen.getAllByRole("heading", { level: 2 });
    expect(titleElement).toHaveLength(2);

    const listElement = screen.getAllByRole("listitem");
    expect(listElement).toHaveLength(2);

    const questionElement = screen.getAllByTestId("question-element");
    expect(questionElement).toHaveLength(4);

    const question1 = screen.getByText("question1");
    expect(question1).toBeInTheDocument();
    expect(question1.id).toBe("value1");

    const question4 = screen.getByText("question4");
    expect(question4).toBeInTheDocument();
    expect(question4.id).toBe("value4");
  });
});

describe("EmailSelect integration testing", () => {
  test("clicking on a question should load EmailSelect component", () => {
    const testData = [
      {
        type: "Title1",
        query: [
          {
            value: "test",
            question: "question1",
          },
        ],
      },
    ];

    render(<EmailSelect emailList={testData} />);

    const question1 = screen.getByText("question1");
    fireEvent.click(question1);
    expect(question1).not.toBeInTheDocument();
  });
});
