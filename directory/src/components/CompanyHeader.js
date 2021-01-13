import React from "react";
import CompanySearch from "./CompanySearch";

function CompanyHeader() {
  return (
    <div>
      <section className="pt-8 pt-md-12 pb-12 pb-md-15">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 text-center">
              {/* Headin */}
              <h1 className="display-1 fw-bold">Our Companies.</h1>

              {/* Text */}
              <p className="lead text-secondary mb-4">
                Find a new company to network with. Grow your projects together.
              </p>

              {/* Badges */}
              {/* <nav className="nav justify-content-center">
                <a
                  className="badge rounded-pill bg-secondary-soft active me-1 mb-1"
                  href="asd.html"
                  data-bs-toggle="pill"
                  data-filter="*"
                  data-bs-target="#portfolio"
                >
                  <span className="h6 text-uppercase">Primary</span>
                </a>
                <a
                  className="badge rounded-pill bg-secondary-soft me-1 mb-1"
                  href="asd.html"
                  data-bs-toggle="pill"
                  data-filter=".product"
                  data-bs-target="#portfolio"
                >
                  <span className="h6 text-uppercase">Product</span>
                </a>
                <a
                  className="badge rounded-pill bg-secondary-soft me-1 mb-1"
                  href="asd.html"
                  data-bs-toggle="pill"
                  data-filter=".ux"
                  data-bs-target="#portfolio"
                >
                  <span className="h6 text-uppercase">UX</span>
                </a>
                <a
                  className="badge rounded-pill bg-secondary-soft me-1 mb-1"
                  href="asd.html"
                  data-bs-toggle="pill"
                  data-filter=".resources"
                  data-bs-target="#portfolio"
                >
                  <span className="h6 text-uppercase">Resources</span>
                </a>
              </nav> */}
            </div>
            <br />
            <div className="container">
              <div className="pt-8 pt-md-8 pb-2 pb-md-2 row align-items-center">
                <CompanySearch />
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

export default CompanyHeader;
