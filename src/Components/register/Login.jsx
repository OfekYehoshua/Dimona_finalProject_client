import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Toast from "react-bootstrap/Toast";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";

const Login = () => {
  const [phone, setPhone] = useState();
 
  return (
    <Card style={{ width: '100vw', height: '100vh' }} variant="info">
    <Card.Body>
    <Card.Title>היכנס</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">הכנס את מספר הפלאפון על מנת להתחבר למערכת</Card.Subtitle>
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
      <Button variant="info" size="lg" >התחבר</Button>
    </Form>
    </Card.Body>
    </Card>
  )
}

export default Login