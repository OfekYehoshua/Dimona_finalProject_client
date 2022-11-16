import Video from "./newbackground2.mp4";
import "./homeStyle.css";
import AlertModal from "../../Components/Modals/alertModal";
import Drawer from "../../Components/navigate/drawer";

const Home = () => {
  return (
    <div>
      <Drawer />
      <div className="video-container">
        <video
          style={{ position: "relative" }}
          id="background-video"
          controls
          autoPlay
          loop
          muted
        >
          <source src={Video} type="video/mp4" />
        </video>
        <h1 id="hello">ברוך הבא</h1>
        <button className="button-89">דיווח למוקד העירייה</button>
        <p className="report-head">מבזקים</p>
        <AlertModal />
        <p className="report-head">הדיווחים שלי</p>
      </div>
    </div>
  );
};

export default Home;
