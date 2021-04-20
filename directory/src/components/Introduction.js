import React from "react";
import CompanyImage from "../img/Company-rafiki.png";
import ListingImage from "../img/Checklist-rafiki.png";
import BlogImage from "../img/Wall post-rafiki.png";
import SocialImage from "../img/Social interaction-rafiki.png";
import EcommerceImage from "../img/In no time-rafiki.png";
import ProfileImage from "../img/Profile data-rafiki.png";

export default function Introduction() {
  return (
    <section className="pt-8 pt-md-10 bg-gradient-light-white" id="about">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <a
              href="#about"
              className="btn btn-white btn-rounded-circle shadow mt-n12 mt-md-n14"
              data-scroll=""
            >
              <i className="fe fe-arrow-down"></i>
            </a>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 text-center">
            <h2 className="fw-bold">
              The hub for the{" "}
              <span className="text-primary">Construction Industry</span>.
            </h2>

            <p className="fs-lg text-muted mb-9">
              Sandbox is an all-in-one platform that aims to onboard all the
              construction companies to create a community where they can list
              any of their construction-related problems or offer help to
              others. Companies can also tap on this platform to sell their
              products and services or even use this platform to share their
              ideas, forging potential partnerships. Additionally, users of
              SandBox can also publish their articles on the platform to
              showcase their expertise while generating greater awareness about
              the company’s doings to the public too. The array of benefits this
              platform can provide will be of use to your company.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-6">
            <div
              className="row align-items-center mb-8 aos-init aos-animate"
              data-aos="fade-up"
            >
              <div className="col-4 col-lg-5">
                <img src={CompanyImage} alt="..." className="img-fluid" />
              </div>
              <div className="col-8 col-lg-7">
                <h3 className="fw-bold mb-2">Company Directory</h3>

                <p className="text-gray-700 mb-0">
                  Onboard your company or find potential partners here
                </p>
              </div>
            </div>

            <div
              className="row align-items-center mb-8 aos-init aos-animate"
              data-aos="fade-up"
            >
              <div className="col-4 col-lg-5">
                <img src={ListingImage} alt="..." className="img-fluid" />
              </div>
              <div className="col-8 col-lg-7">
                <h3 className="fw-bold mb-2">Request Listing</h3>

                <p className="text-gray-700 mb-0">
                  Outsource your problems or help solve someone else's
                </p>
              </div>
            </div>

            <div
              className="row align-items-center mb-8 aos-init aos-animate"
              data-aos="fade-up"
            >
              <div className="col-4 col-lg-5">
                <img src={ProfileImage} alt="..." className="img-fluid" />
              </div>
              <div className="col-8 col-lg-7">
                <h3 className="fw-bold mb-2">Profile</h3>

                <p className="text-gray-700 mb-0">
                  Customize your profile, show people what you are up to
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div
              className="row align-items-center mb-8 aos-init aos-animate"
              data-aos="fade-up"
            >
              <div className="col-4 col-lg-5">
                <img src={BlogImage} alt="..." className="img-fluid" />
              </div>
              <div className="col-8 col-lg-7">
                <h3 className="fw-bold mb-2">Blog</h3>

                <p className="text-gray-700 mb-0">
                  Share you thoughts on current issues and promote yourself as
                  an industry expert
                </p>
              </div>
            </div>

            <div
              className="row align-items-center mb-8 aos-init aos-animate"
              data-aos="fade-up"
            >
              <div className="col-4 col-lg-5">
                <img src={SocialImage} alt="..." className="img-fluid" />
              </div>
              <div className="col-8 col-lg-7">
                <h3 className="fw-bold mb-2">Sandbox Social</h3>

                <p className="text-gray-700 mb-0">
                  Communicate and share new ideas which everyone on the platform
                </p>
              </div>
            </div>
            <div
              className="row align-items-center mb-8 aos-init aos-animate"
              data-aos="fade-up"
            >
              <div className="col-4 col-lg-5">
                <img src={EcommerceImage} alt="..." className="img-fluid" />
              </div>
              <div className="col-8 col-lg-7">
                <h3 className="fw-bold mb-2">Sandbox E-Commerce</h3>

                <p className="text-gray-700 mb-0">
                  List of products and services by partner companies
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
