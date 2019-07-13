import React from "react";
import { Link } from "react-router-dom";
import { Col } from "reactstrap";
import { motion } from "framer-motion";

const DesignerHome = () => (
  <Col xs="12" sm="6">
    <motion.div
      transition={{ ease: "easeIn", duration: 0.3, delay: 0.3 }}
      initial={{ opacity: 0, y: "16px" }}
      animate={{ opacity: 1, y: "0px" }}
    >
      <Link to={process.env.PUBLIC_URL + "/designer"}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="designer-home home-element"
        >
          <motion.h2>Designer</motion.h2>
        </motion.div>
      </Link>
    </motion.div>
  </Col>
);

export default DesignerHome;
