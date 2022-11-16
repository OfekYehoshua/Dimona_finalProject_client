import React from "react";
import { Button } from "react-bootstrap";
import "./BottomNav.css";
import { useNavigate } from "react-router-dom";
const BottomNav = ({ link, allImages }) => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate(link);
    allImages &&
      sessionStorage.setItem("hazard-images", JSON.stringify({ allImages }));
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
