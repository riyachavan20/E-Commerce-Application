import React from 'react'
import { useNavigate } from "react-router-dom";
const AboutPage = ({ setMan, setWoman, setJewellery, setElectronics }) => {
    const navigate = useNavigate();
    return (
        <>
            <div className="container">
                <h1 >About Us</h1>
                <div className="hr">

                    <hr />
                </div>
                <p className="para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                    facere doloremque veritatis odit similique sequi. Odit amet fuga nam
                    quam quasi facilis sed doloremque saepe sint perspiciatis explicabo
                    totam vero quas provident ipsam, veritatis nostrum velit quos
                    recusandae est mollitia esse fugit dolore laudantium. Ex vel explicabo
                    earum unde eligendi autem praesentium, doloremque distinctio nesciunt
                    porro tempore quis eaque labore voluptatibus ea necessitatibus
                    exercitationem tempora molestias. Ad consequuntur veniam sequi ullam
                    tempore vel tenetur soluta dolore sunt maxime aliquam corporis est,
                    quo saepe dolorem optio minus sint nemo totam dolorum! Reprehenderit
                    delectus expedita a alias nam recusandae illo debitis repellat libero,
                    quasi explicabo molestiae saepe, dolorem tempore itaque eveniet quam
                    dignissimos blanditiis excepturi harum numquam vel nihil? Ipsum
                </p>
                <div className="ourproducts">

                    <h2>Our Products</h2>
                </div>
                <div className="name">
                    <div>
                    <button onClick={() => {
                                navigate("/");
                            }} type="button">

                        <button onClick={setMan} type="button">

                            <img src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
                            <div >
                                <h5 >Mens</h5>
                            </div>
                        </button>
                        </button>
                    </div>
                    <div>
                    <button onClick={() => {
                                navigate("/");
                            }} type="button">

                        <button onClick={setWoman} type="button">

                            <img src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
                            <div >
                                <h5 >Womens</h5>
                            </div>
                        </button>
                        </button>
                    </div>
                    <div>
                    <button onClick={() => {
                                navigate("/");
                            }} type="button">

                        <button onClick={setJewellery} type="button">

                            <img src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
                            <div >
                                <h5 >Jewellery</h5>
                            </div>
                        </button>
                        </button>
                    </div>
                    <div >
                        <button onClick={() => {
                                navigate("/");
                            }} type="button">

                        <button onClick={setElectronics} type="button">

                            <img src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
                            <div >
                                <h5 >Electronics</h5>
                            </div>
                        </button>
                        </button>
                    </div>
                </div>
                <button
                    onClick={() => {
                        navigate("/");
                    }}
                >
                    Go to Home Page
                </button>
            </div>
        </>
    )
}

export default AboutPage