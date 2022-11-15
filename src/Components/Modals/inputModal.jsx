import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { BsFillPencilFill } from "react-icons/bs";

export default function InputModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = () => {
    sessionStorage.removeItem("hazard");
    handleClose();
  };

  return (
    <>
      <i
        style={{ margin: "0px 15px", transform: "scale(1.4)" }}
        onClick={handleShow}
      >
        <div className="input-container">
          <div className="input-and-svg">
            <BsFillPencilFill color="white" />
            <input
              disabled={true}
              type="text"
              placeholder="יש לרשום את פרטי המפגע"
            />
          </div>
        </div>
      </i>

      <Modal style={{ marginTop: "30vh" }} show={show} onHide={handleClose}>
        <Modal.Body>פרטי הדיווח</Modal.Body>
        <textarea type="text" autoFocus className="modal-input" />
        <Modal.Footer className="modal-btn">
          <Button variant="info" onClick={handleClose}>
            בטל
          </Button>
          <Button variant="info" onClick={handleSubmit}>
            שלח
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
