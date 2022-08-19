import React, { useState } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // optional
import TextArea from "../components/CustomerQuiz/TextArea";
import user from "@testing-library/user-event";

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
        render(<MockTextArea/>)
        const element = screen.getByRole("textbox")
        user.type(element,"test123")
        expect(element.value).toBe("test123")
    })
    test("Input value should change customerQuiz state", () => {
        render(<MockTextArea/>)
        const element = screen.getByRole("textbox")
        user.type(element,"test123")
        const state = screen.getByText("test123")
        expect(state).toBeInTheDocument();
    })
    test("Input value should change when input is added", () => {
        render(<MockTextArea/>)
        const element = screen.getByRole("textbox")
        user.type(element,"first sentence ")
        user.type(element,"second sentence")
        const state = screen.getByText("first sentence second sentence")
        expect(state).toBeInTheDocument();
    })
})