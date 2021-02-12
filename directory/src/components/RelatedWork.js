import React from "react";
import MBSlogo from "../img/MBSLogo.jpg";
import CraneLogo from "../img/CraneLogo.jpg";
import JaneDesign2 from "../img/JaneDesign2.jpg";

function RelatedWork() {
  return (
    <div>
      <section className="pt-7 pt-md-10 bg-light">
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-12 col-md">
              {/* Heading */}
              <h3 className="mb-0">Related Work</h3>

              {/* Text */}
              <p className="mb-0 text-muted">
                Other goodies that are similar to this one.
              </p>
            </div>
            <div className="col-12 col-md-auto">
              {/* Button */}
              <a
                href="#!"
                className="btn btn-sm btn-outline-gray-300 d-none d-md-inline"
              >
                View all
              </a>
            </div>
          </div>{" "}
          {/* / .row */}
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 d-flex">
              {/* Card */}
              <a className="card mb-6 mb-lg-0 shadow-light-lg" href="#!">
                {/* Image */}
                <div className="card-zoom">
                  <img className="card-img-top" src={MBSlogo} alt="..." />
                </div>

                {/* Body */}
                <div className="card-body">
                  {/* Shape */}
                  <div className="shape shape-bottom-100 shape-fluid-x svg-shim text-white">
                    <svg
                      viewBox="0 0 2880 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 48h2880V0h-720C1442.5 52 720 0 720 0H0v48z"
                        fill="currentColor"
                      ></path>
                    </svg>{" "}
                  </div>

                  {/* Preheading */}
                  <h6 className="text-uppercase mb-1 text-muted">
                    Residential Construction
                  </h6>

                  {/* Heading */}
                  <h4 className="mb-0">Theo Construction</h4>
                </div>
              </a>
            </div>
            <div className="col-12 col-md-6 col-lg-4 d-flex">
              {/* Card */}
              <a className="card mb-6 mb-lg-0 shadow-light-lg" href="#!">
                {/* Image */}
                <div className="card-zoom">
                  <img className="card-img-top" src={CraneLogo} alt="..." />
                </div>

                {/* Body */}
                <div className="card-body">
                  {/* Shape */}
                  <div className="shape shape-bottom-100 shape-fluid-x svg-shim text-white">
                    <svg
                      viewBox="0 0 2880 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 48h2880V0h-720C1442.5 52 720 0 720 0H0v48z"
                        fill="currentColor"
                      ></path>
                    </svg>{" "}
                  </div>

                  {/* Preheading */}
                  <h6 className="text-uppercase mb-1 text-muted">
                    Civil Engineering
                  </h6>

                  {/* Heading */}
                  <h4 className="mb-0">John Engineering</h4>
                </div>
              </a>
            </div>
            <div className="col-12 col-md-6 col-lg-4 d-flex">
              {/* Card */}
              <a className="card d-md-none d-lg-flex shadow-light-lg" href="#!">
                {/* Image */}
                <div className="card-zoom">
                  <img className="card-img-top" src={JaneDesign2} alt="..." />
                </div>

                {/* Body */}
                <div className="card-body">
                  {/* Shape */}
                  <div className="shape shape-bottom-100 shape-fluid-x svg-shim text-white">
                    <svg
                      viewBox="0 0 2880 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 48h2880V0h-720C1442.5 52 720 0 720 0H0v48z"
                        fill="currentColor"
                      ></path>
                    </svg>{" "}
                  </div>

                  {/* Preheading */}
                  <h6 className="text-uppercase mb-1 text-muted">
                    Architectural Design
                  </h6>

                  {/* Heading */}
                  <h4 className="mb-0">Jane Design Company</h4>
                </div>
              </a>
            </div>
          </div>{" "}
          {/* / .row */}
        </div>{" "}
        {/* / .container */}
      </section>
    </div>
  );
}

export default RelatedWork;