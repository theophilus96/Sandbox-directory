import React from "react";
import useFirestore from "../hooks/useFirestore";
import HSLprojects from "../components/HSLprojects";
import { useParams } from "react-router-dom";
import { projectFirestore } from "../firebase/config";
import { useState, useEffect } from "react";

function HSLsidebar(doc) {
  const { docs } = useFirestore("company");
  docs && docs.map((doc) => console.log(doc.name));


  const [companyData, setcompanyData] = useState("");
  const { id } = useParams();
  console.log("id = ", id);


  var docRef = projectFirestore.collection("company").doc(id);

  useEffect(() => {
    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log("Document data:", doc.data());
          setcompanyData(doc.data());
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, []);


  console.log("companyData = ", companyData);
  // var desc = docs[0]?.longDescription;
  // console.log(desc);
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
              <h1>{companyData.name}</h1>
            </div>

            {/* Text */}
            <p className="fs-lg mb-7 text-muted">{companyData.longDescription}</p>

            {/* List group */}
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                {/* Heading */}
                <h6 className="d-flex mb-0 text-uppercase">
                  Address
                  <span className="ms-auto">{companyData.address}</span>
                </h6>
              </li>
              <li className="list-group-item">
                {/* Heading */}
                <h6 className="d-flex mb-0 text-uppercase">
                  Service{"\u00A0"}
                  <span className="ms-auto">{companyData.description}</span>
                </h6>
              </li>
              <li className="list-group-item">
                {/* Heading */}
                <h6 className="d-flex mb-0 text-uppercase">
                  Phone <span className="ms-auto">{companyData.phone}</span>
                </h6>
              </li>
            </ul>
          </aside>
        </div>
        <div className="col-12 col-md-7">
          {/* Images */}
          <HSLprojects />
        </div>
      </div>
    </div>
  );
}

export default HSLsidebar;
