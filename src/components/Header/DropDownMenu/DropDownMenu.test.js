import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import DropDownMenu from "./DropDownMenu";
import { MemoryRouter } from "react-router-dom";

describe("DropDownMenu unit testing", () => {
  test("main menu should render correctly", () => {
    render(
      <MemoryRouter>
        <DropDownMenu />
      </MemoryRouter>
    );
    const testElement = screen.getByTestId(/main/i);
    expect(testElement).toBeInTheDocument();
  });

  test("menu1 should not render", () => {
    render(
      <MemoryRouter>
        <DropDownMenu />
      </MemoryRouter>
    );
    const testElement = screen.queryByTestId(/menu1/i);
    expect(testElement).not.toBeInTheDocument();
  });

  test("menu2 should not render", () => {
    render(
      <MemoryRouter>
        <DropDownMenu />
      </MemoryRouter>
    );
    const testElement = screen.queryByTestId(/menu2/i);
    expect(testElement).not.toBeInTheDocument();
  });
});

//TODO: integration testing
