import React from "react";

function Steps() {
  return (
    <div>
      {/* STEPS */}
      <section className="pt-8 pb-9 pt-md-11 pb-md-13">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4">
              <div className="row">
                <div className="col-auto col-md-12">
                  {/* Step */}
                  <div className="row gx-0 align-items-center mb-md-5">
                    <div className="col-auto">
                      <a
                        href="#!"
                        className="btn btn-sm btn-rounded-circle btn-gray-400 disabled opacity-1"
                      >
                        <span>1</span>
                      </a>
                    </div>
                    <div className="col">
                      <hr className="d-none d-md-block me-n7" />
                    </div>
                  </div>{" "}
                  {/* / .row */}
                </div>
                <div className="col col-md-12 ms-n5 ms-md-0">
                  {/* Heading */}
                  <h3>Complete your application.</h3>

                  {/* Text */}
                  <p className="text-muted mb-6 mb-md-0">
                    Fill out our standardized application on our platform. Most
                    applicants finish in under an hour.
                  </p>
                </div>
              </div>{" "}
              {/* / .row */}
            </div>
            <div className="col-12 col-md-4">
              <div className="row">
                <div className="col-auto col-md-12">
                  {/* Step */}
                  <div className="row gx-0 align-items-center mb-md-5">
                    <div className="col-auto">
                      <a
                        href="#!"
                        className="btn btn-sm btn-rounded-circle btn-gray-400 disabled opacity-1"
                      >
                        <span>2</span>
                      </a>
                    </div>
                    <div className="col">
                      <hr className="d-none d-md-block me-n7" />
                    </div>
                  </div>{" "}
                  {/* / .row */}
                </div>
                <div className="col col-md-12 ms-n5 ms-md-0">
                  {/* Heading */}
                  <h3>Select companies.</h3>

                  {/* Text */}
                  <p className="text-muted mb-6 mb-md-0">
                    We'll immediately match you with any relevant openings and
                    you get to pick which ones you're interested in.
                  </p>
                </div>
              </div>{" "}
              {/* / .row */}
            </div>
            <div className="col-12 col-md-4">
              <div className="row">
                <div className="col-auto col-md-12">
                  {/* Step */}
                  <div className="row gx-0 align-items-center mb-md-5">
                    <div className="col-auto">
                      <a
                        href="#!"
                        className="btn btn-sm btn-rounded-circle btn-gray-400 disabled opacity-1"
                      >
                        <span>3</span>
                      </a>
                    </div>
                  </div>{" "}
                  {/* / .row */}
                </div>
                <div className="col col-md-12 ms-n5 ms-md-0">
                  {/* Heading */}
                  <h3>Choose your offer.</h3>

                  {/* Text */}
                  <p className="text-muted mb-0">
                    After 3 days all of your offers will arrive and you will
                    have another 7 days to select your new company.
                  </p>
                </div>
              </div>{" "}
              {/* / .row */}
            </div>
          </div>{" "}
          {/* / .row */}
        </div>{" "}
        {/* / .container */}
      </section>
    </div>
  );
}

export default Steps;
