import React from "react";
import CompanyGrid from "../components/CompanyGrid";
import CompanyHeader from "../components/CompanyHeader";
import CompanyShape from "../components/CompanyShape";
import Footer from "../components/Footer";

function Company() {
  return (
    <div>
      <CompanyHeader />
      <CompanyGrid />
      <Footer />
    </div>
  );
}

export default Company;
