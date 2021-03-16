import React from "react";
import ConstructionImage6 from "../img/construction6.jpg";

export default function BlogHeader() {
  return (
    <div>
      <section
        data-jarallax
        data-speed=".8"
        className="py-10 py-md-14 overlay overlay-black overlay-60 bg-cover jarallax"
        style={{
            backgroundImage: `url(${ConstructionImage6})`,
            }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-7 text-center">
              {/* <!-- Heading --> */}
              <h1 className="display-2 fw-bold text-white">Our Newsroom</h1>

              {/* <!-- Text --> */}
              <p className="lead mb-0 text-white-75">
                Consruction news and article
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- SHAPE --> */}
      <div className="position-relative">
        <div className="shape shape-bottom shape-fluid-x svg-shim text-light">
          <svg
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48h2880V0h-720C1442.5 52 720 0 720 0H0v48z"
              fill="currentColor"
            />
          </svg>{" "}
        </div>
      </div>

      {/* <!-- SEARCH --> */}
      <section className="mt-n6">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <form className="rounded shadow mb-4">
                <div className="input-group input-group-lg">
                  <span className="input-group-text border-0 pe-1">
                    <i className="fe fe-search"></i>
                  </span>

                  <input
                    className="form-control border-0 px-1"
                    type="text"
                    aria-label="Search our blog..."
                    placeholder="Search our blog..."
                  ></input>

                  <span className="input-group-text border-0 py-0 ps-1 pe-3">
                    <a className="btn btn-sm btn-primary" href="#!">
                      Search
                    </a>
                  </span>
                </div>
              </form>

              {/* <!-- Badges --> */}
              <div className="row align-items-center">
                <div className="col-auto">
                  {/* <!-- Heading --> */}
                  <h6 className="fw-bold text-uppercase text-muted mb-0">Tags:</h6>
                </div>
                <div className="col ms-n5">
                  {/* <!-- Badges --> */}
                  <a
                    className="badge rounded-pill bg-secondary-soft"
                    href="#!"
                  >
                    <span className="h6 text-uppercase">Design</span>
                  </a>
                  <a
                    className="badge rounded-pill bg-secondary-soft"
                    href="#!"
                  >
                    <span className="h6 text-uppercase">Product</span>
                  </a>
                  <a
                    className="badge rounded-pill bg-secondary-soft"
                    href="#!"
                  >
                    <span className="h6 text-uppercase">UX</span>
                  </a>
                  <a
                    className="badge rounded-pill bg-secondary-soft"
                    href="#!"
                  >
                    <span className="h6 text-uppercase">Resources</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
