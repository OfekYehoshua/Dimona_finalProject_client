import { useState } from "react";
import {
  AiOutlineRight,
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
import "./OneReport.css";

function Opening() {
  return (
    <div className="reports-details">
      <h5>
        <b className="reports-details-title">מיקום המפגע:</b>
      </h5>
      <h5 className="reports-details-value">מקום</h5>
      <h5>
        <b className="reports-details-title">תיאור:</b>
      </h5>
      <h5 className="reports-details-value">תיאור</h5>
      <h5>
        <b className="reports-details-title">תאריך:</b>
      </h5>
      <h5 className="reports-details-value">תאריך</h5>
    </div>
  );
}

const OneReport = () => {
  const location = useLocation();
  const state = location.state;
  const navigate = useNavigate();
  const [open, isOpen] = useState(true);

  return (
    <div>
      <div className="alert-top">
        <div className="navtop-alerts">
          <AiOutlineRight
            className="navtop-alerts-btn-back"
            onClick={() => navigate("/")}
          />
          <h4 style={{ fontSize: "larger" }} className="alert-header">
            דיווח מתאריך 19/10/22
          </h4>
        </div>
      </div>
      <div>
        <img className="alert-head-img" src={state?.img} alt="img" />
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
