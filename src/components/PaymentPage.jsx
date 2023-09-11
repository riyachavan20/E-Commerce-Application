import React from "react";
import { useNavigate } from "react-router-dom";
function PaymentPage() {
    const navigate = useNavigate();

    return (
        <div>
            <h2>Payment</h2>
            <div className="payment">
            <p>Credit card number</p>
            <input type="text" name="" id="" />
            </div>
            <div className="payment">

            <div className="paymentDetails">
                <div className="expiry">
                    <p>Expiration</p>
                    <input type="month" name="" id="" />
                </div>
                <div className="cvv">
                    <p>CVV</p>
                    <input type="password" name="" id="" />
                </div>
            </div>
            </div>
            <div className="payment">
            <p>Name on card</p>

            <input type="text" name="" id="" />

            <p>Full name as displayed on card</p>
            </div>
            {/* <div className="hide"></div> */}
            <button
                onClick={() => {
                    navigate("/otp");
                }}
            >
                Get OTP
            </button>
            <div className="return">
                <button onClick={() => {
                    navigate("/OrderSummary");
                }} type="button">Go back</button>
                <button onClick={() => {
                    navigate("/");
                }} type="button">Go to the home page</button>
            </div>
        </div>
    );
}

export default PaymentPage;