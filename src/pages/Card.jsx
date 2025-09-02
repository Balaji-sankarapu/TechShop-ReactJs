import React from "react";
export default function Card({ data }) {
  return (
    <div style={{ gap: "10px" }} className="row">
      {data.map((item, index) => {
        return (
          <div
            className="card col-md-3 "
            style={{ width: "18rem" }}
            key={index}>
            <img src={item.image} className="card-img-top" alt="" />
            <div className="card-body">
              <h5 className="card-title">{item.tagline}</h5>
              <p className="card-text">{item.info}</p>
              <a href="#" className="btn btn-primary">
                Enroll Now
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
