import Lottie from "react-lottie-player";
import ReportAnimation from "../../animations/report animation.json";
import axios from "axios";
import "./alertStyle.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const Alerts = () => {
  const user_isAdmin = true;
  const [alerts, setAlerts] = useState([]);
  const [title, setTitle] = useState();
  const [subTitle, setSubTitle] = useState();
  const [body, setBody] = useState();
  const [selectedImg, setSelectedImg] = useState("");
  const [loading, setLoading] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const fetchAlerts = async () => {
      try {
        await axios
          .get(`${process.env.REACT_APP_API_URL}/api/alerts`)
          .then((res) => res.data && setAlerts(res.data));
      } catch (error) {
        console.log(error);
      }
    };
    fetchAlerts();
  }, []);
  console.log(alerts);
  const postAlert = async () => {
    try {
      // const config = {
      //   headers: {
      //     "Content-Type": "application/json",
      //     // Authorization: `Bearer ${user.data.token}`,
      //   },
      // };
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/alerts/`,
        {
          title,
          subTitle,
          body,
          img: selectedImg,
        }
      );
      // setAlerts(...alerts, data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteAlert = async (alert) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${user.data.token}`,
        },
      };
      await axios.delete(
        `${process.env.REACT_APP_API_URL}/api/alerts/${alert._id}`,
        config
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    const getSelectedImg = async () => {
      if (selectedImg) {
        if (
          selectedImg.type === "image/jpeg" ||
          selectedImg.type === "image/png"
        ) {
          try {
            setLoading(true);
            const formData = new FormData();
            formData.append("file", selectedImg);
            formData.append("upload_preset", "dimona-citizen-app");
            await axios
              .post(
                "https://api.cloudinary.com/v1_1/ofekyehoshua/image/upload",
                formData
              )
              .then((res) => setSelectedImg(res.data.secure_url));
            setLoading(false);
          } catch (err) {
            console.log(err);
          }
        }
      }
    };
    getSelectedImg();
  }, [selectedImg]);

  return (
    <>
        {user_isAdmin ? (
          <>
        <div className="nav">
         <h1 className="alerts-header">כל המבזקים</h1>        
            <Button variant="dark" onClick={handleShow} >
              הוסף מבזק
            </Button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header>
                <Modal.Title>העלאת מבזק</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Form.Group className="mb-3">
                    <Form.Control
                      size="lg"
                      type="text"
                      placeholder="הכנס את הכותרת"
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </Form.Group>
  
                  <Form.Group className="mb-3">
                    <Form.Control
                      size="md"
                      type="text"
                      placeholder="הכנס את הכותרת משנה"
                      onChange={(e) => setSubTitle(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      size="lg"
                      as="textarea"
                      placeholder="הכנס את גוף הכתבה"
                      onChange={(e) => setBody(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="file"
                      accept="application/pdf, image/png"
                      onChange={(e) => setSelectedImg(e.target.files[0])}
                    />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  סגור
                </Button>
                <Button
                  variant="primary"
                  type="button"
                  disabled={loading}
                  onClick={postAlert}
                >
                  העלה
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
          </>
        ) : (
          "none"
        )}
      {alerts ? (
        <>
          {alerts?.map((alert) => (
            <Card
              key={alert._id}
              style={{ display: "flex", flexDirection: "row" }}
            >
              <img className="alert-img" src={alert.img} alt="img" />
              <div className="card-info">
                <h1 className="alert-title">{alert.title}</h1>
                <span className="alert-date">
                  {alert.createdAt.split("T")[0]}
                </span>
              </div>
              {user_isAdmin ? (
                <Button
                  onClick={() => deleteAlert(alert)}
                  style={{
                    width: "10vw",
                    height: "5vh",
                    position: "relative",
                    right:'43vw', top:'7vh'
                  }}
                >
                  x
                </Button>
              ) : (
                "none"
              )}
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
    </>
  );
};

export default Alerts;
