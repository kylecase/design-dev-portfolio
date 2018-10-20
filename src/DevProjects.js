import React from "react";
import axios from "axios";
import DevProject from "./DevProject";

class DevProjects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }

  componentDidMount() {
    axios
      .get("https://kyle-portfolio-data.firebaseio.com/devProjects.json")
      .then(response => {
        this.setState({
          projects: response.data
        });
      })
      .catch(err => {
        console.log("Error fetching data", err);
      });
  }

  render() {
    const colors = [
      "butterfly-brush",
      "celestial-blue",
      "selective-yellow",
      "mantis",
      "viking",
      "sun",
      "mulberry",
      "pacific-blue",
      "deluge",
      "half-baked-blue",
      "allports",
      "fountain-blue"
    ];
    const projects = this.state.projects.map((project, index) => {
      return (
        <DevProject
          key={index}
          project={project}
          name={project.name}
          slug={project.slug}
          image={project.image}
          company={project.company}
          description={project.description}
        />
      );
    });
    return (
      <div className="dev-projects">
        <div className="row">
          <div className="col-sm-12">{projects}</div>
        </div>
      </div>
    );
  }
}

export default DevProjects;
