import { Card } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import './reportStyle.css'

const OneReport = () => {
  const location = useLocation();
  const state = location.state;
  console.log(state)
  return (
    <div> 
      <img className="alert-head-img" src={state.img} alt="img" />
      <Card className="alert-title-card">
        <h1>{state.profession}</h1>
        <p>{state.location}</p>
        <p>{state.status}</p>
        <p style={{fontWeight:'600', fontSize:'small', textAlign:'end'}}>{state.createdAt.split("T")[0]}</p>
      </Card>
      <Card className="alert-info-card">
        <p>{state.body}</p>
      </Card>
    </div>
  );
};

export default OneReport;