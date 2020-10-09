import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import route from './config';

const router = () => (
  <BrowserRouter>
    <Switch>
      {route.map((v) => {
        const Components = v.component;
        return (
          <Route exact path={v.path} key={v.path}>
            <Components />
          </Route>
        );
      })}
    </Switch>
  </BrowserRouter>
);

export default router;
