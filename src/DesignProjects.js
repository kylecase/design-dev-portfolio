import React from 'react';
import axios from 'axios';
import DesignProject from './DesignProject';
import ConsultingProjects from './ConsultingProjects';

class DesignProjects extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      projects: []
    }
  }

  componentDidMount(){
    axios.get('https://kyle-portfolio-data.firebaseio.com/designProjects.json')
      .then(response => {
        console.log(response.data);
        this.setState({
          projects: response.data
        });
      })
      .catch(err => {
        console.log('Error fetching data', err);
      });
  }

  render() {
    const colors = ["butterfly-brush", "celestial-blue", "selective-yellow", "mantis",
                    "viking", "sun", "mulberry", "pacific-blue", "deluge", "half-baked-blue",
                     "allports", "fountain-blue"];
    const projects = this.state.projects.map((project, index) => {
      return (
        <DesignProject key={index}
                       project={project}
                       color={colors[index]}
                       name={project.name}
                       slug={project.slug}
                       image={project.image}
                       company={project.company}
                       description={project.description}/>

      )
    });
    return (
      <div className="design-projects">
        <div className="row">
          <div className="col-sm-12">
            <DesignProject project={ConsultingProjects[0]}
                           color={"usb-blue"}
                           name={ConsultingProjects[0].name}
                           slug={ConsultingProjects[0].slug}
                           image={ConsultingProjects[0].image}
                           company={ConsultingProjects[0].company}
                           description={ConsultingProjects[0].description}/>
             <DesignProject project={ConsultingProjects[1]}
                            color={"polaris-orange"}
                            name={ConsultingProjects[1].name}
                            slug={ConsultingProjects[1].slug}
                            image={ConsultingProjects[1].image}
                            company={ConsultingProjects[1].company}
                            description={ConsultingProjects[1].description}/>
            {projects}
          </div>
        </div>
      </div>
    )
  }
}

export default DesignProjects;
