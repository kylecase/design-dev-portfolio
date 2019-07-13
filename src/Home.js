import React from "react";
import DesignerHome from "./DesignerHome";
import DeveloperHome from "./DeveloperHome";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";

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
        <motion.h1 className="text-center"
         transition={{ ease: "easeIn", duration: 0.3, delay: 0.9 }}
        initial={{opacity: 0, y: '16px'}} 
        animate={{opacity: 1, y: '0px'}}
        >MINNEAPOLIS, MINNESOTA</motion.h1>
      </Col>
    </Row>
  </Container>
);

export default Home;
