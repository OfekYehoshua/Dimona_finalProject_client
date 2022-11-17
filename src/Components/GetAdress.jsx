import React from 'react'
import axios from 'axios'
const GetAdress = () => {
    const mapUrl = "https://www.google.com/maps/dir/?api=1&destination=מגדלאולימפיה,RamatGan,TA,Israel"
  const getAdress =async(a,b)=>{

    // const params = {
    //     access_key: '7c00e12af94c5b15f2d98b394e173553',
    //     query: `${a},${b}`,
    //     country_module : 1
    //   }
    //   axios.get(`http://api.positionstack.com/v1/reverse`,{params})
    //     .then(response => {
    //       console.log(response);
    //     }).catch(error => {
    //       console.log(error);
    //     });

  const nearLocation = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${a},${b}&key=AIzaSyA09eagZpZ4rKfC1V39Au6x79HxXR441Os&language=iw`)
  console.log(nearLocation.data.results[0]);

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
    <div>
      <button onClick={()=>{getLocation()}}>Use geo location</button>

    </div>
  )
}

export default GetAdress

// AIzaSyA09eagZpZ4rKfC1V39Au6x79HxXR441Os