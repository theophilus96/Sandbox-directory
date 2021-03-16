import React, { useState, useEffect } from "react";
import useFirestore from "../hooks/useFirestore";
import { projectFirestore } from "../firebase/config";
import { useStateValue } from "../state/StateProvider";

export default function Listing() {
  const [{ user }] = useStateValue();
  const design = useFirestore("problem/tLQSvrHR9fE5fI2mv7TV/design").docs;
  const engineering = useFirestore("problem/tLQSvrHR9fE5fI2mv7TV/engineering")
    .docs;

  const general = useFirestore("problem/tLQSvrHR9fE5fI2mv7TV/general").docs;

  const support = useFirestore("problem/tLQSvrHR9fE5fI2mv7TV/support").docs;

  const [type, setType] = useState("");

  const deleteItem = (id, type) => {
    projectFirestore
      .collection("problem")
      .doc("tLQSvrHR9fE5fI2mv7TV")
      .collection(type)
      .doc(id)
      .delete();
  };

  useEffect(() => {
    console.log("type = ", type); // do something after state has updated
  }, [type]);

  // console.log(engineering);
  return (
    <section className="pt-12 pt-md-12 bt-2 py-md-2">
      <div className="container pb-8 pb-md-11 ">
        <div className="row align-items-center mb-5">
          <div className="col">
            <h4 className="fw-bold mb-1">Design</h4>

            <p className="fs-sm text-muted mb-0">
              Design questions and problems
            </p>
          </div>
          <div className="col-auto">
            <span className="badge rounded-pill bg-primary-soft">
              <span className="h6 text-uppercase">{design.length} request</span>
            </span>
          </div>
        </div>
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
                      <span className="h6 text-uppercase fw-bold">
                        Location
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {design &&
                    design.map((doc) => (
                      <tr key={doc.id}>
                        <td>
                          <a
                            href="#!"
                            className="text-reset text-decoration-none"
                          >
                            <p className="mb-1">{doc.title}</p>
                            <p className="fs-sm text-muted mb-0">
                              {doc.description}
                            </p>
                          </a>
                        </td>
                        <td>
                          <a
                            href="#!"
                            className="text-reset text-decoration-none"
                          >
                            <p className="fs-sm mb-0">{doc.company}</p>
                          </a>
                        </td>
                        <td>
                          <a
                            href="#!"
                            className="text-reset text-decoration-none"
                          >
                            <p className="fs-sm mb-0">{doc.location}</p>
                          </a>
                          {user && (doc.userEmail === user.email) ? (
                            <button
                              onClick={() => {
                                setType("design");
                                deleteItem(doc.id, "design");
                              }}
                              className="btn btn-xs btn-rounded-circle btn-danger"
                            >
                              <i className="fe fe-x"></i>
                            </button>
                          ) : null}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="container pb-8 pb-md-11">
        <div className="row align-items-center mb-5">
          <div className="col">
            <h4 className="fw-bold mb-1">Engineering</h4>

            <p className="fs-sm text-muted mb-0">
              Engineering questions and problems
            </p>
          </div>
          <div className="col-auto">
            <span className="badge rounded-pill bg-danger-soft">
              <span className="h6 text-uppercase">
                {engineering.length} request
              </span>
            </span>
          </div>
        </div>
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
                      <span className="h6 text-uppercase fw-bold">
                        Location
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {engineering &&
                    engineering.map((doc) => (
                      <tr key={doc.id}>
                        <td>
                          <a
                            href="#!"
                            className="text-reset text-decoration-none"
                          >
                            <p className="mb-1">{doc.title}</p>
                            <p className="fs-sm text-muted mb-0">
                              {doc.description}
                            </p>
                          </a>
                        </td>
                        <td>
                          <a
                            href="#!"
                            className="text-reset text-decoration-none"
                          >
                            <p className="fs-sm mb-0">{doc.company}</p>
                          </a>
                        </td>
                        <td>
                          <a
                            href="#!"
                            className="text-reset text-decoration-none"
                          >
                            <p className="fs-sm mb-0">{doc.location}</p>
                          </a>
                          {user && (doc.userEmail === user.email) ? (
                            <button
                              onClick={() => {
                                setType("engineering");
                                deleteItem(doc.id, "engineering");
                              }}
                              className="btn btn-xs btn-rounded-circle btn-danger"
                            >
                              <i className="fe fe-x"></i>
                            </button>
                          ) : null}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="container pb-8 pb-md-11 ">
        <div className="row align-items-center mb-5">
          <div className="col">
            <h4 className="fw-bold mb-1">General</h4>

            <p className="fs-sm text-muted mb-0">
              General questions and problems
            </p>
          </div>
          <div className="col-auto">
            <span className="badge rounded-pill bg-success-soft">
              <span className="h6 text-uppercase">
                {general.length} request
              </span>
            </span>
          </div>
        </div>
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
                      <span className="h6 text-uppercase fw-bold">
                        Location
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {general &&
                    general.map((doc) => (
                      <tr key={doc.id}>
                        <td>
                          <a
                            href="#!"
                            className="text-reset text-decoration-none"
                          >
                            <p className="mb-1">{doc.title}</p>
                            <p className="fs-sm text-muted mb-0">
                              {doc.description}
                            </p>
                          </a>
                        </td>
                        <td>
                          <a
                            href="#!"
                            className="text-reset text-decoration-none"
                          >
                            <p className="fs-sm mb-0">{doc.company}</p>
                          </a>
                        </td>
                        <td>
                          <a
                            href="#!"
                            className="text-reset text-decoration-none"
                          >
                            <p className="fs-sm mb-0">{doc.location}</p>
                          </a>
                          {user && (doc.userEmail === user.email) ? (
                            <button
                              onClick={() => {
                                setType("general");
                                deleteItem(doc.id, "general");
                              }}
                              className="btn btn-xs btn-rounded-circle btn-danger"
                            >
                              <i className="fe fe-x"></i>
                            </button>
                          ) : null}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="container pb-8 pb-md-11 border-bottom border-gray-300">
        <div className="row align-items-center mb-5">
          <div className="col">
            <h4 className="fw-bold mb-1">Support</h4>

            <p className="fs-sm text-muted mb-0">
              Support questions and problems
            </p>
          </div>
          <div className="col-auto">
            <span className="badge rounded-pill bg-dark-soft">
              <span className="h6 text-uppercase">
                {support.length} request
              </span>
            </span>
          </div>
        </div>
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
                      <span className="h6 text-uppercase fw-bold">
                        Location
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {support &&
                    support.map((doc) => (
                      <tr key={doc.id}>
                        <td>
                          <a
                            href="#!"
                            className="text-reset text-decoration-none"
                          >
                            <p className="mb-1">{doc.title}</p>
                            <p className="fs-sm text-muted mb-0">
                              {doc.description}
                            </p>
                          </a>
                        </td>
                        <td>
                          <a
                            href="#!"
                            className="text-reset text-decoration-none"
                          >
                            <p className="fs-sm mb-0">{doc.company}</p>
                          </a>
                        </td>
                        <td>
                          <a
                            href="#!"
                            className="text-reset text-decoration-none"
                          >
                            <p className="fs-sm mb-0">{doc.location}</p>
                          </a>
                          {user && (doc.userEmail === user.email) ? (
                            <button
                              onClick={() => {
                                setType("support");
                                deleteItem(doc.id, "support");
                              }}
                              className="btn btn-xs btn-rounded-circle btn-danger"
                            >
                              <i className="fe fe-x"></i>
                            </button>
                          ) : null}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
