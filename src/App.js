import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import NoMatch from "./components/NoMatch/NoMatch";
import Annuaire from "./components/Annuaire/Annuaire";
import CustomerQuiz from "./components/CustomerQuiz";
import Outils from "./components/Outils/Outils";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NoMatch />} />
        <Route path="outils" element={<Outils />}>
          <Route path="annuaire" element={<Annuaire />} />
          <Route path="customerquiz" element={<CustomerQuiz />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
