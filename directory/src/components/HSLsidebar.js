import React from "react";
import HSLproject1 from "../img/HSLproject1.png";
import HSLproject2 from "../img/HSLproject2.jpg";
import HSLproject3 from "../img/HSLproject3.jpg";
import HSLproject4 from "../img/HSLproject4.jpg";
import HSLproject5 from "../img/HSLproject5.jpg";
import HSLproject6 from "../img/HSLproject6.jpg";

function HSLsidebar() {
  return (
    <div className="container">
      <div className="row justify-content-between">
        <div
          className="col-12 col-md-4 position-md-sticky d-flex align-items-center vh-md-100"
          style={{ top: "0" }}
        >
          {/* Sidebar */}
          <aside className="py-8 py-md-10">
            {/* Brand */}
            <div
              className="img-fluid mb-4 text-body svg-shim"
              style={{ maxWidth: "140px" }}
            >
              <h1>HSL Constructor Pte Ltd</h1>
            </div>

            {/* Text */}
            <p className="fs-lg mb-7 text-muted">
              HSL is a regional infrastructure construction company <br />
              We help bring electricity and clean water to communities <br />
              We deliver marine infrastructure
              <br /> We also support the Oil & Petrochemical industry
            </p>

            {/* List group */}
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                {/* Heading */}
                <h6 className="d-flex mb-0 text-uppercase">
                  Address
                  <span className="ms-auto">Singapore 609162</span>
                </h6>
              </li>
              <li className="list-group-item">
                {/* Heading */}
                <h6 className="d-flex mb-0 text-uppercase">
                  Service <span className="ms-auto">Marine infrastructure</span>
                </h6>
              </li>
              <li className="list-group-item">
                {/* Heading */}
                <h6 className="d-flex mb-0 text-uppercase">
                  Phone <span className="ms-auto"> 6898 5225</span>
                </h6>
              </li>
            </ul>
          </aside>
        </div>
        <div className="col-12 col-md-7">
          {/* Images */}
          <section className="pb-8 pt-md-12 pb-md-10">
            <a className="d-block" data-bigpicture={HSLproject1} href="#">
              <img className="img-fluid rounded" src={HSLproject1} alt="..." />
            </a>
            <a className="d-block mt-7" data-bigpicture={HSLproject2} href="#">
              <img className="img-fluid rounded" src={HSLproject2} alt="..." />
            </a>
            <a className="d-block mt-7" data-bigpicture={HSLproject3} href="#">
              <img className="img-fluid rounded" src={HSLproject3} alt="..." />
            </a>
            <a className="d-block mt-7" data-bigpicture={HSLproject4} href="#">
              <img className="img-fluid rounded" src={HSLproject4} alt="..." />
            </a>
            <a className="d-block mt-7" data-bigpicture={HSLproject5} href="#">
              <img className="img-fluid rounded" src={HSLproject5} alt="..." />
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}

export default HSLsidebar;
