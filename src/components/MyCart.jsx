import React from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const MyCart = ({initialCart,initialPrice,initialpaybtn,setText}) => {
    const navigate = useNavigate();
  return (
    <div>
        <h1>{setText}</h1>
        <div className="displaySelected">
            {initialCart}
          </div>
          <div className="displayPrice">
            <h4>Your grand total is Rs {initialPrice}</h4>
          </div>
          <Link to="/OrderSummary">{initialpaybtn}</Link>
          <div className="return">

          <button
                onClick={() => {
                    navigate("/");
                }}
            >
                Go back
            </button>
          </div>
    </div>
  )
}

export default MyCart