import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Signup from '../../Components/register/Signup';
import Login from '../../Components/register/Login'

const Register = () => {
  return (
<Tabs
defaultActiveKey="הרשמה"
id="uncontrolled-tab-example"
className="mb-3"
>
<Tab variant='black||white' eventKey="הרשמה" title="הרשמה">
  <Signup />
</Tab>
<Tab eventKey="התחברות" title="התחברות">
  <Login />
</Tab>
</Tabs>
  )
}

export default Register