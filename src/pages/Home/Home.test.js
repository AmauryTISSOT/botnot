import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "./Home";
import { MemoryRouter } from "react-router-dom";

describe("Home page unit testing", () => {
  test("should render correctly", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const homeElement = screen.getByText(/home page/i);
    expect(homeElement).toBeInTheDocument();
  });
});

