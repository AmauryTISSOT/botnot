import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import user from "@testing-library/user-event";
import NavItem from "./NavItem";

describe("NavItem unit testing", () => {
  test("should render correctly", () => {
    render(<NavItem name={"test"} />);
    const linkElement = screen.getByRole("link");
    expect(linkElement).toBeInTheDocument();

    const listElement = screen.getByRole("listitem");
    expect(listElement).toBeInTheDocument();

    const propsElement = screen.getByText(/test/i);
    expect(propsElement).toBeInTheDocument();
  });
});
