import React from 'react';
import { GlobalStyle } from './styles/GlobalStyles';
import { renderRoutes } from 'react-router-config';
import PropTypes from 'prop-types';
import ErrorBoundary from './components/ErrorBoundry';
import Header from './components/Header';
import Footer from './components/Footer';

const App = props => {
  const locationName = props.location.pathname;
  return (
    <div>
      <GlobalStyle />
      <Header locationName={locationName} />
      <div>
        <ErrorBoundary>{renderRoutes(props.route.routes)}</ErrorBoundary>
      </div>
      <Footer locationName={locationName} />
    </div>
  );
};

App.propTypes = {
  route: PropTypes.objectOf(PropTypes.any)
};

App.defaultProps = {
  route: null
};

export default {
  component: App
};
