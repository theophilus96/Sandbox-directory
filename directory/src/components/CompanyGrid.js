import React from "react";
import HSLlogo from "../img/HSLproject2.jpg";
import MBSlogo from "../img/MBSLogo.jpg";
import CraneLogo from "../img/CraneLogo.jpg";
import useFirestore from "../hooks/useFirestore";
import { Switch, Link, Route, useRouteMatch } from "react-router-dom";

function CompanyGrid({ match }) {
  console.log(match);
  const CompanyData = [
    {
      id: 1,
      name: "HSL Construction",
      description: "Marine Engineering/Construction",
      picture: { HSLlogo },
    },
    {
      id: 2,
      name: "Theo Construction",
      description: "Residential Construction",
      picture: { MBSlogo },
    },
    {
      id: 3,
      name: "John Engineering",
      description: "Civil Engineering",
      picture: { CraneLogo },
    },
  ];

  const { docs } = useFirestore("company");
  console.log(docs);

  return (
    <div>
      <section className="py-8 py-md-11 mt-n10 mt-md-n14">
        <div className="container">
          <div
            className="row"
            id="portfolio"
            data-isotope='{"layoutMode": "fitRows"}'
          >
            {docs &&
              docs.map((doc) => (
                <div className="col-12 col-md-4 product">
                  {/* style={{ position: "absolute", left: "0px", top: "0px" }} */}

                  <Link to={`/company/${doc.id}`} className="card card-flush mb-7">
                    {/* Image */}
                    <div className="card-zoom">
                      <img
                        className="card-img-top rounded shadow-light-lg"
                        src={doc.image}
                        alt="..."
                      />
                      {/* style={{ imageSize: "contain" }} */}
                    </div>

                    {/* Footer */}
                    <div className="card-footer">
                      {/* Preheading */}
                      <h6 className="text-uppercase mb-1 text-muted">
                        {doc.description}
                      </h6>

                      {/* Heading */}
                      <h4 className="mb-0">{doc.name}</h4>
                    </div>
                  </Link>
                </div>
              ))}

            {/* <div
              className="col-12 col-md-4 resources"
              style={{ position: "absolute", left: "346.656px", top: "0px" }}
            >
              <a className="card card-flush mb-7" href="#!">
                <div className="card-zoom">
                  <img
                    className="card-img-top rounded shadow-light-lg"
                    src={MBSlogo}
                    alt="..."
                  />
                </div>
                <div className="card-footer">
                  <h6 className="text-uppercase mb-1 text-muted">
                    Residential Constuction
                  </h6>
                  <h4 className="mb-0">Theo Constuction</h4>
                </div>
              </a>
            </div> */}
            {/* <div
              className="col-12 col-md-4 ux"
              style={{ position: "absolute", left: "693.312px", top: "0px" }}
            >
              <a className="card card-flush mb-7" href="#!">
                <div className="card-zoom">
                  <img
                    className="card-img-top rounded shadow-light-lg"
                    src={CraneLogo}
                    alt="..."
                  />
                </div>
                <div className="card-footer">
                  <h6 className="text-uppercase mb-1 text-muted">
                    Civil Engineering
                  </h6>
                  <h4 className="mb-0">John Engineering</h4>
                </div>
              </a>
            </div> */}
            {/* <div
              className="col-12 col-md-4 resources"
              style={{ position: "absolute", left: "0px", top: "558.641px" }}
            >
              <a className="card card-flush mb-7" href="#!">
                <div className="card-zoom">
                  <img
                    className="card-img-top rounded shadow-light-lg"
                    src="assets/img/portfolio/portfolio-4.jpg"
                    alt="..."
                  />
                </div>
                <div className="card-footer">
                  <h6 className="text-uppercase mb-1 text-muted">Ideation</h6>

                  <h4 className="mb-0">Doodle Pads</h4>
                </div>
              </a>
            </div> */}
            {/* <div
              className="col-12 col-md-4 product"
              style={{
                position: "absolute",
                left: "346.656px",
                top: "558.641px",
              }}
            >
              <a className="card card-flush mb-7" href="#!">
                <div className="card-zoom">
                  <img
                    className="card-img-top rounded shadow-light-lg"
                    src="assets/img/portfolio/portfolio-5.jpg"
                    alt="..."
                  />
                </div>
                <div className="card-footer">
                  <h6 className="text-uppercase mb-1 text-muted">Branding</h6>
                  <h4 className="mb-0">Larq Earthtones Collection</h4>
                </div>
              </a>
            </div> */}
            {/* <div
              className="col-12 col-md-4 resources"
              style={{
                position: "absolute",
                left: "693.312px",
                top: "558.641px",
              }}
            >
              <a className="card card-flush mb-7" href="#!">
                <div className="card-zoom">
                  <img
                    className="card-img-top rounded shadow-light-lg"
                    src="assets/img/portfolio/portfolio-6.jpg"
                    alt="..."
                  />
                </div>
                <div className="card-footer">
                  <h6 className="text-uppercase mb-1 text-muted">
                    Product Design
                  </h6>
                  <h4 className="mb-0">Goby Brush Prototype</h4>
                </div>
              </a>
            </div> */}
            {/* <div
              className="col-12 col-md-4 product"
              style={{ position: "absolute", left: "0px", top: "1117.28px" }}
            >
              <a className="card card-flush mb-7" href="#!">
                <div className="card-zoom">
                  <img
                    className="card-img-top rounded shadow-light-lg"
                    src="assets/img/portfolio/portfolio-7.jpg"
                    alt="..."
                  />
                </div>
                <div className="card-footer">
                  <h6 className="text-uppercase mb-1 text-muted">
                    Product Design
                  </h6>
                  <h4 className="mb-0">Larq Bottle Redesign</h4>
                </div>
              </a>
            </div> */}
            {/* <div
              className="col-12 col-md-4 ux"
              style={{
                position: "absolute",
                left: "346.656px",
                top: "1117.28px",
              }}
            >
              <a className="card card-flush mb-7" href="#!">
                <div className="card-zoom">
                  <img
                    className="card-img-top rounded shadow-light-lg"
                    src="assets/img/portfolio/portfolio-8.jpg"
                    alt="..."
                  />
                </div>
                <div className="card-footer">
                  <h6 className="text-uppercase mb-1 text-muted">
                    Product Design
                  </h6>
                  <h4 className="mb-0">Goby Packaging </h4>
                </div>
              </a>
            </div> */}
            {/* <div
              className="col-12 col-md-4 ux"
              style={{
                position: "absolute",
                left: "693.312px",
                top: "1117.28px",
              }}
            >
              <a className="card card-flush mb-7" href="#!">
                <div className="card-zoom">
                  <img
                    className="card-img-top rounded shadow-light-lg"
                    src="assets/img/portfolio/portfolio-9.jpg"
                    alt="..."
                  />
                </div>
                <div className="card-footer">
                  <h6 className="text-uppercase mb-1 text-muted">Branding</h6>
                  <h4 className="mb-0">Trek Campaign</h4>
                </div>
              </a>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default CompanyGrid;
