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
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  // const [validated, setValidated] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !phone || !password) {
      <Toast>
        <Toast.Header>
          <strong className="me-auto">Error signing up</strong>
          <small>try again later</small>
        </Toast.Header>
        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
      </Toast>;
      return;
    }
    try {
      const data = await axios.post("/", {
        email,
        phone,
        password,
      });
      <Toast>
        <Toast.Header>
          <strong className="me-auto">Error signing up</strong>
          <small>try again later</small>
        </Toast.Header>
        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
      </Toast>;
      sessionStorage.setItem("userInfo", JSON.stringify(data));
      navigate("/");
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
            <Form.Group controlId="validationCustom01">
              <Form.Label>ססמא</Form.Label>
              <Col sm="6">
                <Form.Control
                  type="password"
                  placeholder="hE!!o450#"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <Form.Control.Feedback>ססמא טובה</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  חובה להכניס ססמא
                </Form.Control.Feedback>
              </Col>
            </Form.Group>
          </Form.Group>
          <Button variant="info" size="lg" onClick={handleSubmit}>
            שלח
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default Signup;
