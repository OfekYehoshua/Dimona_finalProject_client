import Lottie from "react-lottie-player";
import ReportAnimation from "../../animations/report animation.json";
// import axios from "axios";
// import "./reportStyle.css";
import Card from "react-bootstrap/Card";

const Report = () => {
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
  return (
    <>
      {reports ? (
        <>
          {reports.map(
            (report) =>
             (
                <Card className="alert-container" key={report._id}>
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

export default Report;
