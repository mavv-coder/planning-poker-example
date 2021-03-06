import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { switchRoutes } from './routes';
import { CreateSessionScene, MasterScene, PlayerScene } from 'scenes';
import { history } from './history';

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route
          exact={true}
          path={switchRoutes.root}
          component={CreateSessionScene}
        />
        <Route
          exact={true}
          path={switchRoutes.master}
          component={MasterScene}
        />
        <Route
          exact={true}
          path={switchRoutes.player}
          component={PlayerScene}
        />
      </Switch>
    </Router>
  );
};
