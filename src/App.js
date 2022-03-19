import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ComponentToPrint } from "./pages/serif/ComponentToPrint";
import Home from "./components/Home";
import { Print } from "./components/Forms/Print";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Print />} />
        <Route path="/serifcolakel" element={<ComponentToPrint />} />
      </Routes>
    </div>
  );
}

export default App;
