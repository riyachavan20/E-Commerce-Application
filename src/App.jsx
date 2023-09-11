import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import OrderSummary from "./components/OrderSummary";
import PaymentPage from "./components/PaymentPage";
import Otp from "./components/Otp";
import FinalPage from "./components/FinalPage";
import Address from "./components/Address";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import MyCart from "./components/MyCart";
const products=[{ 
  id: 1,
 category: "man",
 img: <img src="src/assets/mensshirt-1.jpg" />,
 head: "blue check shirt",
 desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, illum.",
 price: 599,
 btn: <button>Add to Cart</button>
},
{
 id: 2,
 category: "man",
 img: <img src="src/assets/mensshirt-2.jpg" />,
 head: "mens formal",
 desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, illum.",
 price: 699,
 btn: <button>Add to Cart</button>
},
{
 id: 3,
 category: "man",
 img: <img src="src/assets/mensshirt-3.jpg" />,
 head: "mens casual",
 desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, illum.",
 price: 399,
 btn: <button>Add to Cart</button>
},


{
 id: 4,
 category: "woman",
 img: <img src="src/assets/womenstops-1.jpg" />,
 head: "womens casual",
 desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, illum.",
 price: 499,
 btn: <button>Add to Cart</button>
},
{
 id: 5,
 category: "woman",
 img: <img src="src/assets/womenstops-2.jpg" />,
 head: "womens casual orange",
 desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, illum.",
 price: 799,
 btn: <button>Add to Cart</button>
},
{
 id: 6,
 category: "woman",
 img: <img src="src/assets/womenstops-3.jpg" />,
 head: "womens formal",
 desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, illum.",
 price:999,
 btn: <button>Add to Cart</button>
},

{
 id: 7,
 category: "jewellery",
 img: <img src="src/assets/jewellery-1.jpg" />,
 head: "necklace set",
 desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, illum.",
 price: 3999,
 btn: <button>Add to Cart</button>
},
{
 id: 8,
 category: "jewellery",
 img: <img src="src/assets/jewellery-2.jpg" />,
 head: "bangles",
 desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, illum.",
 price: 2999,
 btn: <button>Add to Cart</button>
},
{
 id: 9,
 category: "jewellery",
 img: <img src="src/assets/jewellery-3.jpg" />,
 head: "asthetic earings",
 desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, illum.",
 price: 1999,
 btn: <button>Add to Cart</button>
},

{
 id: 10,
 category: "electronics",
 img: <img src="src/assets/electronics-1.jpg" />,
 head: "SanDisk SSD",
 desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, illum.",
 price: 1599,
 btn: <button>Add to Cart</button>
},
{
 id: 11,
 category: "electronics",
 img: <img src="src/assets/electronics-2.jpg" />,
 head: "Acer SB220Q",
 desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, illum.",
 price: 49999,
 btn: <button>Add to Cart</button>
},
{
 id: 12,
 category: "electronics",
 img: <img src="src/assets/electronics-3.jpg" />,
 head: "Samsung 49-I",
 desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, illum.",
 price: 69999,
 btn: <button>Add to Cart</button>
}]
const paybtn=[{btn:<button>Proceed to payment</button>}]

function App() {
  const[count,setCount]=useState(0);
const changeCount=()=>{
  setCount((count)=>count+1)
}
const [initialPrice,totalPrice]=useState(0);
const changePrice=(price)=>{
  totalPrice((initialPrice)=>initialPrice+price)
}
const[totalamt,totalamtupdated]=useState(200);
const changeTotal=(price)=>{
totalamtupdated((totalamt)=>totalamt+price)
}
const[initialCart,updatedCart]=useState([]);
const render=(id)=>{
  const render1=products.filter((ele)=>ele.id===id)
  const showSelected=render1.map(items=>
    <>
      <p>{items.img}</p>
      <p>{items.head}</p>
      <p>{items.desc}</p>
      <p>{items.price}</p>
      
    </>
  )
  updatedCart(showSelected)
}

  const arrayDataItems = products.map(items => 
    <>
      <p>{items.img}</p>
      <p>{items.head}</p>
      <p>{items.desc}</p>
      <p>{items.price}</p>
      <button className="outerbtn" onClick={() => { changeCount(); render(items.id);changepaybtn();changeText();changePrice(items.price);changeTotal(items.price);}} type="button">{items.btn}</button>
      {/* <button onClick={changeCount} type="button">{items.btn}</button> */}
    </>
  )
  const filterMan=products.filter((ele)=>ele.category==="man")
  const showMan=filterMan.map(items=>
    <>
      <p>{items.img}</p>
      <p>{items.head}</p>
      <p>{items.desc}</p>
      <p>{items.price}</p>
      <button className="outerbtn" onClick={() => { changeCount(); render(items.id);changepaybtn();changeText();changePrice(items.price);changeTotal(items.price);}} type="button">{items.btn}</button>
      {/* <button onClick={changeCount} type="button">{items.btn}</button> */}
      
    </>
  )
  const filterWoman=products.filter((ele)=>ele.category==="woman")
  const showWoman=filterWoman.map(items=>
    <>
      <p>{items.img}</p>
      <p>{items.head}</p>
      <p>{items.desc}</p>
      <p>{items.price}</p>
      <button className="outerbtn" onClick={() => { changeCount(); render(items.id);changepaybtn();changeText();changePrice(items.price);changeTotal(items.price);}} type="button">{items.btn}</button>
      {/* <button onClick={changeCount} type="button">{items.btn}</button> */}
      
    </>
  )
  const filterJewellery=products.filter((ele)=>ele.category==="jewellery")
  const showJewellery=filterJewellery.map(items=>
    <>
      <p>{items.img}</p>
      <p>{items.head}</p>
      <p>{items.desc}</p>
      <p>{items.price}</p>
      <button className="outerbtn" onClick={() => { changeCount(); render(items.id);changepaybtn();changeText();changePrice(items.price);changeTotal(items.price);}} type="button">{items.btn}</button>
      {/* <button onClick={changeCount} type="button">{items.btn}</button> */}
      
    </>
  )
  const filterElectronics=products.filter((ele)=>ele.category==="electronics")
  const showElectronics=filterElectronics.map(items=>
    <>
      <p>{items.img}</p>
      <p>{items.head}</p>
      <p>{items.desc}</p>
      <p>{items.price}</p>
      <button className="outerbtn" onClick={() => { changeCount(); render(items.id);changepaybtn();changeText();changePrice(items.price);changeTotal(items.price);}} type="button">{items.btn}</button>
      {/* <button onClick={changeCount} type="button">{items.btn}</button> */}
      
    </>
  )
const[initialClothes,updatedClothes]=useState(arrayDataItems)
const[category,setCategory]=useState("All");
const setAll=()=>{
  setCategory("All");
  updatedClothes(arrayDataItems)
}

const setMan=()=>{
  setCategory("Man");
  updatedClothes(showMan)
}
const setWoman=()=>{
  setCategory("Woman");
  updatedClothes(showWoman)
}
const setJewellery=()=>{
  setCategory("Jewellery");
  updatedClothes(showJewellery)
}
const setElectronics=()=>{
  setCategory("Electronics");
  updatedClothes(showElectronics)
}
const getpaybtn = paybtn.map(items => 
  <>
    <button  className="outerbtn"  type="button">{items.btn}</button>
  </>
)
const [initialpaybtn,updatedpaybtn]=useState([])
const changepaybtn=()=>{
    updatedpaybtn((initialpaybtn)=>getpaybtn)
}
const deleteCount=()=>{
  setCount(0)
}
const deleteCart=()=>{
  updatedCart([])
}
const deletePrice=()=>{
  totalPrice(0)
}
const deletePaybtn=()=>{
  updatedpaybtn([])
}
const[text,setText]=useState([]);
const changeText=()=>{
setText("Your latest selected product is")
}
  return(
    <>
<Router>
        <Routes>
          <Route path="/" element={<Home count={count}
initialCart={initialCart}
initialPrice={initialPrice}
initialpaybtn={initialpaybtn}
setAll={setAll}
setMan={setMan}
setWoman={setWoman}
setJewellery={setJewellery}
setElectronics={setElectronics}
initialClothes={initialClothes} />} />
          <Route path="/OrderSummary" element={<OrderSummary initialCart={initialCart} 
          count={count}
          initialPrice={initialPrice}
          totalPrice={totalamt}
           />} />
          <Route path="/PaymentPage" element={<PaymentPage />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/finalpage" element={<FinalPage 
          deleteCount={deleteCount}
          deleteCart={deleteCart}
          deletePrice={deletePrice}
          deletePaybtn={deletePaybtn}
          resetCategory={setAll} />} />
          <Route path="/address" element={<Address />} />
          <Route path="/aboutpage" element={<AboutPage
          setMan={setMan}
          setWoman={setWoman}
          setJewellery={setJewellery}
          setElectronics={setElectronics} />} />
          <Route path="/contactpage" element={<ContactPage/>} />
          <Route path="/MyCart" element={<MyCart
          initialCart={initialCart}
          initialPrice={initialPrice}
          initialpaybtn={initialpaybtn}
          setText={text}/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;