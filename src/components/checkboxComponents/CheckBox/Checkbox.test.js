import React, { useState } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // optional
import Checkbox from "./Checkbox";

const MockCheckBox = () => {
  const [customerQuizState, setCustomerQuizState] = useState("");

  return (
    <>
      <Checkbox
        questionID={"mockID"}
        customerQuizState={customerQuizState}
        setCustomerQuizState={setCustomerQuizState}
      />
      <div>{customerQuizState.mockID}</div>
    </>
  );
};

describe("Checkbox component testing", () => {
  test("Component should display oui-checkbox", () => {
    render(<MockCheckBox />);
    const ouiElement = screen.getByTestId(/oui-checkbox/i);
    expect(ouiElement).toBeInTheDocument();
  });
  test("Component should display non-checkbox", () => {
    render(<MockCheckBox />);
    const nonElement = screen.getByTestId(/non-checkbox/i);
    expect(nonElement).toBeInTheDocument();
  });
  test("Component should display the right props ID", () => {
    render(<MockCheckBox />);
    const ouiElement = screen.getByTestId(/non-checkbox/i);
    const nonElement = screen.getByTestId(/non-checkbox/i);
    expect(ouiElement.id).toBe("mockID");
    expect(nonElement.id).toBe("mockID");
  });
  test("Oui checkbox should be unchecked by default", () => {
    render(<MockCheckBox />);
    const ouiElement = screen.getByTestId(/oui-checkbox/i);
    expect(ouiElement.checked).toBe(false);
  });
  test("Non checkbox should be unchecked by default", () => {
    render(<MockCheckBox />);
    const nonElement = screen.getByTestId(/non-checkbox/i);
    expect(nonElement.checked).toBe(false);
  });
  test("Oui checkbox value should be true", () => {
    render(<MockCheckBox />);
    const ouiElement = screen.getByTestId(/oui-checkbox/i);
    expect(ouiElement.value).toBe("true");
  });
  test("Non checkbox value should be false", () => {
    render(<MockCheckBox />);
    const nonElement = screen.getByTestId(/non-checkbox/i);
    expect(nonElement.value).toBe("false");
  });
  test("Clicking on oui checkbox should change checked to true", () => {
    render(<MockCheckBox />);
    const ouiElement = screen.getByTestId(/oui-checkbox/i);
    fireEvent.click(ouiElement);
    expect(ouiElement.checked).toBe(true);
  });
  test("Clicking on non checkbox should change checked to true", () => {
    render(<MockCheckBox />);
    const nonElement = screen.getByTestId(/non-checkbox/i);
    fireEvent.click(nonElement);
    expect(nonElement.checked).toBe(true);
  });
  test("Clicking on oui checkbox should display non-checkbox to false", () => {
    render(<MockCheckBox />);
    const ouiElement = screen.getByTestId(/oui-checkbox/i);
    fireEvent.click(ouiElement);
    const nonElement = screen.getByTestId(/non-checkbox/i);
    expect(nonElement.checked).toBe(false);
  });
  test("Clicking on non checkbox should display oui-checkbox to false", () => {
    render(<MockCheckBox />);
    const nonElement = screen.getByTestId(/non-checkbox/i);
    fireEvent.click(nonElement);
    const ouiElement = screen.getByTestId(/oui-checkbox/i);
    expect(ouiElement.checked).toBe(false);
  });

  test("Clicking once on oui checkbox than once on non-checkbox should display : oui to false and non to true", () => {
    render(<MockCheckBox />);
    const ouiElement = screen.getByTestId(/oui-checkbox/i);
    const nonElement = screen.getByTestId(/non-checkbox/i);
    fireEvent.click(ouiElement);
    fireEvent.click(nonElement);
    expect(ouiElement.checked).toBe(false);
    expect(nonElement.checked).toBe(true);
  });
  test("Clicking once on non checkbox than once on oui-checkbox should display : oui to true and non to false", () => {
    render(<MockCheckBox />);
    const nonElement = screen.getByTestId(/non-checkbox/i);
    const ouiElement = screen.getByTestId(/oui-checkbox/i);
    fireEvent.click(nonElement);
    fireEvent.click(ouiElement);
    expect(nonElement.checked).toBe(false);
    expect(ouiElement.checked).toBe(true);
  });
  test("Clicking on oui check box should set customerQuizState to : {MockID : true}", () => {
    render(<MockCheckBox />);
    const ouiElement = screen.getByTestId(/oui-checkbox/i);
    fireEvent.click(ouiElement);
    const fakeState = screen.getByText(/true/i);
    expect(fakeState).toBeInTheDocument();
  });

  test("Clicking non oui check box should set customerQuizState to : {MockID : false}", () => {
    render(<MockCheckBox />);
    const nonElement = screen.getByTestId(/non-checkbox/i);
    fireEvent.click(nonElement);
    const fakeState = screen.getByText(/false/i);
    expect(fakeState).toBeInTheDocument();
  });
  test("If customerQuizState already contain MockID key, the MockID value should not change", () => {
    render(<MockCheckBox />);
    const ouiElement = screen.getByTestId(/oui-checkbox/i);
    fireEvent.click(ouiElement);
    const nonElement = screen.getByTestId(/non-checkbox/i);
    fireEvent.click(nonElement);
    const fakeState = screen.getByText(/true/i);
    expect(fakeState).toBeInTheDocument();
  });
});
