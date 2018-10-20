import React from 'react';
import { Link } from 'react-router-dom';

const DeveloperHome = (props) => (
  <div className="col-xs-12 col-sm-6">
    <Link to={process.env.PUBLIC_URL + '/developer'}>
      <div className="developer-home home-element d-flex align-content-center">
        <h2 className="text-center">Developer</h2>
      </div>
    </Link>
  </div>
)

export default DeveloperHome;
