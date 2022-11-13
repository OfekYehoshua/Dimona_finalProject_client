import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Stack from 'react-bootstrap/Stack';
import Placeholder from 'react-bootstrap/Placeholder';
import axios from "axios";
import { useState, useEffect } from "react";



const AlertModal = () => {
  const [alerts, setAlerts] = useState()
  
  const fetchAlerts = async ()=>{
    try {
      const config = {
        headers: {
          Authorization: `Bearer`,
        },
      };
    const {data} = await axios.get('', config);
    setAlerts(data);

  }catch (error) {
  console.log("error");
  }
  }
  useEffect(()=>{
    fetchAlerts();
  },[])

  return (
    <Card>
    {alerts ? (
      <Stack gap={3}>
      {alerts.map((alert)=>(
    <Accordion defaultActiveKey={["0"]} alwaysOpen>
      <Accordion.Item  eventKey="0">
        <Accordion.Header>מבזק{alert.title}</Accordion.Header>
        <Accordion.Body>תוכן מבזק{alert.description}</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>מבזק</Accordion.Header>
        <Accordion.Body>תוכן מבזק</Accordion.Body>
      </Accordion.Item>
    </Accordion>
      ))}
      </Stack>
      ):(
        <p aria-hidden="true">
        <Placeholder xs={6} />
      </p>
      )}
</Card>
    
  );
};

export default AlertModal;
