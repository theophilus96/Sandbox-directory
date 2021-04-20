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
import BottomImage from "../components/BottomImage";
import Introduction from "../components/Introduction";

function Home() {
  return (
    <div>
      <Welcome />
      <Introduction />
      <Process />
      <Steps />
      <Shape />
      <RequestPost />
      <Stats />
      <BottomImage />
      <About />
      <Apply />
      <Footer />
    </div>
  );
}

export default Home;
