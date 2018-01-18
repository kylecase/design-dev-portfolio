import React from 'react';


const DeveloperHome = (props) => (
  <div className="col-xs-12 col-sm-6">
    <a href={process.env.PUBLIC_URL + '/developer'}>
      <div className="developer-home home-element d-flex align-content-center">
        <h2 className="text-center">Developer</h2>
      </div>
    </a>
  </div>
)

export default DeveloperHome;
