import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Checklist from "./Checklist";
import ChecklistData from "./ChecklistData/ChecklistData";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe("Checklist unit testing", () => {
  test("should render correctly", () => {
    render(
      <MemoryRouter initialEntries={["/checklistGenerator/test"]}>
        <Routes>
          <Route
            path="/checklistGenerator/:checkListId"
            element={<Checklist />}
          />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getAllByText(/item/i)).toHaveLength(3);
    expect(screen.getAllByRole("checkbox")).toHaveLength(3);
  });

  test("should handle error correctly", () => {
    render(
      <MemoryRouter initialEntries={["/checklistGenerator/123"]}>
        <Routes>
          <Route
            path="/checklistGenerator/:checkListId"
            element={<Checklist />}
          />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText(/error 404/i)).toBeInTheDocument();
  });

  test("should have the wright css when not clicked", () => {
    render(
      <MemoryRouter initialEntries={["/checklistGenerator/test"]}>
        <Routes>
          <Route
            path="/checklistGenerator/:checkListId"
            element={<Checklist />}
          />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByTestId("0")).toHaveStyle("text-decoration: none");
  });

  test("should have the wright css when clicked", () => {
    render(
      <MemoryRouter initialEntries={["/checklistGenerator/test"]}>
        <Routes>
          <Route
            path="/checklistGenerator/:checkListId"
            element={<Checklist />}
          />
        </Routes>
      </MemoryRouter>
    );
    const checkboxElement = screen.getAllByRole("checkbox");
    fireEvent.click(checkboxElement[0]);
    expect(screen.getByTestId("0")).toHaveStyle(
      "text-decoration: line-through"
    );
  });
});
