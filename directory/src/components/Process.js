import React from "react";
import ConstructionImage3 from "../img/construction3.jpg";
import ConstructionImage4 from "../img/construction4.jpg";
import ConstructionImage5 from "../img/construction5.jpg";

function Process() {
  return (
    <div>
      {/* PROCESS */}
      <section className="pt-8 pt-md-11">
        <div className="container py-8 pt-md-11 pb-md-9  border-top">
          <div className="row align-items-center justify-content-between">
            <div className="col-12 col-md-6">
              {/* Preheading */}
              <h6 className="text-uppercase text-primary fw-bold">Process</h6>

              {/* Heading */}
              <h2>Our process to find you a solution is fast and easy.</h2>

              {/* Text */}
              <p className="lead text-muted mb-6 mb-md-0">
                We keep everything as simple as possible by standardizing the
                application process for all problems.
              </p>
            </div>
            <div className="col-12 col-md-6 col-xl-5">
              <div className="row gx-0">
                <div className="col-4">
                  {/* Image */}
                  <div
                    className="w-150 mt-9 p-1 bg-white shadow-lg"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <img
                      src={ConstructionImage3}
                      className="img-fluid"
                      alt="..."
                      style={{
                        backgroundImage: `url(${ConstructionImage3})`,
                        backgroundSize: "cover",
                        maxWidth: "100%",
                      }}
                    />
                  </div>
                </div>
                <div className="col-4">
                  {/* Image */}
                  <div
                    className="w-150 p-1 bg-white shadow-lg"
                    data-aos="fade-up"
                  >
                    <img
                      src={ConstructionImage4}
                      className="img-fluid"
                      alt="..."
                    />
                  </div>
                </div>
                <div className="col-4 position-relative">
                  {/* Image */}
                  <div
                    className="w-150 mt-11 float-end p-1 bg-white shadow-lg"
                    data-aos="fade-up"
                    data-aos-delay="150"
                  >
                    <img
                      src={ConstructionImage5}
                      className="img-fluid"
                      alt="..."
                    />
                  </div>
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

export default Process;
