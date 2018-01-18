import React from 'react';
import DesignerHome from './DesignerHome';
import DeveloperHome from './DeveloperHome';
const Home = () => (
  <div className="container home">
    <div className="row">
      <div className="col-sm-12">
        <h1 className="text-center">KYLE CASE</h1>
      </div>
    </div>
    <div className="row">
      <DesignerHome />
      <DeveloperHome />
    </div>
    <div className="row">
      <div className="col-sm-12">
        <h1 className="text-center">MINNEAPOLIS, MINNESOTA</h1>
      </div>
    </div>
  </div>
)

export default Home;
