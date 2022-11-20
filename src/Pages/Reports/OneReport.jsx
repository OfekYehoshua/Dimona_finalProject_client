import { useState } from "react";
import {
  AiOutlineRight,
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
import "./OneReport.css";

const OneReport = () => {
  const location = useLocation();
  const state = location.state;
  const navigate = useNavigate();
  const [open, isOpen] = useState(true);

  function Opening() {
    return (
      <div className="reports-details">
        <h5>
          <b className="reports-details-title">מיקום המפגע:</b>
        </h5>
        <h5 className="reports-details-value">{state?.location}</h5>
        <h5>
          <b className="reports-details-title">תיאור:</b>
        </h5>
        <h5 className="reports-details-value">{state?.body}</h5>
        <h5>
          <b className="reports-details-title">תאריך:</b>
        </h5>
        <h5 className="reports-details-value">
          {state?.createdAt.split("T")[0]}
        </h5>
      </div>
    );
  }
  return (
    <div>
      <div className="alert-top">
        <div className="navtop-alerts">
          <AiOutlineRight
            className="navtop-alerts-btn-back"
            onClick={() => navigate("/")}
          />
          <h4 style={{ fontSize: "larger" }} className="alert-header">
            דיווח מתאריך {state?.createdAt.split("T")[0]}
          </h4>
        </div>
      </div>
      <div>
        <img
          className="alert-head-img"
          src={
            state?.img
              ? state.img[0]
              : "https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"
          }
          alt="img"
        />
      </div>
      <div>
        <button onClick={() => isOpen(!open)} className="details-btn">
          <h4>
            {open ? (
              <AiOutlineMinusCircle className="report-icon" />
            ) : (
              <AiOutlinePlusCircle className="report-icon" />
            )}
            <b>פרטי דיווח</b>
          </h4>
        </button>
        {open && <Opening />}
      </div>
      <div className="report-status">
        <h4>
          <b>
            סטטוס: <b>לא בוצע</b>
          </b>
        </h4>
      </div>
    </div>
  );
};

export default OneReport;
