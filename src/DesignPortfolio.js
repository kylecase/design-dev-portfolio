import React from "react";
import DesignProjects from "./DesignProjects";
import { Link } from "react-router-dom";

const DesignPortfolio = props => (
  <div className="design-portfolio">
    <div className="row design-nav">
      <div className="col-xs-3 mx-auto">
        <nav>
          <Link to={process.env.PUBLIC_URL + "/"}>Home</Link>
          <Link to={process.env.PUBLIC_URL + "/designer"} className="selected">
            Designer
          </Link>
          <Link to={process.env.PUBLIC_URL + "/developer"}>Developer</Link>
        </nav>
      </div>
    </div>
    <div className="jumbotron">
      <div className="row">
        <div className="col-12">
          <header>
            <h1 className="text-center designer">Designer</h1>
          </header>
        </div>
      </div>
    </div>
    <div className="container">
      <DesignProjects />
    </div>
  </div>
);

export default DesignPortfolio;
