import React from "react";
import About from "../components/About";
import Apply from "../components/Apply";
import Footer from "../components/Footer";
import Process from "../components/Process";
import RequestPost from "../components/RequestPost";
import Shape from "../components/Shape";
import Stats from "../components/Stats";
import Steps from "../components/Steps";
import Welcome from "../components/Welcome";

function Home() {
  return (
    <div>
      <Welcome />
      <Process />
      <Steps />
      <Shape />
      <RequestPost />
      <Stats />
      <About />
      <Apply />
      <Footer />
    </div>
  );
}

export default Home;
