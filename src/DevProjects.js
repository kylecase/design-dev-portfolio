import React from "react";
import axios from "axios";
import Project from "./Project";
import { Row, Col } from "reactstrap";
import { motion } from "framer-motion";

class DevProjects extends React.Component {
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
      .get("https://kyle-portfolio-data.firebaseio.com/devProjects.json")
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
    const projects = this.state.projects.map((project, index) => {
      const delay = 0.6 + 0.3 * index;

      return (
        <motion.div
          initial={{ opacity: 0, y: "16px" }}
          animate={{ opacity: 1, y: "0px" }}
          transition={{ ease: "easeIn", duration: 0.3, delay: delay }}
          key={index}
        >
          <Project
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
      <div className="dev-projects">
        <Row>
          <Col sm="12">{projects}</Col>
        </Row>
      </div>
    );
  }
}

export default DevProjects;
