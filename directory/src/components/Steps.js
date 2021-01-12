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
                  <h3>Sign up for an account</h3>

                  {/* Text */}
                  <p className="text-muted mb-6 mb-md-0">
                    Most finish in under a minute.
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
                  <h3>Bring your company to the platform.</h3>

                  {/* Text */}
                  <p className="text-muted mb-6 mb-md-0">
                    Bring your company to the world. Let people find you.
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
                  <h3>Post your problems</h3>

                  {/* Text */}
                  <p className="text-muted mb-0">
                    Post your problems and companies with solutions will seek
                    you out.
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
