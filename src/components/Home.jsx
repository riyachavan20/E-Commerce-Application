import React from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Home = ({ count, initialCart, initialPrice, initialpaybtn, setAll, setMan, setWoman, setJewellery, setElectronics, initialClothes }) => {
  const navigate = useNavigate();
  return (
    <div className="main">
      {/* <Link to="/about"> GO TO THE ABOUT PAGE </Link> */}
      <div className='container'>
        <div className='navbar'>
          <div className="navbar-container">
            <div class="left-btn-container">
              <button class="left-btn">React Ecommerce</button>
            </div>
            <div class="right-btn-container">
              <button onClick={() => {
                navigate("/aboutpage");
              }}>About</button>
              <button onClick={() => {
                navigate("/contactpage");
              }}>ContactUs</button>
              <button onClick={() => {
                navigate("/MyCart");
              }}>Cart 🛒<span> ({count})</span></button>
            </div>
          </div>
        </div>
        <div class="frontend-img-container">
          <img id='img1' className='img' src="src/assets/advertisementimg.png" alt="" />
          <img id='img2' className='img' src="src/assets/mens.jpg" alt="" />
        </div>
        <div className="body">
          <div className="clothesvariety">

            <h1>Latest Products</h1>
            <div className="hr">

              <hr />
            </div>
            <br />
            <div class="varieties">
              <button onClick={setAll}>All</button>
              <button onClick={setMan}>Men's Clothing</button>
              <button onClick={setWoman}>Women's Clothing</button>
              <button onClick={setJewellery}>Jewellery</button>
              <button onClick={setElectronics}>Electronics</button>
            </div>
          </div>
          {initialClothes}
        </div>
      </div>


    </div>
  );
}

export default Home