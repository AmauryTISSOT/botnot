import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ChecklistSelect from "./ChecklistSelect";
import { MemoryRouter } from "react-router-dom";
import checklistList from "../ChecklistData/ChecklistListData";

describe("ChecklistSelect unit testing", () => {
  test("should render correctly", () => {
    render(
      <MemoryRouter>
        <ChecklistSelect />
      </MemoryRouter>
    );

    const h1Element = screen.getByRole("heading", { level: 1 });
    expect(h1Element).toBeInTheDocument();
    expect(h1Element).toHaveTextContent("Sélectionner un type de checklist");
  });
});
