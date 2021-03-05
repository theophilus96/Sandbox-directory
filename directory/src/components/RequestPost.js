import React from "react";
import ConstructionIllustration from "../illustration/illustration1.jpg";

function RequestPost() {
  return (
    <div>
      {/* LATEST POSTS */}
      <section className="py-8 py-md-11 bg-gradient-light-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-6">
              {/* Preheading */}
              <h6 className="text-uppercase text-primary fw-bold">
                Latest posts
              </h6>

              {/* Heading */}
              <h2>Check out some recent problems posted.</h2>

              {/* Text */}
              <p className="text-muted mb-6 mb-md-8">
                We get thousands of request weekly, maybe you could help solve
                some.
              </p>
            </div>
            <div className="col-12 col-md-6">
              {/* Image */}
              <img
                src={ConstructionIllustration}
                className="img-fluid"
                alt="..."
              />
            </div>
          </div>{" "}
          {/* / .row */}
          <div className="row">
            <div className="col-12 col-md-6">
              {/* Card */}
              <div
                className="card card-border border-primary shadow-light-lg mb-6 mb-md-8"
                data-aos="fade-up"
              >
                <div className="card-body">
                  {/* Heading */}
                  <h6 className="text-uppercase text-primary d-inline-block mb-5 me-1">
                    Design
                  </h6>

                  {/* Badge */}
                  <span className="badge badge-rounded-circle bg-primary-soft">
                    <span>3</span>
                  </span>

                  {/* List group */}
                  <div>
                    <div className="list-group list-group-flush">
                      <a
                        className="list-group-item text-reset text-decoration-none"
                        href="#!"
                      >
                        <p className="fw-bold mb-1">School Building Design</p>
                        <p className="fs-sm text-muted mb-0">
                          Theo Construction · San Francisco
                        </p>
                      </a>
                      <a
                        className="list-group-item text-reset text-decoration-none"
                        href="#!"
                      >
                        <p className="fw-bold mb-1">New Crane Design</p>
                        <p className="fs-sm text-muted mb-0">
                          John Machine Engineering · Paris
                        </p>
                      </a>
                      <a
                        className="list-group-item text-reset text-decoration-none"
                        href="#!"
                      >
                        <p className="fw-bold mb-1">Jetty Design</p>
                        <p className="fs-sm text-muted mb-0">
                          HSL Construction · Singapore
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card */}
              <div
                className="card card-border border-danger shadow-light-lg mb-6 mb-md-8"
                data-aos="fade-up"
              >
                <div className="card-body">
                  {/* Heading */}
                  <h6 className="text-uppercase text-danger d-inline-block mb-5 me-1">
                    Engineering
                  </h6>

                  {/* Badge */}
                  <span className="badge badge-rounded-circle bg-danger-soft">
                    <span>1</span>
                  </span>

                  {/* List group */}
                  <div>
                    <div className="list-group list-group-flush">
                      <a
                        className="list-group-item text-reset text-decoration-none"
                        href="#!"
                      >
                        <p className="fw-bold mb-1">Crane Engineer</p>
                        <p className="fs-sm text-muted mb-0">
                          John Machine Engineering · New York
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              {/* Card */}
              <div
                className="card card-border border-success shadow-light-lg mb-6 mb-md-8"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="card-body">
                  {/* Heading */}
                  <h6 className="text-uppercase text-success d-inline-block mb-5 me-1">
                    General
                  </h6>

                  {/* Badge */}
                  <span className="badge badge-rounded-circle bg-success-soft">
                    <span>2</span>
                  </span>

                  {/* List group */}
                  <div>
                    <div className="list-group list-group-flush">
                      <a
                        className="list-group-item text-reset text-decoration-none"
                        href="#!"
                      >
                        <p className="fw-bold mb-1">Crane Fuel Problem</p>
                        <p className="fs-sm text-muted mb-0">
                          HSL construction· Singapore
                        </p>
                      </a>
                      <a
                        className="list-group-item text-reset text-decoration-none"
                        href="#!"
                      >
                        <p className="fw-bold mb-1">Innovation of new Bricks</p>
                        <p className="fs-sm text-muted mb-0">
                          Israel Construction · Israel
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card */}
              <div
                className="card card-border border-gray-800 shadow-light-lg mb-6 mb-md-8"
                data-aos="fade-up"
              >
                <div className="card-body">
                  {/* Heading */}
                  <h6 className="text-uppercase text-gray-500 d-inline-block mb-5 me-1">
                    Support
                  </h6>

                  {/* Badge */}
                  <span className="badge badge-rounded-circle bg-dark-soft">
                    <span>1</span>
                  </span>

                  {/* List group */}
                  <div>
                    <div className="list-group list-group-flush">
                      <a
                        className="list-group-item text-reset text-decoration-none"
                        href="#!"
                      >
                        <p className="fw-bold mb-1">
                          Extra manpower help needed
                        </p>
                        <p className="fs-sm text-muted mb-0">
                          Theo Construction · Singapore
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* / .row */}
          <div className="row justify-content-center">
            <div className="col-12 col-md-6" data-aos="fade-up">
              {/* Button */}
              <a
                href="/listing"
                className="btn w-100 btn-primary d-flex align-items-center lift"
              >
                View over 10,000 other request{" "}
                <i className="fe fe-arrow-right ms-auto"></i>
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

export default RequestPost;
