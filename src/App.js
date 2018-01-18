import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';
import Home from './Home';
import DesignPortfolio from './DesignPortfolio';
import DevPortfolio from './DevPortfolio';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-58895980-3');

function fireTracking(){
  ReactGA.pageview(window.location.hash);
}

const App = (props) => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path='/' component={Home} onUpdate={fireTracking}/>
        <Route exact path='/designer' component={DesignPortfolio} onUpdate={fireTracking}/>
        <Route path='/developer' component={DevPortfolio} onUpdate={fireTracking}/>
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
