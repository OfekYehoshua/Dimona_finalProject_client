import Lottie from "react-lottie-player";
import ReportAnimation from "../../animations/report animation.json";
// import "./reportStyle.css";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import NavtopNoClose from "../../Components/navigate/NavtopNoClose";

const Reports = () => {
  const userLogged = JSON.parse(localStorage.getItem("UserLogged"));
  const [reports, setReports] = useState([]);
  const navigate = useNavigate();

  
  useEffect(() => {
    if (!userLogged) {
      navigate("/");
    }
    const fetchReports = async () => {
      const config = {
        headers: {
          token: `Bearer ${userLogged.token}`,
        },
      };
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL_WORK}/${userLogged._id}`,
        config
      );
      console.log(data);
      setReports(data);
    };
    fetchReports();
  }, [navigate, userLogged]);

  return (
    <div>
      <NavtopNoClose link={"/"} title={"הדיווחים שלי"}></NavtopNoClose>
      {reports ? (
        <>
          {reports.map((report) => (
            <Card
              className="alert-container"
              key={report._id}
              onClick={() => navigate("/onereport", { state: report })}
            >
              <img
                className="alert-img"
                src={
                  report.img
                    ? report.img[0]
                    : "https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"
                }
                alt="img"
              />
              <div className="card-info">
                <h1 className="alert-title">{report.profession}</h1>
                <h1 className="alert-title">{report.status}</h1>
                <h1 className="alert-title">{report.location}</h1>
                <span className="alert-date">
                  {report.createdAt.split("T")[0]}
                </span>
              </div>
            </Card>
          ))}
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
    </div>
  );
};

export default Reports;
