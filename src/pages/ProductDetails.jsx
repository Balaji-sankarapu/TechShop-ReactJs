import React, { useState, useEffect } from "react";
import jbl660nc from "../assets/jbl660nc-1.png";
import boat518 from "../assets/boat518-1.png";
import boat131 from "../assets/boat131-1.png";
import boat110 from "../assets/boat110-1.png";
import "../modulecss/productdetails.css";
import "../data/data";
import { IoStarSharp } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import products from "../data/data";

export default function ProductDetails() {
  const [data, setData] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const product = products.find((item) => item.id === parseInt(id));
    setData(product);
  }, [id]);

  if (!data) {
    return <h2>Product not found!</h2>;
  }
  return (
    <div className="bg-dark">
      <div className="prod-cont">
        <div>
          <img className="horiz-images" src={data.images[0]} alt={data.title} />
          <br />
          <img className="horiz-images" src={data.images[1]} alt={data.title} />
          <br />
          <img className="horiz-images" src={data.images[2]} alt={data.title} />
          <br />
          <img className="horiz-images" src={data.images[3]} alt={data.title} />
        </div>
        <div>
          <img
            style={{ width: "700px" }}
            src={data.heroImage}
            alt={data.title}
          />
        </div>
        <div style={{ width: "500px", marginLeft: "150px" }}>
          <h3 style={{ color: "white" }}>{data.title}</h3>
          <p>{data.info}</p>
          <span style={{ display: "flex" }}>
            <div
              style={{
                color: "#ff9500",
                display: "flex",
                gap: "3px",
                marginTop: "5px",
              }}>
              {[...Array(data.rateCount)].map((_, i) => (
                <IoStarSharp style={{ color: "#ff4500" }} key={i} />
              ))}
            </div>
            <div style={{ color: "white", marginLeft: "5px" }}>
              {" "}
              | 1234 Ratings
            </div>
          </span>
          <hr style={{ width: "100%" }} />
          <div className="product-deta">
            <div>
              <p id="prod-price" className="card-text">
                ₹{data.finalPrice}
              </p>
              <p className="card-text">₹{data.originalPrice} </p>
              <br />
              <p className="prod-off">
                You save: {data.originalPrice - data.finalPrice} (
                {Math.floor(
                  ((data.originalPrice - data.finalPrice) /
                    data.originalPrice) *
                    100
                )}
                %){" "}
              </p>
              <p>(Inclusive of all taxes)</p>
            </div>
            <div>
              <button className="but">
                <i className="fa-solid fa-check fa-sm"></i>
                <strong>In Stock</strong>
              </button>
            </div>
          </div>
          <hr style={{ width: "100%", color: "white" }} />
          <br />
          <h3 style={{ color: "white" }}>Offers And Discounts</h3>
          <br />
          <div style={{ display: "flex", gap: "0 20px" }}>
            <p className="prod-spec">No Cost EMI on Credit Card</p>
            <p className="prod-spec">Pay Later & Avail Cashback</p>
          </div>
          <hr style={{ width: "100%", color: "white" }} />
          <button className="prod-cartbutt">Add to Cart</button>
        </div>
      </div>

      <div>
        <a className="prod-list" href="">
          <p id="Specif" className="Prod-Speci">
            Specifications
          </p>
          <p className="Prod-Speci">Overview</p>
          <p className="Prod-Speci">Reviews</p>
        </a>
      </div>

      <div style={{ margin: "30px" }}>
        <div className="item-speci">
          <h5 style={{ fontWeight: "300", color: "white" }}>Brand</h5>
          <h5 style={{ fontWeight: "300", color: "white" }}>{data.brand}</h5>
        </div>
        <div className="item-speci">
          <h5 style={{ fontWeight: "300", color: "white" }}>Model</h5>
          <h5 style={{ fontWeight: "300", color: "white" }}>{data.title}</h5>
        </div>
        <div className="item-speci">
          <h5 style={{ fontWeight: "300", color: "white" }}>Generic Name</h5>
          <h5 style={{ fontWeight: "300", color: "white" }}>{data.category}</h5>
        </div>
        <div className="item-speci">
          <h5 style={{ fontWeight: "300", color: "white" }}>Headphone Type</h5>
          <h5 style={{ fontWeight: "300", color: "white" }}>{data.type}</h5>
        </div>
        <div className="item-speci">
          <h5 style={{ fontWeight: "300", color: "white" }}>Connectivity</h5>
          <h5 style={{ fontWeight: "300", color: "white" }}>
            {data.connectivity}
          </h5>
        </div>
        <div className="item-speci">
          <h5 style={{ fontWeight: "300", color: "white" }}>Microphone</h5>
          <h5 style={{ fontWeight: "300", color: "white" }}>Yes</h5>
        </div>
      </div>
      <br />
      <br />

      <h1 style={{ textAlign: "center", color: "white" }}>Related Products</h1>
      <br />
      <br />
      <br />
      <div className="products-head">
        {/* <!--------------------------------- First Row Start --------------------------------------------->
                <!-------------- First Card Start -------------> */}
        <div className="card-row">
          <div style={{ textAlign: "center" }}>
            <Link
              to={`/productdetails/${data.id}`}
              style={{ textDecoration: "none" }}>
              <img className="card-img" src={jbl660nc} alt={data.title} />
            </Link>
          </div>
          <div style={{ marginLeft: "10px" }}>
            <div
              style={{
                color: "#ff9500",
                display: "flex",
                gap: "3px",
                marginTop: "5px",
              }}>
              {[...Array(data.rateCount)].map((_, i) => (
                <IoStarSharp style={{ color: "#ff4500" }} key={i} />
              ))}
            </div>
            <span className="card-title">JBL Live 660NC</span>
            <br />
            <span className="card-details">
              Wireless Over-Ear NC Headphones
            </span>
            <hr />
            <p className="card-text" id="card-price">
              ₹9,999
            </p>
            <p className="card-text" id="card-offprice">
              ₹14,999
            </p>
            <br />
            <a href="#" className="btn btn-primary fs-5" id="card-cartbutton">
              Add to cart
            </a>
          </div>
        </div>
        {/* <!-------------- First Card End ------------->

                <!-------------- Second Card Start -------------> */}
        <div className="card-row">
          <div style={{ textAlign: "center" }}>
            <Link to={`/productdetails/${data.id}`}>
              <img className="card-img" src={boat518} alt={data.title} />
            </Link>
          </div>
          <div style={{ marginLeft: "10px" }}>
            <div
              style={{
                color: "#ff9500",
                display: "flex",
                gap: "3px",
                marginTop: "5px",
              }}>
              {[...Array(data.rateCount)].map((_, i) => (
                <IoStarSharp style={{ color: "#ff4500" }} key={i} />
              ))}
            </div>
            <span className="card-title">boAt Rockerz 518</span>
            <br />
            <span className="card-details">On-Ear Wireless Headphones</span>
            <br />
            <br />
            <hr />
            <p className="card-text" id="card-price">
              ₹1,299
            </p>
            <p className="card-text" id="card-offprice">
              ₹3,990
            </p>
            <br />
            <a href="#" className="btn btn-primary fs-5" id="card-cartbutton">
              Add to cart
            </a>
          </div>
        </div>
        {/* <!-------------- Second Card End ------------->

                <!-------------- Third Card Start -------------> */}
        <div className="card-row">
          <div style={{ textAlign: "center" }}>
            <Link to={`/productdetails/${data.id}`}>
              <img className="card-img" src={boat131} alt={data.title} />
            </Link>
          </div>
          <div style={{ marginLeft: "10px" }}>
            <div
              style={{
                color: "#ff9500",
                display: "flex",
                gap: "3px",
                marginTop: "5px",
              }}>
              {[...Array(data.rateCount)].map((_, i) => (
                <IoStarSharp style={{ color: "#ff4500" }} key={i} />
              ))}
            </div>
            <span className="card-title">boAt Airdopes 131</span>
            <br />
            <span className="card-details">Wireless In-Ear Earbuds</span>
            <br />
            <br />
            <hr />
            <p className="card-text" id="card-price">
              ₹1,099
            </p>
            <p className="card-text" id="card-offprice">
              ₹2,990
            </p>
            <br />
            <a href="#" className="btn btn-primary fs-5" id="card-cartbutton">
              Add to cart
            </a>
          </div>
        </div>
        {/* <!-------------- Third Card End ------------->

                <!-------------- Fourth Card Start -------------> */}
        <div className="card-row">
          <div style={{ textAlign: "center" }}>
            <Link to={`/productdetails/${data.id}`}>
              <img className="card-img" src={boat110} alt={data.title} />
            </Link>
          </div>
          <div style={{ marginLeft: "10px" }}>
            <div
              style={{
                color: "#ff9500",
                display: "flex",
                gap: "3px",
                marginTop: "5px",
              }}>
              {[...Array(data.rateCount)].map((_, i) => (
                <IoStarSharp style={{ color: "#ff4500" }} key={i} />
              ))}
            </div>
            <span className="card-title">boAt BassHeads 110</span>
            <br />
            <span className="card-details">In-Ear Wired Earphones</span>
            <br />
            <br />
            <hr />
            <p className="card-text" id="card-price">
              ₹499
            </p>
            <p className="card-text" id="card-offprice">
              ₹999
            </p>
            <br />
            <a href="#" className="btn btn-primary fs-5" id="card-cartbutton">
              Add to cart
            </a>
          </div>
        </div>
        {/* <!-------------- Fourth Card End ------------->
             <!--------------------------------- First Row End ---------------------------------------------> */}
      </div>

      <!----------------- Advantages ------------------> */}
        <h1 style={{ color: "white" }}>Our Advantages</h1>
        <br />
        <br />
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          {/* <!----------------- First Advantage End ------------------> */}
          <div class="adv-container">
            <span style={{ marginTop: "15px" }}>
              <FaTruckFast
                style={{
                  color: "#ff4500",
                  marginTop: "-8px",
                  fontSize: "35px",
                }}
              />
            </span>
            <span class="adv">
              Express Delhivery <br />
              <p class="advtxt">Ships in 24 Hours</p>
            </span>
            <br />
          </div>
          {/* <!----------------- First Advantage End ------------------>

            <!----------------- Second Advantage Start ------------------> */}
          <div
            style={{
              width: "205px",
              display: "flex",
              justifyContent: "center",
            }}>
            <span style={{ marginTop: "15px" }}>
              <FaShieldAlt
                style={{
                  color: "#ff4500",
                  marginTop: "-8px",
                  fontSize: "30px",
                }}
              />
            </span>
            <span class="adv">
              Brand Warranty <br />
              <p class="advtxt">100% Original Products</p>
            </span>
            <br />
          </div>
          {/* <!----------------- Second Advantage End ------------------>

            <!----------------- Third Advantage Start ------------------> */}
          <div
            style={{
              width: "200px",
              display: "flex",
              justifyContent: "center",
            }}>
            <span style={{ marginTop: "15px" }}>
              <FaTags
                style={{
                  color: "#ff4500",
                  marginTop: "-5px",
                  fontSize: "35px",
                }}
              />
            </span>
            <span class="adv">
              Exciting Deals
              <br />
              <p class="advtxt">On all prepaid orders</p>
            </span>
            <br />
          </div>
          {/* <!----------------- Third Advantage End ------------------>

            <!----------------- Fourth Advantage Start ------------------> */}
          <div
            style={{
              width: "200px",
              display: "flex",
              justifyContent: "space-between",
            }}>
            <span style={{ marginTop: "15px" }}>
              <FaCreditCard
                style={{
                  color: "#ff4500",
                  marginTop: "-5px",
                  fontSize: "35px",
                }}
              />
            </span>
            <span class="adv">
              Secure Payments
              <br />
              <p class="advtxt">SSL/Secure certificate</p>
            </span>
            <br />
          </div>
          {/* <!----------------- Fourth Advantage End ------------------> */}
        </div>
    </div>
  );
}
