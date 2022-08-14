import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";  // optional
import QCMDisplay from "../components/checkboxComponents/QCMDisplay";

describe("QCMDisplay component", () => {
  test("Component render correctly", () => {
    const {container} = render(<QCMDisplay/>);
    expect(container).toMatchSnapshot();
  })
})