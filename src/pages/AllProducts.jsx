import React from "react";
import { IoStarSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Card({ data }) {
  return (
    <div className="bg-dark container-fluid">
      <h1 style={{ color: "white" }}>All Products</h1>
      <div style={{ gap: "10px",display:"grid",gridTemplateColumns:"repeat(4,1fr)" }} className="row">
        {data.map((item, index) => {
          // console.log(item);

          return (
            <div
              className="card col-md-3 bg-dark"
              style={{ width: "18rem", border: "1px solid white" }}
              key={index}>
              <Link to={`/productdetails/${item.id}`}>
                <img src={item.image} className="card-img-top" alt="" />
              </Link>
              <div className="card-body">
                <h5 className="card-title text-white">
                  {item.tagline || item.title}
                </h5>
                <p className="card-text" style={{ textDecoration: "none" }}>
                  {item.info}
                </p>
                <div style={{ color: "#ff9500", display: "flex", gap: "3px" }}>
                  {[...Array(item.rateCount)].map((_, i) => (
                    <IoStarSharp style={{ color: "#ff4500" }} key={i} />
                  ))}
                </div>
                <hr style={{ color: "white", width: "230px" }} />
                <span className="fw-bold text-white">₹{item.finalPrice}</span>
                <span className="text-white text-decoration-line-through ps-3">
                  ₹{item.originalPrice}
                </span>
                <br />
                <br />
                <button
                  style={{ textAlign: "center" }}
                  className="rounded p-1 w-75 bg-[#ff4500] text-white">
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}
