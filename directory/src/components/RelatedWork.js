import React from "react";
import useFirestore from "../hooks/useFirestore";

function RelatedWork() {
  const { docs } = useFirestore("company");
  return (
    <div>
      <section className="pt-7 pt-md-10 bg-light">
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-12 col-md">
              {/* Heading */}
              <h3 className="mb-0">Related Work</h3>

              {/* Text */}
              <p className="mb-0 text-muted">
                Other goodies that are similar to this one.
              </p>
            </div>
            <div className="col-12 col-md-auto">
              {/* Button */}
              <a
                href="#!"
                className="btn btn-sm btn-outline-gray-300 d-none d-md-inline"
              >
                View all
              </a>
            </div>
          </div>{" "}
          {/* / .row */}
          <div className="row">
            {docs &&
              docs.slice(0, 3).map((doc) => (
                <div key={doc.id} className="col-12 col-md-6 col-lg-4 d-flex">
                  {/* Card */}
                  <a
                    className="card mb-6 mb-lg-0 shadow-light-lg"
                    href={`/company/${doc.id}`}
                  >
                    {/* Image */}
                    <div className="card-zoom">
                      <img className="card-img-top" src={doc.image} alt="..." />
                    </div>

                    {/* Body */}
                    <div className="card-body">
                      {/* Shape */}
                      <div className="shape shape-bottom-100 shape-fluid-x svg-shim text-white">
                        <svg
                          viewBox="0 0 2880 48"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0 48h2880V0h-720C1442.5 52 720 0 720 0H0v48z"
                            fill="currentColor"
                          ></path>
                        </svg>{" "}
                      </div>

                      {/* Preheading */}
                      <h6 className="text-uppercase mb-1 text-muted">
                        {doc.description}
                      </h6>

                      {/* Heading */}
                      <h4 className="mb-0">{doc.name}</h4>
                    </div>
                  </a>
                </div>
              ))}
          </div>{" "}
          {/* / .row */}
        </div>{" "}
        {/* / .container */}
      </section>
    </div>
  );
}

export default RelatedWork;
