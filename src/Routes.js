
import React from 'react'
import { Route, Switch /* , Redirect */ } from 'react-router-dom'
import App from './App';

const Routes = () => (
  <Switch>
    <Route path='/' component={App} />
  </Switch>
)

export default Routes
