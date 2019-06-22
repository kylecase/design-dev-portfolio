import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import DesignPortfolio from "./DesignPortfolio";
import DevPortfolio from "./DevPortfolio";
import ReactGA from "react-ga";
import { Helmet } from "react-helmet";

ReactGA.initialize("UA-58895980-3");
ReactGA.pageview(window.location.pathname + window.location.search);

function fireTracking() {
  ReactGA.pageview(window.location.pathname + window.location.search);
}

const App = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Kyle Case | Developer + Designer | Minneapolis, MN</title>
    </Helmet>
    <Switch>
      <Route exact basename path="/" component={Home} onUpdate={fireTracking} />
      <Route
        path="/designer"
        component={DesignPortfolio}
        onUpdate={fireTracking}
      />
      <Route
        path="/developer"
        component={DevPortfolio}
        onUpdate={fireTracking}
      />
    </Switch>
  </BrowserRouter>
);

export default App;
