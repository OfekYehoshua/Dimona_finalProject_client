import React from "react";
import axios from "axios";
import "./Location.css";
import LocationAnimation from "./animation/LocationAnimation.json";
import { useState } from "react";
import Navtop from "../../Components/navigate/Navtop";
import BottomNav from "../../Components/navigate/BottomNav";
import Lottie from "react-lottie-player";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Location = () => {
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const [inputLocation, setInputLocation] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    location && sessionStorage.setItem("hazard-location", location);
  }, [location]);

  useEffect(() => {
    !sessionStorage.getItem("hazard") && navigate("/hazard-type");
  }, [navigate]);
  const getAddress = async (a, b) => {
    setLoading(true);
    const nearLocation = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${a},${b}&key=${process.env.REACT_APP_GOOGLE}&language=iw`
    );
    setLoading(false);
    setLocation(nearLocation.data.results[0].formatted_address);
    sessionStorage.setItem(
      "hazard-location",
      JSON.stringify(nearLocation.data.results[0].formatted_address)
    );
  };

  function getLocation() {
    setLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }
  function showPosition(position) {
    getAddress(position.coords.latitude, position.coords.longitude);
  }
  return (
    <div className="location-container">
      <Navtop title="מיקום דיווח" link="/hazard-image" />
      <div className="location-div">
        <b>מיקום נוכחי לפי GPS</b>
        <div className="location-wrapper" onClick={getLocation}>
          <Lottie loop animationData={LocationAnimation} play />
        </div>
        <div className="input-box">
          <input
            className="location-input"
            type="text"
            placeholder=" הכנס ידנית רחוב ומספר"
            onChange={(e) => setInputLocation(e.target.value)}
          />
          <Button
            variant="primary"
            onClick={() => setLocation(inputLocation)}
            style={{ marginRight: 10 }}
          >
            בצע
          </Button>
        </div>
        {location.length > 40 && (
          <b style={{ color: "red", fontWeight: 700 }}>כתובת עד 40 תווים!</b>
        )}
        {loading && <h1 className="location-text">בטעינה..</h1>}
        {!loading && location && <h1 className="location-text">{location}</h1>}
      </div>
      {(sessionStorage.getItem("hazard-location") ||  location) && <BottomNav link="/hazard-summary"></BottomNav>}
    </div>
  );
};

export default Location;
