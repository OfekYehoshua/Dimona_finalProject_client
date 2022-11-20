import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Register from "./Pages/Register/Register";
import Report from "./Pages/Reports/Reports";
import UploadImage from "./Pages/Others/UploadImage";
import Alerts from "./Pages/Alerts/Alerts";
import OneAlert from "./Pages/Alerts/OneAlert";
import HazardType from "./Pages/HazardType/HazardType";
import HazardSummary from "./Pages/HazardSummary/HazardSummary";
import Location from "./Pages/Location/Location";
import Suggestion from "./Pages/Suggestion/Suggestion";
import VerifyPhoneCode from "./Components/register/VerifyPhoneCode";
import OneReport from "./Pages/Reports/OneReport";
import User from "./Pages/User/User";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify" element={<VerifyPhoneCode />} />
        <Route path="/my-reports" element={<Report/>} />
        <Route path="/onereport" element={<OneReport/>} />
        <Route path="/hazard-image" element={<UploadImage />} />
        <Route path="/hazard-location" element={<Location />} />
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/onealert" element={<OneAlert />} />
        <Route path="/hazard-type" element={<HazardType />} />
        <Route path="/hazard-summary" element={<HazardSummary />} />
        <Route path="/suggestion" element={<Suggestion />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </Router>
  );
}

export default App;
