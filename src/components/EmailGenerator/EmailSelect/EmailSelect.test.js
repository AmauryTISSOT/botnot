import React from "react";
import { fireEvent, render, screen, createEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import EmailSelect from "./EmailSelect";

describe("EmailSelect unit testing", () => {
  test("should render correctly", () => {
    render(<EmailSelect emailList={["test1", "test2"]}/>);

    const listElement = screen.getByRole("listitem");
    expect(listElement).toBeInTheDocument();
  });
});
