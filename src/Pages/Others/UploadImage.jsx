import React from "react";
// import Drawer from "../../Components/navigate/drawer";
import upload from "../../animations/5705-camera.json";
import Lottie from "react-lottie-player";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const UploadImage = () => {
  const [allImages, setAllImages] = useState([]);
  const [selectedBig, setSelectedBig] = useState(0);
  const [selectedImg, setSelectedImg] = useState("");
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    setSelectedImg("");
  };

  const handleSubmit = () => {
    setAllImages([...allImages, selectedImg]);
    handleClose();
  };

  useEffect(() => {
    const getSelectedImg = async () => {
      if (
        selectedImg.type === "image/jpeg" ||
        selectedImg.type === "image/png"
      ) {
        const formData = new FormData();
        formData.append("file", selectedImg);
        formData.append("upload_preset", "dimona-citizen-app");
        setLoading(true);
        await axios
          .post(
            "https://api.cloudinary.com/v1_1/ofekyehoshua/image/upload",
            formData
          )
          .then((res) => setSelectedImg(res.data.secure_url))
          .catch((err) => {
            console.log(err);
          });
        setLoading(false);
      }
    };
    getSelectedImg();
  }, [selectedImg]);

  return (
    <div id="image-container">
      {allImages.length === 0 ? (
        <>
          <h1>הוסף תמונה</h1>
          <Button variant="ghost" onClick={handleShow}>
            <Lottie
              loop
              animationData={upload}
              play
              style={{ width: 300, height: 300 }}
            />
          </Button>
        </>
      ) : (
        <>
          <img src={allImages[selectedBig]} alt="" width={300} height={300} />
          {allImages.map(
            (img, index) =>
              index < 4 && (
                <img
                  className={
                    index === selectedBig ? "mapped-img selected" : "mapped-img"
                  }
                  key={index}
                  src={img}
                  alt=""
                  onClick={() => setSelectedBig(index)}
                  width={75}
                  height={75}
                />
              )
          )}
          {allImages.length < 4 && (
            <Button variant="info" onClick={handleShow}>
              הוסף עוד תמונה
            </Button>
          )}
          {allImages.length > 0 && (
            <>
            <div className="next">
            <NavLink to={"/"}>
              <Button size="lg" variant="info" >הבא</Button>
            </NavLink>
            </div>
            <div className="previous">
            <NavLink to={"/"}>
              <Button size="lg" bgvariant="second" >הקודם</Button>
            </NavLink>
            </div>
            </>
          )}
        </>
      )}

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header>
          <Modal.Title>בחר קובץ</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="formFile" className="mb-3">
            <input
              type="file"
              accept="application/pdf, image/png"
              onChange={(e) => setSelectedImg(e.target.files[0])}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            סגור
          </Button>
          <Button
            variant="info"
            disabled={loading || selectedImg.length === 0}
            onClick={handleSubmit}
          >
            הוסף
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UploadImage;
