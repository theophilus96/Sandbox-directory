import React from "react";

function Stats() {
  return (
    <div>
      {/* PLACEMENT RATES */}
      <section>
        <div class="container py-8 pt-md-11 pb-md-9 border-top">
          <div class="row">
            <div class="col-12 col-md-10 col-lg-8">
              {/* Preheading */}
              <h6 class="text-uppercase text-primary">Placement rates</h6>

              {/* Heading */}
              <h2 class="mb-6 mb-md-8">
                Landkit is the leading job placement site with the highest rate
                of success of any tech job board.
              </h2>

              {/* Stats */}
              <div class="d-flex">
                <div class="pe-5">
                  <h3 class="mb-0">
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
                  <p class="text-gray-700 mb-0">Placements</p>
                </div>
                <div class="px-5">
                  <h3 class="mb-0">
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
                  <p class="text-gray-700 mb-0">Positions</p>
                </div>
                <div class="ps-5">
                  <h3 class="mb-0">
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
                  <p class="text-gray-700 mb-0">Partnerships</p>
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
