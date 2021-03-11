import React from "react";
import AddRequest from "../components/AddRequest";
import Footer from "../components/Footer";
import Listing from "../components/Listing";
import { useStateValue } from "../state/StateProvider";

export default function Problem() {
  const [{ user }] = useStateValue();

  return (
    <div>
      <Listing />
      {user ? <AddRequest /> : null}
      <Footer/>
    </div>
  );
}
