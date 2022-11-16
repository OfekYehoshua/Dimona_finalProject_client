import React from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import "./Location.css";
import LocationAnimation from "./animation/LocationAnimation.json";
import { useState } from "react";
import Navtop from "../../Components/navigate/Navtop";
import BottomNav from "../../Components/navigate/BottomNav";
import Lottie from "react-lottie-player";
import { useEffect } from "react";
const Location = () => {
  const [location, setLocation] = useState("");
  useEffect(() => {
    sessionStorage.setItem("location", location);
  }, [location]);

  const getAdress = async (a, b) => {
    const nearLocation = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${a},${b}&key=AIzaSyA09eagZpZ4rKfC1V39Au6x79HxXR441Os&language=iw`
    );
    console.log(nearLocation.data.results[0].formatted_address);
    setLocation(nearLocation.data.results[0].formatted_address);
    sessionStorage.setItem(
      "location",
      nearLocation.data.results[0].formatted_address
    );
  };

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }
  function showPosition(position) {
    console.log(
      "Latitude: " +
        position.coords.latitude +
        "Longitude: " +
        position.coords.longitude
    );
    getAdress(position.coords.latitude, position.coords.longitude);
  }
  return (
    // className='location-div' style={{width:"100vw",height:"100vh"}}
    <div>
      <Navtop></Navtop>

      <div className="location-div">
        <div>
          <Button
            onClick={() => {
              getLocation();
            }}
          >
            מיקום נוכחי לפי gps
          </Button>
          <Lottie
            loop
            animationData={LocationAnimation}
            play
            style={{ width: 100, height: 100, marginRight: "6vw" }}
          />
          <br />
          <br />
        </div>
        <input
          type="text"
          placeholder=" הכנס ידנית רחוב ומספר"
          onChange={(e) => setLocation(e.target.value)}
        />
        {location && <h1>{location}</h1>}
      </div>

      <BottomNav></BottomNav>
    </div>
  );
};

export default Location;
