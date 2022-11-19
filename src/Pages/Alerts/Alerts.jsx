import Lottie from "react-lottie-player";
import ReportAnimation from "../../animations/report animation.json";
import axios from "axios";
import "./alertStyle.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";

const Alerts = () => {
  const user_isAdmin = true;
  const [alerts, setAlerts] = useState([]);
  const [title, setTitle] = useState();
  const [subtitle, setSubtitle] = useState();
  const [body, setBody] = useState();
  const [selectedImg, setSelectedImg] = useState("");

  const postAlert = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${user.data.token}`,
        },
      };
      const { data } = await axios.post("/api/alerts", {title, subtitle, body, selectedImg}, config);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchAlerts = async () => {
    try {
      const { data } = await axios.get("/api/alerts/");
      setAlerts(...alerts, data);
    } catch (error) {
      console.log("error fetching the alerts");
    }
  };
  const deleteAlert = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${user.data.token}`,
        },
      };
      const { data } = await axios.delete("/api/alerts/:id", {}, config);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const getSelectedImg = async () => {
      if (selectedImg) {
        if (
          selectedImg.type === "image/jpeg" ||
          selectedImg.type === "image/png"
        ) {
          const formData = new FormData();
          formData.append("file", selectedImg);
          formData.append("upload_preset", "dimona-citizen-app");
          // setLoading(true);
          await axios
            .post(
              "https://api.cloudinary.com/v1_1/ofekyehoshua/image/upload",
              formData
            )
            .then((res) => setSelectedImg(res.data.secure_url))
            .catch((err) => {
              console.log(err);
            });
          // setLoading(false);
        }
      }
    };
    getSelectedImg();
  }, [selectedImg]);

  useEffect(() => {
    fetchAlerts();
  }, []);
  useEffect(() => {
    fetchAlerts();
  }, [postAlert()]);

  useEffect(() => {
    fetchAlerts();
  }, []);

  return (
    <>
      {alerts ? (
        <>
          {alerts.map((alert) => (
            <Card key={alert._id}>
              <img className="alert-img" src={alert.img} alt="img" />
              <div className="card-info">
                <h1 className="alert-title">{alert.title}</h1>
                <span className="alert-date">
                  {alert.createdAt.split("T")[0]}
                </span>
              </div>
              <Button onClick={deleteAlert}>x</Button>
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
      {user_isAdmin ? (
        <Form style={{display:'flex', flexDirection:'column',margin:'10vh', width:'30vw'}}>
           <h1>העלאת מבזק </h1>
          <Form.Group className="mb-3" >
            <Form.Control size="lg" type="text" placeholder="הכנס את הכותרת" onChange={(e)=>setTitle(e.target.value)}/>
          </Form.Group>
            
          <Form.Group className="mb-3" >
            <Form.Control size="md" type="text" placeholder="הכנס את הכותרת משנה" onChange={(e)=>setSubtitle(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3" >
           
            <Form.Control size="lg" as="textarea" placeholder="הכנס את גוף הכתבה" onChange={(e)=>setBody(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3">
            
            <Form.Control
              type="file"
              accept="application/pdf, image/png"
              onChange={(e) => setSelectedImg(e.target.files[0])}
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={postAlert}>
            העלה
          </Button>
        </Form>
      ) : (
        "none"
      )}
    </>
  );
};

export default Alerts;

// const alerts = [
//   {
//     _id: 1,
//     createdAt: "2022-02-26T16:37:48.244Z",
//     title: "testss",
//     subTitle: "test2",
//     body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui cumque fugiat ratione dolorem laudantium reiciendis ad ex recusandae nesciunt dolore alias, tempora numquam labore consequatur odit laborum earum. Necessitatibus, quae",
//     img: "https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg",
//   },
//   {
//     _id: 2,
//     title: "test",
//     createdAt: "2022-02-26T16:37:48.244Z",
//     subTitle: "test2",
//     img: "https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg",
//     body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui cumque fugiat ratione dolorem laudantium reiciendis ad ex recusandae nesciunt dolore alias, tempora numquam labore consequatur odit laborum earum. Necessitatibus, quae",
//   },
//   {
//     _id: 3,
//     title: "test",
//     createdAt: "2022-02-26T16:37:48.244Z",
//     subTitle: "test2",
//     img: "https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg",
//     body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui cumque fugiat ratione dolorem laudantium reiciendis ad ex recusandae nesciunt dolore alias, tempora numquam labore consequatur odit laborum earum. Necessitatibus, quae",
//   },
//   {
//     _id: 4,
//     title: "test",
//     subTitle: "test2",
//     createdAt: "2022-02-26T16:37:48.244Z",
//     img: "https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg",
//     body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui cumque fugiat ratione dolorem laudantium reiciendis ad ex recusandae nesciunt dolore alias, tempora numquam labore consequatur odit laborum earum. Necessitatibus, quae",
//   },
// ];
