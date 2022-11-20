// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import Toast from "react-bootstrap/Toast";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios";
import { Toast } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const VerifyPhoneCode = () => {
  const navigate = useNavigate();
  const [phoneCode, setPhoneCode] = useState();
  const userRegister = JSON.parse(sessionStorage.getItem("registerUser"));
  const userLogin = JSON.parse(sessionStorage.getItem("loginUser"));
  useEffect(() => {
    if (!userLogin && !userRegister) {
      navigate("/register");
    }
  }, [userLogin, userRegister, navigate]);

  const verifyCode = async () => {
    if (userRegister) {
      const codeTrue = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/phone/verify?phonenumber=+972${userRegister.phone}&code=${phoneCode}`
      );
      if (codeTrue) {
        if (codeTrue.data) {
          const newUser = await axios.post(
            `${process.env.REACT_APP_API_URL}/api/user`,
            {
              email: userRegister.email,
              firstName: userRegister.firstName,
              lastName: userRegister.lastName,
              phone: userRegister.phone,
            }
          );
          if (newUser) {
            console.log(newUser);
            localStorage.setItem("UserLogged", JSON.stringify(newUser));
            sessionStorage.removeItem("registerUser");
            navigate("/hazard-type");
          }
        }
        console.log(codeTrue);
      }
    }
    if (userLogin) {
      const codeTrue = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/phone/verify?phonenumber=+972${userLogin.phone}&code=${phoneCode}`
      );
      if (codeTrue) {
        if (codeTrue.data) {
          const newUser = await axios.post(
            `${process.env.REACT_APP_API_URL}/api/user/login`,
            {
              phone: userLogin.phone,
            }
          );
          if (newUser) {
            console.log(newUser);
            localStorage.setItem("UserLogged", JSON.stringify(newUser));
            sessionStorage.removeItem('loginUser')
            navigate("/hazard-type");
          }
        }
        console.log(codeTrue);
      }
    }
  };

  const sendAgain = async () => {
    const sendMessage = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/phone/login?phonenumber=+972${userRegister.phone}`
    );
    if (sendMessage) {
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
      <br />
      <br />
      <br />
      <Card.Body>
        <Card.Title> הכנס את הקוד </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          הכנס את הקוד שקיבלתם לנייד 0
          {userRegister ? userRegister.phone : userLogin && userLogin.phone}
        </Card.Subtitle>
        <Form>
          <Form.Group as={Row} className="mb-3">
            <Col sm="6">
              <Form.Control
                type="tel"
                placeholder="******"
                onChange={(e) => setPhoneCode(e.target.value)}
                required
              />
              <Form.Control.Feedback type="invalid">
                חובה להכניס את הקוד
              </Form.Control.Feedback>
            </Col>
          </Form.Group>
          <Button
            onClick={() => {
              verifyCode();
            }}
            variant="info"
            size="lg"
          >
            התחבר
          </Button>
          <Button onClick={() => sendAgain()} variant="danger" size="lg">
            לא קיבלתי את הקוד
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default VerifyPhoneCode;
