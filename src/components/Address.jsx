import React from 'react'
import { useNavigate } from "react-router-dom";
const Address = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h2>Address</h2>
            <form action="" method="post">

                <div className="name">
                    <div className="fname">
                        First Name
                        <input type="text" required />
                    </div>
                    <div className="lname">
                        Last Name<input type="text" required />
                    </div>
                </div>
                <div className="name">
                    <div className="fname">Email <input type="email" name="" id="" placeholder='you&example.com' required /></div>
                    <div className="lname">Alternate Email (optional)<input type="email" name="" id="" placeholder='you&example.com' /></div>
                </div>
                <div className="name">
                    Address 1
                    <textarea name="Address" id="Address" cols="100" rows="10" placeholder="enter your Address" required></textarea>
                </div>
                <div className="name">
                    Address 2 (optional)
                    <textarea name="Address" id="Address" cols="100" rows="10" placeholder="enter your Address" required></textarea>
                </div>
                <div className="name">
                    <div className="fname">Country<input type="text" required /></div>
                    <div className="lname">State<input type="text" required /></div>
                    <div className="lname">Zip<input type="text" required /></div>
                </div>
            </form>
            <div className="submit"><button onClick={() => {
                navigate("/finalpage");
            }} type="button">Submit</button></div>
            <div className="msg">

                <h4>Your product would be delivered within 14-15 days</h4>
            </div>
            <div className="return">
                <button onClick={() => {
                    navigate("/OrderSummary");
                }} type="button">Go back</button>
                <button onClick={() => {
                    navigate("/");
                }} type="button">Go to the home page</button>
            </div>
        </div>
    )
}

export default Address