import React from 'react';
import DevProjects from './DevProjects';

const DevPortfolio = (props) => (
  <div className="dev-portfolio">
    <div className="row dev-nav">
      <div className="col-xs-3 mx-auto">
        <nav>
          <a href={process.env.PUBLIC_URL + '/'}>Home</a>
          <a href={process.env.PUBLIC_URL + '/designer'}>Designer</a>
          <a href={process.env.PUBLIC_URL + '/developer'} className="selected">Developer</a>
        </nav>
      </div>
    </div>
    <div className="jumbotron">
      <div className="row">
        <div className="col-12">
          <header>
            <h1 className="text-center designer">Developer</h1>
          </header>
        </div>
      </div>
    </div>
    <div className="container">
      <DevProjects />
    </div>
  </div>
)

export default DevPortfolio;
