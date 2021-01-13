import React from "react";

function CompanyGrid() {
  return (
    <div>
      <section className="py-8 py-md-11 mt-n10 mt-md-n14">
        <div className="container">
          <div
            className="row"
            id="portfolio"
            data-isotope='{"layoutMode": "fitRows"}'
            style={{ position: "relative" }}
          >
            <div
              className="col-12 col-md-4 product"
              style={{ position: "absolute", left: "0px", top: "0px" }}
            >
              {/* Card */}
              <a className="card card-flush mb-7" href="#!">
                {/* Image */}
                <div className="card-zoom">
                  <img
                    className="card-img-top rounded shadow-light-lg"
                    src="assets/img/portfolio/portfolio-1.jpg"
                    alt="..."
                  />
                </div>

                {/* Footer */}
                <div className="card-footer">
                  {/* Preheading */}
                  <h6 className="text-uppercase mb-1 text-muted">Branding</h6>

                  {/* Heading */}
                  <h4 className="mb-0">Curology Campaign</h4>
                </div>
              </a>
            </div>
            <div
              className="col-12 col-md-4 resources"
              style={{ position: "absolute", left: "346.656px", top: "0px" }}
            >
              {/* Card */}
              <a className="card card-flush mb-7" href="#!">
                {/* Image */}
                <div className="card-zoom">
                  <img
                    className="card-img-top rounded shadow-light-lg"
                    src="assets/img/portfolio/portfolio-2.jpg"
                    alt="..."
                  />
                </div>

                {/* Footer */}
                <div className="card-footer">
                  {/* Preheading */}
                  <h6 className="text-uppercase mb-1 text-muted">Packaging</h6>

                  {/* Heading */}
                  <h4 className="mb-0">Honest Packaging</h4>
                </div>
              </a>
            </div>
            <div
              className="col-12 col-md-4 ux"
              style={{ position: "absolute", left: "693.312px", top: "0px" }}
            >
              {/* Card */}
              <a className="card card-flush mb-7" href="#!">
                {/* Image */}
                <div className="card-zoom">
                  <img
                    className="card-img-top rounded shadow-light-lg"
                    src="assets/img/portfolio/portfolio-3.jpg"
                    alt="..."
                  />
                </div>

                {/* Footer */}
                <div className="card-footer">
                  {/* Preheading */}
                  <h6 className="text-uppercase mb-1 text-muted">Branding</h6>

                  {/* Heading */}
                  <h4 className="mb-0">Larq Bright Campaign</h4>
                </div>
              </a>
            </div>
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
