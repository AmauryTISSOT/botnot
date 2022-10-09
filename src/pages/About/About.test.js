import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import About from "./About";
import { MemoryRouter } from "react-router-dom";

describe("About page unit testing", () => {
  test("should render correctly", () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );
    const aboutElement = screen.getByText(/about/i);
    expect(aboutElement).toBeInTheDocument();
  });
});

