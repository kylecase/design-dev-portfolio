import React, { Component, Fragment } from "react";
import { Row, Col, Modal, ModalHeader } from "reactstrap";
import { motion } from "framer-motion";

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  render() {
    const { slug, image, name, company, description, consulting } = this.props;
    const windowSize = window.screen.width;
    let img = null;
    if (this.props.image != null) {
      if (windowSize < 576) {
        img = (
          <img
            className={`dev-project-image img-fluid ${slug}`}
            src={image.sm}
            alt={`${name}`}
            style={{ maxHeight: "350px" }}
          />
        );
      } else if (windowSize < 768) {
        img = (
          <img
            className={`dev-project-image img-fluid ${slug}`}
            src={image.lg}
            alt={`${name}`}
            style={{ maxHeight: "350px" }}
          />
        );
      } else {
        img = (
          <img
            className={`dev-project-image img-fluid ${slug}`}
            src={image.hd}
            alt={`${name}`}
            style={{ maxHeight: "350px" }}
          />
        );
      }
    } else {
      img = <p>No image available</p>;
    }
    return (
      <motion.div
        whileHover={{
          boxShadow: "0 3px 10px rgba(0, 0, 0, 0.3)",
          scale: 1.02
        }}
        transition={{ duration: 0.3, ease: "easeIn" }}
        className="project-container"
      >
        <Row className="align-items-center">
          <Col sm="12" md={{ size: 5, offset: 1 }}>
            {consulting ? (
              <Fragment>{img}</Fragment>
            ) : (
              <button onClick={this.toggleModal} className="project-button">
                {img}
              </button>
            )}
          </Col>
          <Col sm="12" md={{ size: 5, offset: 1 }} className="description">
            <h3>{name}</h3>
            <h5>{company}</h5>
            <p>{description}</p>
          </Col>
        </Row>
        <Modal isOpen={this.state.isOpen} toggle={this.toggleModal} size="lg">
          <ModalHeader toggle={this.toggleModal}>{name}</ModalHeader>
          <img className="img-fluid" src={image.lg} alt={`${name}`} />
        </Modal>
      </motion.div>
    );
  }
}

export default Project;
