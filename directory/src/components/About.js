import React from "react";

function About() {
  return (
    <div>
      {/* ABOUT */}
      <section class="py-8 py-md-11 bg-light">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-12 col-md-5 col-lg-6 order-md-2">
              {/* iPhone + Macbook */}
              <div class="w-md-150 w-lg-130 mb-6 mb-md-0">
                <div class="device-combo device-combo-iphonex-macbook">
                  {/* iPhone */}
                  <div class="device device-iphonex">
                    <img
                      src="assets/img/screenshots/mobile/jobs.jpg"
                      class="device-screen"
                      alt="..."
                    />
                    <img
                      src="assets/img/devices/iphonex.svg"
                      class="img-fluid"
                      alt="..."
                    />
                  </div>

                  {/* Macbook */}
                  <div class="device device-macbook">
                    <img
                      src="assets/img/screenshots/desktop/jobs.jpg"
                      class="device-screen"
                      alt="..."
                    />
                    <img
                      src="assets/img/devices/macbook.svg"
                      class="img-fluid"
                      alt="..."
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-7 col-lg-6 order-md-1">
              {/* Heading */}
              <h2>
                Keep your job applications <br />
                <span class="text-primary">organized and up to date</span>.
              </h2>

              {/* Text */}
              <p class="fs-lg text-muted mb-6">
                Landkit centralizes all your job applications, resumes, and
                work, whether they're from our platform or through another site
                or service.
              </p>

              {/* List */}
              <div class="d-flex">
                {/* Icon */}
                <div class="icon text-primary">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <path d="M0 0h24v24H0z" />
                      <path
                        d="M8 3v.5A1.5 1.5 0 009.5 5h5A1.5 1.5 0 0016 3.5V3h2a2 2 0 012 2v16a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2h2z"
                        fill="#335EEA"
                        opacity=".3"
                      />
                      <path
                        d="M11 2a1 1 0 012 0h1.5a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-5a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5H11z"
                        fill="#335EEA"
                      />
                      <rect
                        fill="#335EEA"
                        opacity=".3"
                        x="7"
                        y="10"
                        width="5"
                        height="2"
                        rx="1"
                      />
                      <rect
                        fill="#335EEA"
                        opacity=".3"
                        x="7"
                        y="14"
                        width="9"
                        height="2"
                        rx="1"
                      />
                    </g>
                  </svg>{" "}
                </div>

                <div class="ms-5">
                  {/* Heading */}
                  <h4 class="mb-1">Magic Resume</h4>

                  {/* Text */}
                  <p class="text-muted mb-5">
                    Magic Resume will adapt based on what positions the employer
                    has available when it's shared.
                  </p>
                </div>
              </div>
              <div class="d-flex">
                {/* Icon */}
                <div class="icon text-primary">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <path d="M0 0h24v24H0z" />
                      <path
                        d="M3.5 21h17a1.5 1.5 0 001.5-1.5v-11A1.5 1.5 0 0020.5 7H10L7.44 4.44A1.5 1.5 0 006.378 4H3.5A1.5 1.5 0 002 5.5v14A1.5 1.5 0 003.5 21z"
                        fill="#335EEA"
                        opacity=".3"
                      />
                      <path
                        d="M12 17.228l-2.198 1.207a.527.527 0 01-.727-.236.585.585 0 01-.054-.357l.42-2.557-1.778-1.812a.58.58 0 01-.01-.795.53.53 0 01.308-.164l2.457-.373 1.1-2.327a.528.528 0 01.965 0l1.099 2.327 2.457.373a.56.56 0 01.455.637.572.572 0 01-.157.322l-1.778 1.812.42 2.557a.56.56 0 01-.44.65.518.518 0 01-.34-.057L12 17.228z"
                        fill="#335EEA"
                        opacity=".3"
                      />
                    </g>
                  </svg>{" "}
                </div>

                <div class="ms-5">
                  {/* Heading */}
                  <h4 class="mb-1">Employer Insights</h4>

                  {/* Text */}
                  <p class="text-muted mb-0">
                    Learn about who's looking at your profile and what
                    experience they're most interested in.
                  </p>
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

export default About;
