import React from 'react';
import { Link } from 'react-router-dom';


const DesignerHome = (props) => (
    <div className="col-xs-12 col-sm-6">
      <Link to={process.env.PUBLIC_URL + '/designer'}>
        <div className="designer-home home-element">
          <h2>Designer</h2>
        </div>
      </Link>
    </div>
)

export default DesignerHome;
