import React from "react";
import DevProjects from "./DevProjects";
import { Link } from "react-router-dom";
import { Container, Row, Col, Jumbotron } from "reactstrap";

const DevPortfolio = () => (
  <div className="dev-portfolio">
    <Row className="dev-nav">
      <Col xs="12" md="3" className="mx-auto">
        <nav>
          <Link to={process.env.PUBLIC_URL + "/"}>Home</Link>
          <Link to={process.env.PUBLIC_URL + "/designer"}>Designer</Link>
          <Link to={process.env.PUBLIC_URL + "/developer"} className="selected">
            Developer
          </Link>
        </nav>
      </Col>
    </Row>
    <Jumbotron>
      <Row>
        <Col xs="12">
          <header>
            <h1 className="text-center designer">Developer</h1>
          </header>
        </Col>
      </Row>
    </Jumbotron>
    <Container>
      <DevProjects />
    </Container>
  </div>
);

export default DevPortfolio;
