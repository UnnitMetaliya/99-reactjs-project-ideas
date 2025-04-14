import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Expenses from "./Pages/Expenses/Expenses";
import Summary from "./Pages/Summary/Summary";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="app-header">
          <h1>Expense Tracker</h1>
        </div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Expenses />} />
          <Route path="/summary" element={<Summary />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
