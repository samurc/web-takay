/* eslint-disable no-underscore-dangle */
// Startup point for client-side application

import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router/immutable'
import { Router } from 'react-router-dom'
import configureStore, { history } from './store/configureStore'
import Routes from './routes'
import intialState from './reducers/initialState'

const store = configureStore(intialState)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Router history={history}>
        <Routes />
      </Router>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);