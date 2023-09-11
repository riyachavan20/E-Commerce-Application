import React from 'react'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Otp = () => {
    const navigate = useNavigate();
  return (
    <div>
        <div className="otp">
            <div className="phone">

            <h3>Enter OTP sent to xxxxxxxx106</h3>
            </div>
            <div className="resend">
            <p>Didn't receive OTP?</p>
            <Link to="/otp"> resend OTP</Link>
            </div>
            <input type="password" placeholder='Enter OTP'/>
            <div className="hide"></div>
            <button
                onClick={() => {
                    navigate("/finalpage");
                }}
            >
                Submit
            </button>
        </div>
    </div>
  )
}

export default Otp