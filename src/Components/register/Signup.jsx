import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Toast from "react-bootstrap/Toast";
import Card from "react-bootstrap/Card";

function Signup() {
  const [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const navigate = useNavigate();
  // const [validated, setValidated] = useState(false);

  const handleSubmit = async () => {
    console.log(phone.startsWith("0"));
    if (!email || !phone || !firstName || !lastName) {
      <Toast>
        <Toast.Header>
          <strong className="me-auto">בבקשה למלא הכל</strong>
        </Toast.Header>
        <Toast.Body>פרטים חסרים</Toast.Body>
      </Toast>;
      return;
    }
    try {
      if (phone.startsWith("0")) {
        let arrPhone = phone.split("");
        arrPhone.shift();
        phone = arrPhone.join("");
        console.log(phone);
      }
      const sendMessage = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/phone/login?phonenumber=+972${phone}`
      );
      if (sendMessage) {
        sessionStorage.setItem(
          "registerUser",
          JSON.stringify({
            messageSent: true,
            email,
            phone,
            firstName,
            lastName,
          })
        );
        navigate("/verify");
      }

      // const data = await axios.post(`${process.env.REACT_APP_API_URL}/api/user`, {
      //   email,
      //   phone,
      //   firstName,
      //   lastName
      // });
    } catch (error) {
      <Toast>
        <Toast.Header>
          <strong className="me-auto">Error signing up</strong>
          <small>try again later</small>
        </Toast.Header>
        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
      </Toast>;
    }
  };

  return (
    <Card style={{ width: "100vw", height: "100vh" }} variant="info">
      <Card.Body>
        <Card.Title>רישום זריז</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          אין אפשרות לשלוח את הדיווח ללא רישום
        </Card.Subtitle>
        <Form>
          <Form.Group as={Row} className="mb-3">
            <Form.Group controlId="validationCustom01">
              <Form.Label>שם פרטי</Form.Label>
              <Col sm="6">
                <Form.Control
                  type="text"
                  placeholder="ישראל"
                  onChange={(e) => setfirstName(e.target.value)}
                  required
                />
                <Form.Control.Feedback>
                  {" "}
                  חובה להכניס שם פרטי
                </Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  חובה להכניס שם פרטי
                </Form.Control.Feedback>
              </Col>
            </Form.Group>

            <Form.Group controlId="validationCustom01">
              <Form.Label>שם משפחה</Form.Label>
              <Col sm="6">
                <Form.Control
                  type="text"
                  placeholder="ישראלי"
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
                <Form.Control.Feedback>
                  {" "}
                  חובה להכניס שם משפחה
                </Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  חובה להכניס שם משפחה
                </Form.Control.Feedback>
              </Col>
            </Form.Group>

            <Form.Label>כתובת מייל עדכנית</Form.Label>
            <Col sm="6">
              <Form.Control
                type="email"
                placeholder="name@example.com"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Form.Control.Feedback type="invalid">
                חובה להכניס מייל
              </Form.Control.Feedback>
            </Col>
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
            variant="info"
            size="lg"
            onClick={() => {
              handleSubmit();
            }}
          >
            שלח
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default Signup;
