import React from "react";
import FacebookLogo from "../icons/facebook.svg";
import TwitterLogo from "../icons/twitter.svg";
import InstagramLogo from "../icons/instagram.svg";
import PinterestLogo from "../icons/pinterest.svg";
import SandBoxLogo from "../icons/SandboxLogo.png";

function Footer() {
  return (
    <div>
      {/* FOOTER */}
      <footer className="py-8 py-md-11 bg-white">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4 col-lg-3">
              {/* Brand */}
              <img
                src={SandBoxLogo}
                alt="..."
                className="footer-brand img-fluid mb-2"
              />

              {/* Text */}
              <p className="text-gray-700 mb-2">A better way to build.</p>

              {/* Social */}
              <ul className="list-unstyled list-inline list-social mb-6 mb-md-0">
                <li className="list-inline-item list-social-item me-3">
                  <a href="#!" className="text-decoration-none">
                    <img
                      src={InstagramLogo}
                      className="list-social-icon"
                      alt="..."
                    />
                  </a>
                </li>
                <li className="list-inline-item list-social-item me-3">
                  <a href="#!" className="text-decoration-none">
                    <img
                      src={FacebookLogo}
                      className="list-social-icon"
                      alt="..."
                    />
                  </a>
                </li>
                <li className="list-inline-item list-social-item me-3">
                  <a href="#!" className="text-decoration-none">
                    <img
                      src={TwitterLogo}
                      className="list-social-icon"
                      alt="..."
                    />
                  </a>
                </li>
                <li className="list-inline-item list-social-item">
                  <a href="#!" className="text-decoration-none">
                    <img
                      src={PinterestLogo}
                      className="list-social-icon"
                      alt="..."
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              {/* Heading */}
              <h6 className="fw-bold text-uppercase text-gray-700">Products</h6>

              {/* List */}
              <ul className="list-unstyled text-muted mb-6 mb-md-8 mb-lg-0">
                <li className="mb-3">
                  <a href="#!" className="text-reset">
                    Page Builder
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#!" className="text-reset">
                    UI Kit
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#!" className="text-reset">
                    Styleguide
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#!" className="text-reset">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-reset">
                    Changelog
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              {/* Heading */}
              <h6 className="fw-bold text-uppercase text-gray-700">Services</h6>

              {/* List */}
              <ul className="list-unstyled text-muted mb-6 mb-md-8 mb-lg-0">
                <li className="mb-3">
                  <a href="#!" className="text-reset">
                    Documentation
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#!" className="text-reset">
                    Changelog
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#!" className="text-reset">
                    Pagebuilder
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-reset">
                    UI Kit
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-4 offset-md-4 col-lg-2 offset-lg-0">
              {/* Heading */}
              <h6 className="fw-bold text-uppercase text-gray-700">Connect</h6>

              {/* List */}
              <ul className="list-unstyled text-muted mb-0">
                <li className="mb-3">
                  <a href="#!" className="text-reset">
                    Page Builder
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#!" className="text-reset">
                    UI Kit
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#!" className="text-reset">
                    Styleguide
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#!" className="text-reset">
                    Documentation
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#!" className="text-reset">
                    Changelog
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#!" className="text-reset">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-reset">
                    Changelog
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              {/* Heading */}
              <h6 className="fw-bold text-uppercase text-gray-700">Legal</h6>

              {/* List */}
              <ul className="list-unstyled text-muted mb-0">
                <li className="mb-3">
                  <a href="#!" className="text-reset">
                    Documentation
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#!" className="text-reset">
                    Changelog
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-reset">
                    Pagebuilder
                  </a>
                </li>
              </ul>
            </div>
          </div>{" "}
          {/* / .row */}
        </div>{" "}
        {/* / .container */}
      </footer>
    </div>
  );
}

export default Footer;
