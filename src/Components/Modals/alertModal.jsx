import { useEffect, useState } from "react";
import Lottie from "react-lottie-player";
import ReportAnimation from "../../animations/report animation.json";
import axios from "axios";
import "./modalStyles.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AlertModal = () => {
  const navigate = useNavigate();
  const [alerts, setAlerts] = useState([]);
  
  useEffect(() => {
    const fetchAlerts = async () => {
      try {
        const { data } = await axios.get("/api/alerts/");
        setAlerts(...alerts, data);
      } catch (error) {
        console.log("error fetching the alerts");
      }
    };
    fetchAlerts();
  }, [alerts]);

  return (
    <>
      {alerts ? (
        <>
          {alerts.map(
            (alert, index) =>
              index < 4 && (
                <Card
                  className="alert-container"
                  key={alert._id}
                  onClick={() => navigate("/onealert", { state: alert })}
                >
                  <img className="alert-img" src={alert.img} alt="img" />
                  <div className="card-info">
                    <h1 className="alert-title">{alert.title}</h1>
                    <span className="alert-date">
                      {alert.createdAt.split("T")[0]}
                    </span>
                  </div>
                </Card>
              )
          )}
          <Card className="alert-button-container">
            <NavLink to={"/alerts"}>
              <Button variant="secondery">לכל המבזקים</Button>
            </NavLink>
          </Card>
        </>
      ) : (
        <>
          <Lottie
            loop
            animationData={ReportAnimation}
            play
            style={{ width: 400, height: 600 }}
          />
        </>
      )}
    </>
  );
};

export default AlertModal;
