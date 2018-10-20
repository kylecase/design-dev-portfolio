import React from "react";

const DevProject = props => {
  const windowSize = window.screen.width;
  let image = null;
  if (props.image != null) {
    if (windowSize < 576) {
      image = (
        <img
          className={`project-image img-fluid ${props.slug}`}
          src={props.image.sm}
          alt={`${props.name}`}
        />
      );
    } else if (windowSize < 768) {
      image = (
        <img
          className={`project-image img-fluid ${props.slug}`}
          src={props.image.lg}
          alt={`${props.name}`}
        />
      );
    } else {
      image = (
        <img
          className={`project-image img-fluid ${props.slug}`}
          src={props.image.hd}
          alt={`${props.name}`}
        />
      );
    }
  } else {
    image = <p>No image available</p>;
  }

  return (
    <div className={`project-container`}>
      <div className="row align-items-center">
        <div className="col-sm-6 offset-sm-3 col-md-5 offset-md-1">
          <div className="flex-contain">{image}</div>
        </div>
        <div className="col-sm-12 col-md-4 offset-md-1 description">
          <h3>{props.name}</h3>
          <h5>{props.company}</h5>
          <p>{props.description}</p>
          {/* <a className="btn btn-primary btn-block" href={`/dev/${props.slug}`}>view case study</a> */}
        </div>
      </div>
    </div>
  );
};

export default DevProject;
