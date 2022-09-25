import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import user from "@testing-library/user-event";
import NavBar from "./NavBar";



describe("NavBar unit testing", () => {
  test("should render correctly", () => {
    render(<NavBar/>);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();

    const navElement = screen.getByRole("navigation");
    expect(navElement).toBeInTheDocument();
  });
});
