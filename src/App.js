import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import NoMatch from "./pages/NoMatch/NoMatch";
import Annuaire from "./components/Annuaire/Annuaire";
import CustomerQuiz from "./components/checkboxComponents/CustomerQuiz/CustomerQuiz";
import Outils from "./pages/Outils/Outils";
import VenteAppartement from "./components/checkboxComponents/VenteAppartement/VenteAppartement";
import GenerateDocs from "./components/CourrierGenerator/GenerateDocs/GenerateDocs";
import EmailGenerator from "./components/EmailGenerator/EmailGenerator";

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
          <Route path="venteAppartement" element={<VenteAppartement/>}/>
          <Route path="courrierGenerator" element={<GenerateDocs/>}/>
          <Route path="emailGenerator" element={<EmailGenerator/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
