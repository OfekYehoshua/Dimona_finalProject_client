import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";
// import ListGroup from "react-bootstrap/ListGroup";
import Lottie from "react-lottie-player";
import ReportAnimation from "../../animations/report animation.json";
// import axios from "axios";
import Card from "react-bootstrap/Card";
import "./modalStyles.css";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ReportModal = () => {
  const reports = [
    {
      _id: 1,
      createdAt: "2022-02-26T16:37:48.244Z",
      profession: "testss",
      status: "test2",
      location: "location",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui cumque fugiat ratione dolorem laudantium reiciendis ad ex recusandae nesciunt dolore alias, tempora numquam labore consequatur odit laborum earum. Necessitatibus, quae",
      img: "https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg",
    },
    {
      _id: 2,
      createdAt: "2022-02-26T16:37:48.244Z",
      profession: "testss",
      status: "test2",
      location: "location",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui cumque fugiat ratione dolorem laudantium reiciendis ad ex recusandae nesciunt dolore alias, tempora numquam labore consequatur odit laborum earum. Necessitatibus, quae",
      img: "https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg",
    },
    {
      _id: 3,
      createdAt: "2022-02-26T16:37:48.244Z",
      profession: "testss",
      status: "test2",
      location: "location",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui cumque fugiat ratione dolorem laudantium reiciendis ad ex recusandae nesciunt dolore alias, tempora numquam labore consequatur odit laborum earum. Necessitatibus, quae",
      img: "https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg",
    },
    {
      _id: 4,
      createdAt: "2022-02-26T16:37:48.244Z",
      profession: "testss",
      status: "test2",
      location: "location",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui cumque fugiat ratione dolorem laudantium reiciendis ad ex recusandae nesciunt dolore alias, tempora numquam labore consequatur odit laborum earum. Necessitatibus, quae",
      img: "https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg",
    },
  ];

  const navigate = useNavigate();

  return (
    <>
      {reports ? (
        <>
          {reports.map(
            (report, index) =>
              index < 4 && (
                <Card
                  className="alert-container"
                  key={report._id}
                  onClick={() => navigate("/onereport", { state: report })}
                >
                  <img className="alert-img" src={report.img} alt="img" />
                  <div className="card-info">
                    <h1 className="alert-title">{report.profession}</h1>
                    <h1 className="alert-title">{report.status}</h1>
                    <h1 className="alert-title">{report.location}</h1>
                    <span className="alert-date">
                      {report.createdAt.split("T")[0]}
                    </span>
                  </div>
                </Card>
              )
          )}
          <Card className="alert-button-container">
            <NavLink to={"/reports"}>
              <Button variant="secondery">לכל הדיווחים</Button>
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

export default ReportModal;
