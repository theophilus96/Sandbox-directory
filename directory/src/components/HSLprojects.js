import React from "react";
import useFirestore from "../hooks/useFirestore";

export default function HSLprojects({ companyID }) {
  const { docs } = useFirestore("company/" + companyID + "/project");

  return (
    <div>
      {/* Images */}
      <section className="pb-8 pt-md-12 pb-md-10">
        {docs &&
          docs.map((doc) => (
            <a
              key={doc.id}
              className="d-block mt-7"
              data-bigpicture={doc.image}
              href="#!"
            >
              <img className="img-fluid rounded" src={doc.image} alt="..." />
            </a>
          ))}
      </section>
    </div>
  );
}
