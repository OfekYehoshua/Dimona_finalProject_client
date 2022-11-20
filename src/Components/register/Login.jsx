import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  let [phone, setPhone] = useState("");

  const toastOptions = {
    position: "bottom-left",
    autoClose: 2000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const navigate = useNavigate();
  const handleSubmit = async () => {
    if (phone.startsWith("0")) {
      let arrPhone = phone.split("");
      arrPhone.shift();
      phone = arrPhone.join("");
    }
    const findUser = await axios
      .post(`${process.env.REACT_APP_API_URL}/api/user/login`, { phone })
      .catch((err) => {
        toast.error("משתמש לא רשום או מספר פלאפון לא תקין", toastOptions);
      });
    console.log(findUser.data);
    console.log(phone.length);
    if (phone.length < 9 || !findUser.data) {
      toast.error("משתמש לא רשום או מספר פלאפון לא תקין", toastOptions);
      return;
    } else {
      const sendMessage = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/phone/login?phonenumber=+972${phone}`
      );
      if (sendMessage) {
        sessionStorage.setItem(
          "loginUser",
          JSON.stringify({
            messageSent: true,
            phone,
          })
        );
        navigate("/verify");
      }
    }
  };

  return (
    <Card style={{ width: "90%", height: "100%" }} variant="info">
      <Card.Body>
        <Card.Title>היכנס</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          הכנס את מספר הפלאפון על מנת להתחבר למערכת
        </Card.Subtitle>
        <Form>
          <Form.Group as={Row} className="mb-3">
            <Form.Label>מספר פלאפון נייד</Form.Label>
            <Col sm="6">
              <Form.Control
                type="tel"
                placeholder="050-0000000"
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <Form.Control.Feedback type="invalid">
                חובה להכניס מספר פלאפון
              </Form.Control.Feedback>
            </Col>
          </Form.Group>
          <Button
            className="custom-btn"
            variant="info"
            size="lg"
            onClick={() => {
              handleSubmit();
            }}
          >
            התחבר
          </Button>
        </Form>
      </Card.Body>
      <ToastContainer />
    </Card>
  );
};

export default Login;
