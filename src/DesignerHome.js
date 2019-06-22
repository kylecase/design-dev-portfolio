import React from "react";
import { Link } from "react-router-dom";
import { Col } from "reactstrap";

const DesignerHome = () => (
  <Col xs="12" sm="6">
    <Link to={process.env.PUBLIC_URL + "/designer"}>
      <div className="designer-home home-element">
        <h2>Designer</h2>
      </div>
    </Link>
  </Col>
);

export default DesignerHome;
