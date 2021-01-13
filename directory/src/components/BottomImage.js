import React from "react";
import ConstructionImage7 from "../img/construction7.jpg";

function BottomImage() {
  return (
    <section
      data-jarallax=""
      data-speed=".8"
      class="py-14 py-lg-16 jarallax"
      style={{ backgroundImage: `url(${ConstructionImage7})`, position: "relative", zIndex: 0 }}
      data-jarallax-original-styles={{
        backgroundImage: `url(${ConstructionImage7})`,
        maxWidth: "100%",
        backgroundSize: "cover",
      }}
    >
      {/* Shape */}
      <div class="shape shape-top shape-fluid-x svg-shim text-white">
        <svg
          viewBox="0 0 2880 250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0h2880v125h-720L720 250H0V0z" fill="currentColor"></path>
        </svg>{" "}
      </div>

      {/* Shape */}
      <div class="shape shape-bottom shape-fluid-x svg-shim text-light">
        <svg
          viewBox="0 0 2880 250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M720 125L2160 0h720v250H0V125h720z"
            fill="currentColor"
          ></path>
        </svg>{" "}
      </div>

      <div
        id="jarallax-container-1"
        style={{
          position: "absolute",
          top: "0px",
          left: "0px",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          zIndex: "-100",
        }}
      >
        <div
          style={{
            backgroundPosition: "50% 50%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundImage: "none",
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "1425px",
            height: "724px",
            overflow: "hidden",
            pointerEvents: "none",
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
            willChange: "transform, opacity",
            marginTop: "-152px",
            transform: "translate3d(0px, 133.169px, 0px)",
          }}
        ></div>
      </div>
    </section>
  );
}

export default BottomImage;
