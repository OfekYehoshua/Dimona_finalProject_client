import React from 'react'
import { Button } from "react-bootstrap";
import axios from 'axios'
import './Location.css'
import { useState } from 'react';
const Location = () => {
    const [location, setLocation] = useState("")
    const [writeLocation, setWriteLocation] = useState(false)
    const getAdress =async(a,b)=>{
        const nearLocation = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${a},${b}&key=AIzaSyA09eagZpZ4rKfC1V39Au6x79HxXR441Os&language=iw`)
        console.log(nearLocation.data.results[0].formatted_address)
        setLocation(nearLocation.data.results[0].formatted_address)
        }

        function getLocation() {
            if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(showPosition);
            } else { 
             console.log("Geolocation is not supported by this browser.")
            }
          }
          function showPosition(position) {
           console.log("Latitude: " + position.coords.latitude + 
            "Longitude: " + position.coords.longitude)
            getAdress(position.coords.latitude,position.coords.longitude)
          }
  return (
    <div className='location-div' style={{width:"100vw",height:"100vh"}} >
    

       <div>
        { !writeLocation?
    <div>
    <Button onClick={()=>{getLocation()}} > מיקום נוכחי לפי gps</Button> 
    <Button onClick={()=>{setWriteLocation(true)}} >הכנס ידנית </Button> 
    </div>
    : <input type="text" placeholder='רחוב ומספר'onChange={(e)=>setLocation(e.target.value)} />
}
       </div>
       {location&& <h1>{location}</h1> }
       <div className='next-location'>
<Button size="lg" variant="info" className="btn" >
          הבא
        </Button>
        </div>
    </div>
  )
}

export default Location