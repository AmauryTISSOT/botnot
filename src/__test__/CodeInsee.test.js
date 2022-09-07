import React, { useState } from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom"; // optional
import CodeInsee from "../components/API/CodeInsee";
import user from "@testing-library/user-event";

const MockComponent = () => {
  const [mockState, setMockState] = useState("");

  return (
    <>
      <CodeInsee setState={setMockState} />
      <div>mockState.codeCommune</div>
      <div>mockState.nomCommune</div>
    </>
  );
};

describe("CodeInsee component unit testing", () => {
  test("The component should correctly return the dataAPI", async () => {
    render(<MockComponent />);
    const inputElement = screen.getByTestId("input");
    user.type(inputElement, "30100", { delay: 50 });
    await waitFor(() => {
      screen.getByText(/alès/i);
    });
  });
  test("The component should correctly change the props state on click", async () => {
    //FIXME: this test don't work properly
    render(<MockComponent />);
    const inputElement = screen.getByTestId("input");
    user.type(inputElement, "30100", { delay: 50 });
    const alesElement = await screen.findByText(/alès/i);
    fireEvent.click(alesElement);
    const codeInseeElement = screen.findByText("30007");
    expect(codeInseeElement).toBeInTheDocument();
  });
});
