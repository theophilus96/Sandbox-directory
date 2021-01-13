import React from "react";

function Stats() {
  return (
    <div>
      {/* PLACEMENT RATES */}
      <section>
        <div className="container py-8 pt-md-11 pb-md-9 border-top">
          <div className="row">
            <div className="col-12 col-md-10 col-lg-8">
              {/* Preheading */}
              <h6 className="text-uppercase text-primary">Statistics</h6>

              {/* Heading */}
              <h2 className="mb-6 mb-md-8">
                Sandbox is the new way for the constuction industry to
                communicate.
              </h2>

              {/* Stats */}
              <div className="d-flex">
                <div className="pe-5">
                  <h3 className="mb-0">
                    <span
                      data-countup='{"startVal": 0}'
                      data-to="74"
                      data-aos
                      data-aos-id="countup:in"
                    >
                      0
                    </span>
                    k
                  </h3>
                  <p className="text-gray-700 mb-0">Companies</p>
                </div>
                <div className="px-5">
                  <h3 className="mb-0">
                    <span
                      data-countup='{"startVal": 0}'
                      data-to="124"
                      data-aos
                      data-aos-id="countup:in"
                    >
                      0
                    </span>
                    k
                  </h3>
                  <p className="text-gray-700 mb-0">Requests</p>
                </div>
                <div className="ps-5">
                  <h3 className="mb-0">
                    <span
                      data-countup='{"startVal": "0.0", "decimalPlaces": 1}'
                      data-to="1.9"
                      data-aos
                      data-aos-id="countup:in"
                    >
                      0.0
                    </span>
                    k
                  </h3>
                  <p className="text-gray-700 mb-0">Partnerships</p>
                </div>
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

export default Stats;
