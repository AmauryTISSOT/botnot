import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "./Home";

describe("Home page unit testing", () => {
  test("should render correctly", () => {
    render(<Home />);
    const homeElement = screen.getByText(/home page/i);
    expect(homeElement).toBeInTheDocument();
  });
});

//FIXME: this test fail for no reasons
