import React from "react";
import { Button } from "react-bootstrap";
import "./BottomNav.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BottomNav = ({
  link,
  allImages,
  last,
  location,
  body,
  profession,
  img,
}) => {
  const navigate = useNavigate();
  const handleNext = async () => {
    if (!last) {
      navigate(link);
      allImages &&
        sessionStorage.setItem("hazard-images", JSON.stringify({ allImages }));
    } else {
      if (localStorage.getItem("UserLogged")) {
        const user = JSON.parse(localStorage.getItem("UserLogged"));
        const newHazard = {
          location,
          body,
          profession,
          img,
          status: "לא בוצע",
          phone: user.phone,
          _uid: user._id,
        };
        await axios
          .post("https://dimona-api.cyclic.app/api/hazards", newHazard)
          .then((res) => console.log(res.data));
        // navigate("/");
      } else navigate("/register");
    }
  };

  return (
    <div className="next">
      <Button onClick={handleNext} size="lg" variant="info" className="btn">
        הבא
      </Button>
    </div>
  );
};

export default BottomNav;
