import React from 'react'
import { useNavigate } from "react-router-dom";
const FinalPage = ({deleteCount,deleteCart,deletePrice,deletePaybtn,resetCategory}) => {
    const navigate = useNavigate();
  return (
    <div>
        <h1>Your order has been placed</h1>  
        <h1>Thank You for shopping with us!!</h1>  
        <div className="rate"><h3>How was your Experience</h3></div>
        <button type="button">🤩</button>
        <button type="button">🙂</button>
        <button type="button">😐</button>
        <button  type="button">😕</button>
        <button  type="button">🤯</button>
        {deletePaybtn}
        <div className="rate"><h3>Spare a moment to rate us</h3></div>
        <button onClick={deleteCount} type="button"><img className='star' src="src/assets/star.jpg" alt="" /></button>
        <button onClick={deleteCart} type="button"><img className='star' src="src/assets/star.jpg" alt="" /></button>
        <button onClick={deletePrice} type="button"><img className='star' src="src/assets/star.jpg" alt="" /></button>
        <button onClick={deletePaybtn} type="button"><img className='star' src="src/assets/star.jpg" alt="" /></button>
        <button onClick={resetCategory} type="button"><img className='star' src="src/assets/star.jpg" alt="" /></button>
        <div className="hide"></div>
        <button
                onClick={() => {
                    navigate("/");
                }}
            >
                <div className="return">
                Return to Home Page
                </div>
            </button>
    </div>
    
  )
}

export default FinalPage