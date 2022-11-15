import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Register from "./Pages/Register/Register";
import Report from "./Pages/Reports/Report";
import HazardType from "./Pages/HazardType/HazardType";
import HazardSummary from "./Pages/HazardSummary/HazardSummary";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reports" element={<Report />} />
        <Route path="/hazard-type" element={<HazardType />} />
        <Route path="/hazard-summary" element={<HazardSummary />} />
      </Routes>
    </Router>
  );
}

export default App;
