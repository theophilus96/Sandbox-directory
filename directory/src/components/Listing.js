import React from "react";
import useFirestore from "../hooks/useFirestore";
export default function Listing() {
  const { docs } = useFirestore("problem/tLQSvrHR9fE5fI2mv7TV/design");

  console.log(docs);
  return (
    <div className="row">
      <div className="col-12">
        <div className="table-responsive mb-7 mb-md-9">
          <table className="table table-align-middle">
            <thead>
              <tr>
                <th>
                  <span className="h6 text-uppercase fw-bold">Role</span>
                </th>
                <th>
                  <span className="h6 text-uppercase fw-bold">Company</span>
                </th>
                <th>
                  <span className="h6 text-uppercase fw-bold">Location</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {docs &&
                docs.map((doc) => (
                  <tr key={doc.id}>
                    <td>
                      <a
                        href="career-single.html"
                        className="text-reset text-decoration-none"
                      >
                        <p className="mb-1">{doc.title}</p>
                        <p className="fs-sm text-muted mb-0">{doc.id}</p>
                      </a>
                    </td>
                    <td>
                      <a
                        href="career-single.html"
                        className="text-reset text-decoration-none"
                      >
                        <p className="fs-sm mb-0">{doc.company}</p>
                      </a>
                    </td>
                    <td>
                      <a
                        href="career-single.html"
                        className="text-reset text-decoration-none"
                      >
                        <p className="fs-sm mb-0">{doc.location}</p>
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
