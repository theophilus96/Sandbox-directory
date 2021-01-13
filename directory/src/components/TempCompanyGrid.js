import React from "react";
import { Link, Route, useRouteMatch } from "react-router-dom";
import TempComp from "./TempComp";
import HSLlogo from "../icons/HSLlogo.png";
import MBSlogo from "../img/MBSLogo.jpg";
import CraneLogo from "../img/CraneLogo.jpg";


const TempCompanyGrid = ({ match }) => {
    const CompanyData = [
        {
          id: 1,
          name: "HSL Construction",
          description: "Marine Engineering/Construction",
          picture: { HSLlogo },
        },
        {
          id: 2,
          name: "Theo Construction",
          description: "Residential Construction",
          picture: { MBSlogo },
        },
        {
          id: 3,
          name: "John Engineering",
          description: "Civil Engineering",
          picture: { CraneLogo },
        },
      ];
      
  const { url, path } = useRouteMatch();

  /* Create an array of `<li>` items for each product */
  const linkList = CompanyData.map((company) => {
    return (
      <li key={company.id}>
        <Link to={`${url}/${company.id}`}>{company.name}</Link>
      </li>
    );
  });

  return (
    <div>
      <div>
        <div>
          <h3>Company</h3>
          <ul>{linkList}</ul>
        </div>
      </div>

      <Route path={`${url}/:companyId`}>
        <TempComp data={CompanyData} />
      </Route>
      <Route exact path={url}>
        <p>Please select a Company.</p>
      </Route>
    </div>
  );
};

export default TempCompanyGrid;