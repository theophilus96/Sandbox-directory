import React from "react";
import IphoneDevice from "../devices/iphonex.svg";
import MacDevice from "../devices/macbook.svg";
import PhoneView from "../img/phoneview2.png";
import WebView from "../img/webview.png";

function About() {
  return (
    <div>
      {/* ABOUT */}
      <section className="py-8 py-md-11 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-5 col-lg-6 order-md-2">
              {/* iPhone + Macbook */}
              <div className="w-md-150 w-lg-130 mb-6 mb-md-0">
                <div className="device-combo device-combo-iphonex-macbook">
                  {/* iPhone */}
                  <div className="device device-iphonex">
                    <img
                      src={PhoneView}
                      className="device-screen"
                      alt="..."
                      style={{
                        objectFit: "cover",
                      }}
                    />
                    <img src={IphoneDevice} className="img-fluid" alt="..." />
                  </div>

                  {/* Macbook */}
                  <div className="device device-macbook">
                    <img src={WebView} className="device-screen" alt="..." />
                    <img src={MacDevice} className="img-fluid" alt="..." />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-7 col-lg-6 order-md-1">
              {/* Heading */}
              <h2>
                Keep your Company's storefront <br />
                <span className="text-primary">organized and up to date</span>.
              </h2>

              {/* Text */}
              <p className="fs-lg text-muted mb-6">
                SandBox centralizes all your projects and current works, this
                helps summarize what your company is all about.
              </p>

              {/* List */}
              <div className="d-flex">
                {/* Icon */}
                <div className="icon text-primary">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none" fillRule="evenodd">
                      <path d="M0 0h24v24H0z"></path>
                      <path
                        d="M13.5 21v-3a1 1 0 00-1-1h-1a1 1 0 00-1 1v3H5V4a2 2 0 012-2h10a2 2 0 012 2v17h-5.5zM9 4a1 1 0 00-1 1v1a1 1 0 001 1h1a1 1 0 001-1V5a1 1 0 00-1-1H9zm5 0a1 1 0 00-1 1v1a1 1 0 001 1h1a1 1 0 001-1V5a1 1 0 00-1-1h-1zM9 8a1 1 0 00-1 1v1a1 1 0 001 1h1a1 1 0 001-1V9a1 1 0 00-1-1H9zm0 4a1 1 0 00-1 1v1a1 1 0 001 1h1a1 1 0 001-1v-1a1 1 0 00-1-1H9zm5 0a1 1 0 00-1 1v1a1 1 0 001 1h1a1 1 0 001-1v-1a1 1 0 00-1-1h-1z"
                        fill="#335EEA"
                      ></path>
                      <rect
                        fill="#FFF"
                        x="13"
                        y="8"
                        width="3"
                        height="3"
                        rx="1"
                      ></rect>
                      <path
                        d="M4 21h16a1 1 0 011 1v.4a.6.6 0 01-.6.6H3.6a.6.6 0 01-.6-.6V22a1 1 0 011-1z"
                        fill="#335EEA"
                        opacity=".3"
                      ></path>
                    </g>
                  </svg>{" "}
                </div>

                <div className="ms-5">
                  {/* Heading */}
                  <h4 className="mb-1">Company Directory</h4>

                  {/* Text */}
                  <p className="text-muted mb-5">
                    List only the important points of your company.
                  </p>
                </div>
              </div>
              <div className="d-flex">
                {/* Icon */}
                <div className="icon text-primary">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none" fillRule="evenodd">
                      <path d="M0 0h24v24H0z"></path>
                      <path
                        d="M10 4h11a1 1 0 011 1v2a1 1 0 01-1 1H10a1 1 0 01-1-1V5a1 1 0 011-1zm0 6h11a1 1 0 011 1v2a1 1 0 01-1 1H10a1 1 0 01-1-1v-2a1 1 0 011-1zm0 6h11a1 1 0 011 1v2a1 1 0 01-1 1H10a1 1 0 01-1-1v-2a1 1 0 011-1z"
                        fill="#335EEA"
                      ></path>
                      <rect
                        fill="#335EEA"
                        opacity=".3"
                        x="2"
                        y="4"
                        width="5"
                        height="16"
                        rx="1"
                      ></rect>
                    </g>
                  </svg>{" "}
                </div>

                <div className="ms-5">
                  {/* Heading */}
                  <h4 className="mb-1">Request Listing</h4>

                  {/* Text */}
                  <p className="text-muted mb-0">
                    Find your next client or partner here
                  </p>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* / .row */}
        </div>{" "}
        {/* / .container */}
      </section>
    </div>
  );
}

export default About;
