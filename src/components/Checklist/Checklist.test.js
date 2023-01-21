import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Checklist from "./Checklist";
import ChecklistData from "./ChecklistData/ChecklistData"

describe("Checklist unit testing", () => {
  test("should render correctly", () => {
    render(<Checklist data={ChecklistData.test} />);
    expect(screen.getAllByText(/item/i)).toHaveLength(3);
    expect(screen.getAllByRole("checkbox")).toHaveLength(3);
  });

  test("should have the wright css when not clicked", () => {
    render(<Checklist data={ChecklistData.test} />);
    expect(screen.getByTestId("0")).toHaveStyle("text-decoration: none");
  });

  test("should have the wright css when clicked", () => {
    render(<Checklist data={ChecklistData.test} />);
    const checkboxElement = screen.getAllByRole("checkbox");
    fireEvent.click(checkboxElement[0]);
    expect(screen.getByTestId("0")).toHaveStyle(
      "text-decoration: line-through"
    );
  });
});
