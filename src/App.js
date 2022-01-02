import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useState } from "react";
import Form from './Compoents/Form';
import Upi from './Compoents/Upi';
import Cod from './Compoents/Cod';
function App() {

  const [payment, setPayment] = useState({
    orderType: "",
    amount: ''
  });

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" >
            <Form payment={payment} setPayment={setPayment} />
          </Route>
          {payment.orderType === "UPI" && <Route path="/Upi" component={Upi} />}
          {payment.orderType === "COD" && <Route path="/Cod" component={Cod} />}
        </Switch>
      </Router>
    </>
  );
}

export default App;
