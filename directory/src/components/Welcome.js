import React from "react";
import ConstructionImage from "../img/construction2.jpg";
// import "../css/theme.css"
// import "../css/libs.css"

function Welcome() {
  return (
    <div>
      {/* WELCOME */}
      <section
        data-jarallax
        data-speed=".8"
        className="pt-12 pb-10 pt-md-15 pb-md-14"
        style={{
          backgroundImage: `url(${ConstructionImage})`,
          maxWidth: "100%",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-8 col-lg-6">
              {/* Heading */}
              <h1
                className="display-3 fw-bold text-white"
                id="welcomeHeadingSource"
              >
                Find solutions for everything <br />
                <span
                  className="text-warning"
                  data-typed='{"strings": ["UX Designers", "Ruby Developers", "Data Analysts", "Copywriters"]}'
                ></span>
              </h1>

              {/* Text */}
              <p className="fs-lg text-white-80 mb-6">
                We help solve complex problems by listing them on this platform
              </p>

              {/* Form */}
              <form>
                <div className="input-group">
                  <span className="input-group-text pe-0 border-end-0">
                    <i className="fe fe-search" id="searchAddon"></i>
                  </span>
                  <input
                    className="form-control ps-2 border-start-0"
                    type="search"
                    placeholder="Search for a company or problem"
                    aria-label="Search for a company or problem"
                    aria-describedby="searchAddon"
                  ></input>
                </div>
              </form>
            </div>
          </div>{" "}
          {/* / .row */}
        </div>{" "}
        {/* / .container */}
      </section>
    </div>
  );
}

export default Welcome;
