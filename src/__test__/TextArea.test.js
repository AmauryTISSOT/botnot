import React, { useState } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // optional
import "@testing-library/user-event"
import TextArea from "../components/CustomerQuiz/TextArea";
import userEvent from "@testing-library/user-event";

const MockTextArea = () => {
  const [customerQuizState, setCustomerQuizState] = useState("");

  return (
    <>
      < TextArea
        questionID={"mockID"}
        customerQuiz={customerQuizState}
        setCustomerQuiz={setCustomerQuizState}
      />
      <div>{customerQuizState.mockID}</div>
    </>
  );
};


describe("Textarea component testing", () => {
    test("The component should correctly render", () => {
        render(<MockTextArea/>)
        const element = screen.getByRole("textbox")
        expect(element).toBeInTheDocument();
    })
    test("The textarea should have the props ID", () => {
        render(<MockTextArea/>)
        const element = screen.getByRole("textbox")
        expect(element.id).toBe("mockID")
    })
    test("The textarea should correctly display the input value", () => {
        const user = userEvent.setup()
        render(<MockTextArea/>)
        const element = screen.getByRole("textbox")
        user.type(element,"test123")
        const textAreaValue = screen.getByText("test123")
        expect(textAreaValue).toBeInTheDocument()
    })
})