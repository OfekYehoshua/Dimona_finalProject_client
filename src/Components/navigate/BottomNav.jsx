import React from "react";
import { Button } from "react-bootstrap";
import "./BottomNav.css";
import { useNavigate } from "react-router-dom";
const BottomNav = ({ link }) => {
  const navigate = useNavigate();
  return (
    <div className="next">
      <Button
        onClick={() => navigate(link)}
        size="lg"
        variant="info"
        className="btn"
      >
        הבא
      </Button>
    </div>
  );
};

export default BottomNav;
