import { useEffect,useState } from 'react';
import Lottie from "react-lottie-player";
import ReportAnimation from '../../animations/report animation.json'
import axios from 'axios';
import './modalStyles.css'

const AlertModal = () => {
  const [alert, setAlert]= useState()

const fetchAlert = async ()=>{
 
    try {
        const config = {
            headers: {
              Authorization: `Bearer`,
            }};

        const {data} = await axios.get('', config);
        setAlert(data)
    } catch (error) {
        console.log("error");
    }
}
useEffect(()=>{
    fetchAlert();
},[])

  return (
    <>
    {alert?(<>
    {alert.map((alert)=>
    ( 
    <div className='alert-container'>
    <h1 className='alert-title'>{alert.title}כותרת</h1>
    <p className='alert-description'>{alert.description}תיאור</p>
    <span className='alert date'>{alert.date}תאריך</span>
  </div>
  ))}
    </>):(<>
      <Lottie
    loop
    animationData={ReportAnimation}
    play
    style={{ width: 400, height: 600 }}
  />
    </>)}
    </>
    )}

export default AlertModal