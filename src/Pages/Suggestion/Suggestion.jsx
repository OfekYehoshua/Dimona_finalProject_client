import React, { useState } from "react";
import "./Suggestion.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useEffect } from "react";
import axios from "axios";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import { useNavigate } from "react-router-dom";
import NavtopNoClose from "../../Components/navigate/NavtopNoClose";

const Suggestion = () => {
  const navigate = useNavigate();
  const [showToast, setToast] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [pic, setPic] = useState("");
  const [picture, setPicture] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);
  let userLogged = localStorage.getItem("UserLogged");
  userLogged = JSON.parse(userLogged);

  useEffect(() => {
    if (pic.type === "image/jpeg" || pic.type === "image/png") {
      const formData = new FormData();
      formData.append("file", pic);
      formData.append("upload_preset", "xol71jb0");
      setLoading(true);
      axios
        .post(
          "https://api.cloudinary.com/v1_1/dumgi49os/image/upload",
          formData
        )
        .then((response) => {
          setPicture(response.data.secure_url);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (pic) {
      setErrorMessage("  התמונה לא תקינה");
      setToast(true);
    }
  }, [pic]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !body) {
      setErrorMessage(" חייב נושא וטקסט");
      setToast(true);
      return;
    }
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${userLogged.token}`,
        },
      };
      const suggestion = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/suggestions/${userLogged._id}`,
        { title, phone: userLogged.phone, body, picture },
        config
      );
      if (suggestion) {
        axios.post(`${process.env.REACT_APP_API_URL}/api/phone/suggestion`,{phone:"+972"+userLogged.phone,_uid:userLogged._id})
        setErrorMessage(" ההצעה נשלחה");
        setToast(true);
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    } catch (error) {
      setErrorMessage("  בעיה תנסו מאוחר יותר");
      setToast(true);
    }
  };

  return (
    <div>
     <NavtopNoClose title={'הצעה לייעול'} link={'/'} ></NavtopNoClose>
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
      </ToastContainer>
      <Form>
        <Form.Group className="mb-5 mt-3 ">
          <Form.Label></Form.Label>
          <Form.Control
            type="text"
            placeholder="נושא"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">
          <Form.Label>טקסט</Form.Label>
          <Form.Control
            as="textarea"
            rows={6}
            placeholder=" אנא הכנס טקסט"
            onChange={(e) => {
              setBody(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group controlId="formFile" className="mt-3">
          <Form.Label>יש אפשרות לעלות תמונה (לא חובה)</Form.Label>
          <br />
          <Form.Control
            type="file"
            onChange={(e) => {
              setPic(e.target.files[0]);
            }}
          />
        </Form.Group>
        {picture && <img src={picture} alt="" width={100} />}
        <br />
        <Button
          onClick={(e) => {
            handleSubmit(e);
          }}
          variant={!loading ? "primary" : "secondary"}
          type="submit"
          className="custom-btn"
          disabled={loading}
        >
          שלח
        </Button>
      </Form>
    </div>
  );
};

export default Suggestion;
