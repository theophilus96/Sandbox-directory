import React from "react";

function RequestPost() {
  return (
    <div>
      {/* LATEST POSTS */}
      <section className="py-8 py-md-11 bg-gradient-light-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-6">
              {/* Preheading */}
              <h6 className="text-uppercase text-primary fw-bold">Latest posts</h6>

              {/* Heading */}
              <h2>Check out some recent postings.</h2>

              {/* Text */}
              <p className="text-muted mb-6 mb-md-8">
                We get thousands of job postings weekly, but only accept the
                openings at the top companies.
              </p>
            </div>
            <div className="col-12 col-md-6">
              {/* Image */}
              <img
                src="assets/img/illustrations/illustration-3.png"
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
                        <p className="fw-bold mb-1">Senior Visual Designer</p>
                        <p className="fs-sm text-muted mb-0">
                          5+ years experience · San Francisco
                        </p>
                      </a>
                      <a
                        className="list-group-item text-reset text-decoration-none"
                        href="#!"
                      >
                        <p className="fw-bold mb-1">Motion Graphics Designer</p>
                        <p className="fs-sm text-muted mb-0">
                          2+ years experience · Paris
                        </p>
                      </a>
                      <a
                        className="list-group-item text-reset text-decoration-none"
                        href="#!"
                      >
                        <p className="fw-bold mb-1">Product Designer</p>
                        <p className="fs-sm text-muted mb-0">
                          4+ years experience · Los Angeles
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
                    <span>3</span>
                  </span>

                  {/* List group */}
                  <div>
                    <div className="list-group list-group-flush">
                      <a
                        className="list-group-item text-reset text-decoration-none"
                        href="#!"
                      >
                        <p className="fw-bold mb-1">Ruby Engineer</p>
                        <p className="fs-sm text-muted mb-0">
                          4+ years experience · New York
                        </p>
                      </a>
                      <a
                        className="list-group-item text-reset text-decoration-none"
                        href="#!"
                      >
                        <p className="fw-bold mb-1">Senior Reliability Developer</p>
                        <p className="fs-sm text-muted mb-0">
                          8+ years experience · Pasadena
                        </p>
                      </a>
                      <a
                        className="list-group-item text-reset text-decoration-none"
                        href="#!"
                      >
                        <p className="fw-bold mb-1">QA Engineer</p>
                        <p className="fs-sm text-muted mb-0">
                          2+ years experience · Oakland
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
                    Product
                  </h6>

                  {/* Badge */}
                  <span className="badge badge-rounded-circle bg-success-soft">
                    <span>5</span>
                  </span>

                  {/* List group */}
                  <div>
                    <div className="list-group list-group-flush">
                      <a
                        className="list-group-item text-reset text-decoration-none"
                        href="#!"
                      >
                        <p className="fw-bold mb-1">Project Manager</p>
                        <p className="fs-sm text-muted mb-0">
                          3+ years experience · London
                        </p>
                      </a>
                      <a
                        className="list-group-item text-reset text-decoration-none"
                        href="#!"
                      >
                        <p className="fw-bold mb-1">Head of Product</p>
                        <p className="fs-sm text-muted mb-0">
                          10+ years experience · San Francisco
                        </p>
                      </a>
                      <a
                        className="list-group-item text-reset text-decoration-none"
                        href="#!"
                      >
                        <p className="fw-bold mb-1">Senior Product Manager</p>
                        <p className="fs-sm text-muted mb-0">
                          5+ years experience · Los Angeles
                        </p>
                      </a>
                      <a
                        className="list-group-item text-reset text-decoration-none"
                        href="#!"
                      >
                        <p className="fw-bold mb-1">Junior Project Manager</p>
                        <p className="fs-sm text-muted mb-0">
                          No experience required · Paris
                        </p>
                      </a>
                      <a
                        className="list-group-item text-reset text-decoration-none"
                        href="#!"
                      >
                        <p className="fw-bold mb-1">Application Coordinator</p>
                        <p className="fs-sm text-muted mb-0">
                          6+ years experience · Seattle
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
                        <p className="fw-bold mb-1">Customer Support Specialist</p>
                        <p className="fs-sm text-muted mb-0">
                          4+ years experience · Anywhere
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
                href="#!"
                className="btn w-100 btn-primary d-flex align-items-center lift"
              >
                View over 10,000 other postings{" "}
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
