
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
import ToastContainer from 'react-bootstrap/ToastContainer';
const VerifyPhoneCode = () => {
  const [showToast, setToast] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const [phoneCode, setPhoneCode] = useState("");
  const userRegister = JSON.parse(sessionStorage.getItem("registerUser"));
  const userLogin = JSON.parse(sessionStorage.getItem("loginUser"));
  useEffect(() => {
    if (!userLogin && !userRegister) {
      navigate("/register");
    }
    
  }, [userLogin, userRegister, navigate]);



  
  const verifyCode = async () => {
    if (userRegister) {
      try {
        const codeTrue = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/phone/verify?phonenumber=+972${userRegister.phone}&code=${phoneCode}`
        );
        console.log(codeTrue);
        if (codeTrue.data.data.valid) {
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
            localStorage.setItem("UserLogged", JSON.stringify(newUser.data));
            sessionStorage.removeItem("registerUser");
            navigate("/hazard-summary");
          } else {
            setPhoneCode("");
            setErrorMessage("שגיאה תנסו מאוחר יותר");
            setToast(true);
          }
        }
      } catch (error) {
        setPhoneCode("");
        setErrorMessage("  המספר שגוי ותקף ל60 שניות");
        setToast(true);
      }
    } else if (userLogin) {
      try {
        const codeTrue = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/phone/verify?phonenumber=+972${userLogin.phone}&code=${phoneCode}`
        );
        if (codeTrue.data.data.valid) {
          const newUser = await axios.post(
            `${process.env.REACT_APP_API_URL}/api/user/login`,
            {
              phone: userLogin.phone,
            }
          );
          if (newUser) {
            console.log(newUser);
            localStorage.setItem("UserLogged", JSON.stringify(newUser.data));
            sessionStorage.removeItem("loginUser");
            navigate("/hazard-summary");
          } else {
            setPhoneCode("");
            setErrorMessage("שגיאה תנסו מאוחר יותר");
            setToast(true);
          }
        }
      } catch (error) {
        setPhoneCode("");
        setErrorMessage("  המספר שגוי ותקף ל60 שניות");
        setToast(true);
      }
    }
  };

  const sendAgain = async () => {
    const sendMessage = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/phone/login?phonenumber=+972${userRegister.phone}`
    );
    if (!sendMessage) {
      setErrorMessage(" תנסו מאוחר יותר");
      setToast(true);
    }
  };

  return (
    <Card style={{ width: "100vw", height: "100vh" }} variant="info">
      <br />
      <br />
      <br />
      <ToastContainer position="top-end" className="p-3">
      <Toast
        onClose={() => setToast(false)}
        autohide
        show={showToast}
        delay={2200}
      >
        <Toast.Header></Toast.Header>
        <Toast.Body> {errorMessage} </Toast.Body>
      </Toast>
      </ToastContainer >
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
                onChange={(e) => {
                  setPhoneCode(e.target.value);
                }}
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
