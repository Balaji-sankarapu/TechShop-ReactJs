import React, { useState,useEffect } from "react";
import jbl660nc from '../assets/jbl660nc-1.png'
import boat518 from '../assets/boat518-1.png'
import boat131 from '../assets/boat131-1.png'
import boat110 from '../assets/boat110-1.png'
import '../modulecss/productdetails.css'
import '../data/data'
import { IoStarSharp } from "react-icons/io5";
import { useParams } from "react-router-dom";
import products from "../data/data";

export default function ProductDetails() {
  const[data,setData]=useState({});
  const{id}=useParams();
  useEffect(() => {
    // Find product by ID from local data
    const product = products.find((item) => item.id === parseInt(id));
    setData(product);
  }, [id]);

  if (!data) {
    return <h2>Product not found!</h2>;
  }
  return(
    <div className="bg-dark" >
      <div class="prod-cont">
        <div>
          <img class="horiz-images" src={data.images[0]} alt={data.title} />
          <br />
          <img class="horiz-images" src={data.images[1]} alt={data.title} />
          <br />
          <img class="horiz-images" src={data.images[2]} alt={data.title} />
          <br />
          <img class="horiz-images" src={data.images[3]} alt={data.title} />
        </div>
        <div>
          <img
            style={{ width: "700px" }}
            src={data.heroImage}
            alt={data.title}
          />
        </div>
        <div style={{ width: "500px", marginLeft: "150px" }}>
          <h3 style={{color:"white"}}>{data.title}</h3>
          <p>{data.info}</p>
          <span style={{display:"flex"}}>
            <div style={{ color: "#ff9500", display: "flex", gap: "3px",marginTop:"5px" }}>
              {[...Array(data.rateCount)].map((_, i) => (
                <IoStarSharp style={{ color: "#ff4500" }} key={i} />
              ))}
            </div>
            <div style={{color:"white", marginLeft:"5px"}}> | 1234 Ratings</div>
          </span>
          <hr style={{ width: "100%" }} />
          <div class="product-deta">
            <div>
              <p id="prod-price" class="card-text">₹{data.finalPrice}</p>
              <p class="card-text">₹{data.originalPrice} </p>
              <br />
              <p class="prod-off">You save: {data.originalPrice-data.finalPrice} ({Math.floor(((data.originalPrice-data.finalPrice)/(data.originalPrice))*100)}%) </p>
              <p>(Inclusive of all taxes)</p>
            </div>
            <div>
              <button class="but">
                <i class="fa-solid fa-check fa-sm"></i>
                <strong>In Stock</strong>
              </button>
            </div>
          </div>
          <hr style={{ width: "100%",color:"white" }} />
          <br />
          <h3 style={{color:"white"}}>Offers And Discounts</h3>
          <br />
          <div style={{ display: "flex", gap: "0 20px" }}>
            <p class="prod-spec">No Cost EMI on Credit Card</p>
            <p class="prod-spec">Pay Later & Avail Cashback</p>
          </div>
          <hr style={{ width: "100%",color:"white" }} />
          <button class="prod-cartbutt">Add to Cart</button>
        </div>
      </div>

      <div>
        <a class="prod-list" href="">
          <p id="Specif" class="Prod-Speci">
            Specifications
          </p>
          <p class="Prod-Speci">Overview</p>
          <p class="Prod-Speci">Reviews</p>
        </a>
      </div>

      <div style={{ margin: "30px" }}>
        <div class="item-speci">
          <h5 style={{ fontWeight: "300",color:"white" }}>Brand</h5>
          <h5 style={{ fontWeight: "300",color:"white" }}>{data.brand}</h5>
        </div>
        <div class="item-speci">
          <h5 style={{ fontWeight: "300",color:"white" }}>Model</h5>
          <h5 style={{ fontWeight: "300",color:"white" }}>{data.title}</h5>
        </div>
        <div class="item-speci">
          <h5 style={{ fontWeight: "300",color:"white" }}>Generic Name</h5>
          <h5 style={{ fontWeight: "300",color:"white" }}>{data.category}</h5>
        </div>
        <div class="item-speci">
          <h5 style={{ fontWeight: "300",color:"white" }}>Headphone Type</h5>
          <h5 style={{ fontWeight: "300",color:"white" }}>{data.type}</h5>
        </div>
        <div class="item-speci">
          <h5 style={{ fontWeight: "300",color:"white" }}>Connectivity</h5>
          <h5 style={{ fontWeight: "300",color:"white" }}>{data.connectivity}</h5>
        </div>
        <div class="item-speci">
          <h5 style={{ fontWeight: "300",color:"white" }}>Microphone</h5>
          <h5 style={{ fontWeight: "300",color:"white" }}>Yes</h5>
        </div>
      </div>
      <br />
      <br />

      <h1 style={{ textAlign: "center",color:"white" }}>Related Products</h1>
      <br />
      <br />
      <br />
      <div class="products-head">
        {/* <!--------------------------------- First Row Start --------------------------------------------->
                <!-------------- First Card Start -------------> */}
        <div class="card-row">
          <div style={{ textAlign: "center" }}>
            <a href="Product Details.html" style={{ textDecoration: "none" }}>
              <img class="card-img" src={jbl660nc} alt={data.title} />
            </a>
          </div>
          <div style={{ marginLeft: "10px" }}>
            <div style={{ color: "#ff9500", display: "flex", gap: "3px",marginTop:"5px" }}>
              {[...Array(data.rateCount)].map((_, i) => (
                <IoStarSharp style={{ color: "#ff4500" }} key={i} />
              ))}
            </div>
            <span class="card-title">JBL Live 660NC</span>
            <br />
            <span class="card-details">Wireless Over-Ear NC Headphones</span>
            <hr />
            <p class="card-text" id="card-price">
              ₹9,999
            </p>
            <p class="card-text" id="card-offprice">
              ₹14,999
            </p>
            <br />
            <a href="#" class="btn btn-primary fs-5" id="card-cartbutton">
              Add to cart
            </a>
          </div>
        </div>
        {/* <!-------------- First Card End ------------->

                <!-------------- Second Card Start -------------> */}
        <div class="card-row">
          <div style={{ textAlign: "center" }}>
            <img class="card-img" src={boat518} alt={data.title} />
          </div>
          <div style={{ marginLeft: "10px" }}>
            <div style={{ color: "#ff9500", display: "flex", gap: "3px",marginTop:"5px" }}>
              {[...Array(data.rateCount)].map((_, i) => (
                <IoStarSharp style={{ color: "#ff4500" }} key={i} />
              ))}
            </div>
            <span class="card-title">boAt Rockerz 518</span>
            <br />
            <span class="card-details">On-Ear Wireless Headphones</span>
            <br />
            <br />
            <hr />
            <p class="card-text" id="card-price">
              ₹1,299
            </p>
            <p class="card-text" id="card-offprice">
              ₹3,990
            </p>
            <br />
            <a href="#" class="btn btn-primary fs-5" id="card-cartbutton">
              Add to cart
            </a>
          </div>
        </div>
        {/* <!-------------- Second Card End ------------->

                <!-------------- Third Card Start -------------> */}
        <div class="card-row">
          <div style={{ textAlign: "center" }}>
            <img class="card-img" src={boat131} alt={data.title} />
          </div>
          <div style={{ marginLeft: "10px" }}>
            <div style={{ color: "#ff9500", display: "flex", gap: "3px",marginTop:"5px" }}>
              {[...Array(data.rateCount)].map((_, i) => (
                <IoStarSharp style={{ color: "#ff4500" }} key={i} />
              ))}
            </div>
            <span class="card-title">boAt Airdopes 131</span>
            <br />
            <span class="card-details">Wireless In-Ear Earbuds</span>
            <br />
            <br />
            <hr />
            <p class="card-text" id="card-price">
              ₹1,099
            </p>
            <p class="card-text" id="card-offprice">
              ₹2,990
            </p>
            <br />
            <a href="#" class="btn btn-primary fs-5" id="card-cartbutton">
              Add to cart
            </a>
          </div>
        </div>
        {/* <!-------------- Third Card End ------------->

                <!-------------- Fourth Card Start -------------> */}
        <div class="card-row">
          <div style={{ textAlign: "center" }}>
            <img class="card-img" src={boat110} alt={data.title} />
          </div>
          <div style={{ marginLeft: "10px" }}>
            <div style={{ color: "#ff9500", display: "flex", gap: "3px",marginTop:"5px" }}>
              {[...Array(data.rateCount)].map((_, i) => (
                <IoStarSharp style={{ color: "#ff4500" }} key={i} />
              ))}
            </div>
            <span class="card-title">boAt BassHeads 110</span>
            <br />
            <span class="card-details">In-Ear Wired Earphones</span>
            <br />
            <br />
            <hr />
            <p class="card-text" id="card-price">
              ₹499
            </p>
            <p class="card-text" id="card-offprice">
              ₹999
            </p>
            <br />
            <a href="#" class="btn btn-primary fs-5" id="card-cartbutton">
              Add to cart
            </a>
          </div>
        </div>
        {/* <!-------------- Fourth Card End ------------->
             <!--------------------------------- First Row End ---------------------------------------------> */}
      </div>
    </div>
  )
}
