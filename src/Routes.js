import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Quiz from './pages/Quiz';
import Settings from './pages/Settings';

// Commit Inicial

const Routes = () => (
  <Switch>
    <Route component={ Login } path="/" exact />
    <Route component={ Quiz } path="/quiz-game" />
    <Route component={ Settings } path="/settings" />
  </Switch>
);

export default Routes;
