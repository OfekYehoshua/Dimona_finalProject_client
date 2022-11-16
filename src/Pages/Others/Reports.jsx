
import ReportModal from "../../Components/Modals/reportModal";
import './styles.css'
import Drawer from '../../Components/navigate/drawer';

const Report = () => {
  return (
    <div id="report-container">
<Drawer/>
      <h1 id="report-header">הדיווחים שלי</h1>
          <ReportModal />       
    </div>
  );
};

export default Report;
