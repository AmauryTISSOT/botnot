import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import About from "./About"

describe("About page unit testing", () => {
  test("should render correctly", () => {
    render(<About/>);
    const aboutElement = screen.getByRole("heading", /about/i);
    expect(aboutElement).toBeInTheDocument();
  });
});

//FIXME: this test fail for no reasons 