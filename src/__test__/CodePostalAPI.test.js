import React, { useState } from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom"; // optional
import CodePostalApi from "../components/API/CodePostalApi";
import user from "@testing-library/user-event";


describe("CodePostalAPI component unit testing", () => {
    test("The component should correctly return the dataAPI", async () =>{
      render(<CodePostalApi codePostalProp={30430}/>)
      await waitFor(()=> {
        screen.getByText(/BARJAC/i)
      } )
    })
    test("The component should correctly display error", async () =>{
      render(<CodePostalApi codePostalProp={123}/>)
      await waitFor(()=> {
        screen.getByText(/invalid/i)
      } )
    })
})