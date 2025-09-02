import React from "react";
import '../modulecss/index.css'

export default function Modal() {
  return (
    <div>
      {/* Modal Structure */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content bg-dark text-light">
            {/* Modal Header */}
            <div className="modal-header d-flex justify-content-between align-items-start">
              <div>
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Signup
                </h1>
                <p className="mb-0">
                  Already have an account? <strong>Login</strong>
                </p>
              </div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                style={{
                  filter: "invert(1) brightness(400%) contrast(150%)",
                }}
              ></button>
            </div>

            {/* Modal Body */}
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                  />
                  <br />
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                  <br />
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                  <br />
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirm Password"
                  />
                  <br />
                  <button className="Signup-button rounded w-100" style={{backgroundColor: '#ff4500'}}>
                    Signup
                  </button>
                </div>
              </form>
            </div>
            <div className="d-flex align-items-center w-75 mx-auto my-3">
              <div className="flex-grow-1 border-bottom"></div>
              <div className="px-4 py-1 text-light">or login with</div>
              <div className="flex-grow-1 border-bottom"></div>
            </div>

            {/* Social Login Buttons */}
            <div className="d-flex justify-content-evenly mb-4">
              <button className="btn btn-primary">Facebook</button>
              <button className="btn btn-danger">Google</button>
              <button className="btn btn-info">Twitter</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
