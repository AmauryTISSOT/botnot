import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NoMatch from "./NoMatch";
import { MemoryRouter } from "react-router-dom";

describe("NoMatch unit testing", () => {
  test("should render correctly", () => {
    render(
      <MemoryRouter>
        <NoMatch />
      </MemoryRouter>
    );
    const errorElement = screen.getByRole("heading", /error 404/i);
    expect(errorElement).toBeInTheDocument();
  });
});

