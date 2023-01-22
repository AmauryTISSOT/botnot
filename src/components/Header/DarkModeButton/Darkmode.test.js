import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Darkmode from "./Darkmode"

describe("Darkmode component unit testing", () => {
  test("renders dark mode component", () => {
    render(<Darkmode />);

    const inputElement = screen.getByRole("checkbox");
    expect(inputElement).toBeInTheDocument();
  });

  test("toggles dark mode", () => {
    render(<Darkmode />);
    const inputElement = screen.getByRole("checkbox");

    expect(inputElement.checked).toEqual(false);
    fireEvent.click(inputElement);
    expect(inputElement.checked).toEqual(true);

    expect(document.documentElement.getAttribute("data-theme")).toBe("dark");
  });
});
