import React from "react";
import { useParams } from "react-router-dom";

const TempComp = ({ data }) => {
  const { companyId } = useParams();
  const company = data.find(p => p.id === Number(companyId));
  let CompanyData;

  if (company) {
    CompanyData = (
      <div>
        <h3> {company.name} </h3>
        <p>{company.description}</p>
        <hr />
        <h4>{company.picture}</h4>
      </div>
    );
  } else {
    CompanyData = <h2> Sorry. Product doesn't exist </h2>;
  }

  return (
    <div>
      <div>{CompanyData}</div>
    </div>
  );
};

export default TempComp;