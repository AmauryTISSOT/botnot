import React, { useState } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // optional
import Submit from "../components/CustomerQuiz/Submit";

const MockSubmit = () => {
  const [mockState, setMockState] = useState("");

  return (
    <>
      <Submit valueName={"mockValue"} setState={setMockState} />
      <div>{mockState}</div>
    </>
  );
};

describe("Submit component test", () => {
  test("Component should render correctly", () => {
    render(<MockSubmit />);
    const buttonElement = screen.getByRole("button", { name: /submit/i });
    expect(buttonElement).toBeInTheDocument();
  });
  test("When clicked the button should change the state with the value given by props", () => {
    render(<MockSubmit />);
    const buttonElement = screen.getByRole("button", { name: /submit/i });
    fireEvent.click(buttonElement)
    const element = screen.getByText(/mockValue/i);
    expect(element).toBeInTheDocument();
  });
});
