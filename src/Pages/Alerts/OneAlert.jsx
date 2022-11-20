import { Card } from "react-bootstrap";
import { AiOutlineRight } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./alertStyle.css";

const OneAlert = () => {
  const location = useLocation();
  const state = location.state;
  console.log(state);
  const navigate = useNavigate();
  return (
    <div>
      <div className="alert-top">
        <div className="navtop-alerts">
          <AiOutlineRight
            className="navtop-alerts-btn-back"
            onClick={() => navigate("/")}
          />
          <h4 style={{ fontSize: "larger" }} className="alert-header">
            {" "}
            מבזק מתאריך 17/11/2022
          </h4>{" "}
        </div>
      </div>
      <img className="alert-head-img" src={state.img} alt="img" />
      <Card className="alert-title-card">
        <h1>{state.title}</h1>
        <p style={{ fontWeight: "500" }}>{state.subTitle}</p>
        <p style={{ fontWeight: "600", fontSize: "small", textAlign: "end" }}>
          {state.createdAt.split("T")[0]}
        </p>
      </Card>
      <Card className="alert-info-card">
        <p style={{ fontWeight: "500" }}>{state.body}</p>
      </Card>
    </div>
  );
};

export default OneAlert;
