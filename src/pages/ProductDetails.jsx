import React from "react";
import '../modulecss/productdetails.css'
import '../data/data'
import { IoStarSharp } from "react-icons/io5";

export default function ProductDetails({data}) {
  return(
    <div>
      {data.map((item,index)=>{
          return (
    <div className="bg-dark" key={index}>
      <div class="prod-cont">
        <div>
          <img class="horiz-images" src={item.images[0]} alt={item.title} />
          <br />
          <img class="horiz-images" src={item.images[1]} alt={item.title} />
          <br />
          <img class="horiz-images" src={item.images[2]} alt={item.title} />
          <br />
          <img class="horiz-images" src={item.images[3]} alt={item.title} />
        </div>
        <div>
          <img
            style={{ width: "700px" }}
            src={item.heroImage}
            alt={item.title}
          />
        </div>
        <div style={{ width: "500px", marginLeft: "150px" }}>
          <h3 style={{color:"white"}}>{item.title}</h3>
          <p>{item.info}</p>
          <span style={{display:"flex"}}>
            <div style={{ color: "#ff9500", display: "flex", gap: "3px",marginTop:"5px" }}>
              {[...Array(item.rateCount)].map((_, i) => (
                <IoStarSharp style={{ color: "#ff4500" }} key={i} />
              ))}
            </div>
            <div style={{color:"white", marginLeft:"5px"}}> | 1234 Ratings</div>
          </span>
          <hr style={{ width: "100%" }} />
          <div class="product-deta">
            <div>
              <p id="prod-price" class="card-text">₹{item.finalPrice}</p>
              <p class="card-text">₹{item.originalPrice} </p>
              <br />
              <p class="prod-off">You save: {item.originalPrice-item.finalPrice} ({Math.floor(((item.originalPrice-item.finalPrice)/(item.originalPrice))*100)}%) </p>
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
          <h5 style={{ fontWeight: "300",color:"white" }}>{item.brand}</h5>
        </div>
        <div class="item-speci">
          <h5 style={{ fontWeight: "300",color:"white" }}>Model</h5>
          <h5 style={{ fontWeight: "300",color:"white" }}>{item.title}</h5>
        </div>
        <div class="item-speci">
          <h5 style={{ fontWeight: "300",color:"white" }}>Generic Name</h5>
          <h5 style={{ fontWeight: "300",color:"white" }}>{item.category}</h5>
        </div>
        <div class="item-speci">
          <h5 style={{ fontWeight: "300",color:"white" }}>Headphone Type</h5>
          <h5 style={{ fontWeight: "300",color:"white" }}>{item.type}</h5>
        </div>
        <div class="item-speci">
          <h5 style={{ fontWeight: "300",color:"white" }}>Connectivity</h5>
          <h5 style={{ fontWeight: "300",color:"white" }}>{item.connectivity}</h5>
        </div>
        <div class="item-speci">
          <h5 style={{ fontWeight: "300",color:"white" }}>Microphone</h5>
          <h5 style={{ fontWeight: "300",color:"white" }}>Yes</h5>
        </div>
      </div>
      <br />
      <br />

      <h1 style={{ textAlign: "center" }}>Related Products</h1>
      <br />
      <br />
      <br />
      <div class="products-head">
        {/* <!--------------------------------- First Row Start --------------------------------------------->
                <!-------------- First Card Start -------------> */}
        <div class="card-row">
          <div style={{ textAlign: "center" }}>
            <a href="Product Details.html" style={{ textDecoration: "none" }}>
              <img class="card-img" src="./Images/jbl660nc-1.png" alt={item.title} />
            </a>
          </div>
          <div style={{ marginLeft: "10px" }}>
            <div>
              <i class="fa-solid fa-star" style={{ color: "#ff4500" }}></i>
              <i class="fa-solid fa-star" style={{ color: "#ff4500" }}></i>
              <i class="fa-solid fa-star" style={{ color: "#ff4500" }}></i>
              <i class="fa-solid fa-star" style={{ color: "#ff4500" }}></i>
              <i class="fa-solid fa-star" style={{ color: "#ff4500" }}></i>
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
            <img class="card-img" src="./Images/boat518-1.png" alt={item.title} />
          </div>
          <div style={{ marginLeft: "10px" }}>
            <div>
              <i class="fa-solid fa-star" style={{ color: "#ff4500" }}></i>
              <i class="fa-solid fa-star" style={{ color: "#ff4500" }}></i>
              <i class="fa-solid fa-star" style={{ color: "#ff4500" }}></i>
              <i class="fa-solid fa-star" style={{ color: "#ff4500" }}></i>
              <i class="fa-solid fa-star" style={{ color: "#ff4500" }}></i>
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
            <img class="card-img" src="./Images/boat131-1.png" alt={item.title} />
          </div>
          <div style={{ marginLeft: "10px" }}>
            <div>
              <i class="fa-solid fa-star" style={{ color: "#ff4500" }}></i>
              <i class="fa-solid fa-star" style={{ color: "#ff4500" }}></i>
              <i class="fa-solid fa-star" style={{ color: "#ff4500" }}></i>
              <i class="fa-solid fa-star" style={{ color: "#ff4500" }}></i>
              <i class="fa-solid fa-star" style={{ color: "#ff4500" }}></i>
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
            <img class="card-img" src="./Images/boat110-1.png" alt={item.title} />
          </div>
          <div style={{ marginLeft: "10px" }}>
            <div>
              <i class="fa-solid fa-star" style={{ color: "#ff4500" }}></i>
              <i class="fa-solid fa-star" style={{ color: "#ff4500" }}></i>
              <i class="fa-solid fa-star" style={{ color: "#ff4500" }}></i>
              <i class="fa-solid fa-star" style={{ color: "#ff4500" }}></i>
              <i class="fa-solid fa-star" style={{ color: "#ff4500" }}></i>
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
  );

      })}
    </div>
  )
}
