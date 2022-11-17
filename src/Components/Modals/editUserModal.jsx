import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import { MdModeEditOutline } from "react-icons/md";
import "./editUserModal.css";

export default function EditUserModal() {
  const [show, setShow] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const handleClose = () => setShow(false);

  const handleShow = () => {
    setFirstName('')
    setLastName('')
    setEmail('')
    setPhone('')
    setShow(true);
  };

  const handleSubmit = () => {
    if (firstName.length > 15) {
      setError({ msg: "שם פרטי עד 15 תווים!", status: false });
    } else if (lastName.length > 15) {
      setError({ msg: "שם משפחה עד 15 תווים!", status: false });
    } else if (phone.length !== 0 && phone.length !== 10) {
      setError({ msg: "הכנס מספר פלאפון תקין!", status: false });
    } else {
      setError({ msg: "", status: true });
    }
    if (phone.length > 0) {
      navigate("/verify");
      handleClose();
    } else {
      //   window.location.reload();
      //   handleClose();
    }
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
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          className="user-credentials-input"
          placeholder="שם משפחה:"
          type="text"
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          className="user-credentials-input"
          placeholder="אימייל:"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="user-credentials-input"
          placeholder="פלאפון:"
          type="text"
          onChange={(e) => setPhone(e.target.value)}
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
