import Lottie from "react-lottie-player";
import ReportAnimation from "../../animations/report animation.json";
// import axios from "axios";
import "./alertStyle.css";
import Card from "react-bootstrap/Card";

const Alerts = () => {
  const alerts = [
    {
      _id: 1,
      createdAt: "2022-02-26T16:37:48.244Z",
      title: "testss",
      subTitle: "test2",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui cumque fugiat ratione dolorem laudantium reiciendis ad ex recusandae nesciunt dolore alias, tempora numquam labore consequatur odit laborum earum. Necessitatibus, quae",
      img: "https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg",
    },
    {
      _id: 2,
      title: "test",
      createdAt: "2022-02-26T16:37:48.244Z",
      subTitle: "test2",
      img: "https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui cumque fugiat ratione dolorem laudantium reiciendis ad ex recusandae nesciunt dolore alias, tempora numquam labore consequatur odit laborum earum. Necessitatibus, quae",
    },
    {
      _id: 3,
      title: "test",
      createdAt: "2022-02-26T16:37:48.244Z",
      subTitle: "test2",
      img: "https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui cumque fugiat ratione dolorem laudantium reiciendis ad ex recusandae nesciunt dolore alias, tempora numquam labore consequatur odit laborum earum. Necessitatibus, quae",
    },
    {
      _id: 4,
      title: "test",
      subTitle: "test2",
      createdAt: "2022-02-26T16:37:48.244Z",
      img: "https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui cumque fugiat ratione dolorem laudantium reiciendis ad ex recusandae nesciunt dolore alias, tempora numquam labore consequatur odit laborum earum. Necessitatibus, quae",
    },
  ];

  return (
    <>
      {alerts ? (
        <>
          {alerts.map(
            (alert) =>
             (
                <Card  key={alert._id}>
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

export default Alerts;