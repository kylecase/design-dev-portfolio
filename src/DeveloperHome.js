import React from "react";
import { Link } from "react-router-dom";
import { Col } from "reactstrap";

const DeveloperHome = () => (
  <Col xs="12" sm="6">
    <Link to={process.env.PUBLIC_URL + "/developer"}>
      <div className="developer-home home-element">
        <h2 className="text-center">Developer</h2>
      </div>
    </Link>
  </Col>
);

export default DeveloperHome;
