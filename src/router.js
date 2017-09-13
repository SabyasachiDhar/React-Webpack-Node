import React from 'react';
// import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './components/home';
import App from './components/app';
import Login from './components/login/login';

const componentRoutes = {
    
}

const Routes = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/app" component={App} />
          <Route path="/home" component={Home} />
          <Route path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
};

export default Routes;
