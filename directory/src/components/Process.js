import React from "react";

function Process() {
  return (
    <div>
      {/* PROCESS */}
      <section class="pt-8 pt-md-11">
        <div class="container">
          <div class="row align-items-center justify-content-between">
            <div class="col-12 col-md-6">
              {/* Preheading */}
              <h6 class="text-uppercase text-primary fw-bold">Process</h6>

              {/* Heading */}
              <h2>
                Our process to find you a new job is fast and you can do it from
                home.
              </h2>

              {/* Text */}
              <p class="lead text-muted mb-6 mb-md-0">
                We keep everything as simple as possible by standardizing the
                application process for all jobs.
              </p>
            </div>
            <div class="col-12 col-md-6 col-xl-5">
              <div class="row gx-0">
                <div class="col-4">
                  {/* Image */}
                  <div
                    class="w-150 mt-9 p-1 bg-white shadow-lg"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <img
                      src="assets/img/photos/photo-13.jpg"
                      class="img-fluid"
                      alt="..."
                    />
                  </div>
                </div>
                <div class="col-4">
                  {/* Image */}
                  <div class="w-150 p-1 bg-white shadow-lg" data-aos="fade-up">
                    <img
                      src="assets/img/photos/photo-14.jpg"
                      class="img-fluid"
                      alt="..."
                    />
                  </div>
                </div>
                <div class="col-4 position-relative">
                  {/* Image */}
                  <div
                    class="w-150 mt-11 float-end p-1 bg-white shadow-lg"
                    data-aos="fade-up"
                    data-aos-delay="150"
                  >
                    <img
                      src="assets/img/photos/photo-15.jpg"
                      class="img-fluid"
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
