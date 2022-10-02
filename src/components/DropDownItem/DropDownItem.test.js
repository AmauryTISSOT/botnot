import React, { useState } from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import user from "@testing-library/user-event";
import DropDownItem from "./DropDownItem";

const MockParentComponent = () => {
  const [activeMenu, setActiveMenu] = useState("main");

  return (
    <>
      <DropDownItem goToMenu="menu1" setActiveMenu={setActiveMenu}>
        <button>test</button>
      </DropDownItem>
      {activeMenu}
    </>
  );
};

describe("DropDownItem unit testing", () => {
  test("should render correctly", () => {
    render(<MockParentComponent />);
    const childrenElement = screen.getByText(/test/i);
    expect(childrenElement).toBeInTheDocument();
  });

  test("html children should render correctly", () => {
    render(<MockParentComponent />);
    const htmlChildrenElement = screen.getByRole("button", /test/i);
    expect(htmlChildrenElement).toBeInTheDocument();
  });

  test("state props should work correctly", () => {
    render(<MockParentComponent />);
    const propsStateElement = screen.getByText(/main/i);
    expect(propsStateElement).toBeInTheDocument();
  });

  test("clicking on children should change parent state", () => {
    render(<MockParentComponent />);
    const childrenElement = screen.getByText(/test/i);
    user.click(childrenElement);
    const stateElement = screen.getByText(/menu1/i);
    expect(stateElement).toBeInTheDocument();
  });
});
