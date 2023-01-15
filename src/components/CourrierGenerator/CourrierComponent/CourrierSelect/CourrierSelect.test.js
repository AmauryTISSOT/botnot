import React from "react";
import { fireEvent, render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import CourrierSelect from "./CourrierSelect";

beforeAll(cleanup);

const mockData = [{
  type: "Title1",
  query: [
    {
      value: "value1",
      question: "courrier1",
    },
    {
      value: "value2",
      question: "courrier2",
    },
  ],
}];

describe("Courrier Select unit testing", () => {
  test("should render correctly", () => {
    render(<CourrierSelect data={mockData} />);

    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
    expect(screen.getAllByRole("heading", { level: 2 })).toHaveLength(1);

    const listElement = screen.getAllByRole("listitem");
    expect(listElement).toHaveLength(2);

    const questionElement = screen.getAllByTestId("courrier-element");
    expect(questionElement).toHaveLength(2);

    const question1 = screen.getByText("courrier1");
    expect(question1).toBeInTheDocument();
    expect(question1.id).toBe("value1");

    const question4 = screen.getByText("courrier2");
    expect(question4).toBeInTheDocument();
    expect(question4.id).toBe("value2");
  });
});
