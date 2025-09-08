import React from "react";
import { FaTruckFast } from "react-icons/fa6";
import { FaShieldAlt } from "react-icons/fa";
import { FaTags } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa";

export default function Advantages() {
  return (
    <div className="bg-dark">
      {/*<!----------------- Advantages ------------------> */}
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
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
