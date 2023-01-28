import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CopyPasteElement from "./CopyPasteElement";

describe("CopyPasteElement unit testing", () => {
  test("should render correctly", () => {
    render(<CopyPasteElement />);
    const preElement = screen.getByTestId("pre");
    expect(preElement).toBeInTheDocument()
  });
  test("should render props correctly", () => {
    render(<CopyPasteElement content={"test"} />);
    const propsElement = screen.getByText(/test/i);
    expect(propsElement).toBeInTheDocument();
  });
  test("copy button should render correctly", () => {
    render(<CopyPasteElement />);
    const buttonElement = screen.getByText("Copy");
    expect(buttonElement).toBeInTheDocument();
  });

});
