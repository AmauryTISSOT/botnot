import { useState } from "react";
import "./App.css";
import CalculPlusValuesBrute from "./components/PlusValues/CalculPlusValuesBrute";

function App() {
  const [mockState, setMockState] = useState("");

  return (
    <div className="App">
      <CalculPlusValuesBrute state={mockState} setState={setMockState}/>
    </div>
  );
}

export default App;
