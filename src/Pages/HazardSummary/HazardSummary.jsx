import "./HazardSummary.css";
import Navtop from "../../Components/navigate/Navtop";
import BottomNav from "../../Components/navigate/BottomNav";

const HazardSummary = () => {
  const hazardType = JSON.parse(sessionStorage.getItem("hazard"));
  const hazardImages = JSON.parse(
    sessionStorage.getItem("hazard-images")
  ).allImages;

  return (
    <div className="summary-body">
      <Navtop title="סיכום הדיווח" link="/hazard-location" />
      <div className="summary-bottom-body">
        <h5 className="summary-header">
          <b>מיקום המפגע:</b>
        </h5>

        <p>רחוב</p>
        <h5 className="summary-header">
          <b>תיאור:</b>
        </h5>
        {hazardType.title}
      </div>
      <div className="card-summary">
        {hazardImages.map((img, index) => (
          <img key={index} alt="img" variant="top" src={img} />
        ))}
      </div>
      <BottomNav link="/" />
    </div>
  );
};

export default HazardSummary;
