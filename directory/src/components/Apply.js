import React from "react";

function Apply() {
  return (
    <div>
      {/* CTA */}
      <section className="pt-6 pt-md-8">
        <div className="container pb-6 pb-md-8 border-bottom">
          <div className="row align-items-center">
            <div className="col-12 col-md">
              {/* Heading */}
              <h3 className="mb-1">Apply under a minute</h3>

              {/* Text */}
              <p className="fs-lg text-muted mb-6 mb-md-0">
                Solving your construction problems
              </p>
            </div>
            <div className="col-12 col-md-auto">
              {/* Button */}
              <a href="#!" className="btn btn-primary-soft me-1 lift">
                Learn more
              </a>

              <a href="#!" className="btn btn-primary lift">
                Get started
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

export default Apply;
