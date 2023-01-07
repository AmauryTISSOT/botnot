import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import EmailVariable from "./EmailVariable";
import userEvent from "@testing-library/user-event";

describe("EmailVariable unit testing", () => {
  test("should render correctly", () => {
    render(<EmailVariable emailValue={"test"} />);

    const textInputElement = screen.getByTestId("test-test1");
    expect(textInputElement).toBeInTheDocument();

    const placeholderElement = screen.getByPlaceholderText("0,00 €")
    expect(placeholderElement).toBeInTheDocument();

    const radioInputElement = screen.getByTestId("test-test3-oui");
    expect(radioInputElement).toBeInTheDocument();

    const selectInputElement = screen.getByTestId("test-test4-option one")
    expect(selectInputElement).toBeInTheDocument();
  });

  test("input should work correctly", () => {
    render(<EmailVariable emailValue={"test"} />);

    const textInputElement = screen.getByPlaceholderText("0,00 €");
    fireEvent.change(textInputElement, { target: { value: "10000" } });
    expect(textInputElement.value).toBe("10000");

    const radioInputElement = screen.getByTestId("test-test3-oui")
    fireEvent.click(radioInputElement);
    expect(radioInputElement).toBeChecked();

    const selectInputElement = screen.getByTestId("test-test4");
    userEvent.selectOptions(selectInputElement, "option one");
    expect(screen.getByTestId("test-test4-option one").selected).toBe(true);
  });
});
