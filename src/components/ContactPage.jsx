import React from "react";
import { useNavigate } from "react-router-dom";
const ContactPage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="head">

                <h1 className="text-center">Contact Us</h1>
                <div className="hr">

                <hr />
                </div>
            </div>
            <div className="info">
                <div className="same">
                    Name
                    <input type="text" />
                </div>
                <div className="same">
                    Email
                    <input type="email" name="" id="" placeholder="you@example.com" />
                </div>
                <div className="same">
                    Message
                    <textarea name="Address" id="Address" cols="25" rows="6" placeholder="enter your Address" required></textarea>
                </div>
            </div>
            <div className="return">

                <button
                    onClick={() => {
                        navigate("/");
                    }}
                >
                    Go to Home Page
                </button>
            </div>
        </div>
    );
};

export default ContactPage;