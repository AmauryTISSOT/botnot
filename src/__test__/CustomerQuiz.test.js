import React, { useState } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // optional
import CustomerQuiz from "../components/CustomerQuiz";
import user from "@testing-library/user-event";


describe("CustomerQuiz component testing", () => {
    test("Expect oui checkbox element and non checkbox element to be render the same amount of times", () => {
        render(< CustomerQuiz/>);
        const ouiCheckboxElement = screen.getAllByTestId(/oui-checkbox/i);
        const nonCheckboxElement = screen.getAllByTestId(/non-checkbox/i);
        expect(ouiCheckboxElement.length).toBe(nonCheckboxElement.length)

    })
    test("Expect all checkbox element to be rendered 28 times", () => {
        render(< CustomerQuiz/>);
        const allCheckboxElement = screen.getAllByRole("checkbox")
        expect(allCheckboxElement.length).toBe(76)
    })
})