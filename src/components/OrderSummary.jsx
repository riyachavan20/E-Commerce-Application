import React from "react";
import { useNavigate } from "react-router-dom";

function OrderSummary({ initialCart, count, initialPrice, totalPrice }) {
  const navigate = useNavigate();
  return (

    <div>

      <h1>Order Summary</h1>
      {initialCart}
      <div className="order">
        <div className="summary">

          <h4>Products <span>({count})</span></h4>
          <h4>Rs. {initialPrice}</h4>
        </div>
        <div className="summary">
          <h4>Shipping Charges</h4>
          <h4>+ Rs. 200</h4>
        </div>
        <div className="summary">

          <h4>Total amount</h4>
          <h4>Rs. {totalPrice}</h4>
        </div>
      </div>

      <button
        onClick={() => {
          navigate("/PaymentPage");
        }}
      >
        {" "}
        Pay Now
      </button>
      <button
        onClick={() => {
          navigate("/address");
        }}
      >
        {" "}
        Pay after Delivery
      </button>
      <div className="return">
        <button onClick={() => {
          navigate("/MyCart");
        }} type="button">Go back
        </button>
        <button onClick={() => {
          navigate("/");
        }} type="button">Go to Home page
        </button>
      </div>
    </div>
  );
}

export default OrderSummary;