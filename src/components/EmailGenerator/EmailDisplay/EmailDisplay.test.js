import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import EmailDisplay from "./EmailDisplay";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router";

describe("EmailDisplay unit testing", () => {
  test("should render correctly", () => {
    render(
      <MemoryRouter initialEntries={["/emailGenerator/test"]}>
        <Routes>
          <Route path="/emailGenerator/:emailId" element={<EmailDisplay />} />
        </Routes>
      </MemoryRouter>
    );

    const textInputElement = screen.getByTestId("test-test1");
    expect(textInputElement).toBeInTheDocument();

    const placeholderElement = screen.getByPlaceholderText("0,00 €");
    expect(placeholderElement).toBeInTheDocument();

    const radioInputElement = screen.getByTestId("test-test2-oui");
    expect(radioInputElement).toBeInTheDocument();

    const selectInputElement = screen.getByTestId("test-test3-option one");
    expect(selectInputElement).toBeInTheDocument();
  });

  test("input should work correctly", () => {
    render(
      <MemoryRouter initialEntries={["/emailGenerator/test"]}>
        <Routes>
          <Route path="/emailGenerator/:emailId" element={<EmailDisplay />} />
        </Routes>
      </MemoryRouter>
    );

    const textInputElement = screen.getByPlaceholderText("0,00 €");
    fireEvent.change(textInputElement, { target: { value: "10000" } });
    expect(textInputElement.value).toBe("10000");

    const radioInputElement = screen.getByTestId("test-test2-oui");
    fireEvent.click(radioInputElement);
    expect(radioInputElement).toBeChecked();

    const selectInputElement = screen.getByTestId("test-test3");
    userEvent.selectOptions(selectInputElement, "option one");
    expect(screen.getByTestId("test-test3-option one").selected).toBe(true);

    const copyEmailElement = screen.getByText(
      "This is a test. The variable 1 is 10000. The variable 2 is yes. The variable 3 is option one"
    );
    expect(copyEmailElement).toBeInTheDocument();
  });

  test("should handle error correctly", () => {
    render(
      <MemoryRouter initialEntries={["/emailGenerator/123"]}>
        <Routes>
          <Route path="/emailGenerator/:emailId" element={<EmailDisplay />} />
        </Routes>
      </MemoryRouter>
    );

    const error404 = screen.getByText(/error 404/i);
    expect(error404).toBeInTheDocument();
  });
});
