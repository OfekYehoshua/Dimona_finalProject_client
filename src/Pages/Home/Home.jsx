import "./homeStyle.css";
// import AlertModal from "../../Components/Modals/alertModal";
import Drawer from "../../Components/navigate/Drawer/Drawer";
// import ReportModal from "../../Components/Modals/reportModal";
import Lottie from "react-lottie-player";
import HomeBackground from "../../animations/70532-background.json";
import { FaUserAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Drawer />
      <div className="video-container">
        <Lottie loop animationData={HomeBackground} play />
        <div className="home-user-container" onClick={() => navigate("/user")}>
          <div style={{ textAlign: "center", fontSize: 50, paddingBottom: 10 }}>
            <FaUserAlt />
          </div>
          <h1>ברוך הבא, אורח</h1>
        </div>
        <div className="home-buttons-container">
          <div className="home-button-circle">
            <h1 style={{ fontWeight: 700, fontSize: 40 }}> דווח </h1>
            <h1 style={{ fontWeight: 700, fontSize: 40 }}> למוקד </h1>
          </div>
          <div className="home-button-lined">
            <h1> הצעה לייעול </h1>
          </div>
        </div>
      </div>

      {/* <p className="report-head">מבזקים</p>
        <AlertModal />
        <p className="report-head">הדיווחים שלי</p>
        <ReportModal /> */}
    </div>
  );
};

export default Home;
