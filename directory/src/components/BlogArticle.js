import React from "react";
import useFirestore from "../hooks/useFirestore";
import { Link } from "react-router-dom";
import { projectFirestore } from "../firebase/config";
import { useStateValue } from "../state/StateProvider";

export default function BlogArticle() {
  const [{ user }] = useStateValue();
  const deleteItem = (id) => {
    projectFirestore
      .collection("blog")
      .doc(id)
      .delete()
      .then(() => {
        console.log("Document successfully deleted!");
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };

  const { docs } = useFirestore("blog");

  console.log(docs);
  docs && docs.map((doc) => console.log(doc));
  return (
    <div>
      {docs &&
        docs.map((doc) => (
          <section key={doc.id} className="pt-7 pt-md-10" key={doc.id}>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  {/* <!-- Card --> */}
                  <div className="card card-row shadow-light-lg mb-6 lift lift-lg">
                    <div className="row gx-0">
                      <div className="col-12">
                        {/* <!-- Badge --> */}
                        {user && doc.userEmail === user.email ? (
                          <button
                            onClick={() => {
                              deleteItem(doc.id);
                            }}
                            className="btn btn-xs btn-rounded-circle btn-danger"
                          >
                            <i className="fe fe-x"></i>
                          </button>
                        ) : null}
                        <span className="badge rounded-pill bg-light badge-float badge-float-inside">
                          <span className="h6 text-uppercase">Featured</span>
                        </span>
                      </div>

                      <Link
                        className="col-12 col-md-6 order-md-2 bg-cover card-img-end"
                        style={{
                          backgroundImage: `url(${doc.image})`,
                        }}
                        to={`/blog/${doc.id}`}
                      >
                        {/* <!-- Image (placeholder) --> */}
                        <img
                          src="assets/img/photos/photo-27.jpg"
                          alt="..."
                          className="img-fluid d-md-none invisible"
                        ></img>

                        {/* <!-- Shape --> */}
                        <div className="shape shape-start shape-fluid-y svg-shim text-white d-none d-md-block">
                          <svg
                            viewBox="0 0 112 690"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0 0h62.759v172C38.62 384 112 517 112 517v173H0V0z"
                              fill="currentColor"
                            />
                          </svg>{" "}
                        </div>
                      </Link>
                      <div className="col-12 col-md-6 order-md-1">
                        {/* <!-- Body --> */}
                        <a className="card-body" href={`/blog/${doc.id}`}>
                          {/* <!-- Heading --> */}
                          <h3>{doc.title}</h3>

                          {/* <!-- Text --> */}
                          <p className="mb-0 text-muted">{doc.shortDesc}</p>
                        </a>

                        {/* <!-- Meta --> */}
                        <a className="card-meta" href={`/blog/${doc.id}`}>
                          {/* <!-- Divider --> */}
                          <hr className="card-meta-divider"></hr>

                          {/* <!-- Avatar --> */}
                          <div className="avatar avatar-sm me-2">
                            <img
                              src={doc.authorImage}
                              alt="..."
                              className="avatar-img rounded-circle"
                            ></img>
                          </div>

                          {/* <!-- Author --> */}
                          <h6 className="text-uppercase text-muted me-2 mb-0">
                            {doc.author}
                          </h6>

                          {/* <!-- Date --> */}
                          <p className="h6 text-uppercase text-muted mb-0 ms-auto">
                            <time>
                              {doc.date
                                ? new Date(
                                    doc.date.seconds * 1000
                                  ).toDateString("en-US")
                                : Date.now()}
                            </time>
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
    </div>
  );
}
