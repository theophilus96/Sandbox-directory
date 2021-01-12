import React from "react";

function BottomImage() {
  return (
    <div>
      {/* IMAGE */}
      <section
        data-jarallax
        data-speed=".8"
        class="py-14 py-lg-16 jarallax"
        style="background-image: url(assets/img/covers/cover-7.jpg);"
      >
        {/* Shape */}
        <div class="shape shape-top shape-fluid-x svg-shim text-white">
          <svg
            viewBox="0 0 2880 250"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h2880v125h-720L720 250H0V0z" fill="currentColor" />
          </svg>{" "}
        </div>

        {/* Shape */}
        <div class="shape shape-bottom shape-fluid-x svg-shim text-light">
          <svg
            viewBox="0 0 2880 250"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M720 125L2160 0h720v250H0V125h720z" fill="currentColor" />
          </svg>{" "}
        </div>
      </section>
    </div>
  );
}

export default BottomImage;
