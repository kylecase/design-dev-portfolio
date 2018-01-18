import React from 'react';
import DesignProjects from './DesignProjects';

const DesignPortfolio = (props) => (
    <div className="design-portfolio">
      <div className="row design-nav">
        <div className="col-xs-3 mx-auto">
          <nav>
            <a href="/">Home</a>
            <a href="/design" className="selected">Designer</a>
            <a href="/developer">Developer</a>
          </nav>
        </div>
      </div>
      <div className="jumbotron">
        <div className="row">
          <div className="col-12">
            <header>
              <h1 className="text-center designer">Designer</h1>
            </header>
          </div>
        </div>
      </div>
      <div className="container">
        <DesignProjects />
      </div>
    </div>
)

export default DesignPortfolio;
