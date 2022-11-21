import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import { MdModeEditOutline } from "react-icons/md";
import "./editUserModal.css";
import axios from "axios";

export default function EditUserModal() {
  const userLogged = JSON.parse(localStorage.getItem("UserLogged"));
  const [show, setShow] = useState(false);
  const [firstName, setFirstName] = useState(userLogged.firstName);
  const [lastName, setLastName] = useState(userLogged.lastName);
  const [email, setEmail] = useState(userLogged.email);
  const [phone, setPhone] = useState("");
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const handleClose = () => setShow(false);

  const handleShow = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setShow(true);
  };

  const handleSubmit = async () => {
    if (firstName.length > 15) {
      setError({ msg: "שם פרטי עד 15 תווים!", status: false });
    } else if (lastName.length > 15) {
      setError({ msg: "שם משפחה עד 15 תווים!", status: false });
    } else if (phone.length !== 0 && phone.length !== 10) {
      setError({ msg: "הכנס מספר פלאפון תקין!", status: false });
    } 
    // if (phone.length > 0) {
    //   navigate("/verify");
    //   handleClose();
    // } 
    else  {
      setError({ msg: "", status: true });
      const config = {
        headers: {
          Authorization: `Bearer ${userLogged.token}`,
        },
      };
      let updatedUser = {}
      if(firstName){
        updatedUser = await axios.patch(
        `${process.env.REACT_APP_API_URL}/api/user/${userLogged._id}`,
        {firstName:firstName},
        config
      );
      }
      if(lastName){
         updatedUser = await axios.patch(
          `${process.env.REACT_APP_API_URL}/api/user/${userLogged._id}`,
          {lastName:lastName},
          config
        );
        }
        if(email){
           updatedUser = await axios.patch(
            `${process.env.REACT_APP_API_URL}/api/user/${userLogged._id}`,
            {email:email},
            config
          );
          }
      if(updatedUser){  
      updatedUser.data.token =userLogged.token
      localStorage.setItem("UserLogged", JSON.stringify(updatedUser.data))
        handleClose()
        window.location.reload();
    }}
  };

  return (
    <>
      <i onClick={handleShow}>
        <MdModeEditOutline style={{ fontSize: 40, color: "white" }} />
      </i>

      <Modal style={{ marginTop: "30vh" }} show={show} onHide={handleClose}>
        <Modal.Body>עדכון המשתמש</Modal.Body>
        <input
          className="user-credentials-input"
          placeholder="שם פרטי:"
          type="text"
          autoFocus
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          className="user-credentials-input"
          placeholder="שם משפחה:"
          value={lastName}
          type="text"
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          className="user-credentials-input"
          placeholder="אימייל:"
          value={email}
          type="text"
          onChange={(e) => setEmail(e.target.value)}
        />
    
        <Modal.Footer className="modal-btn">
          <Button variant="info" onClick={handleClose}>
            בטל
          </Button>
          <Button variant="info" onClick={handleSubmit}>
            שלח
          </Button>
        </Modal.Footer>
        {error.status === false && (
          <div
            style={{
              textAlign: "center",
              color: "red",
              paddingBottom: 5,
              fontWeight: 600,
            }}
          >
            {error.msg}
          </div>
        )}
        {firstName.length === 0 &&
          lastName.length === 0 &&
          email.length === 0 &&
          phone.length === 0 && (
            <div
              style={{
                textAlign: "center",
                color: "orange",
                paddingBottom: 5,
                fontWeight: 600,
              }}
            >
              לא חייב למלא את כל הפרטים
            </div>
          )}
      </Modal>
    </>
  );
}
