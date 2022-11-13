import Video from './background.mp4'
import './homeStyle.css'
import Button from 'react-bootstrap/Button';
import AlertModal from '../../Components/Alerts/alertModal';
import Drawer from '../../Components/navigate/drawer';

const Home = () => {
  return (
    <div id='container'>
{/* <video id="background-video" controls autoPlay loop muted>
      <source src={Video} type="video/mp4"/>
      <div id='inside'>hello</div>
</video> */}
<h1>עיריית דימונה</h1>
<h2>שלום</h2>
<Button>
  דיווח למוקד העירייה
</Button>
{/* <AlertModal/> */}
<Drawer/>
</div>
  );
};

export default Home;
