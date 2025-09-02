import React from "react";
import "../modulecss/index.css";
import boat131 from "../assets/boat131-1.png";
import Xb910n from "../assets/sonyXb910n-1.png";
import jbl660nc from "../assets/jbl660nc-1.png";
import boat518 from "../assets/boat518-1.png";
import boat110 from '../assets/boat110-1.png'
import boat410 from '../assets/boat410-1.png'
import jbl200 from '../assets/jbl200bt-1.png'
import sonyxb910 from '../assets/sonyXb910n-1.png'
import jbl760 from '../assets/jbl760nc-1.png'
import boat255 from '../assets/boat255r-1.png'
import jbl100 from "../assets/jbl100-1.png"
import sony1000 from '../assets/sony1000xm4-1.png'
import { Link } from "react-router-dom";
import { IoStarSharp } from "react-icons/io5";
import { FaTruckFast } from "react-icons/fa6";
import { FaShieldAlt } from "react-icons/fa";
import { FaTags } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <div
        id="carouselExampleRide"
        class="carousel slide w-500 container-fluid"
        style={{ backgroundColor: " rgb(42, 41, 41)" }}
        data-bs-ride="true">
        <div class="carousel-inner ">
          <div
            id="carouselExampleRide"
            class="carousel slide w-100"
            data-bs-ride="carousel"
            data-bs-interval="3000">
            {/* <!------------------------------ First Carousel Start -----------------------------> */}
            <div class="carousel-item active">
              <div class="card flex-row justify-content-center m-5 shadow-none border-0 bg-transparent ">
                <div class="" style={{ width: "900px" }}>
                  <p class="para-caro">boAt Airdopes 131</p>
                  <br />
                  <p class="caro-head">Featherweight For Comfort All-Day.</p>
                  <br />
                  <p class="card-text" id="caro-price">
                    ₹1,099
                  </p>
                  <p class="card-text" id="caro-off-price">
                    ₹2,990
                  </p>
                  <br />
                  <br />
                  <a href="#" id="caro-button" class="btn btn-primary fs-3">
                    Shop Now
                  </a>
                </div>
                <img
                  style={{ width: "300px" }}
                  src={boat131}
                  class="d-block"
                  alt="..."
                />
              </div>
            </div>
            {/* <!------------------------------ First Carousel End ----------------------------->
                    <!------------------------------ Second Carousel Start -----------------------------> */}
            <div class="carousel-item">
              <div class="card flex-row justify-content-center m-5 shadow-none border-0 bg-transparent ">
                <div class="" style={{ width: "900px" }}>
                  <p class="para-caro">Sony WH-XB910N</p>
                  <br />
                  <p class="caro-head">Give Your Favorite Music A Boost.</p>
                  <br />
                  <p class="card-text" id="caro-price">
                    ₹13,489
                  </p>
                  <p class="card-text" id="caro-off-price">
                    ₹19,999
                  </p>
                  <br />
                  <br />
                  <a href="#" id="caro-button" class="btn btn-primary fs-3">
                    Shop Now
                  </a>
                </div>
                <img
                  style={{ width: "300px" }}
                  src={Xb910n}
                  class="d-block"
                  alt="..."
                />
              </div>
            </div>
            {/* <!------------------------------ Second Carousel End ----------------------------->
                    <!------------------------------ Third Carousel Start -----------------------------> */}
            <div class="carousel-item" style={{ height: "396px" }}>
              <div class="card flex-row justify-content-center m-5 shadow-none border-0 bg-transparent ">
                <div class="" style={{ width: "900px" }}>
                  <p class="para-caro">JBL Live 660NC</p>
                  <br />
                  <p class="caro-head" style={{ fontSize: "40px" }}>
                    Keep The Noise Out, Or In. You Choose.
                  </p>
                  <br />
                  <p class="card-text" id="caro-price">
                    ₹9,999
                  </p>
                  <p class="card-text" id="caro-off-price">
                    ₹14,999
                  </p>
                  <br />
                  <br />
                  <a href="#" id="caro-button" class="btn btn-primary fs-3">
                    Shop Now
                  </a>
                </div>
                <img
                  style={{ width: "300px" }}
                  src={jbl660nc}
                  class="d-block"
                  alt="..."
                />
              </div>
            </div>
            {/* <!------------------------------ Third Carousel End -----------------------------> */}
          </div>
        </div>
      </div>
      {/* <!--------------------------------- Carousel End -------------------------------------> */}

      {/* <!----------- Cards Start ------------> */}
      <div className="bg-dark">
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          {/* <!--------------------------------- First Row Start --------------------------------------------->
                <!-------------- First Card Start -------------> */}
          <div className="card-row">
            <div style={{ textAlign: "center" }}>
              <Link style={{ textDecoration: "none" }}>
                <img className="card-img" src={jbl660nc} alt="" />
              </Link>
            </div>
            <div style={{ marginLeft: "10px" }}>
              <div style={{display:"flex"}}>
                <IoStarSharp style={{color: "#ff4500"}} />
                <IoStarSharp style={{color: "#ff4500"}} />
                <IoStarSharp style={{color: "#ff4500"}} />
                <IoStarSharp style={{color: "#ff4500"}} />
                <IoStarSharp style={{color: "#ff4500"}} />
              </div>
              <span className="card-title text-white">JBL Live 660NC</span>
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

          {/* <!-------------- First Card End -------------> */}
          {/* <!-------------- Second Card Start -------------> */}

          <div className="card-row">
            <Link style={{ textAlign: "center" }}>
              <img className="card-img" src={boat518} alt="" />
            </Link>
            <div style={{ marginLeft: "10px" }}>
              <div style={{display:"flex"}}>
                <IoStarSharp style={{color: "#ff4500"}} />
                <IoStarSharp style={{color: "#ff4500"}} />
                <IoStarSharp style={{color: "#ff4500"}} />
                <IoStarSharp style={{color: "#ff4500"}} />
                <IoStarSharp style={{color: "#ff4500"}} />
              </div>
              <span className="card-title text-white">boAt Rockerz 518</span>
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

          {/* <!-------------- Second Card End -------------> */}
          {/* <!-------------- Third Card Start -------------> */}

          <div className="card-row">
            <Link style={{ textAlign: "center" }}>
              <img className="card-img" src={boat131} alt="" />
            </Link>
            <div style={{ marginLeft: "10px" }}>
              <div style={{display:"flex"}}>
                <IoStarSharp style={{color: "#ff4500"}} />
                <IoStarSharp style={{color: "#ff4500"}} />
                <IoStarSharp style={{color: "#ff4500"}} />
                <IoStarSharp style={{color: "#ff4500"}} />
                <IoStarSharp style={{color: "#ff4500"}} />
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
          {/* -------------------Third card end -------------------*/}
          {/* --------------------Fourth card start----------------- */}
          <div className="card-row">
            <Link style={{ textAlign: "center" }}>
              <img className="card-img" src={boat110} alt="" />
            </Link>
            <div style={{ marginLeft: "10px" }}>
              <div style={{display:"flex"}}>
                <IoStarSharp style={{color: "#ff4500"}} />
                <IoStarSharp style={{color: "#ff4500"}} />
                <IoStarSharp style={{color: "#ff4500"}} />
                <IoStarSharp style={{color: "#ff4500"}} />
                <IoStarSharp style={{color: "#ff4500"}} />
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
          {/* ---------------Fourth card end--------------- */}
        </div><br />
        {/* ----------------first row end------------------ */}
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          {/* <!--------------------------------- Second Row Start --------------------------------------------->
                <!-------------- First Card Start -------------> */}
          <div className="card-row">
            <div style={{ textAlign: "center" }}>
              <Link href="Product Details.html" style={{ textDecoration: "none" }}>
                <img className="card-img" src={boat410} alt="" />
              </Link>
            </div>
            <div style={{ marginLeft: "10px" }}>
              <div style={{display:"flex"}}>
                <IoStarSharp style={{color: "#ff4500"}} />
                <IoStarSharp style={{color: "#ff4500"}} />
                <IoStarSharp style={{color: "#ff4500"}} />
                <IoStarSharp style={{color: "#ff4500"}} />
                <IoStarSharp style={{color: "#ff4500"}} />
              </div>
              <span className="card-title text-white">JBL Live 660NC</span>
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

          {/* <!-------------- First Card End -------------> */}
          {/* <!-------------- Second Card Start -------------> */}

          <div className="card-row">
            <Link style={{ textAlign: "center" }}>
              <img className="card-img" src={jbl200} alt="" />
            </Link>
            <div style={{ marginLeft: "10px" }}>
              <div style={{display:"flex"}}>
                <IoStarSharp style={{color: "#ff4500"}} />
                <IoStarSharp style={{color: "#ff4500"}} />
                <IoStarSharp style={{color: "#ff4500"}} />
                <IoStarSharp style={{color: "#ff4500"}} />
                <IoStarSharp style={{color: "#ff4500"}} />
              </div>
              <span className="card-title text-white">boAt Rockerz 518</span>
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

          {/* <!-------------- Second Card End -------------> */}
          {/* <!-------------- Third Card Start -------------> */}

          <div className="card-row">
            <Link style={{ textAlign: "center" }}>
              <img className="card-img" src={sonyxb910} alt="" />
            </Link>
            <div style={{ marginLeft: "10px" }}>
              <div style={{display:"flex"}}>
                <IoStarSharp style={{color: "#ff4500"}} />
                <IoStarSharp style={{color: "#ff4500"}} />
                <IoStarSharp style={{color: "#ff4500"}} />
                <IoStarSharp style={{color: "#ff4500"}} />
                <IoStarSharp style={{color: "#ff4500"}} />
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
          {/* -------------------Third card end -------------------*/}
          {/* --------------------Fourth card start----------------- */}
          <div className="card-row">
            <Link style={{ textAlign: "center" }}>
              <img className="card-img" src={jbl760} alt="" />
            </Link>
            <div style={{ marginLeft: "10px" }}>
              <div style={{display:"flex"}}>
                <IoStarSharp style={{color: "#ff4500"}} />
                <IoStarSharp style={{color: "#ff4500"}} />
                <IoStarSharp style={{color: "#ff4500"}} />
                <IoStarSharp style={{color: "#ff4500"}} />
                <IoStarSharp style={{color: "#ff4500"}} />
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
          {/* ---------------Fourth card end--------------- */}
        </div>
        <br />
        {/* --------------Second row end------------------------ */}
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          {/* <!--------------------------------- Tjird Row Start --------------------------------------------->
                <!-------------- First Card Start -------------> */}
          <div className="card-row">
            <div style={{ textAlign: "center" }}>
              <Link href="Product Details.html" style={{ textDecoration: "none" }}>
                <img className="card-img" src={boat255} alt="" />
              </Link>
            </div>
            <div style={{ marginLeft: "10px" }}>
              <div style={{display:"flex"}}>
                <IoStarSharp style={{color: "#ff4500"}} />
                <IoStarSharp style={{color: "#ff4500"}} />
                <IoStarSharp style={{color: "#ff4500"}} />
                <IoStarSharp style={{color: "#ff4500"}} />
                <IoStarSharp style={{color: "#ff4500"}} />
              </div>
              <span className="card-title text-white">JBL Live 660NC</span>
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

          {/* <!-------------- First Card End -------------> */}
          {/* <!-------------- Second Card Start -------------> */}

          <div className="card-row">
            <Link style={{ textAlign: "center" }}>
              <img className="card-img" src={jbl100} alt="" />
            </Link>
            <div style={{ marginLeft: "10px" }}>
              <div style={{display:"flex"}}>
                <IoStarSharp style={{color: "#ff4500"}} />
                <IoStarSharp style={{color: "#ff4500"}} />
                <IoStarSharp style={{color: "#ff4500"}} />
                <IoStarSharp style={{color: "#ff4500"}} />
                <IoStarSharp style={{color: "#ff4500"}} />
              </div>
              <span className="card-title text-white">boAt Rockerz 518</span>
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

          {/* <!-------------- Second Card End -------------> */}
          {/* <!-------------- Third Card Start -------------> */}

          <div className="card-row">
            <Link style={{ textAlign: "center" }}>
              <img className="card-img" src={sony1000} alt="" />
            </Link>
            <div style={{ marginLeft: "10px" }}>
              <div style={{display:"flex"}}>
                <IoStarSharp style={{color: "#ff4500"}} />
                <IoStarSharp style={{color: "#ff4500"}} />
                <IoStarSharp style={{color: "#ff4500"}} />
                <IoStarSharp style={{color: "#ff4500"}} />
                <IoStarSharp style={{color: "#ff4500"}} />
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
          {/* -------------------Third card end -------------------*/}
          {/* --------------------Fourth card start----------------- */}
          <div class="lst-card">
            <Link to="/allproducts">
              <h4 class="lst-cardtxt" style={{ textDecoration: "underline" }}>
                Browse All Products→
              </h4>
            </Link>
          </div>
          {/* ---------------Fourth card end--------------- */}
        </div>
        <br />
        <br />
        <br />
        {/* <!--------------------------------- Cards End ---------------------------------->

            <!----------------- Advantages ------------------> */}
        <h1 style={{color:"white"}}>Our Advantages</h1>
        <br />
        <br />
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          {/* <!----------------- First Advantage End ------------------> */}
          <div class="adv-container">
            <span style={{ marginTop: "15px" }}>
              <FaTruckFast style={{ color: "#ff4500", marginTop: "-8px", fontSize:'35px'}} />
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
              <FaShieldAlt style={{ color: "#ff4500", marginTop: "-8px", fontSize:'30px'}}/>
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
              <FaTags style={{ color: "#ff4500", marginTop: "-5px", fontSize:'35px'}}/>
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
              <FaCreditCard style={{ color: "#ff4500", marginTop: "-5px", fontSize:'35px'}}/>
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
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}
