import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Lottie from "react-lottie-player";
import ReportAnimation from '../../animations/report animation.json'
import axios from 'axios';
import Card from "react-bootstrap/Card";
import './modalStyles.css'


const ReportModal = () => {
const [report, setReport]= useState()

const fetchReports = async ()=>{
 
    try {
        const config = {
            headers: {
              Authorization: `Bearer`,
            }};
        const {data} = await axios.get('', config);
        setReport(data)
    } catch (error) {
        console.log("error");
    }
}
useEffect(()=>{
    fetchReports();
},[])

  return (
    <div>
  
    {report?(    
  <ListGroup.Item>
  {report.map((report)=>(
    <Card id='report-card'>
    <ListGroup >
   <h1>{report.title}</h1>
   <span>{report.status}</span>
   <span>{report.date}</span> 
   </ListGroup>
  </Card>
   ))}
   </ListGroup.Item> 
   
  ):(
    <div id='animation'>
    <p id='line'>אין לך דיווחים שהגשת</p>
    <Lottie
    loop
    animationData={ReportAnimation}
    play
    style={{ width: 400, height: 600 }}
  />
  </div>
  )}

  </div>
  
  )
  
}

export default ReportModal