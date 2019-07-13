import React from "react";
import axios from "axios";
import Project from "./Project";
import ConsultingProjects from "./ConsultingProjects";
import { Row, Col } from "reactstrap";
import { motion } from "framer-motion";

class DesignProjects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      fetchProjectsError: {}
    };
    this.fetchProjects = this.fetchProjects.bind(this);
  }

  componentDidMount() {
    this.fetchProjects();
  }

  fetchProjects() {
    axios
      .get("https://kyle-portfolio-data.firebaseio.com/designProjects.json")
      .then(response => {
        this.setState({
          projects: response.data
        });
      })
      .catch(error => {
        this.setState({
          fetchProjectsError: error
        });
      });
  }

  render() {
    const consultingProjects = ConsultingProjects.map((project, index) => {
      const delay = 0.6 + 0.3 * index;
      return (
        <motion.div
          initial={{ opacity: 0, y: "16px" }}
          animate={{ opacity: 1, y: "0px" }}
          transition={{ ease: "easeIn", duration: 0.3, delay: delay }}
        >
          <Project
            name={project.name}
            slug={project.slug}
            image={project.image}
            company={project.company}
            description={project.description}
            key={index}
            consulting={true}
          />
        </motion.div>
      );
    });
    const projects = this.state.projects.map((project, index) => {
      const delay = 0.6 + 0.3 * index;
      return (
        <motion.div
          initial={{ opacity: 0, y: "16px" }}
          animate={{ opacity: 1, y: "0px" }}
          transition={{ ease: "easeIn", duration: 0.3, delay: delay }}
        >
          <Project
            key={index}
            project={project}
            name={project.name}
            slug={project.slug}
            image={project.image}
            company={project.company}
            description={project.description}
          />
        </motion.div>
      );
    });

    return (
      <div className="design-projects">
        <Row>
          <Col sm="12">
            {consultingProjects}
            {projects}
          </Col>
        </Row>
      </div>
    );
  }
}

export default DesignProjects;
