import React from "react";
import { Link } from "react-router-dom";
import SandBoxLogo from "../icons/SandboxLogo.png";
//state
import { auth } from "../firebase/config";
import { useStateValue } from "../state/StateProvider";
function Navbar() {
  const [{ user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div>
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-light navbar-togglable fixed-top bg-white border-bottom">
        <div className="container">
          {/* Brand */}
          <Link to="/" className="navbar-brand">
            <img src={SandBoxLogo} className="navbar-brand-img" alt="..." />
          </Link>

          {/* Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapse */}
          <div className="collapse navbar-collapse" id="navbarCollapse">
            {/* Toggler */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fe fe-x"></i>
            </button>

            {/* Navigation */}
            <ul className="navbar-nav ms-auto">
              <li className="nav-item dropdown">
                <Link
                  to="/company"
                  className="nav-link dropdown-toggle"
                  id="navbarLandings"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Companies
                </Link>

                <div
                  className="dropdown-menu dropdown-menu-xl p-0"
                  aria-labelledby="navbarLandings"
                >
                  <div className="row gx-0">
                    <div className="col-12 col-lg-6">
                      <div
                        className="dropdown-img-start"
                        style={{
                          backgroundImage: `url(require("./assets/img/photos/photo-3.jpg"))`,
                        }}
                      >
                        {/* Heading */}
                        <h4 className="fw-bold text-white mb-0">Overview</h4>

                        {/* Text */}
                        <p className="fs-sm text-white">
                          See all the pages at once.
                        </p>

                        {/* Button */}
                        <a
                          href="./overview.html"
                          className="btn btn-sm btn-white shadow-dark fonFt-size-sm"
                        >
                          View all pages
                        </a>
                      </div>
                    </div>
                    <div className="col-6 col-lg-6">
                      <div className="dropdown-body">
                        <div className="row gx-0">
                          <div className="col-6">
                            {/* Heading */}
                            <h6 className="dropdown-header">Types</h6>

                            {/* List */}
                            <a className="dropdown-item" href="#">
                              Residential
                            </a>
                            <a className="dropdown-item" href="./rental.html">
                              Industrial
                            </a>
                            <a className="dropdown-item mb-5" href="./job.html">
                              Commercial
                            </a>
                            <a className="dropdown-item" href="./rental.html">
                              Heavy Civil
                            </a>
                            <a className="dropdown-item" href="./rental.html">
                              Marine
                            </a>
                          </div>
                        </div>{" "}
                        {/* / .row */}
                      </div>
                    </div>
                  </div>{" "}
                  {/* / .row */}
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarPages"
                  data-bs-toggle="dropdown"
                  href="#"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Social
                </a>
                {/* / .row */}
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarAccount"
                  data-bs-toggle="dropdown"
                  href="/blog"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Blog
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDocumentation"
                  data-bs-toggle="dropdown"
                  href="#"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Contacts
                </a>
                <div
                  className="dropdown-menu dropdown-menu-md"
                  aria-labelledby="navbarDocumentation"
                >
                  <div className="list-group list-group-flush">
                    <a className="list-group-item" href="./docs/index.html">
                      {/* Icon */}
                      <div className="icon icon-sm text-primary">
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

                      {/* Content */}
                      <div className="ms-4">
                        {/* Heading */}
                        <h6 className="fw-bold text-uppercase text-primary mb-0">
                          Documentation
                        </h6>

                        {/* Text */}
                        <p className="fs-sm text-gray-700 mb-0">
                          Customizing and building
                        </p>
                      </div>
                    </a>
                    <a className="list-group-item" href="./docs/alerts.html">
                      {/* Icon */}
                      <div className="icon icon-sm text-primary">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g fill="none" fill-rule="evenodd">
                            <path d="M0 0h24v24H0z" />
                            <rect
                              fill="#335EEA"
                              x="4"
                              y="4"
                              width="7"
                              height="7"
                              rx="1.5"
                            />
                            <path
                              d="M5.5 13h4a1.5 1.5 0 011.5 1.5v4A1.5 1.5 0 019.5 20h-4A1.5 1.5 0 014 18.5v-4A1.5 1.5 0 015.5 13zm9-9h4A1.5 1.5 0 0120 5.5v4a1.5 1.5 0 01-1.5 1.5h-4A1.5 1.5 0 0113 9.5v-4A1.5 1.5 0 0114.5 4zm0 9h4a1.5 1.5 0 011.5 1.5v4a1.5 1.5 0 01-1.5 1.5h-4a1.5 1.5 0 01-1.5-1.5v-4a1.5 1.5 0 011.5-1.5z"
                              fill="#335EEA"
                              opacity=".3"
                            />
                          </g>
                        </svg>{" "}
                      </div>

                      {/* Content */}
                      <div className="ms-4">
                        {/* Heading */}
                        <h6 className="fw-bold text-uppercase text-primary mb-0">
                          Components
                        </h6>

                        {/* Text */}
                        <p className="fs-sm text-gray-700 mb-0">
                          Full list of components
                        </p>
                      </div>
                    </a>
                    <a className="list-group-item" href="./docs/changelog.html">
                      {/* Icon */}
                      <div className="icon icon-sm text-primary">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g fill="none" fill-rule="evenodd">
                            <path d="M0 0h24v24H0z" />
                            <path
                              d="M5.857 2h7.88a1.5 1.5 0 01.968.355l4.764 4.029A1.5 1.5 0 0120 7.529v12.554c0 1.79-.02 1.917-1.857 1.917H5.857C4.02 22 4 21.874 4 20.083V3.917C4 2.127 4.02 2 5.857 2z"
                              fill="#335EEA"
                              opacity=".3"
                            />
                            <rect
                              fill="#335EEA"
                              x="6"
                              y="11"
                              width="9"
                              height="2"
                              rx="1"
                            />
                            <rect
                              fill="#335EEA"
                              x="6"
                              y="15"
                              width="5"
                              height="2"
                              rx="1"
                            />
                          </g>
                        </svg>{" "}
                      </div>

                      {/* Content */}
                      <div className="ms-4">
                        {/* Heading */}
                        <h6 className="fw-bold text-uppercase text-primary mb-0">
                          Changelog
                        </h6>

                        {/* Text */}
                        <p className="fs-sm text-gray-700 mb-0">
                          Keep track of changes
                        </p>
                      </div>

                      {/* Badge */}
                      <span className="badge rounded-pill bg-primary-soft ms-auto">
                        2.0.0-beta1
                      </span>
                    </a>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  onClick={handleAuthentication} 
                  href={!user && "/login"}
                >
                  Hello {!user ? "Guest" : user.email}
                </a>
              </li>
            </ul>

            {/* Button */}

            <a
              className="navbar-btn btn btn-sm btn-primary lift ms-auto"
              href={!user && "/login"}
              onClick={handleAuthentication}
            >
              {user ? "Sign Out" : "Sign In"}
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
