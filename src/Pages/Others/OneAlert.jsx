import { Card } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import './styles.css'

const OneAlert = () => {
  const location = useLocation();
  const state = location.state;
  console.log(state)
  return (
    <div>
      <img className="alert-head-img" src={state.img} alt="img" />
      <Card className="alert-title-card">
        <h1>{state.title}</h1>
        <p>{state.subTitle}</p>
        <p style={{fontWeight:'600', fontSize:'small', textAlign:'end'}}>{state.createdAt.split("T")[0]}</p>
      </Card>
      <Card className="alert-info-card">
        <a>{state.body}</a>
      </Card>
    </div>
  );
};

export default OneAlert;
