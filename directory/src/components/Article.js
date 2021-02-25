import React from "react";
import FacebookIcon from "../icons/facebook.svg";
import InstagramIcon from "../icons/instagram.svg";
import TwitterIcon from "../icons/twitter.svg";
import useFirestore from "../hooks/useFirestore";
import { useParams } from "react-router-dom";
import { projectFirestore } from "../firebase/config";
import { useState, useEffect } from "react";

export default function Article(doc) {
  const [articleData, setarticleData] = useState("");
  const { id } = useParams();
  console.log("id = ", id);
  console.log("doc = ", doc);

  var docRef = projectFirestore.collection("blog").doc(id);

  useEffect(() => {
    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log("Document data:", doc.data());
          setarticleData(doc.data());
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, []);

  console.log("articleData = ", articleData);

  //   const { docs } = useFirestore("blog");
  //   docs && docs.map((doc) => console.log(doc.name));

  return (
    <div>
      {/* <!-- IMAGE --> */}
      <section
        data-jarallax
        data-speed=".8"
        className="py-12 py-md-15 bg-cover jarallax"
        style={{
          backgroundImage: `url(${articleData.image}})`,
        }}
      ></section>

      {/* <!-- HEADER --> */}
      <section className="pt-8 pt-md-11">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-9 col-xl-8">
              {/* <!-- Heading --> */}
              <h1 className="display-4 text-center">{articleData.title}</h1>

              {/* <!-- Text --> */}
              <p className="lead mb-7 text-center text-muted">
                {articleData.shortDesc}
              </p>

              {/* <!-- Meta --> */}
              <div className="row align-items-center py-5 border-top border-bottom">
                <div className="col-auto">
                  {/* <!-- Avatar --> */}
                  <div className="avatar avatar-lg">
                    <img
                      src={articleData.authorImage}
                      alt="..."
                      className="avatar-img rounded-circle"
                    ></img>
                  </div>
                </div>
                <div className="col ms-n5">
                  {/* <!-- Name --> */}
                  <h6 className="text-uppercase mb-0">{articleData.author}</h6>

                  {/* <!-- Date --> */}
                  <time className="fs-sm text-muted" datetime="2019-05-20">
                    Published on {new Date(articleData.date?.seconds * 1000).toDateString("en-US")}
                  </time>
                </div>
                <div className="col-auto">
                  {/* <!-- Share --> */}
                  <span className="h6 text-uppercase text-muted d-none d-md-inline me-4">
                    Share:
                  </span>

                  {/* <!-- Icons --> */}
                  <ul className="d-inline list-unstyled list-inline list-social">
                    <li className="list-inline-item list-social-item me-3">
                      <a href="#!" className="text-decoration-none">
                        <img
                          src={InstagramIcon}
                          className="list-social-icon"
                          alt="..."
                        ></img>
                      </a>
                    </li>
                    <li className="list-inline-item list-social-item me-3">
                      <a href="#!" className="text-decoration-none">
                        <img
                          src={FacebookIcon}
                          className="list-social-icon"
                          alt="..."
                        ></img>
                      </a>
                    </li>
                    <li className="list-inline-item list-social-item me-3">
                      <a href="#!" className="text-decoration-none">
                        <img
                          src={TwitterIcon}
                          className="list-social-icon"
                          alt="..."
                        ></img>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- SECTION --> */}
      <section className="pt-6 pt-md-8">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-9 col-xl-8">
              {/* <!-- Fugure --> */}
              <figure className="figure mb-7">
                {/* <!-- Image --> */}
                <img
                  className="figure-img img-fluid rounded lift lift-lg"
                  src={articleData.image}
                  alt="..."
                ></img>

                {/* <!-- Caption --> */}
                <figcaption className="figure-caption text-center">
                  This is a caption on this photo
                </figcaption>
              </figure>

              {/* <!-- Text --> */}
              <p>{articleData.longDesc}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
