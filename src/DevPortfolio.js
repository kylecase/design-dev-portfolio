import React from "react";
import DevProjects from "./DevProjects";
import { Link } from "react-router-dom";

const DevPortfolio = props => (
  <div className="dev-portfolio">
    <div className="row dev-nav">
      <div className="col-xs-3 mx-auto">
        <nav>
          <Link to={process.env.PUBLIC_URL + "/"}>Home</Link>
          <Link to={process.env.PUBLIC_URL + "/designer"}>Designer</Link>
          <Link to={process.env.PUBLIC_URL + "/developer"} className="selected">
            Developer
          </Link>
        </nav>
      </div>
    </div>
    <div className="jumbotron">
      <div className="row">
        <div className="col-12">
          <header>
            <h1 className="text-center designer">Developer</h1>
          </header>
        </div>
      </div>
    </div>
    <div className="container">
      <DevProjects />
    </div>
  </div>
);

export default DevPortfolio;
