import React from "react";
import DesignerHome from "./DesignerHome";
import DeveloperHome from "./DeveloperHome";
import { Container, Row, Col } from "reactstrap";
const Home = () => (
  <Container className="home">
    <Row>
      <Col sm="12">
        <h1 className="text-center">KYLE CASE</h1>
      </Col>
    </Row>
    <Row>
      <DesignerHome />
      <DeveloperHome />
    </Row>
    <Row>
      <Col sm="12">
        <h1 className="text-center">MINNEAPOLIS, MINNESOTA</h1>
      </Col>
    </Row>
  </Container>
);

export default Home;
