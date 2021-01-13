import React from "react";

function HSLsidebar() {
  return (
    <div className="container">
      <div className="row justify-content-between">
        <div
          className="col-12 col-md-4 position-md-sticky d-flex align-items-center vh-md-100"
          style="top: 0;"
        >
          {/* Sidebar */}
          <aside className="py-8 py-md-10">
            {/* Brand */}
            <div
              className="img-fluid mb-4 text-body svg-shim"
              style="max-width: 140px;"
            >
              <svg
                viewBox="0 0 222 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M193.541 43.309c-9.826 0-18.127-8.375-18.127-18.287 0-9.913 8.301-18.287 18.127-18.287 9.826 0 18.127 8.374 18.127 18.287h-.001c0 3.76-1.197 7.297-3.216 10.242l-5.522-5.522-4.591 4.591 5.573 5.574c-2.961 2.131-6.548 3.402-10.37 3.402zm25.704 2.749l-5.518-5.518c3.44-4.226 5.477-9.598 5.477-15.518 0-13.946-11.273-24.87-25.663-24.87-14.391 0-25.664 10.924-25.664 24.87 0 13.945 11.273 24.869 25.664 24.869 5.854 0 11.191-1.808 15.464-4.891l5.649 5.649 4.591-4.591zM1.121 48.858V1.182h7.061v41.094H36.98v6.582H1.12zM121.159 26.569h14.874c7.758 0 10.51-5.064 10.51-9.402 0-4.337-2.752-9.401-10.51-9.401h-14.874v18.803zm23.303 22.29L134.07 33.152h-12.911v15.705h-7.061V1.182h22.649c10.083 0 16.858 6.423 16.858 15.985 0 6.435-4.282 11.92-10.908 13.97l-1.403.435 12.117 17.286h-8.949zM60.404 48.858l14.831-36.43 14.7 36.43h7.874L79.089 4.661a5.703 5.703 0 00-5.252-3.48H58.769v1.234a4.875 4.875 0 004.875 4.874h7.113L52.592 48.86h7.812z"
                  fill="currentColor"
                ></path>
              </svg>{" "}
            </div>

            {/* Text */}
            <p className="fs-lg mb-7 text-muted">
              We created a photographic brand for Larq that’s fun and exciting.
            </p>

            {/* List group */}
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                {/* Heading */}
                <h6 className="d-flex mb-0 text-uppercase">
                  Year <span className="ms-auto">2019</span>
                </h6>
              </li>
              <li className="list-group-item">
                {/* Heading */}
                <h6 className="d-flex mb-0 text-uppercase">
                  Service <span className="ms-auto">Photography</span>
                </h6>
              </li>
              <li className="list-group-item">
                {/* Heading */}
                <h6 className="d-flex mb-0 text-uppercase">
                  Timeline <span className="ms-auto">60 Days</span>
                </h6>
              </li>
            </ul>
          </aside>
        </div>
        <div className="col-12 col-md-7">
          {/* Images */}
          <section className="pb-8 pt-md-12 pb-md-10">
            <a
              className="d-block"
              data-bigpicture='{"imgSrc": "assets/img/portfolio/portfolio-21.jpg"}'
              href="#"
            >
              <img
                className="img-fluid rounded"
                src="assets/img/portfolio/portfolio-21.jpg"
                alt="..."
              />
            </a>
            <a
              className="d-block mt-7"
              data-bigpicture='{"imgSrc": "assets/img/portfolio/portfolio-22.jpg"}'
              href="#"
            >
              <img
                className="img-fluid rounded"
                src="assets/img/portfolio/portfolio-22.jpg"
                alt="..."
              />
            </a>
            <a
              className="d-block mt-7"
              data-bigpicture='{"imgSrc": "assets/img/portfolio/portfolio-23.jpg"}'
              href="#"
            >
              <img
                className="img-fluid rounded"
                src="assets/img/portfolio/portfolio-23.jpg"
                alt="..."
              />
            </a>
            <a
              className="d-block mt-7"
              data-bigpicture='{"imgSrc": "assets/img/portfolio/portfolio-24.jpg"}'
              href="#"
            >
              <img
                className="img-fluid rounded"
                src="assets/img/portfolio/portfolio-24.jpg"
                alt="..."
              />
            </a>
            <a
              className="d-block mt-7"
              data-bigpicture='{"imgSrc": "assets/img/portfolio/portfolio-25.jpg"}'
              href="#"
            >
              <img
                className="img-fluid rounded"
                src="assets/img/portfolio/portfolio-25.jpg"
                alt="..."
              />
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}

export default HSLsidebar;
