import "bootstrap/dist/css/bootstrap.css";
import "./HazardType.css";
import { BsFillPencilFill } from "react-icons/bs";
import dog from "./HazardImages/dog.png";
import ash from "./HazardImages/ash.png";
import GEZEM from "./HazardImages/GEZEM.png";
import park from "./HazardImages/park.png";
import holee from "./HazardImages/holee.jpg";
import ad from "./HazardImages/ad.png";
import walll from "./HazardImages/walll.png";
import gar from "./HazardImages/gar.png";
import tamr from "./HazardImages/tamr.png";
import lamp from "./HazardImages/lamp.png";
import car from "./HazardImages/car.png";
import ma from "./HazardImages/ma.jpg";
import { useNavigate } from "react-router-dom";

const HazardType = () => {
  const navigate = useNavigate();

  const handleClicked = (info) => {
    sessionStorage.setItem("hazard", info);
    navigate("/hazard-summary");
  };

  return (
    <div className="container">
      <div className="top">
        <h4>פרטי מפגע</h4>
        <input type="text" placeholder="יש לרשום את פרטי המפגע" />
        <BsFillPencilFill color="white" />
      </div>

      <div className="bottom">
        <h5>
          <b>או לבחור מהרשימה</b>
        </h5>
        <div className="list-group">
          <button
            onClick={() => handleClicked("פינוי ערימת גזם")}
            className="list-group-item"
          >
            <b className="button-text"> פינוי ערימת גזם </b>
            <img src={GEZEM} alt="img" width="35vw" />
          </button>
          <hr />
          <button
            onClick={() => handleClicked("פינוי ערימת אשפה")}
            className="list-group-item"
          >
            <b className="button-text"> פינוי ערימת אשפה</b>
            <img src={ash} alt="img" width="35vw" />
          </button>
          <hr />
          <button
            onClick={() => handleClicked("רחוב לא נקי")}
            className="list-group-item"
          >
            <b className="button-text">רחוב לא נקי</b>
            <img src={ma} alt="img" width="35vw" />
          </button>
          <hr />
          <button
            onClick={() => handleClicked("צואת כלבים")}
            className="list-group-item"
          >
            <b className="button-text">צואת כלבים</b>
            <img src={dog} alt="img" width="35 vw" />
          </button>
          <hr />
          <button
            onClick={() => handleClicked("גינה ציבורית מלוכלכת")}
            className="list-group-item"
          >
            <b className="button-text">גינה ציבורית מלוכלכת</b>
            <img src={park} alt="img" width="35vw" />
          </button>
          <hr />
          <button
            onClick={() => handleClicked("גומה ריקה על המדרכה")}
            className="list-group-item"
          >
            <b className="button-text">גומה ריקה על המדרכה</b>
            <img src={holee} alt="img" width="35vw" />
          </button>
          <hr />
          <button
            onClick={() => handleClicked("הדברה/ יתושים")}
            className="list-group-item"
          >
            <b className="button-text">הדברה/ יתושים</b>
            <img src={ad} alt="img" width="35vw" />
          </button>
          <hr />
          <button
            onClick={() => handleClicked("ריצוף מפורק")}
            className="list-group-item"
          >
            <b className="button-text"> ריצוף מפורק</b>
            <img src={walll} alt="img" width="35vw" />
          </button>
          <hr />
          <button
            onClick={() => handleClicked("פינוי מיכל אשפה ירוק מלא")}
            className="list-group-item"
          >
            <b className="button-text"> פינוי מיכל אשפה ירוק מלא</b>
            <img src={gar} alt="img" width="35" />
          </button>
          <hr />
          <button
            onClick={() => handleClicked("תמרור/ סימון כביש חסר")}
            className="list-group-item"
          >
            <b className="button-text">תמרור/ סימון כביש חסר</b>
            <img src={tamr} alt="img" width="35" />
          </button>
          <hr />
          <button
            onClick={() => handleClicked("פנס רחוב לא תקין")}
            className="list-group-item"
          >
            <b className="button-text">פנס רחוב לא תקין</b>
            <img src={lamp} alt="img" width="35" />
          </button>
          <hr />
          <button
            onClick={() => handleClicked("כלי שיתופי חוסם")}
            className="list-group-item"
          >
            <b className="button-text"> כלי שיתופי חוסם</b>
            <img src={car} alt="img" width="35" />
          </button>
          <hr />
          <br />
        </div>
      </div>
    </div>
  );
};

export default HazardType;
