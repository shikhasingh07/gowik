import React, { useState } from 'react'

const Upi = () => {
  let { amount, phoneNumber } = JSON.parse(localStorage.getItem('payment'));
  const [phone, setPhone] = useState(phoneNumber);
  const getMobileOS = () => {
    const ua = navigator.userAgent
    if (/android/i.test(ua)) {
      return "Android"
    }
    else if (/iPad|iPhone|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) {
      return "iOS"
    }
    return "Other"
  }

  let showBtn = getMobileOS();
  let show = function () {
    if (showBtn === "iOS") {
      return <>IOS</>
    } else if (showBtn === "Android") {
      return <>Android</>
    } else {
      return <><p>Please Open With Mobile devices For Billing</p></>
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hey")
  }
  return (
    <>
      <div className='paymentG'>
        <img height="34px" src="https://mamaearthp.imgix.net/wysiwyg/mamaearth-logo.png?auto=format&fit=scale" alt="brand" />
        <div>Amount to pay : </div>
        <div className='showForm'>
          <div>
            {show()}
          </div>
          <div>
            <p className="orBtn">Or</p>
          </div>
          <div>
            <p>Get Payment Link</p>
            <p>You will get a payment link on</p>
            <form onSubmit={handleSubmit} className="payMentInput" >
              <input value={phone} onChange={(e) => setPhone(e.target.value)} name="phones" className="phoneInput" />
              <button type="submit" className="pay-btn" >Send</button>
            </form>
          </div>
        </div>
        <div className="phoneUpdate">
          <div>
            <p>
              Get WhatsApp and SMS Update
            </p>
            <p className="">Click on this to turn off updatse</p>
          </div>
          <input type="radio" />
        </div>
        <div className="imgCon footerCon">
          <p className='footerItem'>Powered By</p>
          <img className="headerItem" src="https://images.yourstory.com/cs/images/companies/-9s6YF4Z400x400-1618482843242.jpg?fm=auto&ar=1:1&mode=fill&fill=solid&fill-color=fff&w=150&h=150" alt="imgGokwik" />
          <h6 className="headerGo"> GoKwik</h6>
        </div>
      </div>
    </>
  )
}

export default Upi
