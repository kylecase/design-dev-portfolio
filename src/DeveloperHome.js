import React from "react";
import { Link } from "react-router-dom";
import { Col } from "reactstrap";
import { motion } from "framer-motion";

const DeveloperHome = () => (
  <Col xs="12" sm="6">
    <motion.div
      transition={{ ease: "easeIn", duration: 0.3, delay: 0.6 }}
      initial={{ opacity: 0, y: "16px" }}
      animate={{ opacity: 1, y: "0px" }}
    >
      <Link to={process.env.PUBLIC_URL + "/developer"}>
        <motion.div
          className="developer-home home-element"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-center">Developer</h2>
        </motion.div>
      </Link>
    </motion.div>
  </Col>
);

export default DeveloperHome;
