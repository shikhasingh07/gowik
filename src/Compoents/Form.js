import React from 'react'
import { useState } from "react";
import { useHistory } from "react-router";
// import Upi from "./Upi";
// import axios from 'axios';
import "./style.css";
const Form = ({ payment, setPayment }) => {
  const history = useHistory();
  const [postData, setData] = useState({
    address: "",
    name: '',
    phoneNumber: '',
    email: ''
  });


  const [senddata, setSendData] = useState({
    amount: "",
    phoneNumber: ""
  });

  const handlesubmit = (e) => {
    e.preventDefault();
    // if (postData.phoneNumber.length === 10 && payment.amount.length > 1) {
    setSendData({ ...senddata, amount: payment.amount });
    setSendData({ ...senddata, phoneNumber: postData.phoneNumber })
    if (payment.orderType === "UPI") {
      history.push("/Upi");
      localStorage.setItem("payment", JSON.stringify({ ...senddata, amount: payment.amount, phoneNumber: postData.phoneNumber }))
    } else if (payment.orderType === "COD") {
      history.push("/Cod");
    }

    // axios.post("http://127.0.0.1:8080/send", senddata);
    // } else {
    //   alert("Please Provide correct Output")
    // }
  };

  return (
    <>
      <form onSubmit={handlesubmit} className='conatinerForm'>
        <label>Name</label>
        <input type="text" value={postData.name} name="name" onChange={(e) => setData({ ...postData, name: e.target.value })} />
        <label>Address</label>
        <input type="text" value={postData.address} name="address" onChange={(e) => setData({ ...postData, address: e.target.value })} />
        <label>Email</label>
        <input type="text" value={postData.email} name="email" onChange={(e) => setData({ ...postData, email: e.target.value })} />
        <label>Phone Number</label>
        <input type="number" value={postData.phoneNumber} name="phoneNumber" onChange={(e) => setData({ ...postData, phoneNumber: e.target.value })} />
        <label>Amount</label>
        <input type="number" value={payment.amount} name="amount" onChange={(e) => setPayment({ ...payment, amount: e.target.value })} />
        <div className="radioInput">
          <label>COD
            <input type="radio" value="COD" name="orderType" onChange={(e) => setPayment({ ...payment, orderType: e.target.value })} />
          </label>
          <label>UPI
            <input type="radio" value="UPI" name="orderType" onChange={(e) => setPayment({ ...payment, orderType: e.target.value })} />
          </label>
        </div>
        <button type="submit" className='btn'>Submit</button>
      </form>
    </>
  )
}

export default Form
