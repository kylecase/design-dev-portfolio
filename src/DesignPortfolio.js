import React from "react";
import DesignProjects from "./DesignProjects";
import { Link } from "react-router-dom";
import { Container, Row, Col, Jumbotron } from "reactstrap";
import { motion } from "framer-motion";

const DesignPortfolio = () => (
  <div className="design-portfolio">
    <Row className="design-nav">
      <Col xs="12" md="3" className="mx-auto">
        <nav>
          <Link to={process.env.PUBLIC_URL + "/"}>Home</Link>
          <Link to={process.env.PUBLIC_URL + "/designer"} className="selected">
            Designer
          </Link>
          <Link to={process.env.PUBLIC_URL + "/developer"}>Developer</Link>
        </nav>
      </Col>
    </Row>
    <Jumbotron>
      <Row>
        <Col xs="12">
          <header>
            <motion.h1
              className="text-center designer"
              transition={{ ease: "easeIn", duration: 0.3 }}
              initial={{ opacity: 0, y: "16px" }}
              animate={{ opacity: 1, y: "0px" }}
            >
              Designer
            </motion.h1>
          </header>
        </Col>
      </Row>
    </Jumbotron>
    <Container>
      <DesignProjects />
    </Container>
  </div>
);

export default DesignPortfolio;
