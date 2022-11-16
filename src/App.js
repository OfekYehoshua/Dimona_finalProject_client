import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Register from "./Pages/Register/Register";
import Report from "./Pages/Others/Reports";
import UploadImage from "./Pages/Others/UploadImage";
import Alerts from './Pages/Others/Alerts';
import OneAlert from './Pages/Others/OneAlert';
import HazardType from "./Pages/HazardType/HazardType";
import HazardSummary from "./Pages/HazardSummary/HazardSummary";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reports" element={<Report />} />
        <Route path="/hazard-image" element={<UploadImage />} />
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/onealert" element={<OneAlert/>} />
        <Route path="/hazard-type" element={<HazardType />} />
        <Route path="/hazard-summary" element={<HazardSummary />} />
      </Routes>
    </Router>
  );
}

export default App;
